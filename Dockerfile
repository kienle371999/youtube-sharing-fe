FROM node:20.11.0-alpine as builder
WORKDIR /ys-app

COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npm run build

FROM node:20.11.0-alpine as runner
WORKDIR /ys-app
RUN npm install -g serve
COPY --from=builder /ys-app/package.json .
COPY --from=builder /ys-app/node_modules ./node_modules
COPY --from=builder /ys-app/build ./build
COPY --from=builder /ys-app/public ./public

EXPOSE 8080
CMD npm run production