

/*
▬▭▬▭▬▭▬▭▬▬▭▬▭




SCRIPT BY HANZ
INSTA: @hanz_932



▬▭▬▭▬▭▬▭▬▬▭▬▭



*/
//▬▭▬▭▬▭▬▭▬▬▭▬( KONSTAN )▭▬▭▬▭▬▭▬▭▬▬▭▬▭

require('./HAN_EDIT');
const fs = require('fs');
const os = require('os');
const util = require('util');
const path = require('path');
const chalk = require('chalk');
const yts = require('yt-search');
const fetch = require('node-fetch');
const FileType = require('file-type');
const { Chess } = require('chess.js');
const { Akinator } = require('aki-api');
const FormData = require('form-data');
const webp = require('node-webpmux');
const speed = require('performance-now');
const moment = require('moment-timezone');
const { performance } = require('perf_hooks');
const PhoneNum = require('awesome-phonenumber');
const { exec, spawn, execSync } = require('child_process');
const { generateWAMessageContent, getContentType } = require('baileys');
	        ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////


	        ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
const { LoadDataBase } = require('./src/message');
const settingsPath = path.join(__dirname, 'HAN_EDIT.js');
const { getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, formatDate, formatp, generateProfilePicture, errorCache, normalize, updateSettings, parseMention, fixBytes, similarity, pickRandom, tarBackup } = require('./DataBoss/function');
	        ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////


