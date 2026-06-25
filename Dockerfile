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

# ── CLIENT BUNDLES ADICIONAIS ────────────────────────────────────
COPY branding/client/assets/hu-DL2aPU0n.js /app/frontend/dist/client/assets/hu-DL2aPU0n.js
COPY branding/client/assets/zh-hk-Dy5Ir5n4.js /app/frontend/dist/client/assets/zh-hk-Dy5Ir5n4.js
COPY branding/client/assets/index-CebpcJ7x.js /app/frontend/dist/client/assets/index-CebpcJ7x.js
COPY branding/client/assets/nl-BAdT5a12.js /app/frontend/dist/client/assets/nl-BAdT5a12.js
COPY branding/client/assets/index-AJEn_35z.js /app/frontend/dist/client/assets/index-AJEn_35z.js
COPY branding/client/assets/index-P_tklPbr.js /app/frontend/dist/client/assets/index-P_tklPbr.js
COPY branding/client/assets/index-DwOJuZtF.js /app/frontend/dist/client/assets/index-DwOJuZtF.js
COPY branding/client/assets/vi-CjrduvpC.js /app/frontend/dist/client/assets/vi-CjrduvpC.js
COPY branding/client/assets/pl-3c0Wtp48.js /app/frontend/dist/client/assets/pl-3c0Wtp48.js
COPY branding/client/assets/pt-CclQZOui.js /app/frontend/dist/client/assets/pt-CclQZOui.js
COPY branding/client/assets/index-DWNnca3T.js /app/frontend/dist/client/assets/index-DWNnca3T.js
COPY branding/client/assets/ru-DSPMDNrm.js /app/frontend/dist/client/assets/ru-DSPMDNrm.js
COPY branding/client/assets/en-CRGy4kWf.js /app/frontend/dist/client/assets/en-CRGy4kWf.js
COPY branding/client/assets/it-CYIuRxIg.js /app/frontend/dist/client/assets/it-CYIuRxIg.js
COPY branding/client/assets/es-DI3ESS8i.js /app/frontend/dist/client/assets/es-DI3ESS8i.js
COPY branding/client/assets/index-C4Eh5-QH.js /app/frontend/dist/client/assets/index-C4Eh5-QH.js
COPY branding/client/assets/de-DDKRuSxP.js /app/frontend/dist/client/assets/de-DDKRuSxP.js
COPY branding/client/assets/index-Dr4T51eh.js /app/frontend/dist/client/assets/index-Dr4T51eh.js
COPY branding/client/assets/pt-br-CZRYwqOf.js /app/frontend/dist/client/assets/pt-br-CZRYwqOf.js
COPY branding/client/assets/fr-D-dWfR8Y.js /app/frontend/dist/client/assets/fr-D-dWfR8Y.js
COPY branding/client/assets/tr-BqMhi1Vj.js /app/frontend/dist/client/assets/tr-BqMhi1Vj.js
COPY branding/client/assets/index-NiML1h_J.js /app/frontend/dist/client/assets/index-NiML1h_J.js
COPY branding/client/assets/zh-cn-Dof8Ge6g.js /app/frontend/dist/client/assets/zh-cn-Dof8Ge6g.js
COPY branding/client/assets/index-CE3NFTD2.js /app/frontend/dist/client/assets/index-CE3NFTD2.js
COPY branding/client/assets/se-CHoXePbe.js /app/frontend/dist/client/assets/se-CHoXePbe.js
COPY branding/client/assets/index-2YD1mNCz.js /app/frontend/dist/client/assets/index-2YD1mNCz.js
COPY branding/client/assets/index-CU2gaG9C.js /app/frontend/dist/client/assets/index-CU2gaG9C.js
COPY branding/client/favicons/favicon.ico /app/frontend/dist/client/manifest-icons/favicon.ico
COPY branding/client/favicons/favicon.ico /app/frontend/dist/client/favicon.ico
