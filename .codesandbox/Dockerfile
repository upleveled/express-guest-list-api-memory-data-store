FROM node:20-slim

ENV CI=true

RUN corepack enable && corepack prepare pnpm@$(yq e '.engines.pnpm' package.json)