FROM node:8.9.3-alpine
WORKDIR /www
RUN apk add --update git && rm -rf /tmp/* /var/cache/apk/*

ENV NPM_CONFIG_USERCONFIG=/tmp/npm-config NPM_CONFIG_CACHE=/tmp/npm
CMD npm install && npm run dev