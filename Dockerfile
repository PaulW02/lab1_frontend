FROM node as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# release step
FROM nginx
COPY --from=build /app/build /usr/share/nginx/html/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]