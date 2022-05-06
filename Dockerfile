FROM node:16-alpine as build
WORKDIR /app

ENV NPM_CONFIG_LOGLEVEL warn

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install --pure-lockfile --link-duplicates

COPY . .

RUN yarn run build

FROM node:16-alpine
WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install --pure-lockfile --production --link-duplicates

COPY --from=build /app/next.config.js next.config.js
COPY --from=build /app/.next .next
COPY --from=build /app/public public

ENV NPM_CONFIG_LOGLEVEL warn

EXPOSE 5000
CMD yarn start -p 5000
