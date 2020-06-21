FROM node:12-alpine
WORKDIR /opt/app

RUN mkdir -p /opt
ADD . /opt/app/

RUN npm install -g yarn
RUN yarn
EXPOSE 9000
CMD [ “yarn”, “start” ]