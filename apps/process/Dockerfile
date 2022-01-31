FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/process .
ENV PORT=3333
EXPOSE ${PORT}
RUN yarn
# dependencies that nestjs needs
RUN yarn add reflect-metadata tslib rxjs @nestjs/platform-express
CMD node ./main.js
