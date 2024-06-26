FROM node:18

WORKDIR /app

COPY package.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

COPY . .

EXPOSE 4001

CMD ["node", "index.js"]