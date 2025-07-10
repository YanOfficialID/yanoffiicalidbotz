const { token } = require('./config.js')
const { Telegraf } = require('telegraf')
const chalk = require('chalk')
const moment = require('moment-timezone')

const bot = new Telegraf(token)

console.clear()
console.log(chalk.red.bold('YANOFFICIALIDBOTZ'))
console.log(chalk.white('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
console.log(chalk.green.bold('BOT ACTIVE ✅'))
console.log(chalk.white('Version: BETA | Developer: YanOfficialID'))
console.log(chalk.white('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'))

bot.start(async (ctx) => {
  const username = ctx.from.username || '-'
  const name = ctx.from.first_name
  const message = `━━━━━━━━━━━━━━━━━━━━━━━
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
`

  ctx.reply(message)
})

// Command: /id
bot.command('id', (ctx) => {
  ctx.reply(`🆔 ID Telegram Kamu: ${ctx.from.id}`)
})

// Command: /myinfo
bot.command('myinfo', (ctx) => {
  const nama = ctx.from.first_name || '-'
  const uname = ctx.from.username || '-'
  const id = ctx.from.id
  const tgl = moment().tz('Asia/Jakarta').format('DD-MM-YYYY HH:mm:ss')
  ctx.reply(`🧾 Info Akun Kamu:
Nama: ${nama}
Username: @${uname}
ID: ${id}
Waktu: ${tgl}
`)
})

// Command: /ping
bot.command('ping', (ctx) => {
  ctx.reply('✅ Bot Aktif dan Merespon dengan Baik.')
})

// Listener semua pesan
bot.on('text', async (ctx) => {
  const nama = ctx.from.first_name || '-'
  const uname = ctx.from.username || '-'
  const id = ctx.from.id
  const tgl = moment().tz('Asia/Jakarta').format('DD-MM-YYYY HH:mm:ss')
  const isGroup = ctx.chat.type.includes('group')
  const groupName = isGroup ? ctx.chat.title : 'unfined'

  console.log(chalk.yellow('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
  console.log(chalk.cyan('📥 PESAN MASUK'))
  console.log(`Nama     : ${nama}`)
  console.log(`Username : @${uname}`)
  console.log(`ID       : ${id}`)
  console.log(`Grup     : ${groupName}`)
  console.log(`Tanggal  : ${tgl}`)
  console.log(chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'))
})

bot.launch()
