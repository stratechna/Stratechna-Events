FROM daveearley/hi.events-all-in-one:latest

# Copiar bundles JS patcheados
COPY branding/assets/index-WVdD6Drv.js /app/frontend/dist/client/assets/index-WVdD6Drv.js
COPY branding/assets/index-B-aAPX5P.js /app/frontend/dist/client/assets/index-B-aAPX5P.js
COPY branding/assets/index-DU71biXJ.js /app/frontend/dist/client/assets/index-DU71biXJ.js

# Copiar index.html patcheado
COPY branding/index.html /app/frontend/dist/client/index.html

# Copiar logos SVG para dist/client e dist/server
COPY branding/logos/logo-stacked-light.svg /app/frontend/dist/client/logos/hi-events-stacked-light.svg
COPY branding/logos/logo-stacked-light.svg /app/frontend/dist/client/logos/hi-events-stacked-dark.svg
COPY branding/logos/logo-text-dark.svg /app/frontend/dist/client/logos/hi-events-text-dark.svg
COPY branding/logos/logo-text-dark.svg /app/frontend/dist/client/logos/hi-events-text-light.svg
COPY branding/logos/logo-text-dark.svg /app/frontend/dist/client/logos/hi-events-horizontal-dark.svg
COPY branding/logos/logo-text-dark.svg /app/frontend/dist/client/logos/hi-events-horizontal-light.svg

COPY branding/logos/logo-stacked-light.svg /app/frontend/dist/server/logos/hi-events-stacked-light.svg
COPY branding/logos/logo-stacked-light.svg /app/frontend/dist/server/logos/hi-events-stacked-dark.svg
COPY branding/logos/logo-text-dark.svg /app/frontend/dist/server/logos/hi-events-text-dark.svg
COPY branding/logos/logo-text-dark.svg /app/frontend/dist/server/logos/hi-events-text-light.svg
COPY branding/logos/logo-text-dark.svg /app/frontend/dist/server/logos/hi-events-horizontal-dark.svg
COPY branding/logos/logo-text-dark.svg /app/frontend/dist/server/logos/hi-events-horizontal-light.svg

# Favicon
COPY branding/favicons/favicon.ico /app/frontend/dist/client/manifest-icons/favicon.ico
COPY branding/favicons/favicon.ico /app/frontend/dist/client/favicon.ico
COPY branding/logos/Stratechna_Events.png /app/frontend/dist/client/manifest-icons/favicon-512x512.png
COPY branding/logos/Stratechna_Events.png /app/frontend/dist/client/manifest-icons/favicon-192x192.png
COPY branding/logos/Stratechna_Events.png /app/frontend/dist/client/manifest-icons/favicon-48x48.png
COPY branding/logos/Stratechna_Events.png /app/frontend/dist/client/manifest-icons/favicon-32x32.png
COPY branding/logos/Stratechna_Events.png /app/frontend/dist/client/manifest-icons/favicon-16x16.png
COPY branding/logos/Stratechna_Events.svg /app/frontend/dist/client/manifest-icons/favicon.svg
