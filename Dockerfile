FROM node:20.11.0-alpine as builder
WORKDIR /vietcom-id-user-space

COPY package.json package-lock.json ./
RUN npm i
COPY . .
RUN npm run build

FROM node:20.11.0-alpine as runner
WORKDIR /vietcom-id-user-space
RUN npm install -g serve
COPY --from=builder /vietcom-id-user-space/package.json .
COPY --from=builder /vietcom-id-user-space/node_modules ./node_modules
COPY --from=builder /vietcom-id-user-space/build ./build
COPY --from=builder /vietcom-id-user-space/public ./public

EXPOSE 8080
CMD npm run production