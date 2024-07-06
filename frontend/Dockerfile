# Stage 1: Build
FROM node:14 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Run
FROM node:14
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build ./build
COPY package*.json ./
RUN npm install --only=production
EXPOSE 3000
CMD ["npx", "serve", "-s", "build"]