FROM node:lts-alpine

# Install zsh, git and yq, to be able to use the CodeSandbox environment
# https://github.com/upleveled/express-guest-list-api-memory-data-store/pull/294#discussion_r1601613173

# TODO: Configure shell to bash in the future if CodeSandbox introduces a setting for using shell
# https://github.com/upleveled/express-guest-list-api-memory-data-store/pull/294#discussion_r1601759357
RUN apk update && apk add --no-cache zsh git yq

RUN corepack enable && corepack prepare pnpm@$(yq e '.engines.pnpm' package.json) --activate
