# 1. Aşama: Build aşaması
FROM node:18 AS build

WORKDIR /app

# Bağımlılıkları yükle
COPY package.json package-lock.json ./
RUN npm install

# Uygulamayı build et
COPY . .
RUN npm run build

# 2. Aşama: Production aşaması
FROM nginx:alpine

# Build edilmiş dosyaları Nginx'e kopyala
COPY --from=build /app/build /usr/share/nginx/html

# Nginx server başlat
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]