/**
   * Base By Dika Ardnt.
   * Recode Manz Tzy
   * Wa Me https://wa.me/6281327496283
   * Nama session nya manztzy.json
*/

const fs = require('fs')
const chalk = require('chalk')

// Ga usah di ubah" dah free apikey
global.APIs = {
	web: 'https://revita.herokuapp.com',
	free: 'https://api-invibot.herokuapp.com',
	dap: 'https://api.dapuhy.xyz',
	
	zen: 'https://zenzapis.xyz',
	lol: 'https://api.lolhuman.xyz',
}

// Ga usah di ubah" dah free apikey
global.APIKeys = {
	'https://revita.herokuapp.com': 'ApiRevita',
	'https://api-invibot.herokuapp.com': 'APIKEY',
'https://api.dapuhy.xyz': 'Kirbotz123',
'https://zenzapis.xyz': '5fcb423fc44a',	
	'https://api.lolhuman.xyz': 'Atakbotz',
}

// Other
global.bug = []
global.own = ['6281327496283']
global.repo = ['6285724404318']
global.premium = ['6281327496283','6283846819169','6283157750568']
global.owner = ['6281327496283','6283846819169','62895397918020','6283103824111','6283157750568','6285860780047','628999237474','62895401373165','6285724404318']
global.packname = '๐ด๐๐๐ ๐ป๐๐'
global.author = '๐ด๐๐๐ ๐ป๐๐'
global.bot = '๐ด๐๐๐๐ ๐ต๐๐กโชแญช'
global.rev = 'ApiRevita'
global.jasru = '*JASA RUN BOT HEROKU BY MANZ EXECUTED*\n\nโฃ _3 Hari = 5k_\nโฃ _7Hari = 8k_\nโฃ _1 Bulan = 20k_\n\n_Kalo Masih Ragu Bisa Pake Yang 3 Hari Dulu ๐โ๏ธ_\n\n*Bisa Di Runkan Dulu Baru TF*\n\n_Note: Kalo Bot Mati Bisa Gua On Kan Lagi_\n\nMinat ?\n\n*Contacts Me:* wa.me/62895497918020\n\n```PAYMENT : DANA (PULSA +5K)```'
global.lolkey = 'Atakbotz'
global.invi = 'APIKEY'
global.thx = `*ใ THANKS TO ใ*\nโค *Allah Subhanahu Wa Taala*\nโค *My Ortu*\nโค *Manz Tzy*\nโค *Dika Ardnt*\nโค *ars_Tzy*\nโค *Frmn Tzy*\nโค *Penyedia Rest Api*\nโค *Yang Support Gua*`
global.panah = 'โฅ'
global.succes = '```Succes Send Bug Pc```'
global.success = '```Succes Send Bug Pc```'
global.dap = 'DAIXSU'
global.keykir = 'Kirbotz123'
global.zen = '5fcb423fc44a'
global.ownmy = '๐ด๐๐๐ ๐ป๐๐'
global.xnx = 'Siapin Tisu Banh ๐ฟ'
global.sessionName = 'session'
global.prefa = ['!','.','๐ฆ','๐ค','๐ฟ']
global.bisa = 'Nih Om ใ'
global.sp = 'โญ'
global.copy = '๐ด๐๐๐ ๐ป๐๐'
global.punya = 'Punya'
global.wet = '*ใ WAIT DONT SPAM ใ*'
global.limit = `*MAAF KK LIMIT KAMU HARI INI SUDAH HABIS, BISA KETIK BUYPREM BUAT BELI PREMIUM, UNTUK MENDAPATKAN UNLIMITED LIMIT*`
global.man = {
kus: '*ใ FITUR KHUSUS CREATOR ใ*',
dir: '*ใ HANYA BISA DI GUNAKAN DI PRIVATE CHAT ใ*',
wet: '*ใ WAIT DONT SPAM ใ*',
bomin: '*ใ BOT HARUS JADI ADMIN ใ*',
gcwa: '*ใ GROUP ONLY JOIN HERE ใ: https://chat.whatsapp.com/DSFTbb0giUsH9borzEDGEv*',
ami: '*ใ KHUSUS ADMIN GC ใ*',
}
global.mess = {
    success: 'โ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 10,
}
global.thumb = fs.readFileSync('./lib/man.jpg')
global.visoka = fs.readFileSync('./lib/manz.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

//cuma pajangan ๐ฟ
global.terr = `JASA RUN BOT HEROKU BY MANZ TZY

โฃ 3 Hari = 5k
โฃ 7 Hari = 8k
โฃ 1 Bulan = 20k

Keuntungan Run Di Heroku

โฃ  Bot On 24 Jam
โฃ  Fast Respon, Nodelay, Hemat Kuota

Kalo Masih Ragu Bisa Pake Yang 3 Hari Dulu ๐โ๏ธ

Bisa Di Runkan Dulu Baru TF

Note: Kalo Bot Mati Bisa Gua On Kan Lagi

Minat ?

Contacts Me: wa.me/62895497918020

PAYMENT : DANA (PULSA +5K)`
global.sn = `Jangan Sange Ama Gambar Ya ๐ฟ`

global.ff = "๐ *TOP UP GAME FREE FIRE* ๐\n\n```\n12 DM ๐ = Rp.5.000\n50 DM ๐ = Rp.10.000\n70 DM ๐ = Rp.15.000\n140 DM ๐ = Rp.22.000\n355 DM ๐ = Rp.52.000\n720 DM ๐ = Rp.102.000\n2180 DM ๐ = Rp.205.000\n1450 DM ๐ = Rp.305.000\n3640 DM ๐ = Rp.505.000\n```\n\n*SCAN QR DI ATAS, JIKA SUDAH TF LANGSUNG CHAT OWNER DI BAWAH INI*"
//menu bot
global.menu = `apa sih`
global.ter = `generate random image`

//donasi
global.nasi = `โญโโโโ *Donasi ๐* โโโโ
โโธ *Mau Donasi Apa Liat Doang Bang ?*
โโธ Eh gua ga punya apk dana/gopay dll :v
โโธ kalo pulsa boleh lah buat beli kuota ๐ฟ
โโธ pulsa: 0895397918020
โฐโโโโ *${bot}*โโโ`

global.sewa = `โค *SEWA BOT + JADI OWNER*\n_List Harga Sewa Bot_\nโค _Sewa Bot 1 Minggu = 5k_\nโค _Permanent = 10k_\n*Keuntungan:*\nโค _KAMU BISA PAKE FITUR OWNER_\nโค _KAMU BISA MASUKIN BOT KE GC SESUKA KAMU_\n`

global.buyprem = `*BUY PREMIUM*\n_List Harga Premium_\nโค _Premium 7 Hari = 5k_\nโค Premium 1 Bulan = 8k_\n*Keuntungan:*\nโค _Limit Kamu Unlimited ๐ฑ_`
global.prm = `*MAAF KK SEBELUMNYA KAMU BELUM, PREMIUM SILAKAN BELI PREMIUM DULU*`
//script

global.sc = `โญโโโโ *Script* โโโโ
โโธ *Base Ori By Dika Ardnt*
โโธ github: https://www.github.com/DikaArdnt/Hisoka-Morou
โโธ *Recode By Manz Tzy*
โโธ sc: https://www.github.com/ManzTzy1/AkariBot
โฐโโโโ *${bot}* โโโ`

global.sdkm = '```Mohon Di Patuhi Peraturan Ini Terma Kasih ๐```'