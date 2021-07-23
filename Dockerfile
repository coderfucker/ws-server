FROM node:16.5-alpine3.14

ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --production
COPY . .

EXPOSE 8080

CMD ["node", "index.js"]