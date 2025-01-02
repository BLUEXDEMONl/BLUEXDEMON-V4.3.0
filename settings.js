const version = require("@whiskeysockets/baileys/package.json").version
//Input number for pair code
global.pairingNumber = "2347038821346"

global.botNumber = ["2349019529423"]
global.domain = "https://.nobodysey.me"
global.apikey = "ptla_DfGlmoY7jCzmkNUgyK925FPVE08Kr4mxwLMep"
global.capikey = "ptlc_GTm42E3qIwbLW3K9w3htljUvhGvnG71hoPTqE"
global.egg = "15"
global.loc = "1"
global.anticall = false
global.autoReadChat = false
global.alwaysonline = true
global.autoswview = false
global.public = true
global.autoreact = false
global.antidelete = false
global.autotyping = false
global.autoBio = true
global.antiSpam = true
global.sign = "☃️❄️"
// ☞ ➻ ➽ ☛ 〆 
global.bank = "Opay"
global.bankname = "BLUE"
global.accnumber = "7041039367"
global.language = "en"
global.sessionName = "session"
global.pairingCode = true 
global.runWith = "𝙽𝙾𝙳𝙴.𝙹𝚂"
global.newsletterJid = "120363304326105871@newsletter"
global.newsletterName = "𝐁𝐋𝐔𝐄𝐗𝐃𝐄𝐌𝐎𝐍 𝐕𝟒"
global.caption = "𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙱𝙻𝚄𝙴𝙳𝙴𝙼𝙾𝙽"
global.ownerName = "𝐁𝐋𝐔𝐄 𝐃𝐄𝐌𝐎𝐍"
global.syt = 'https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h'
global.sgc = 'https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h'
global.sig = 'https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h'
global.web = 'https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h'
//setbot
global.botName = "𝐁𝐋𝐔𝐄𝐗𝐃𝐄𝐌𝐎𝐍 𝐕𝟒" 
global.wm = "𝐁𝐋𝐔𝐄𝐗𝐃𝐄𝐌𝐎𝐍 𝐕𝟒"
global.fake = botName
global.setmenu = "image" 
global.docType = "application/vnd.ms-excel"
global.themeemoji = '❄️'
global.fotoRandom = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbBBpaPJdt2V0Hab-7vJjlwr2NInRZ0hb6nA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KpekxrXL95vx4t9Ur6n4NRxxcrLAZWE-mA&usqp=CAU"]
global.baileysMd = true
global.multi = false
global.prefa = "!"
global.Console = false
global.autorespon = false
global.copyright = `BLUE DEMON BOT`
global.baileysVersion = `${themeemoji}Baileys ${version}`
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="Bot WhatsApp"
global.packName = `𝐁𝐋𝐔𝐄𝐗𝐃𝐄𝐌𝐎𝐍`
global.authorName = "BLUE DEMON"
global.replyType = "web"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = true
global.autoSticker = true
global.gamewaktu = 60
global.limitCount = 30
global.Intervalmsg = 1000
global.gris = '`'
global.fileStackApi ="AVKHbeyXsT0G9IKI01qenz"

global.skizo = 'memberaja'
global.Betabotz = 'LSd7Lq9S'
global.Lolhuman = '652c7664865e2b0e70929768',
global.FilestackApi = 'AJgyzwz0FQk67sTuplYoiz'  
global.gcounti = {
'prem' : 1000,
'user' : 5
} 
 



let d = new Date();
      let locale = "en";
      let gmt = new Date(0).getTime() - new Date("1 January 2024").getTime();
      let week = d.toLocaleDateString(locale, { weekday: "long" });
      const calender = d.toLocaleDateString("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      });

global.calender = calender;

const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
