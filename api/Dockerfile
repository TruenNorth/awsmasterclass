FROM mhart/alpine-node:9.8.0 

WORKDIR /api
ADD /. /api
RUN npm install

EXPOSE 4004
CMD ["node", "server.js"]