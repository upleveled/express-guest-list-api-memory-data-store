FROM node:20-alpine

# TODO: Configure shell to bash in the future if CodeSandbox introduces a setting for using shell.
# https://github.com/upleveled/express-guest-list-api-memory-data-store/pull/294#discussion_r1601759357
RUN apk update && apk add --no-cache zsh git yq

RUN corepack enable && corepack prepare pnpm@$(yq e '.engines.pnpm' package.json) --activate
