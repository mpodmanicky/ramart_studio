#!/usr/bin/env bash
set -e

# Načítanie .env súboru ak existuje
if [ -f .env ]; then
  set -a
  source .env
  set +a
fi

STORAGE_DIR="${STORAGE_DIR:-/mnt/ulozisko/ramart}"

echo "=========================================================="
echo "🚀 RAMART STUDIO — STAGING DEPLOYMENT"
echo "=========================================================="
echo "📁 Úložisko na hostiteľskom serveri: $STORAGE_DIR"

# Vytvorenie potrebných priečinkov ak ešte neexistujú
if [ ! -d "$STORAGE_DIR/data" ] || [ ! -d "$STORAGE_DIR/uploads" ]; then
  echo "🔨 Overujem a vytváram priečinky na $STORAGE_DIR..."
  mkdir -p "$STORAGE_DIR/data" "$STORAGE_DIR/uploads"
  echo "✓ Priečinky vytvorené: $STORAGE_DIR/data a $STORAGE_DIR/uploads"
fi

echo "🐳 Spúšťam build a štart kontajnera cez Docker Compose..."
docker compose up -d --build

echo ""
echo "=========================================================="
echo "✅ Ramart Studio beží na:     http://localhost:${PORT:-7777}"
echo "🔐 Administrácia Payload CMS: http://localhost:${PORT:-7777}/admin"
echo "💾 SQLite databáza:           $STORAGE_DIR/data/payload.db"
echo "🖼 Nahrané médiá:             $STORAGE_DIR/uploads"
echo "=========================================================="
