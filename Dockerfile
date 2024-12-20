FROM node:16.15.1-alpine3.14

RUN apk add --no-cache binutils-gold g++ gcc gnupg libgcc linux-headers make python2

# if you want to develop in docker container
# RUN apk add openssh git

EXPOSE 8080
