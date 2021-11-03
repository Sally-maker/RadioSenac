FROM node:alpine

LABEL maintainer "Radio Senac api"

WORKDIR /usr/src/app/

COPY package*.json ./

RUN yarn 

COPY . .

CMD ["yarn", "dev"]