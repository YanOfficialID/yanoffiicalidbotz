#!/data/data/com.termux/files/usr/bin/bash

clear
echo -e "\e[31m
█▄█ ▄▀█ █▄░█ █▀█ █▀ █▀ █ █▀
░█░ █▀█ █░▀█ █▄█ █▀ █▀ █ █▄

█ ▄▀█ █░ █ █▀▄
█ █▀█ █▄ █ █▄▀
echo ""
echo "---------------------------------------------------------------------------------------"
echo -e "\e[92mNAMA BOT:\e[0m YANOFFICIALIDBOTZ"
echo -e "\e[92mVERSION:\e[0m BETA"
echo "---------------------------------------------------------------------------------------"

# Install dependency jika belum
if [ ! -d "node_modules" ]; then
  echo "📦 Menginstal dependensi..."
  npm install
fi

# Input token
echo ""
read -p "🔑 Masukkan TOKEN BOT dari @BotFather: " token
echo ""

# Jalankan bot dengan token sebagai argumen
node main.js "$token"