module.exports = RAEHAN2GD = async (RAEHAN2GD, m, msg, store) => {
	await LoadDataBase(RAEHAN2GD, m);
const botNumber = RAEHAN2GD.decodeJid(RAEHAN2GD.user.id);
const set = db.set[botNumber]
const ownerNumber = set.owner = [...new Set([...owner, botNumber.split('@')[0], ...set?.owner || []])];
try {
		
	        ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////

		
		const body = ((m.type === 'conversation') ? m.message.conversation :
		(m.type == 'imageMessage') ? m.message.imageMessage.caption :
		(m.type == 'videoMessage') ? m.message.videoMessage.caption :
		(m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text :
		(m.type == 'reactionMessage') ? m.message.reactionMessage.text :
		(m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId :
		(m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
		(m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId :
		(m.type == 'interactiveResponseMessage'  && m.quoted) ? (m.message.interactiveResponseMessage?.nativeFlowResponseMessage ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '') :
		(m.type == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || '') :
		(m.type == 'editedMessage') ? (m.message.editedMessage?.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || m.message.editedMessage?.message?.protocolMessage?.editedMessage?.conversation || '') :
		(m.type == 'protocolMessage') ? (m.message.protocolMessage?.editedMessage?.extendedTextMessage?.text || m.message.protocolMessage?.editedMessage?.conversation || m.message.protocolMessage?.editedMessage?.imageMessage?.caption || m.message.protocolMessage?.editedMessage?.videoMessage?.caption || '') : '') || '';	
		const budy = (typeof m.text == 'string' ? m.text : '')
		const isCreator = isOwner = ownerNumber.filter(v => typeof v === 'string').map(v => v.replace(/[^0-9]/g, '')).includes(m.sender.split('@')[0])
		const prefix = isCreator ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body?.startsWith(a)) || '') : set.multiprefix ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body?.startsWith(a)) || '¿') : listprefix.find(a => body?.startsWith(a)) || '¿'
		
	        ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
		
		const isCmd = body.startsWith(prefix)
		const args = body.trim().split(/ +/).slice(1)
		const quoted = m.quoted ? m.quoted : m
		const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const text = q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		
		
	        ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
		
		
		
		const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
		const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');		
		const jamjak = moment.tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
		const jammak = moment.tz('Asia/Makassar').locale('id').format('HH:mm:ss');
		const jamjay = moment.tz('Asia/Jayapura').locale('id').format('HH:mm:ss');
		
	        ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
		
		
		
		
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬▭▬▭▬▬▭▬▭

//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬▭▬▭▬▬▭▬▭

if (!isCreator) {
if ((set.grouponly === set.privateonly)) {
if (!RAEHAN2GD.public && !m.key.fromMe) return }
else if (set.grouponly) 
{ if (!m.isGroup) return } else if (set.privateonly) { if (m.isGroup) return }}
//▬▭▬▭▬▭▬▭▬▬▭( AUTO READ )▬▭▬▭▬▭▬▭▬▭▬▬▭▬▭
	 	{
			if (isCreator) {
				
				console.log(chalk.black(chalk.bgWhite('[ PESAN ]:'), chalk.bgGreen(new Date), chalk.bgHex('#00EAD3')(budy || m.type), chalk.bgHex('#AF26EB')(m.key.id) + '\n' + chalk.bgCyanBright('[ DARI ] :'), chalk.bgYellow(m.pushName || (isCreator ? 'Bot' : 'Anonim')), chalk.bgHex('#FF449F')(m.sender), chalk.bgHex('#FF5700')(m.isGroup ? m.metadata.subject : m.chat.endsWith('@newsletter') ? 'Newsletter' : 'Private Chat'), chalk.bgBlue('(' + m.chat + ')')));
			}
		}

	        ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	        
	        
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬▭▬▭▬▬▭▬▭
			if (m.isBot) return
		if (db.users[m.sender]?.ban && !isCreator) return
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬▭▬▭▬▬▭▬▭

	        ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	        
	        
	// --- AUTO RECORDING HANZ

//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬▭▬▭▬▬▭▬▭
// JANGAN DI HAPUS

if (!global.recentChats) global.recentChats = [];
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬▭▬▭▬▬▭▬▭
  {  const isGroup = m.isGroup; 
    const isPrivate = !m.isGroup;
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬▭▬▭▬▬▭▬▭
    global.recentChats = global.recentChats.filter(jid => jid !== m.chat);
    global.recentChats.unshift(m.chat);
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬▭▬▭▬▬▭▬▭
              ////// BATAS CHAT ///////
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬▭▬▭▬▬▭▬▭
    if (global.recentChats.length > 10) {   global.recentChats.pop(); }
    for (let jid of global.recentChats) { await RAEHAN2GD.sendPresenceUpdate('recording', jid);}}
	
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    
	    
		let fileSha256;
		if (m.isMedia && m.msg.fileSha256 && db.cmd && (m.msg.fileSha256.toString('base64') in db.cmd)) {
			let hash = db.cmd[m.msg.fileSha256.toString('base64')]
			fileSha256 = hash.text
		}
		
		
		
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬▭▬▭▬▬▭▬▭
switch(fileSha256 || command) {
//▬▭▬▭▬▭▬▭▬▬▭▬▭▬▭▬▭▬▭▬▭▬▬▭▬▭
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    
	    
case 'setppgchanz': {
				if (!m.isGroup) return m.reply(mess.group)
				
				if (!m.quoted) return m.reply('Reply Gambar yang mau dipasang di Profile Bot')
				if (!/image/.test(quoted.type)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`)
				
	let { key } = await RAEHAN2GD.sendMessage(m.chat, { text: 'LOADING SCRIPT RAEHAN' }, { quoted: m });
			const loadingAnimation = [
				"「 ▒▒▒▒▒▒▒▒▒▒ 」 0%",
				"「 █▒▒▒▒▒▒▒▒▒ 」 10%",
				"「 ██▒▒▒▒▒▒▒▒ 」 20%",
				"「 ███▒▒▒▒▒▒▒ 」 30%",
				"「 ████▒▒▒▒▒▒ 」 40%",
				"「 █████▒▒▒▒▒ 」 50%",
				"「 ██████▒▒▒▒ 」 60%",
				"「 ████████▒▒ 」 80%",
				"「 █████████▒ 」 99%",
				"「 ███████████ 」 100%\n\n𝘔𝘌𝘕𝘎𝘜𝘉𝘈𝘏 𝘍𝘖𝘛𝘖 𝘎𝘙𝘜𝘗"
			];

			// 3. Looping untuk mengedit pesan secara berkala
			for (let i = 0; i < loadingAnimation.length; i++) {
				await sleep(0); // Jeda 0.4 detik per perubahan frame
				await RAEHAN2GD.sendMessage(m.chat, { text: loadingAnimation[i], edit: key });
			}

			await sleep(100); // Jeda sebentar sebelum menu aslinya 
				let media = await quoted.download();
				let { generateProfilePicture } = require("./DataBoss/lib/myfunc")
				let { img } = await generateProfilePicture(media, text.length > 0 ? null : 512)
				await RAEHAN2GD.query({
					tag: 'iq',
					attrs: {
						target: m.chat,
						to: '@s.whatsapp.net',
						type: 'set',
						xmlns: 'w:profile:picture'
					},
					content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
				});
				m.reply('𝙎𝙪𝙠𝙨𝙚𝙨 𝙈𝙖𝙨𝙨')
			}
			break
			
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////


			case 'setpphanz': {
				if (!isCreator) return m.reply(mess.owner)
				if (!/image/.test(quoted.type)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`)
					let { key } = await RAEHAN2GD.sendMessage(m.chat, { text: 'LOADING SCRIPT RAEHAN' }, { quoted: m });
			const loadingAnimation = [
				"「 ▒▒▒▒▒▒▒▒▒▒ 」 0%",
				"「 █▒▒▒▒▒▒▒▒▒ 」 10%",
				"「 ██▒▒▒▒▒▒▒▒ 」 20%",
				"「 ███▒▒▒▒▒▒▒ 」 30%",
				"「 ████▒▒▒▒▒▒ 」 40%",
				"「 █████▒▒▒▒▒ 」 50%",
				"「 ██████▒▒▒▒ 」 60%",
				"「 ████████▒▒ 」 80%",
				"「 █████████▒ 」 99%",
				"「 ███████████ 」 100%\n\n𝘔𝘌𝘕𝘎𝘜𝘉𝘈𝘏 𝘍𝘖𝘛𝘖 𝘗𝘙𝘖𝘍𝘐𝘓"
			];

			// 3. Looping untuk mengedit pesan secara berkala
			for (let i = 0; i < loadingAnimation.length; i++) {
				await sleep(0); // Jeda 0.4 detik per perubahan frame
				await RAEHAN2GD.sendMessage(m.chat, { text: loadingAnimation[i], edit: key });
			}

			await sleep(100); // Jeda sebentar sebelum menu aslinya muncul
				let media = await quoted.download();
				let { generateProfilePicture } = require("./DataBoss/lib/myfunc")
				let { img } = await generateProfilePicture(media, text.length > 0 ? null : 512)
				await RAEHAN2GD.query({
					tag: 'iq',
					attrs: {
						to: '@s.whatsapp.net',
						type: 'set',
						xmlns: 'w:profile:picture'
					},
					content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
				});
				m.reply('𝙎𝙪𝙠𝙨𝙚𝙨 𝙈𝙖𝙨𝙨')
			}
			
			break
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////

		
            
                    
		
		case 'insta' : case 'instagram' :  {
		let { key } = await RAEHAN2GD.sendMessage(m.chat, { text: 'LOADING SCRIPT RAEHAN' }, { quoted: m });
			const loadingAnimation = [
				"「 ▒▒▒▒▒▒▒▒▒▒ 」 0%",
				"「 █▒▒▒▒▒▒▒▒▒ 」 10%",
				"「 ██▒▒▒▒▒▒▒▒ 」 20%",
				"「 ███▒▒▒▒▒▒▒ 」 30%",
				"「 ████▒▒▒▒▒▒ 」 40%",
				"「 █████▒▒▒▒▒ 」 50%",
				"「 ██████▒▒▒▒ 」 60%",
				"「 ████████▒▒ 」 80%",
				"「 █████████▒ 」 99%",
				"「 ███████████ 」 100%\n\n𝘔𝘌𝘕𝘈𝘔𝘗𝘐𝘓𝘒𝘈𝘕 𝘐𝘕𝘚𝘛𝘈𝘎𝘙𝘈𝘔"
			];

			// 3. Looping untuk mengedit pesan secara berkala
			for (let i = 0; i < loadingAnimation.length; i++) {
				await sleep(0); // Jeda 0.4 detik per perubahan frame
				await RAEHAN2GD.sendMessage(m.chat, { text: loadingAnimation[i], edit: key });
			}

			await sleep(100); // Jeda sebentar sebelum menu aslinya muncul
			const hanzzz =`
        
╭┈───────╮
│ ❍ 𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 ❍
╰┈───────╯

▬▭▬▭▬▭▬▭▬▬▭▬▭


https://www.instagram.com/hanz_932?igsh=Ymp6dTNjYzhtODFq


▬▭▬▭▬▭▬▭▬▬▭▬▭
┃
┃◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : @${m.sender.split('@')[0]}
┃◎ 𝘈𝘬𝘵𝘪𝘧 𝘔𝘶𝘭𝘢𝘪 : ${runtime(process.uptime())}
┃◎ 𝘙𝘈𝘔 :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┃    
▬▭▬▭▬▭▬▭▬▬▭▬▭`
		RAEHAN2GD.sendMessage(m.chat, { image: {url: 'https://ar-hosting.pages.dev/1775119433561.png'},  
caption: hanzzz })}
		break





		

		
	case 'jam' : case 'tanggal' :  {
	let { key } = await RAEHAN2GD.sendMessage(m.chat, { text: 'LOADING SCRIPT RAEHAN' }, { quoted: m });
			const loadingAnimation = [
				"「 ▒▒▒▒▒▒▒▒▒▒ 」 0%",
				"「 █▒▒▒▒▒▒▒▒▒ 」 10%",
				"「 ██▒▒▒▒▒▒▒▒ 」 20%",
				"「 ███▒▒▒▒▒▒▒ 」 30%",
				"「 ████▒▒▒▒▒▒ 」 40%",
				"「 █████▒▒▒▒▒ 」 50%",
				"「 ██████▒▒▒▒ 」 60%",
				"「 ████████▒▒ 」 80%",
				"「 █████████▒ 」 99%",
				"「 ███████████ 」 100%\n\n𝘔𝘌𝘕𝘈𝘔𝘗𝘐𝘓𝘒𝘈𝘕 𝘗𝘙𝘖𝘑𝘌𝘊𝘛"
			];

			// 3. Looping untuk mengedit pesan secara berkala
			for (let i = 0; i < loadingAnimation.length; i++) {
				await sleep(0); // Jeda 0.4 detik per perubahan frame
				await RAEHAN2GD.sendMessage(m.chat, { text: loadingAnimation[i], edit: key });
			}

			await sleep(100); // Jeda sebentar sebelum menu aslinya muncul
			const hanzzz =`
			
        
╭┈────────────╮
│ ❍  𝙅𝘼𝙈 & 𝙏𝘼𝙉𝙂𝙂𝘼𝙇 ❍
╰┈────────────╯

▬▭▬▭▬▭▬▭▬▬▭▬▭


╭━━━━━━━━━━━━╾•
│⃟•╾ ◎ HARI : ${hari}
│⃟•╾ ◎ TGL  : ${tanggal}
│⃟•━━━━━━━━━━━╾•
│⃟•╾ ◎ JAM   ${jamjak} WIB
│⃟•╾ ◎ JAM   ${jammak} WITA
│⃟•╾ ◎ JAM   ${jamjay} WIT
╰━━━━━━━━━━━━━╯

▬▭▬▭▬▭▬▭▬▬▭▬▭
┃
┃◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : @${m.sender.split('@')[0]}
┃◎ 𝘈𝘬𝘵𝘪𝘧 𝘔𝘶𝘭𝘢𝘪 : ${runtime(process.uptime())}
┃◎ 𝘙𝘈𝘔 :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┃    
▬▭▬▭▬▭▬▭▬▬▭▬▭`
		RAEHAN2GD.sendMessage(m.chat, { image: {url: 'https://ar-hosting.pages.dev/1775122554230.png'}, 
caption: hanzzz })}
		break


case 'waifu': case 'neko': {
				try {
					if (!isNsfw && text === 'nsfw') return m.reply('Filter Nsfw Sedang Aktif!')
					const res = await fetchJson('https://api.waifu.pics/' + (text === 'nsfw' ? 'nsfw' : 'sfw') + '/' + command)
					await RAEHAN2GD.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					
				} catch (e) {
					m.reply('Server sedang offline!')
				}
			}
			break
				case 'igstalk': case 'instagramstalk': {
				
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					let anu = await instaStalk(text)
					m.reply({ image: { url: anu.avatar }, caption: `*Username :* ${anu.username}\n*Nickname :* ${anu.nickname}\n*Bio :* ${anu.description}\n*Posts :* ${anu.posts}\n*Followers :* ${anu.followers}\n*Following :* ${anu.following}\n*List Post :* ${anu.list_post.map(a => `\n*Url :* ${a.imageUrl}\n*Description :* ${a.description}\n*Detail :* ${a.detailUrl}`).join('\n')}` })
				} catch (e) {
					try {
						let res = await fetchApi('/stalk/instagram', { username: text });
						m.reply({ image: { url: res.data.profile_picture_url }, caption: `*Username :*${res.data?.username || 'Tidak Ada'}\n*Nickname :*${res.data?.full_name || 'Tidak Ada'}\n*ID :*${res.data?.instagram_id}\n*Followers :*${res.data?.followers || '0'}\n*Following :*${res.data?.following || '0'}\n*Description :*${res.data?.description || 'Tidak Ada'}\n*Website :*${res.data?.website || 'Tidak Ada'}\n*Add At :*${res.data?.added_date}\n*Uploads :*${res.data?.uploads}\n*Verified :*${res.data?.is_verified}\n*Private :*${res.data.is_private}\n` })
					} catch (e) {
						m.reply('Username Tidak ditemukan!')
					}
				}
			}
			break
			
			case 'wastalk': case 'whatsappstalk': {
				
				if (!text) return m.reply(`Example: ${prefix + command} @tag / 628xxx`)
				try {
					let num = m.quoted?.sender || m.mentionedJid?.[0] || text
					if (!num) return m.reply(`Example : ${prefix + command} @tag / 628xxx`)
					num = num.replace(/\D/g, '') + '@s.whatsapp.net'
					if (!(await RAEHAN2GD.onWhatsApp(num))[0]?.exists) return m.reply('Nomer tidak terdaftar di WhatsApp!')
					let img = await RAEHAN2GD.profilePictureUrl(num, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
					let bio = await RAEHAN2GD.fetchStatus(num).catch(_ => { })
					let name = await RAEHAN2GD.getName(num)
					let business = await RAEHAN2GD.getBusinessProfile(num)
					let format = PhoneNum(`+${num.split('@')[0]}`)
					let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
					let country = regionNames.of(format.getRegionCode('international'));
					let wea = `WhatsApp Stalk\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : '-'}\n*° Format Number :* ${format.getNumber('international')}\n*° Url Api :* wa.me/${num.split('@')[0]}\n*° Mentions :* @${num.split('@')[0]}\n*° Status :* ${bio?.status || '-'}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `*WhatsApp Business Stalk*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : '-'}\n*° Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° Description* : ${business.description ? business.description : '-'}` : '*Standard WhatsApp Account*'}`
					img ? await RAEHAN2GD.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea)
				} catch (e) {
					m.reply('Nomer Tidak ditemukan!')
				}
			}
			break
			case 'telestalk': case 'telegramstalk': {
				
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const res = await telegramStalk(text)
					if (!res.description || res.title.startsWith('Telegram: Contact')) throw 'Error'
					m.reply({ image: { url: res.image_url }, caption: `*Username :* ${text}\n*Nickname :* ${res.title || 'Tidak ada'}\n*Desc :* ${res.description || 'Tidak ada'}\n*Url :* ${res.url}`})
				} catch (e) {
					m.reply('Username Tidak ditemukan!')
				}
			}
			break
			case 'tiktokstalk': case 'ttstalk': {
				
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const res = await tiktokStalk(text)
					m.reply({ image: { url: res.avatarThumb }, caption: `*Username :* ${text}\n*Nickname :* ${res.nickname}\n*Followers :* ${res.followerCount}\n*Following :* ${res.followingCount}\n*Bio :* ${res.signature}\n*Verified :* ${res.verified}\n*Video Count :* ${res.videoCount}\n*Heart Count :* ${res.heartCount}` })
				} catch (e) {
					m.reply('Username Tidak ditemukan!')
				}
			}
			break
			
			
			
				// Downloader Menu
			case 'ytmp3': case 'ytaudio': case 'ytplayaudio': {
				
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp3(text);
					await m.reply({
						audio: { url: hasil.result },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: hasil.title,
								body: hasil.channel,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.thumb,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					})
					
				} catch (e) {
					try {
						let hasil = await savetube.download(text, 'mp3')
						await RAEHAN2GD.sendFileUrl(m.chat, hasil.result.download, hasil.result.title, m)
						
					} catch (e) {
						try {
							const nvl = new NvlGroup();
							let anu = await nvl.download(text);
							await RAEHAN2GD.sendFileUrl(m.chat, anu.audio[0].url, anu.audio[0].size, m)
							
						} catch (e) {
							try {
								let hasil = await fetchApi('/download/youtube', { url: text })
								await RAEHAN2GD.sendFileUrl(m.chat, hasil.result.audio, hasil.result.title, m)
								
							} catch (e) {
								m.reply('Gagal Mendownload Audio!')
							}
						}
					}
				}
			}
			break
			case 'ytmp4': case 'ytvideo': case 'ytplayvideo': {
				
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp4(text);
					await m.reply({ video: hasil.result, caption: `*📍Title:* ${hasil.title}\n*✏Description:* ${hasil.desc ? hasil.desc : ''}\n*🚀Channel:* ${hasil.channel}\n*🗓Upload at:* ${hasil.uploadDate}` })
					
				} catch (e) {
					try {
						let hasil = await savetube.download(text, '360')
						await RAEHAN2GD.sendFileUrl(m.chat, hasil.result.download, hasil.result.title, m)
						
					} catch (e) {
						try {
							const nvl = new NvlGroup();
							let anu = await nvl.download(text);
							await RAEHAN2GD.sendFileUrl(m.chat, anu.video.find(v => v.height === 360).url || anu.video[0].url, 'Done', m)
							
						} catch (e) {
							try {
								let hasil = await fetchApi('/download/youtube', { url: text })
								await RAEHAN2GD.sendFileUrl(m.chat, hasil.result.video, hasil.result.title, m)
								
							} catch (e) {
								m.reply('Gagal Mendownload Audio!')
							}
						}
					}
				}
			}
			break
			case 'ig': case 'instagram': case 'instadl': case 'igdown': case 'igdl': {
				
				if (!text) return m.reply(`Example: ${prefix + command} url_instagram`)
				if (!text.includes('instagram.com')) return m.reply('Url Tidak Mengandung Result Dari Instagram!')
				m.reply(mess.wait)
				try {
					const hasil = await instagramDl(text);
					if(hasil.length < 0) return m.reply('Postingan Tidak Tersedia atau Privat!')
					for (let i = 0; i < hasil.length; i++) {
						await RAEHAN2GD.sendFileUrl(m.chat, hasil[i].url, 'Done', m)
					}
					
				} catch (e) {
					try {
						let hasil = await fetchApi('/download/instagram', { url: text })
						if(hasil.result.url.length < 0) return m.reply('Postingan Tidak Tersedia atau Privat!')
						for (let i = 0; i < hasil.result.url.length; i++) {
							await RAEHAN2GD.sendFileUrl(m.chat, hasil.result.url[i], 'Done', m)
						}
						
					} catch (e) {
						m.reply('Postingan Tidak Tersedia atau Privat!')
					}
				}
			}
			break
			case 'igstory': case 'instagramstory': case 'instastory': case 'storyig': {
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const hasil = await instaStory(text);
					m.reply(mess.wait)
					for (let i = 0; i < hasil.results.length; i++) {
						await RAEHAN2GD.sendFileUrl(m.chat, hasil.results[i].url, 'Done', m)
					}
				} catch (e) {
					m.reply('Username tidak ditemukan atau Privat!');
				}
			}
			break
			case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
				
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					if (hasil && hasil.size_nowm) {
						await RAEHAN2GD.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
					} else {
						for (let i = 0; i < hasil.data.length; i++) {
							await RAEHAN2GD.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i+1}`, m)
						}
					}
					
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
			break
			case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
				
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					await m.reply({
						audio: { url: hasil.music_info.url },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: 'TikTok • ' + hasil.author.nickname,
								body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					})
					
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
			break
			case 'fb': case 'fbdl': case 'fbdown': case 'facebook': case 'facebookdl': case 'facebookdown': case 'fbdownload': case 'fbmp4': case 'fbvideo': {
				
				if (!text) return m.reply(`Example: ${prefix + command} url_facebook`)
				if (!text.includes('facebook.com')) return m.reply('Url Tidak Mengandung Result Dari Facebook!')
				try {
					const hasil = await facebookDl(text);
					if (hasil.results.length < 1) {
						m.reply('Video Tidak ditemukan!')
					} else {
						m.reply(mess.wait)
						await RAEHAN2GD.sendFileUrl(m.chat, hasil.results[0].url, `*🎐Title:* ${hasil.caption}`, m);
					}
					
				} catch (e) {
					m.reply('Server downloader facebook sedang offline!')
				}
			}
			break
			case 'mediafire': case 'mf': {
				
				if (!text) return m.reply(`Example: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`)
				if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply('Url Invalid!')
				try {
					const anu = await mediafireDl(text)
					await m.reply({ document: { url: anu.link }, caption: `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${anu.name}\n*${setv} Size* : ${anu.size}\n*${setv} Type* : ${anu.type}\n*${setv} Upload At* : ${anu.upload_date}\n*${setv} Link* : ${anu.link}`, fileName: anu.name, mimetype: anu.type })
					
				} catch (e) {
					try {
						let anu = await fetchApi('/download/mediafire', { url: text })
						await RAEHAN2GD.sendMedia(m.chat, anu.data.url, anu.data.filename, `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${anu.data.filename}\n*${setv} Size* : ${anu.data.size}`, m)
						
					} catch (e) {
						m.reply('Server download sedang offline!')
					}
				}
			}
			break
			case 'spotifydl': {
				
				if (!text) return m.reply(`Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`)
				if (!isUrl(args[0]) && !args[0].includes('open.spotify.com/track')) return m.reply('Url Invalid!')
				try {
					const hasil = await spotifyDl(text);
					m.reply(mess.wait)
					await m.reply({
						audio: { url: hasil.download },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: hasil.title,
								body: clockString(hasil.duration),
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					})
					
				} catch (e) {
					m.reply('Server download sedang offline!')
				}
			}
			break
	

case 'tagall': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let setv = pickRandom(listv)
				let teks = `▬▭▬▭▬▭▬▭▬▬▭▬▭\nTAG SEMUA▬▭▬▭▬▭▬▭▬▬▭▬▭\n\n*Pesan :* ${q ? q : ''}\n\n▬▭▬▭▬▭▬▭▬▬▭▬▭\n`
				for (let mem of m.metadata.participants) {
					teks += `╭━━━━━━━━━━━━╾•\n│⃟╾➤${setv} @${mem.id.split('@')[0]}\n╰━━━━━━━━━━━━━╯`
				}
				await m.reply(teks, { mentions: m.metadata.participants.map(a => a.id) })
			}
			break
						
		
			// Menu
			
			case 'hanz' :  { //m.reply (
			
			let { key } = await RAEHAN2GD.sendMessage(m.chat, { text: 'LOADING SCRIPT RAEHAN' }, { quoted: m });
			const loadingAnimation = [
				"「 ▒▒▒▒▒▒▒▒▒▒ 」 0%",
				"「 █▒▒▒▒▒▒▒▒▒ 」 10%",
				"「 ██▒▒▒▒▒▒▒▒ 」 20%",
				"「 ███▒▒▒▒▒▒▒ 」 30%",
				"「 ████▒▒▒▒▒▒ 」 40%",
				"「 █████▒▒▒▒▒ 」 50%",
				"「 ██████▒▒▒▒ 」 60%",
				"「 ████████▒▒ 」 80%",
				"「 █████████▒ 」 99%",
				"「 ███████████ 」 100%\n\n𝘔𝘌𝘕𝘈𝘔𝘗𝘐𝘓𝘒𝘈𝘕 𝘗𝘙𝘖𝘑𝘌𝘊𝘛"
			];

			// 3. Looping untuk mengedit pesan secara berkala
			for (let i = 0; i < loadingAnimation.length; i++) {
				await sleep(0); // Jeda 0.4 detik per perubahan frame
				await RAEHAN2GD.sendMessage(m.chat, { text: loadingAnimation[i], edit: key });
			}

			await sleep(100); // Jeda sebentar sebelum menu aslinya muncul
			const hanzzz =
			`
▬▭▬▭▬▭▬▭▬▬▭▬▭
┃
┃◎ ßÖ† WHÄ†§Äþþ ᵣₐₑₕₐₙ
┃◎ 𝐎𝐰𝐧𝐞𝐫 : ${m.pushName ? m.pushName : 'Tanpa Nama'}
┃◎ 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 : @${m.sender.split('@')[0]}
┃◎ 𝘈𝘬𝘵𝘪𝘧 𝘔𝘶𝘭𝘢𝘪 : ${runtime(process.uptime())}
┃◎ 𝘙𝘈𝘔 :  ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
┃◎ ${RAEHAN2GD.public ? 'Public' : 'Self'}
┃    
▬▭▬▭▬▭▬▭▬▬▭▬▭
┃
┃╔════[ ꪶ⸸⁶⁶⁶𝕄𝔼ℕ𝕌⁶⁶⁶⸸ꫂ͢ ]═⊱
┃╠➤ s̴e̴t̴p̴p̴h̴a̴n̴z̴ ➢
┃╠➤ s̴e̴t̴p̴p̴g̴c̴h̴a̴n̴z̴ ➢
┃╠➤ t̴o̴p̴t̴v̴ ➢
┃╠➤ s̴p̴e̴e̴d̴
┃╠➤ p̴i̴n̴g̴
┃╚════[ ꪶ⸸⁹⁹⁹𝐇𝐀𝐍𝐙⁹⁹⁹⸸ꫂ͢ ]═⊱
┃
▬▭▬▭▬▭▬▭▬▬▭▬▭
┃ 
┃   🄸🄽🅂🅃🄰🄶🅁🄰🄼
┃          @hanz_932
┃ 
▬▭▬▭▬▭▬▭▬▬▭▬▭
┃ ╭━━━━━━━━━━━━╾•
┃ │⃟•╾ ◎ ʜᴀʀɪ : ${hari}
┃ │⃟•╾ ◎ ᴛɢʟ  : ${tanggal}
┃ │⃟•━━━━━━━━━━━╾•
┃ │⃟•╾ ◎ ᴊᴀᴍ   ${jamjak} WIB
┃ │⃟•╾ ◎ ᴊᴀᴍ   ${jammak} WITA
┃ │⃟•╾ ◎ ᴊᴀᴍ   ${jamjay} WIT
┃ ╰━━━━━━━━━━━━━╯
┃
▬▭▬▭▬▭▬▭▬▬▭▬▭` // ) }
RAEHAN2GD.sendMessage(m.chat, { image: {url: 'https://telegra.ph/file/7b8b904ecabdbe0744635.jpg'}, 
"contextInfo": {
"externalAdReply": {
"title": `⏤͟͟͞ℍ𝔸ℕℤ`,
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": `https://on.soundcloud.com/3tNTEb7qIj9LYZvLxc`,
"thumbnailUrl": `https://telegra.ph/file/e6a4267a437b6129a5f1c.jpg`
}}, caption: hanzzz })
}







