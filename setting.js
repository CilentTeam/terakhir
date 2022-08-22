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
global.packname = '𝑴𝒂𝒏𝒛 𝑻𝒛𝒚'
global.author = '𝑴𝒂𝒏𝒛 𝑻𝒛𝒚'
global.bot = '𝐴𝑘𝑎𝑟𝑖 𝐵𝑜𝑡⃪᭪'
global.rev = 'ApiRevita'
global.jasru = '*JASA RUN BOT HEROKU BY MANZ EXECUTED*\n\n➣ _3 Hari = 5k_\n➣ _7Hari = 8k_\n➣ _1 Bulan = 20k_\n\n_Kalo Masih Ragu Bisa Pake Yang 3 Hari Dulu 😅☝️_\n\n*Bisa Di Runkan Dulu Baru TF*\n\n_Note: Kalo Bot Mati Bisa Gua On Kan Lagi_\n\nMinat ?\n\n*Contacts Me:* wa.me/62895497918020\n\n```PAYMENT : DANA (PULSA +5K)```'
global.lolkey = 'Atakbotz'
global.invi = 'APIKEY'
global.thx = `*「 THANKS TO 」*\n➤ *Allah Subhanahu Wa Taala*\n➤ *My Ortu*\n➤ *Manz Tzy*\n➤ *Dika Ardnt*\n➤ *ars_Tzy*\n➤ *Frmn Tzy*\n➤ *Penyedia Rest Api*\n➤ *Yang Support Gua*`
global.panah = '➥'
global.succes = '```Succes Send Bug Pc```'
global.success = '```Succes Send Bug Pc```'
global.dap = 'DAIXSU'
global.keykir = 'Kirbotz123'
global.zen = '5fcb423fc44a'
global.ownmy = '𝑴𝒂𝒏𝒛 𝑻𝒛𝒚'
global.xnx = 'Siapin Tisu Banh 🗿'
global.sessionName = 'session'
global.prefa = ['!','.','🐦','🐤','🗿']
global.bisa = 'Nih Om 々'
global.sp = '⭔'
global.copy = '𝑴𝒂𝒏𝒛 𝑻𝒛𝒚'
global.punya = 'Punya'
global.wet = '*「 WAIT DONT SPAM 」*'
global.limit = `*MAAF KK LIMIT KAMU HARI INI SUDAH HABIS, BISA KETIK BUYPREM BUAT BELI PREMIUM, UNTUK MENDAPATKAN UNLIMITED LIMIT*`
global.man = {
kus: '*「 FITUR KHUSUS CREATOR 」*',
dir: '*「 HANYA BISA DI GUNAKAN DI PRIVATE CHAT 」*',
wet: '*「 WAIT DONT SPAM 」*',
bomin: '*「 BOT HARUS JADI ADMIN 」*',
gcwa: '*「 GROUP ONLY JOIN HERE 」: https://chat.whatsapp.com/DSFTbb0giUsH9borzEDGEv*',
ami: '*「 KHUSUS ADMIN GC 」*',
}
global.mess = {
    success: '✓ Success',
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

//cuma pajangan 🗿
global.terr = `JASA RUN BOT HEROKU BY MANZ TZY

➣ 3 Hari = 5k
➣ 7 Hari = 8k
➣ 1 Bulan = 20k

Keuntungan Run Di Heroku

➣  Bot On 24 Jam
➣  Fast Respon, Nodelay, Hemat Kuota

Kalo Masih Ragu Bisa Pake Yang 3 Hari Dulu 😅☝️

Bisa Di Runkan Dulu Baru TF

Note: Kalo Bot Mati Bisa Gua On Kan Lagi

Minat ?

Contacts Me: wa.me/62895497918020

PAYMENT : DANA (PULSA +5K)`
global.sn = `Jangan Sange Ama Gambar Ya 🗿`

global.ff = "📑 *TOP UP GAME FREE FIRE* 📑\n\n```\n12 DM 💎 = Rp.5.000\n50 DM 💎 = Rp.10.000\n70 DM 💎 = Rp.15.000\n140 DM 💎 = Rp.22.000\n355 DM 💎 = Rp.52.000\n720 DM 💎 = Rp.102.000\n2180 DM 💎 = Rp.205.000\n1450 DM 💎 = Rp.305.000\n3640 DM 💎 = Rp.505.000\n```\n\n*SCAN QR DI ATAS, JIKA SUDAH TF LANGSUNG CHAT OWNER DI BAWAH INI*"
//menu bot
global.menu = `apa sih`
global.ter = `generate random image`

//donasi
global.nasi = `╭───⌜ *Donasi 💌* ⌟──❑
│▸ *Mau Donasi Apa Liat Doang Bang ?*
│▸ Eh gua ga punya apk dana/gopay dll :v
│▸ kalo pulsa boleh lah buat beli kuota 🗿
│▸ pulsa: 0895397918020
╰───⌜ *${bot}*⌟─❑`

global.sewa = `➤ *SEWA BOT + JADI OWNER*\n_List Harga Sewa Bot_\n➤ _Sewa Bot 1 Minggu = 5k_\n➤ _Permanent = 10k_\n*Keuntungan:*\n➤ _KAMU BISA PAKE FITUR OWNER_\n➤ _KAMU BISA MASUKIN BOT KE GC SESUKA KAMU_\n`

global.buyprem = `*BUY PREMIUM*\n_List Harga Premium_\n➤ _Premium 7 Hari = 5k_\n➤ Premium 1 Bulan = 8k_\n*Keuntungan:*\n➤ _Limit Kamu Unlimited 😱_`
global.prm = `*MAAF KK SEBELUMNYA KAMU BELUM, PREMIUM SILAKAN BELI PREMIUM DULU*`
//script

global.sc = `╭───⌜ *Script* ⌟──❑
│▸ *Base Ori By Dika Ardnt*
│▸ github: https://www.github.com/DikaArdnt/Hisoka-Morou
│▸ *Recode By Manz Tzy*
│▸ sc: https://www.github.com/ManzTzy1/AkariBot
╰───⌜ *${bot}* ⌟─❑`

global.sdkm = '```Mohon Di Patuhi Peraturan Ini Terma Kasih 🙏```'