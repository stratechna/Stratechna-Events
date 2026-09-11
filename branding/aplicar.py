#!/usr/bin/env python3
"""Aplica a marca Stratechna ao Hi.Events, durante o build da imagem.

Regras (ver README):
- Nunca substitui por inteiro um ficheiro de código do upstream: troca texto por
  padrão. Excepção: imagens (logótipos e favicons), que são nossas.
- Cada troca declara quantas ocorrências espera no mínimo. Se o upstream mudar e
  um padrão desaparecer, o build FALHA em vez de publicar uma imagem sem marca.
- A atribuição é exigida pela licença do Hi.Events (AGPL 7(b)): rodapé de todas as
  páginas e emails. Fica «Powered by Stratechna Events / Hi.Events», com o link
  original — reformulação que a licença permite para versões modificadas.
"""
import json
import pathlib
import re
import shutil
import sys

FRONT = pathlib.Path("/app/frontend/dist")
BACK = pathlib.Path("/app/backend")
PROPRIOS = pathlib.Path("/tmp/branding/ficheiros")
UPSTREAM = "Hi.Events"
MARCA = "Stratechna Events"
# "Hi.Events" é "Hi.Events" para o browser, mas não é apanhado pela troca geral:
# é assim que a atribuição sobrevive à passagem que tira o nome de todo o lado.
PROTEGIDO = "H\\u0069.Events"

erros = []


def trocar(f, padrao, novo, minimo=1, regex=False):
    f = pathlib.Path(f)
    if not f.exists():
        erros.append(f"{f}: não existe")
        return 0
    t = f.read_text(encoding="utf-8")
    if regex:
        t2, n = re.subn(padrao, novo if callable(novo) else (lambda _m: novo), t)
    else:
        n, t2 = t.count(padrao), t.replace(padrao, novo)
    if n < minimo:
        erros.append(f"{f}: «{str(padrao)[:70]}» aparece {n}x, esperado >= {minimo}")
        return 0
    if n:
        f.write_text(t2, encoding="utf-8")
    return n


textos = sorted(p for p in FRONT.rglob("*") if p.is_file() and p.suffix in (".js", ".html", ".webmanifest"))

# ── 1. Atribuição (cliente minificado e servidor SSR) ──────────────────────
ATRIB = re.compile(
    r'" ",(\s*(?:/\* @__PURE__ \*/ )?[\w$.]*jsx\("a",\s*\{\s*href:\s*[\w$]+,\s*target:\s*"_blank",'
    r'\s*title:\s*"Effortlessly manage events and sell tickets online with )Hi\.Events'
    r'(",\s*children:\s*)"Hi\.Events"(\s*\}\)),\s*" ",\s*"🚀"')


def atrib(m):
    return f'" {MARCA} / ",{m.group(1)}{PROTEGIDO}{m.group(2)}"{PROTEGIDO}"{m.group(3)}'


n_atrib = sum(trocar(f, ATRIB, atrib, minimo=0, regex=True) for f in textos if f.suffix == ".js")
if n_atrib < 2:
    erros.append(f"atribuição: encontrada {n_atrib}x (esperado cliente + servidor) — o componente mudou?")

# «Powered by» igual em todas as línguas, como pedido (a chave g2UNkE do catálogo)
n_pb = sum(trocar(f, r'("g2UNkE"\s*:\s*)"[^"]*"', lambda m: m.group(1) + '"Powered by"', minimo=0, regex=True)
           for f in textos if f.suffix == ".js")
if n_pb < 10:
    erros.append(f"«Powered by»: só {n_pb} catálogos — estrutura das traduções mudou?")

# ── 2. O nome em todo o frontend (textos, títulos, catálogos, manifest) ────
n_nome = sum(trocar(f, UPSTREAM, MARCA, minimo=0) for f in textos)
if n_nome < 50:
    erros.append(f"nome: só {n_nome} ocorrências trocadas — estrutura mudou?")

