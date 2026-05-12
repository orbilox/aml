#!/bin/bash
# ============================================================
# AML VPS Deploy Script
# Usage: bash scripts/deploy.sh
# Run this on your VPS after every git pull
# ============================================================

set -e  # Exit immediately on any error

echo ""
echo "🚀 AML Deploy Starting..."
echo "=================================================="

# Step 1: Pull latest code
echo ""
echo "📥 Step 1: Pulling latest code from git..."
git pull origin main

# Step 2: Install dependencies (only if package.json changed)
echo ""
echo "📦 Step 2: Installing dependencies..."
npm install --production=false

# Step 3: Build (this also runs postbuild → ping-indexnow.mjs)
echo ""
echo "🔨 Step 3: Building Next.js app..."
echo "   (IndexNow ping will fire automatically after build)"
npm run build

# Step 4: Restart with PM2 (adjust process name if different)
echo ""
echo "♻️  Step 4: Restarting app with PM2..."
if pm2 list | grep -q "aml"; then
  pm2 restart aml
elif pm2 list | grep -q "next"; then
  pm2 restart next
else
  echo "   ⚠️  PM2 process not found. Starting fresh..."
  pm2 start npm --name "aml" -- start
fi

# Step 5: Save PM2 config
pm2 save

echo ""
echo "=================================================="
echo "✅ Deploy complete!"
echo "   Site: https://www.alliancemedialabs.com"
echo "   IndexNow: pinged ✅"
echo "   PM2: restarted ✅"
echo "=================================================="
echo ""
