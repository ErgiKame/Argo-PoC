FROM node:16.15-alpine3.14

ENV DOCKER_IMAGE_VERSION=xxx

WORKDIR /usr/src/app

COPY . .
RUN npm install
EXPOSE 3000

CMD [ "node", "server.js" ]
