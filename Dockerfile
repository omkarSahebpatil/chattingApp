FROM node:20

WORKDIR /usr/src/app

EXPOSE 5000

CMD [ "node", "app.js" ]