# ── 3. Backend: emails e textos ─────────────────────────────────────────────
trocar(BACK / "resources/views/vendor/mail/html/message.blade.php",
       "| Powered by <a", f"| Powered by {MARCA} / <a")
trocar(BACK / "resources/views/welcome.blade.php", f"<title>{UPSTREAM}</title>", f"<title>{MARCA}</title>")
trocar(BACK / "resources/views/emails/orders/order-failed.blade.php",
       "'hello@hi.events'", "'suporte@stratechna.com'")
trocar(BACK / "app/Http/Actions/Reports/ExportOrganizerReportAction.php",
       f"'{UPSTREAM} Fee'", f"'{MARCA} Fee'")
n_lang = 0
for f in sorted((BACK / "lang").glob("*.json")):
    n_lang += trocar(f, r'"Hi\.Events"\s*:\s*"[^"]*"', f'"{UPSTREAM}": "{MARCA}"', minimo=0, regex=True)
if n_lang < 1:
    erros.append("lang/*.json: chave «Hi.Events» não encontrada")

# ── 4. Imagens próprias, com os nomes que o frontend usa ───────────────────
for base in (FRONT / "client", FRONT / "server"):
    (base / "logos").mkdir(exist_ok=True)
    for f in (PROPRIOS / "logos").iterdir():
        shutil.copy(f, base / "logos" / f.name)
    # os ficheiros do upstream também passam a ser os nossos (há referências directas)
    for nome in ("stacked-light", "stacked-dark"):
        shutil.copy(PROPRIOS / "logos/stratechna-events-stacked.svg", base / f"logos/hi-events-{nome}.svg")
    for nome in ("text-dark", "text-light", "horizontal-dark", "horizontal-light"):
        shutil.copy(PROPRIOS / "logos/stratechna-events-text.svg", base / f"logos/hi-events-{nome}.svg")
    # ícones do upstream (têm «Hi.Events» no <title> do SVG): passam a ser o nosso
    for rel in ("logos/hi-events-icon-dark.svg", "logos/hi-events-icon-light.svg",
                "manifest-icons/favicon-light.svg", "manifest-icons/favicon.svg"):
        if (base / rel).exists() or rel.endswith("/favicon.svg"):
            (base / rel).parent.mkdir(exist_ok=True)
            shutil.copy(PROPRIOS / "manifest-icons/favicon.svg", base / rel)
    for rel in ("favicon.ico", "manifest-icons/favicon.ico"):
        shutil.copy(PROPRIOS / "favicon.ico", base / rel)
# o nginx serve /favicon.ico a partir do public do Laravel (vazio no upstream)
shutil.copy(PROPRIOS / "favicon.ico", BACK / "public/favicon.ico")
cli = FRONT / "client"
for t in ("16x16", "32x32", "48x48", "192x192", "512x512"):
    shutil.copy(PROPRIOS / "manifest-icons/stratechna-events.png", cli / f"manifest-icons/favicon-{t}.png")

# ── 5. Verificação final ────────────────────────────────────────────────────
svgs = sorted(FRONT.rglob("*.svg"))
sobras = {str(f.relative_to(FRONT)): f.read_text(encoding="utf-8", errors="ignore").count(UPSTREAM)
          for f in textos + svgs}
sobras = {k: v for k, v in sobras.items() if v}
if sobras:
    erros.append(f"nome do upstream ainda presente: {list(sobras.items())[:4]}")
for f in sorted((BACK / "lang").glob("*.json")):
    try:
        json.loads(f.read_text(encoding="utf-8"))
    except ValueError as e:
        erros.append(f"{f.name} deixou de ser JSON válido: {e}")

if erros:
    print("BRANDING FALHOU — o upstream mudou e estas trocas já não encaixam:", file=sys.stderr)
    for e in erros:
        print("  - " + e, file=sys.stderr)
    sys.exit(1)
print(f"branding: atribuição em {n_atrib} bundles, «Powered by» em {n_pb} catálogos, "
      f"{n_nome} trocas do nome, {n_lang} traduções do backend")
