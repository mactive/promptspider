#!/bin/bash

# 构建前端
cd frontend
npm install
npm run build

# 构建后端
cd ../backend
go build -o server

echo "Build completed!" 