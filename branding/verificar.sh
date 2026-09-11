#!/bin/bash
# Teste depois do build: arranca a imagem (com PostgreSQL e Redis) como um cliente
# a veria e falha se o nome do upstream aparecer fora da atribuição, ou se a
# atribuição exigida pela licença do Hi.Events tiver desaparecido.
# Uso: branding/verificar.sh <imagem>     (corre no workflow antes de publicar)
set -uo pipefail
IMG=${1:?uso: verificar.sh <imagem>}
DIR=$(cd "$(dirname "$0")" && pwd)
ID=verif-events-$$
PORTA=${PORTA:-18200}
B=http://127.0.0.1:$PORTA
S=$(head -c 24 /dev/urandom | od -An -tx1 | tr -d ' \n')
FALHAS=0
falha() { FALHAS=$((FALHAS + 1)); echo "  FALHA: $1"; }
ok() { echo "  ok: $1"; }
limpar() { docker rm -f $ID-app $ID-db $ID-redis >/dev/null 2>&1; docker network rm $ID >/dev/null 2>&1; }
trap limpar EXIT

docker network create $ID >/dev/null
docker run -d --name $ID-db --network $ID -e POSTGRES_DB=hievents -e POSTGRES_USER=hievents \
  -e POSTGRES_PASSWORD="$S" postgres:16-alpine >/dev/null
docker run -d --name $ID-redis --network $ID redis:7-alpine >/dev/null
sleep 5
docker run -d --name $ID-app --network $ID -p 127.0.0.1:$PORTA:80 \
  -e APP_KEY="base64:$(head -c 32 /dev/urandom | base64)" -e JWT_SECRET="$S" -e APP_ENV=production \
  -e DB_CONNECTION=pgsql -e DB_HOST=$ID-db -e DB_PORT=5432 -e DB_DATABASE=hievents \
  -e DB_USERNAME=hievents -e DB_PASSWORD="$S" -e REDIS_HOST=$ID-redis -e QUEUE_CONNECTION=sync \
  -e MAIL_MAILER=log -e APP_DISABLE_REGISTRATION=true -e VITE_STRIPE_PUBLISHABLE_KEY=pk_test_verificacao \
  -e APP_FRONTEND_URL=$B -e VITE_FRONTEND_URL=$B -e VITE_API_URL_CLIENT=$B/api \
  -e VITE_API_URL_SERVER=http://localhost:80/api \
  "$IMG" >/dev/null

echo "== à espera do arranque =="
for i in $(seq 1 100); do
  [ "$(curl -s -o /dev/null -w '%{http_code}' "$B/auth/login")" = 200 ] && break
  if [ "$i" = 100 ]; then docker logs --tail 30 $ID-app; echo "FALHA: não arrancou"; exit 1; fi
  sleep 3
done
ok "arrancou"

echo "== página de login (SSR) =="
for L in pt-PT en-US; do
  H=$(curl -fsS -H "Accept-Language: $L" "$B/auth/login")
  T=$(printf '%s' "$H" | tr '\n' ' ' | sed -nE 's/.*<title[^>]*>[[:space:]]*([^<]*[^[:space:]<])[[:space:]]*<\/title>.*/\1/p' | head -1)
  [[ "$T" == *"Stratechna Events"* ]] && ok "título [$L] «$T»" || falha "título [$L] «$T»"
  # a atribuição, depois o resto sem ela e sem scripts: não pode sobrar Hi.Events
  if printf '%s' "$H" | grep -qE 'Powered by(<!-- -->)? ?(<!-- -->)? ?Stratechna Events / (<!-- -->)?<a [^>]*href="https://hi\.events[^"]*"[^>]*>Hi\.Events</a>'; then
    ok "atribuição «Powered by Stratechna Events / Hi.Events» [$L]"
  else
    falha "atribuição em falta ou alterada [$L]: $(printf '%s' "$H" | grep -oE '.{0,60}Stratechna Events / .{0,80}' | head -1)"
  fi
  R=$(printf '%s' "$H" | sed -E 's#<script[^>]*>.*</script>##g; s#<a [^>]*href="https://hi\.events[^"]*"[^>]*>Hi\.Events</a>##g' | grep -oE '.{0,40}Hi\.Events.{0,20}' | head -2)
  [ -z "$R" ] && ok "sem Hi.Events fora da atribuição [$L]" || falha "Hi.Events visível [$L]: $R"
done

echo "== configuração e ficheiros =="
H=$(curl -fsS "$B/auth/login")
printf '%s' "$H" | grep -q '"VITE_APP_NAME":"Stratechna Events"' && ok "window.hievents com o nosso nome" || falha "VITE_APP_NAME não chegou ao browser"
for f in /manifest-icons/favicon.svg /logos/stratechna-events-text.svg /logos/stratechna-events-stacked.svg /favicon.ico; do
  [ "$(curl -s -o /dev/null -w '%{http_code}' "$B$f")" = 200 ] && ok "$f" || falha "$f não é servido"
done
[ "$(curl -fs "$B/favicon.ico" | sha256sum | cut -c1-16)" = "$(sha256sum < "$DIR/ficheiros/favicon.ico" | cut -c1-16)" ] \
  && ok "favicon.ico é o nosso" || falha "favicon.ico não é o nosso"

echo "== por dentro =="
docker exec $ID-app grep -q "Powered by Stratechna Events / <a" /app/backend/resources/views/vendor/mail/html/message.blade.php \
  && ok "emails: «Powered by Stratechna Events / Hi.Events»" || falha "atribuição dos emails em falta"
N=$(docker exec $ID-app sh -c 'grep -rl "Hi\.Events" /app/frontend/dist | wc -l')
[ "$N" = 0 ] && ok "frontend sem Hi.Events literal (só a atribuição protegida)" || falha "$N ficheiros do frontend com Hi.Events"
N=$(docker exec $ID-app sh -c 'grep -rlF "H\\u0069.Events" /app/frontend/dist | wc -l')
[ "$N" -ge 2 ] && ok "atribuição protegida em $N bundles" || falha "atribuição protegida em $N bundles (esperado >= 2)"

echo
if [ $FALHAS -gt 0 ]; then
  echo "VERIFICAÇÃO FALHOU ($FALHAS) — a imagem não deve ser publicada"
  exit 1
fi
echo "VERIFICAÇÃO OK — marca Stratechna Events, atribuição ao Hi.Events mantida"
