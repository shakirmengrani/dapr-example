FROM shakirmengrani/nx-builder as builder
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn
COPY . .
RUN yarn nx build api

FROM node:lts-alpine
WORKDIR /app
COPY --from=builder /app/dist/apps/api /app
ENV PORT=3333
EXPOSE ${PORT}
RUN yarn
# dependencies that nestjs needs
RUN yarn add reflect-metadata tslib rxjs @nestjs/platform-express
CMD node ./main.js
