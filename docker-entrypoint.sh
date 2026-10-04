#!/bin/sh
set -e

# Ensure directories exist inside container
mkdir -p /app/data
mkdir -p /app/public/uploads

# 1. Transfer current SQLite database if not present in the mounted persistent volume
if [ ! -f /app/data/payload.db ]; then
  echo "📦 Persistent database not found. Transferring current payload.db to /app/data/payload.db..."
  if [ -f /app/payload.db.seed ]; then
    cp /app/payload.db.seed /app/data/payload.db
    echo "✓ Current SQLite database with all projects, posts and pages successfully transferred!"
  elif [ -f /app/payload.db ]; then
    cp /app/payload.db /app/data/payload.db
    echo "✓ payload.db transferred to persistent volume."
  else
    echo "ℹ No existing database found. Payload will create a fresh database."
  fi
else
  echo "✓ Existing SQLite database found in persistent volume: /app/data/payload.db"
fi

# 2. Transfer initial uploaded media files if the uploads volume is empty
if [ -d /app/public/uploads.initial ] && [ -z "$(ls -A /app/public/uploads 2>/dev/null)" ]; then
  echo "🖼 Uploads volume is empty. Populating with initial media assets..."
  cp -r /app/public/uploads.initial/* /app/public/uploads/ 2>/dev/null || true
  echo "✓ Media assets successfully transferred to /mnt/ulozisko/ramart/uploads!"
else
  echo "✓ Media volume ready at /app/public/uploads"
fi

# Ensure permissions
chmod -R 775 /app/data /app/public/uploads 2>/dev/null || true

echo "🚀 Starting Ramart Studio on port ${PORT:-3000} (mapped to host)..."
exec "$@"
