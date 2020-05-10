FROM node:13.12.0

WORKDIR /app/web
COPY ./web ./
RUN yarn
RUN yarn build

WORKDIR /app/backend
COPY ./backend ./
RUN yarn