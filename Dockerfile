FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


FROM nginx:alpine
COPY --from=node /app/dist/dockerDemo /usr/share/nginx/html
EXPOSE 81
CMD ["nginx" , "-g" , "daemon off;"]