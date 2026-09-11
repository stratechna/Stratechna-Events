# Stratechna Events — Hi.Events com a marca Stratechna.
#
# A versão do Hi.Events está FIXA. Actualizar é mudar esta linha, de propósito:
# o aplicar.py falha o build se alguma troca deixar de encaixar, e o verificar.sh
# (no workflow) falha se o nome do upstream aparecer fora da atribuição — ou se a
# atribuição exigida pela licença desaparecer.
ARG HIEVENTS_VERSION=v1.9.0-beta
FROM daveearley/hi.events-all-in-one:${HIEVENTS_VERSION}
ARG HIEVENTS_VERSION

LABEL org.opencontainers.image.source="https://github.com/stratechna/Stratechna-Events" \
      org.opencontainers.image.title="Stratechna Events" \
      org.opencontainers.image.vendor="Stratechna" \
      org.opencontainers.image.version="${HIEVENTS_VERSION}" \
      org.opencontainers.image.base.name="daveearley/hi.events-all-in-one:${HIEVENTS_VERSION}"

# Configuração oficial do Hi.Events (o server.js passa as VITE_* ao browser em
# window.hievents). Os compose dos clientes podem sobrepor-se.
ENV APP_NAME="Stratechna Events" \
    MAIL_FROM_NAME="Stratechna Events" \
    VITE_APP_NAME="Stratechna Events" \
    VITE_APP_FAVICON="/manifest-icons/favicon.svg" \
    VITE_APP_LOGO_LIGHT="/logos/stratechna-events-text.svg" \
    VITE_APP_LOGO_DARK="/logos/stratechna-events-stacked.svg" \
    VITE_APP_PRIMARY_COLOR="#1a2530" \
    VITE_APP_SECONDARY_COLOR="#4A0000" \
    VITE_TOS_URL="https://stratechna.com/termos-de-servico/" \
    VITE_PRIVACY_URL="https://stratechna.com/politica-de-privacidade/" \
    VITE_PLATFORM_SUPPORT_EMAIL="suporte@stratechna.com" \
    VITE_HIDE_ABOUT_LINK="true"

# Imagens próprias (logótipos, favicons) e trocas por padrão com mínimo
COPY branding/ficheiros/ /tmp/branding/ficheiros/
COPY branding/aplicar.py /tmp/branding/aplicar.py
RUN python3 /tmp/branding/aplicar.py && rm -rf /tmp/branding
