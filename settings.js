

const fs = require('fs')
const chalk = require('chalk')



//👇 if you need seen massage use " true "
global.READ_MASSAGE = 'false'
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY =  'true'
// You Bots Owner Number 
global.owner = ['94768211424'] 
//👇 Your Bot Alive Logo ( alive image )
global.alivelogo = `https://telegra.ph/file/b3f17c16eedf99731a52d.jpg`
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 ²⁰²³'
//👇 Do you want show time on your bio use "on" want desable use "off"
global.AUTO_BIO = process.env.AUTO_BIO || 'on'
//👇 Inbox massage block PM block
global.INBOX_BLOCK = process.env.INBOX_BLOCK || 'off'
//👇 Auto react 
global.AUTO_REACT = process.env.AUTO_REACT || 'true'
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD = process.env.ANTI_BADWORD || 'true'
//👇 Your Bot Name
global.botnma = process.env.BOT_NAME || '𝐐𝐔𝚵𝚵𝚴 𝚵𝐋𝚰𝐒𝚫 𝚳𝐃 3 𝛁' 
//👇 Your name
global.ownernma = process.env.OWNER_NAME || '𝑴𝒓 𝑵𝒊𝒎𝒂' 
//👇 Sticker package name
global.packname = process.env.STICKER_PACK_NAME || '𝗤𝗨𝗘𝗘𝗡 𝗘𝗟𝗜𝗦𝗔' 
//👇 Sticker Author Name
global.author = process.env.STICKER_AUTHOR_NAME || '𝙼𝚁 𝙽𝙸𝙼𝙰 𝙾𝙵𝙲' 
//👇 Kick And Auto Delete Group link Senders
global.antilink = process.env.ANTI_LINK || 'true'
//👇 You Welcome Massage 
global.WELCOME_MSG = ''
//👇 You Good Bye Massage 
global.GOODBYE_MSG = ''
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Send welcome and goodbye massage 
global.SEND_WELCOME = 'true'
//👇 Owner React Imoji
global.OWNER_REACT =  '💻'
global.BAD_KICK_MSG = '*Bad word detect !*'
//👇 URL.button 1 name
global.BUTTON1 = '𝙶𝚒𝚝𝚑𝚞𝚋'
//👇 URL button 2 name
global.BUTTON2 = '𝚈𝚘𝚞𝚝𝚞𝚋𝚎'
//👇 Button 1 url 
global.BUTTON1_URL = 'https://github.com/darkmakerofc/'
//👇 Button 2 url
global.BUTTON2_URL = 'https://youtube.com/c/MRNIMAOFC'
//👇 Your Add Massage 
global.ADD_MSG = '*✅ Success add Group*' 
//👇 Your Kick Massage 
global.KICK_MSG = '*✅ Success Remove from Group*' 
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'
//👇 212 Number block
global.NUMBER_212_BLOCK = 'true'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|ℹ️'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = ''
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'false'
//👇 Change Bot Language 
global.LANG = 'EN'







//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://telegra.ph/file/d83742c9e0a076364184e.jpg'
//other
global.pemilik = ['94715166712'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94715166712'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'Dark Maker' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','/',''] 
global.sp = '🔵'


global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'Bot must be admin !',
    owner: 'This cmd is for Elisa bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'Wait Elisa bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    




//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

global.thumb = fs.readFileSync('./Media/image/Elisa.jpg')
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
