##########################
## Builder Container
##########################
FROM node:17.6.0-alpine3.14 as builder

WORKDIR /sample-graphql

COPY package.json package-lock.json ./

RUN npm i --no-progress

COPY . .

RUN npm run build

##########################
## Application Container
##########################
FROM node:17.6.0-alpine3.14

WORKDIR /sample-graphql

COPY --from=builder /sample-graphql ./

CMD ["npm", "run", "start"]
