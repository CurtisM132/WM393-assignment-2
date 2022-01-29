# Build Angular Project
FROM node:lts-gallium as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Host Project using NGINX
FROM nginx:alpine
COPY --from=node /app/dist/wmgtss /usr/share/nginx/html