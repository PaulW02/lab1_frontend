FROM node as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV CHOKIDAR_USEPOLLING=true

COPY ./package.json /app/
COPY ./package-lock.json /app/
COPY . /app
RUN npm ci --production
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]