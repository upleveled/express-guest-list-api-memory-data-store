FROM node:20-alpine

# Set the CI environment variable to true to prevent pnpm from prompting for input
ENV CI=true

# Install zsh, git and yq
# Without zsh, the container fails to start with an error:
# "OCI runtime exec failed: exec failed: unable to start container process: exec: '/bin/zsh': stat /bin/zsh: no such file or directory: unknown"
# Without git, opening the terminal on CodeSandbox results in an error:
# "/root/.oh-my-zsh/tools/check_for_upgrade.sh:31: command not found: git"
RUN apk update && apk add --no-cache zsh git yq --repository=https://dl-cdn.alpinelinux.org/alpine/edge/community

# Install pnpm with the version specified in the package.json file
RUN corepack enable && corepack prepare pnpm@$(yq e '.engines.pnpm' package.json)