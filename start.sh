#!/bin/bash
set -e

echo "🚀 Setting up SinauDevOps..."

export NODE_ENV=production
export PORT=3000

npx next start -p 3000
