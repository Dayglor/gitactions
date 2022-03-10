FROM node

WORKDIR /usr/src/app
EXPOSE 3000

RUN apt update

COPY . .
CMD [ "bash" ]
