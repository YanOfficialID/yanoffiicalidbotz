#!/data/data/com.termux/files/usr/bin/bash

clear
echo ""
echo -e "\e[31m██████╗░░█████╗░███╗░░██╗░█████╗░███████╗███████╗"
echo -e "██╔══██╗██╔══██╗████╗░██║██╔══██╗██╔════╝██╔════╝"
echo -e "██████╦╝██║░░██║██╔██╗██║██║░░██║█████╗░░█████╗░░"
echo -e "██╔══██╗██║░░██║██║╚████║██║░░██║██╔══╝░░██╔══╝░░"
echo -e "██████╦╝╚█████╔╝██║░╚███║╚█████╔╝██║░░░░░███████╗"
echo -e "╚═════╝░░╚════╝░╚═╝░░╚══╝░╚════╝░╚═╝░░░░░╚══════╝\e[0m"
echo ""
echo "---------------------------------------------------------------------------------------"
echo -e "\e[92mNAMA BOT:\e[0m YANOFFICIALIDBOTZ"
echo -e "\e[92mVERSION:\e[0m BETA"
echo "---------------------------------------------------------------------------------------"

# Install dependencies jika belum ada
if [ ! -d "node_modules" ]; then
  echo ""
  echo "📦 Menginstal dependency..."
  npm install
fi

# Input Token
echo ""
read -p "🔑 Masukkan TOKEN BOT dari @BotFather: " token
echo ""

# Jalankan main.js dengan token
node main.js "$token"
