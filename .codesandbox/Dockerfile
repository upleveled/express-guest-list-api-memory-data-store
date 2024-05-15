FROM node:20-alpine

RUN apk update && apk add --no-cache zsh git yq

RUN corepack enable && corepack prepare pnpm@$(yq e '.engines.pnpm' package.json) --activate
