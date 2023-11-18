FROM node:20

WORKDIR /usr/src/app

EXPOSE 5000

CMD ["npm", "install"]

CMD [ "node", "app.js" ]
