#!/bin/bash
# Gera os SVGs de logo com o ícone embutido em base64
# Corre este script localmente antes de fazer build da imagem Docker

set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
LOGO_PNG="$SCRIPT_DIR/branding/logos/Stratechna_Events.png"
OUTPUT_DIR="$SCRIPT_DIR/branding/logos"

echo "A gerar logos SVG com base64..."

B64=$(base64 -i "$LOGO_PNG" | tr -d '\n')

cat > "$OUTPUT_DIR/logo-stacked-light.svg" << SVGEOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 130" width="200" height="130">
  <image href="data:image/png;base64,${B64}" x="70" y="0" width="60" height="60"/>
  <text x="100" y="85" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#3D5163" text-anchor="middle">Stratechna</text>
  <text x="100" y="105" font-family="Arial, sans-serif" font-size="13" font-weight="500" fill="#880000" text-anchor="middle">Events</text>
</svg>
SVGEOF

cat > "$OUTPUT_DIR/logo-text-dark.svg" << SVGEOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 50" width="280" height="50">
  <image href="data:image/png;base64,${B64}" x="0" y="0" width="50" height="50"/>
  <text x="60" y="30" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#3D5163">Stratechna</text>
  <text x="60" y="46" font-family="Arial, sans-serif" font-size="12" font-weight="500" fill="#880000">Events</text>
</svg>
SVGEOF

echo "Logos gerados em $OUTPUT_DIR"

# Gerar favicon.ico a partir do PNG (requer imagemagick)
if command -v convert &> /dev/null; then
  convert "$LOGO_PNG" -resize 48x48 "$SCRIPT_DIR/branding/favicons/favicon.ico"
  echo "favicon.ico gerado"
else
  echo "AVISO: imagemagick não instalado. A copiar PNG como favicon.ico"
  cp "$LOGO_PNG" "$SCRIPT_DIR/branding/favicons/favicon.ico"
fi

echo "Patch completo. Podes fazer: docker build -t ghcr.io/stratechna/stratechna-events:latest ."

# Gerar favicon.ico válido com Python (requer Pillow instalado pelo workflow)
python3 - << 'PYEOF'
from PIL import Image
import struct, io

img = Image.open("branding/logos/Stratechna_Events.png").convert("RGBA")
sizes = [(16,16),(32,32),(48,48)]
images = []
for size in sizes:
    buf = io.BytesIO()
    img.resize(size, Image.LANCZOS).save(buf, format="PNG")
    images.append(buf.getvalue())

with open("branding/client/favicons/favicon.ico", "wb") as f:
    f.write(struct.pack("<HHH", 0, 1, len(sizes)))
    offset = 6 + len(sizes) * 16
    for (w,h), data in zip(sizes, images):
        f.write(struct.pack("<BBBBHHII", w, h, 0, 0, 1, 32, len(data), offset))
        offset += len(data)
    for data in images:
        f.write(data)
print("favicon.ico gerado com Pillow")
PYEOF
