FROM daveearley/hi.events-all-in-one:latest

# ── CLIENT BUNDLES ──────────────────────────────────────────────
COPY branding/assets/index-WVdD6Drv.js /app/frontend/dist/client/assets/index-WVdD6Drv.js
COPY branding/assets/index-B-aAPX5P.js /app/frontend/dist/client/assets/index-B-aAPX5P.js
COPY branding/assets/index-DU71biXJ.js /app/frontend/dist/client/assets/index-DU71biXJ.js
COPY branding/index.html /app/frontend/dist/client/index.html

# ── SERVER BUNDLES ──────────────────────────────────────────────
COPY branding/server/entry.server.js /app/frontend/dist/server/entry.server.js
COPY branding/server/site.webmanifest /app/frontend/dist/server/site.webmanifest
COPY branding/server/assets/index-BGNeP8LR.js /app/frontend/dist/server/assets/index-BGNeP8LR.js
COPY branding/server/assets/index-NVUA_q7E.js /app/frontend/dist/server/assets/index-NVUA_q7E.js
COPY branding/server/assets/index-Nf7Dj9oj.js /app/frontend/dist/server/assets/index-Nf7Dj9oj.js
COPY branding/server/assets/index-G2thoRPh.js /app/frontend/dist/server/assets/index-G2thoRPh.js
COPY branding/server/assets/index-BIaIpG9g.js /app/frontend/dist/server/assets/index-BIaIpG9g.js
COPY branding/server/assets/index-etueLENW.js /app/frontend/dist/server/assets/index-etueLENW.js
COPY branding/server/assets/index-CSwLrvCq.js /app/frontend/dist/server/assets/index-CSwLrvCq.js
COPY branding/server/assets/index-BPZkAfla.js /app/frontend/dist/server/assets/index-BPZkAfla.js
COPY branding/server/assets/index-xed3snCp.js /app/frontend/dist/server/assets/index-xed3snCp.js
COPY branding/server/assets/index-B-32wjxr.js /app/frontend/dist/server/assets/index-B-32wjxr.js
COPY branding/server/assets/index-BI3bBNDh.js /app/frontend/dist/server/assets/index-BI3bBNDh.js
COPY branding/server/assets/index-3Rs5osio.js /app/frontend/dist/server/assets/index-3Rs5osio.js
COPY branding/server/assets/index-BA9QfK8e.js /app/frontend/dist/server/assets/index-BA9QfK8e.js
COPY branding/server/assets/pt-BlDpJljb.js /app/frontend/dist/server/assets/pt-BlDpJljb.js
COPY branding/server/assets/en-BzGHBVpy.js /app/frontend/dist/server/assets/en-BzGHBVpy.js

# ── LOGOS ───────────────────────────────────────────────────────
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

# ── FAVICONS ────────────────────────────────────────────────────
COPY branding/favicons/favicon.ico /app/frontend/dist/client/manifest-icons/favicon.ico
COPY branding/favicons/favicon.ico /app/frontend/dist/client/favicon.ico
COPY branding/logos/Stratechna_Events.png /app/frontend/dist/client/manifest-icons/favicon-512x512.png
COPY branding/logos/Stratechna_Events.png /app/frontend/dist/client/manifest-icons/favicon-192x192.png
COPY branding/logos/Stratechna_Events.png /app/frontend/dist/client/manifest-icons/favicon-48x48.png
COPY branding/logos/Stratechna_Events.png /app/frontend/dist/client/manifest-icons/favicon-32x32.png
COPY branding/logos/Stratechna_Events.png /app/frontend/dist/client/manifest-icons/favicon-16x16.png
COPY branding/logos/Stratechna_Events.svg /app/frontend/dist/client/manifest-icons/favicon.svg
