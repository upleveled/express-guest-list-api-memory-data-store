FROM node:20-slim

# Set the CI environment variable to true to prevent pnpm from prompting for input
ENV CI=true

# Install zsh, git, and yq using apt-get, which is the package manager included in node:20-slim.
# If zsh is not installed, it may lead to errors when starting the container, such as:
# "OCI runtime exec failed: exec failed: unable to start container process: exec: '/bin/zsh': stat /bin/zsh: no such file or directory: unknown"
# https://stackoverflow.com/questions/43643630/how-to-user-docker-exec-with-zsh
# git is needed on CodeSandbox for the terminal to function correctly. Without git, users may encounter errors, such as:
# "/root/.oh-my-zsh/tools/check_for_upgrade.sh:31: command not found: git"
# https://forums.docker.com/t/bin-sh-git-not-found/105865
RUN apt-get update && apt-get install -y zsh git yq

# Install pnpm with the version specified in the package.json file
RUN corepack enable && corepack prepare pnpm@$(yq e '.engines.pnpm' package.json)