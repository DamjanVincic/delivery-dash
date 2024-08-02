FROM node:22.5.1-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]