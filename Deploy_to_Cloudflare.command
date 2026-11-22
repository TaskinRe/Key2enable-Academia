#!/bin/bash
set -euo pipefail

cd "$(cd "$(dirname "$0")" && pwd)"

if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo "Node.js and npm are required. Install the current LTS version from https://nodejs.org, then run this file again."
  read -r -p "Press Return to close. " _
  exit 1
fi

printf '\nKey2Enable Academy — Cloudflare Pages deployment\n\n'
printf 'This will open Cloudflare sign-in in your browser if Wrangler is not already authorized. Sign in directly on your own device.\n\n'
npx wrangler login

read -r -p "Enter your Cloudflare Pages project name [key2enableacademy]: " PROJECT_NAME
PROJECT_NAME=${PROJECT_NAME:-key2enableacademy}
read -r -p "Does the Pages project already exist? [y/N]: " PROJECT_EXISTS
if [[ ! "$PROJECT_EXISTS" =~ ^[Yy]$ ]]; then
  npx wrangler pages project create "$PROJECT_NAME" --production-branch main
fi

npm ci
npm run build
npx wrangler pages deploy dist/client --project-name "$PROJECT_NAME"

printf '\nDeployment uploaded. Finish the domain and booking setup using DEPLOY_TO_CLOUDFLARE.md.\n'
read -r -p "Press Return to close. " _
