FROM node:20.11.0-alpine as builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npm run build

FROM node:20.11.0-alpine as runner
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public

EXPOSE 8080
CMD npm run production