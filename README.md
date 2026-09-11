# Stratechna Events

Hi.Events com a marca Stratechna.

    ghcr.io/stratechna/stratechna-events:1.9          ← o que os clientes usam
    ghcr.io/stratechna/stratechna-events:1.9.0-beta   ← versão exacta
    ghcr.io/stratechna/stratechna-events:latest       ← compatibilidade

## Licença e atribuição

O Hi.Events é AGPL-3.0 com termos adicionais (secção 7(b)): a atribuição tem de ficar no
rodapé de todas as páginas web e emails; numa versão modificada pode ser reformulada. A
nossa diz **«Powered by Stratechna Events / Hi.Events»**, com o link original. A
verificação **falha se ela desaparecer**. Retirá-la exigiria a licença comercial.

## Como a marca é aplicada — e porque sobrevive às actualizações

1. **Versão fixa.** `ARG HIEVENTS_VERSION` no `Dockerfile`.
2. **Configuração oficial primeiro.** Nome, logótipos, favicon, cores, termos e
   privacidade vão por variáveis `VITE_*` (`ENV` no `Dockerfile`), que o `server.js` do
   Hi.Events passa ao browser em `window.hievents`.
3. **Só imagens próprias** em `branding/ficheiros/`.
4. **Trocas por padrão, com mínimo.** `branding/aplicar.py` protege a atribuição, troca o
   nome nos textos compilados e nos catálogos de tradução, e ajusta os emails do backend.
   Nada é identificado pelo nome com hash dos ficheiros — procura-se pelo conteúdo. Se um
   padrão deixar de existir, **o build falha**.
5. **Teste antes de publicar.** `branding/verificar.sh` arranca a imagem com PostgreSQL e
   Redis e verifica o login em português e inglês, a atribuição, a configuração no
   browser, os ficheiros e os emails.
6. **Os clientes seguem a tag `1.9`**, que só avança com imagens que passaram o teste.

## Actualizar o Hi.Events

O workflow `upstream.yml` abre um issue quando sai versão nova. Mudar `HIEVENTS_VERSION` e
fazer push. Testar localmente:

    docker build -t events:teste .
    bash branding/verificar.sh events:teste
