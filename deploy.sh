#!/bin/bash
set -e

echo "🚀 Deploying SinauDevOps..."

cd /var/www/sinau-devops

echo "📦 Pulling latest code..."
git pull origin main

echo "📦 Installing dependencies..."
npm ci --production

echo "📦 Generating Prisma client..."
npx prisma generate

echo "🔨 Building..."
NODE_ENV=production npm run build

echo "🔄 Restarting app..."
supervisorctl restart sinau-devops

echo "✅ Deploy complete!"
