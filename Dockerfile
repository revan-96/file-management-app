FROM node:20-alpine
WORKDIR /frontend
COPY ../frontend /frontend
WORKDIR /server
COPY ../server /server
WORKDIR /frontend
RUN npm install
RUN npm run build
WORKDIR /server
RUN npm install
EXPOSE 3000
CMD ["node", "./index.js"]