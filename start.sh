#!/data/data/com.termux/files/usr/bin/bash

clear
echo "Cloning project YANOFFICIALIDBOTZ..."

# Tampilan banner awal
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
echo ""

# Cek node_modules
if [ ! -d "node_modules" ]; then
  echo "Menginstal dependensi..."
  npm install
fi

# Cek file token
if [ ! -f config.js ]; then
  echo ""
  echo "Masukkan Token Bot dari @BotFather:"
  read -p "➡️  Token: " token
  echo "module.exports = { token: '$token' };" > config.js
  echo ""
fi

# Jalankan bot
echo "Menjalankan bot..."
node main.js
