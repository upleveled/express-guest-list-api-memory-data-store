# Use the node:20-alpine base image
FROM node:20-alpine

# Install the latest version of pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set zsh as the default shell
SHELL ["/bin/zsh", "-c"]