break

	
	
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////	
					
							
											
			case 'toptv': {
			let { key } = await RAEHAN2GD.sendMessage(m.chat, { text: 'LOADING SCRIPT RAEHAN' }, { quoted: m });
			const loadingAnimation = [
				"「 ▒▒▒▒▒▒▒▒▒▒ 」 0%",
				"「 █▒▒▒▒▒▒▒▒▒ 」 10%",
				"「 ██▒▒▒▒▒▒▒▒ 」 20%",
				"「 ███▒▒▒▒▒▒▒ 」 30%",
				"「 ████▒▒▒▒▒▒ 」 40%",
				"「 █████▒▒▒▒▒ 」 50%",
				"「 ██████▒▒▒▒ 」 60%",
				"「 ████████▒▒ 」 80%",
				"「 █████████▒ 」 99%",
				"「 ███████████ 」 100%\n\n𝘔𝘌𝘕𝘈𝘔𝘗𝘐𝘓𝘒𝘈𝘕 𝘊𝘈𝘛𝘈𝘛𝘈𝘕 𝘝𝘐𝘋𝘌𝘖"
			];

			// 3. Looping untuk mengedit pesan secara berkala
			for (let i = 0; i < loadingAnimation.length; i++) {
				await sleep(0); // Jeda 0.4 detik per perubahan frame
				await RAEHAN2GD.sendMessage(m.chat, { text: loadingAnimation[i], edit: key });
			}

			await sleep(100); // Jeda sebentar sebelum menu aslinya muncul
				if (!/video/.test(mime)) return m.reply(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`)
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
					const anu = await quoted.download()
					const message = await generateWAMessageContent({ video: anu }, { upload: RAEHAN2GD.waUploadToServer })
					await RAEHAN2GD.relayMessage(m.chat, { ptvMessage: message.videoMessage }, {})
				} else m.reply('Reply Video Yang Mau Di Ubah Ke PTV Message!')
			}
			
			
			
	break   		
		case 'ping': {
		let { key } = await RAEHAN2GD.sendMessage(m.chat, { text: 'LOADING SCRIPT RAEHAN' }, { quoted: m });
			const loadingAnimation = [
				"「 ▒▒▒▒▒▒▒▒▒▒ 」 0%",
				"「 █▒▒▒▒▒▒▒▒▒ 」 10%",
				"「 ██▒▒▒▒▒▒▒▒ 」 20%",
				"「 ███▒▒▒▒▒▒▒ 」 30%",
				"「 ████▒▒▒▒▒▒ 」 40%",
				"「 █████▒▒▒▒▒ 」 50%",
				"「 ██████▒▒▒▒ 」 60%",
				"「 ████████▒▒ 」 80%",
				"「 █████████▒ 」 99%",
				"「 ███████████ 」 100%\n\n𝘔𝘌𝘕𝘈𝘔𝘗𝘐𝘓𝘒𝘈𝘕 𝘚𝘛𝘈𝘛𝘜𝘚"
			];

			// 3. Looping untuk mengedit pesan secara berkala
			for (let i = 0; i < loadingAnimation.length; i++) {
				await sleep(0); // Jeda 0.4 detik per perubahan frame
				await RAEHAN2GD.sendMessage(m.chat, { text: loadingAnimation[i], edit: key });
			}

			await sleep(100); // Jeda sebentar sebelum menu aslinya muncul
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
				respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_NodeJS Memory Usaage_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				m.reply(respon)
			}
			break
			 case 'speed': {
				let { key } = await RAEHAN2GD.sendMessage(m.chat, { text: 'LOADING SCRIPT RAEHAN' }, { quoted: m });
			const loadingAnimation = [
				"「 ▒▒▒▒▒▒▒▒▒▒ 」 0%",
				"「 █▒▒▒▒▒▒▒▒▒ 」 10%",
				"「 ██▒▒▒▒▒▒▒▒ 」 20%",
				"「 ███▒▒▒▒▒▒▒ 」 30%",
				"「 ████▒▒▒▒▒▒ 」 40%",
				"「 █████▒▒▒▒▒ 」 50%",
				"「 ██████▒▒▒▒ 」 60%",
				"「 ████████▒▒ 」 80%",
				"「 █████████▒ 」 99%",
				"「 ███████████ 」 100%\n\n𝘔𝘌𝘕𝘈𝘔𝘗𝘐𝘓𝘒𝘈𝘕 𝘒𝘌𝘊𝘌𝘗𝘈𝘛𝘈𝘕 𝘐𝘕𝘛𝘌𝘙𝘕𝘌𝘛"
			];

			// 3. Looping untuk mengedit pesan secara berkala
			for (let i = 0; i < loadingAnimation.length; i++) {
				await sleep(0); // Jeda 0.4 detik per perubahan frame
				await RAEHAN2GD.sendMessage(m.chat, { text: loadingAnimation[i], edit: key });
			}

			await sleep(100); // Jeda sebentar sebelum menu aslinya muncul
				let cp = require('child_process')
				let { promisify } = require('util')
				let exec = promisify(cp.exec).bind(cp)
				let o
				try {
					o = await exec('python3 speed.py --share')
				} catch (e) {
					o = e
				} finally {
					let { stdout, stderr } = o
					if (stdout.trim()) m.reply(stdout)
					if (stderr.trim()) m.reply(stderr)
				}
			}
			break
			
			
			
			
			
			
			
	






	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////	    
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////	    
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
	    ////////////////////////𝙃𝘼𝙉𝙕///2𝙂𝘿////////////////////////////
			

			default:
			if (budy.startsWith('>')) {
				if (!isCreator) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('<')) {
				if (!isCreator) return
				try {
					let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('$')) {
				if (!isCreator) return
				if (!text) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(`${err}`)
					if (stdout) return m.reply(stdout)
				})
			}
			
			if ((!isCmd || isCreator) && budy.toLowerCase() != undefined) { 
				
				if (!(budy.toLowerCase() in db.database)) return
				await RAEHAN2GD.relayMessage(m.chat, db.database[budy.toLowerCase()], {})
			}
}
	} catch (e) {
		console.log(e);
		if (e?.message?.includes('No sessions')) return;
		const errorKey = e?.code || e?.name || e?.message?.slice(0, 100) || 'unknown_error';
		const now = Date.now();
		if (!errorCache[errorKey]) errorCache[errorKey] = [];
		errorCache[errorKey] = errorCache[errorKey].filter(ts => now - ts < 600000);
		if (errorCache[errorKey].length >= 3) return;
		errorCache[errorKey].push(now);
		m.reply('Error: ' + (e?.name || e?.code || e?.output?.statusCode || e?.status || 'Tidak diketahui') + '\nLog Error Telah dikirim ke Owner\n\n')
		return RAEHAN2GD.sendFromOwner(ownerNumber, `MAS INI ERORR\n\nVersion : *${require('./package.json').version}*\n\n*Log error:*\n\n` + util.format(e), m, { contextInfo: { isForwarded: true }})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)

}); 
