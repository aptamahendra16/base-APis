FROM node:21.6.1

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "app.js" ]
