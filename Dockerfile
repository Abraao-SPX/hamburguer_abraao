FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Script para aguardar o banco e rodar as migrations antes de iniciar
CMD ["sh", "-c", "npx sequelize-cli db:migrate && node app.js"]
