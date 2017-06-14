FROM node:8.0.0-alpine

ENV NPM_TOKEN=4cb9af87-cdbf-48e0-b2b5-4b685445c0be
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY .npmrc .npmrc
COPY package.json package.json
RUN npm install
RUN rm -f .npmrc
EXPOSE 3000

COPY . .
CMD [ "npm", "start" ]
