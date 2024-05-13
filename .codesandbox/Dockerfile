FROM node:20-slim

RUN corepack enable && corepack prepare pnpm@$(yq e '.engines.pnpm' package.json)