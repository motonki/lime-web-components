FROM node:8

WORKDIR /lime
COPY . /lime

RUN npm install -g npm@latest \
    && npm install \
    && npm run build
