import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
global.botNumberCode = '' //Ejemplo: +573218138672
global.confirmCode = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
   ['5491140951814', 'Creador 👑', true],
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//cambiar a true si el bot detecta sus propios comandos.
global.isBaileysFail = false
global.libreria = 'Baileys'
global.baileys = 'V 6.7.5'
global.vs = '2.0.7'
global.vsJB = '5.0'
global.nameqr = 'Luffy Bot MD'
global.namebot = 'Luffy Bot'
global.sessions = 'GenesisSession'
global.jadi = 'GenesisJadiBot'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = 'L҉u҉f҉f҉y҉ ҉B҉o҉t҉ ҉M҉D҉'
global.botname = 'Ļùғғч вόţ мȡ'
global.wm = 'L̊⫶ů⫶f̊⫶f̊⫶ẙ⫶ B̊⫶o̊⫶t̊⫶ M̊⫶D̊⫶'
global.author = '𝙢𝙖𝙙𝙚 𝙗𝙮 : sebas.MD'
global.dev = '© 𝙥𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮: sebas.MD'
global.textbot = '𝙇𝙪𝙛𝙛𝙮 𝘽𝙤𝙩 : Izumi.kzx 🤍'
global.namebot = '𝙇𝙪𝙛𝙛𝙮 𝘽𝙤𝙩'
global.stickpack = `© 𝙥𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮: sebas.MD`
global.titulowm = '-❀ᩙ̈͟༚̮ ⡞᪲=͟͟͞🄶𝚎᪶۫۫𝚗᪶۫۫𝚎᪶۫۫𝚜᪶۫۫𝚒᪶۫۫𝚜᪶۫ 𝚊᪶۫𝚒᪶۫͜ ≼᳞ׄ ᵎ ˚꙳꤬ꨪ'
global.titulowm2 = '.‧·ீ੭ ¡ ᗃᮢ፝֟͡(𝘓𝘜𝘍𝘍𝘠 𝘉𝘖𝘛 𝘌𝘓 𝘙𝘌𝘠 𝘋𝘌 𝘓𝘖𝘚 𝘗𝘐𝘙𝘈𝘛𝘈𝘚!˚̩̩̥͙°̩̥༅˚'
global.igfg = '@sebas-dzn'
global.titu = '©️ ρσωε૨ ɓყ ɠαℓαאყ ƭεαɱ'
global.listo = '*Aqui tiene ฅ^•ﻌ•^ฅ*'
global.vs = '2.0.0'
global.namechannel = '𝕃𝕦𝕗𝕗𝕪 𝔹𝕠𝕥 𝕔𝕙𝕒𝕟𝕟𝕖𝕝'
global.stickauth = `© 𝙇𝙪𝙛𝙛𝙮 𝘽𝙤𝙩 𝙗𝙮 𝙨𝙚𝙗𝙖𝙨 𝙈𝘿`
global.dis = ':⁖֟⊱┈֟፝❥'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.png')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = ''
global.group2 = ''
global.canal = ''
global.github = '' 
global.instagram = '' 
global.whatsApp = 'https://wa.me/5491140951814'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'ᰔᩚ gᥱᥒᥱsіs ᥕһᥲ𝗍sᥲ⍴⍴ ᑲ᥆𝗍', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}};

global.fakegif2 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'luffybotMD', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '꧁𓊈𒆜 L̊⫶Ů⫶F̊⫶F̊⫶Y̊⫶ B̊⫶O̊⫶T̊⫶ 𒆜𓊉꧂', jpegThumbnail: catalogo }}};

global.fakegif3 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'luffybotMD', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '꧁𓊈𒆜 L̊⫶Ů⫶F̊⫶F̊⫶Y̊⫶ B̊⫶O̊⫶T̊⫶ 𒆜𓊉꧂', jpegThumbnail: catalogo }}};

global.fakegif4 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { videoMessage: { title: 'luffybotMD', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '꧁𓊈𒆜 L̊⫶Ů⫶F̊⫶F̊⫶Y̊⫶ B̊⫶O̊⫶T̊⫶ 𒆜𓊉꧂', jpegThumbnail: catalogo }}};

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.ch = {
ch1: '120363299030870235@newsletter',
ch2: '120363299030870235@newsletter',
ch3: '120363299030870235@newsletter',
ch4: '120363299030870235@newsletter',
ch5: '120363299030870235@newsletter',
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69
global.maxwarn = '3'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
