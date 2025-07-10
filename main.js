const { Telegraf } = require('telegraf');
const chalk = require('chalk');
const moment = require('moment-timezone');

// Ambil token dari argumen
const token = process.argv[2];

if (!token || token.length < 20) {
  console.log(chalk.red('❌ Token tidak valid atau kosong!'));
  process.exit(1);
}

const bot = new Telegraf(token);

// Banner awal
console.clear();
console.log(chalk.red.bold('YANOFFICIALIDBOTZ'));
console.log(chalk.white('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
console.log(chalk.green.bold('BOT ACTIVE ✅'));
console.log(chalk.white('Version: BETA | Developer: YanOfficialID'));
console.log(chalk.white('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'));

// Start command
bot.start((ctx) => {
  const username = ctx.from.username || '-';
  const message = `
━━━━━━━━━━━━━━━━━━━━━━━
Halo @${username} 👋

Saya adalah bot Telegram yang bisa membantu Anda:
📌 Melihat ID Telegram
📌 Melihat informasi akun Anda
📌 Tes koneksi bot
Silakan pilih perintah:

/id - Lihat ID Anda
/myinfo - Info lengkap
/ping - Tes respons
━━━━━━━━━━━━━━━━━━━━━━━
  `;
  ctx.reply(message);
});

bot.command('id', (ctx) => {
  ctx.reply(`🆔 ID Telegram Kamu: ${ctx.from.id}`);
});

bot.command('myinfo', (ctx) => {
  const nama = ctx.from.first_name || '-';
  const uname = ctx.from.username || '-';
  const id = ctx.from.id;
  const tgl = moment().tz('Asia/Jakarta').format('DD-MM-YYYY HH:mm:ss');
  ctx.reply(`🧾 Info Akun Kamu:
Nama: ${nama}
Username: @${uname}
ID: ${id}
Waktu: ${tgl}`);
});

bot.command('ping', (ctx) => {
  ctx.reply('✅ Bot Aktif dan Merespon dengan Baik.');
});

bot.on('text', (ctx) => {
  const nama = ctx.from.first_name || '-';
  const uname = ctx.from.username || '-';
  const id = ctx.from.id;
  const tgl = moment().tz('Asia/Jakarta').format('DD-MM-YYYY HH:mm:ss');
  const isGroup = ctx.chat.type.includes('group');
  const groupName = isGroup ? ctx.chat.title : 'unfinied';

  console.log(chalk.yellow('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
  console.log(chalk.cyan('📥 PESAN MASUK'));
  console.log(`Nama     : ${nama}`);
  console.log(`Username : @${uname}`);
  console.log(`ID       : ${id}`);
  console.log(`Grup     : ${groupName}`);
  console.log(`Tanggal  : ${tgl}`);
  console.log(chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
});

bot.launch();
