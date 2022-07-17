FROM node:16.16.0-slim

WORKDIR /cli

# Leverage the cached layers to only reinstall packages
# if there are changes to `package.json` or `package-lock.json`
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the files and compile it to javascript
COPY . .
RUN npx tsc \
    && chmod +x .out/index.js

ENTRYPOINT [ ".out/index.js" ]
