FROM node:14
ENV APP_NAME leds-vehicles-proto
WORKDIR /usr/src/app
COPY app app
COPY lib lib
COPY docs docs
COPY package.json package.json
COPY server.js server.js
COPY start.js start.js
COPY listen-on-port.js listen-on-port.js
COPY usage-data-config.json usage-data-config.json

RUN chown -R 1000 /usr/src/app
RUN npm install
ENV NODE_ENV=development
USER 1000
EXPOSE 3000
CMD [ "npm", "start" ]
