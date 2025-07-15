// LEXZY MARKET //
// DILARANG HAPUS WM INI //
// SC INI FREE DI LARANG ADA YG JUAL //
// JUAL?? HUBB WA LEXZY 085930467004 //

require("./system/module.js")
const { version } = require("./package.json")

// Settings Bot & Owner
global.owner = '6285252463909'
global.versi = "7.0"
global.storename = "KING STORE"
global.namaOwner = "KING Store"
global.packname = 'KING STORE'
global.botname = 'KING STORE'
global.botname2 = 'KING STORE'

// Settings Channel / Saluran
global.linkgc = "https://chat.whatsapp.com/HW0BvckqpZR3T9hadwGZWV"
global.linkSaluran = "https://whatsapp.com/channel/0029VbB2wFrI1rcovTbVQw16"
global.idSaluran = "120363416262862080@newsletter"
global.namaSaluran = "𝐃𝐄𝐕 𝐋𝐄𝐗𝐙𝐘𝐌𝐀𝐑𝐊𝐄𝐓 || 𝐒𝐀𝐋𝐔𝐑𝐀𝐍"
global.website = ""

// Settings Payment
global.dana = "083892079899"
global.gopay = "-"
global.qris = "https://files.catbox.moe/1rwx1d.jpg"

// Settings Image Url
global.image = {
menu: "https://files.catbox.moe/1rwx1d.jpg", 
mp4: "https://files.catbox.moe/1032ud.mp4", 
reply: "https://files.catbox.moe/1rwx1d.jpg", 
logo: "https://files.catbox.moe/1rwx1d.jpg",
lexzy: "https://files.catbox.moe/1rwx1d.jpg",
}

// Settings Delay Push Menu
global.delaypush = "4000" // 1000 = 1 detik
global.delayjpm = "5000" // 1000 = 1 detik

// Settings Api Cpanel
global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://-.web.id"
global.apikey = "ptla_" // Isi api ptla
global.capikey = "ptlc_" // Isi api ptlc

// Settings Api Cpanel V2
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://.web.id"
global.apikeyV2 = "ptla_" //ptla
global.capikeyV2 = "ptlc_" //ptlc


// Settings Message
global.msg = {
wait: `┏ ➫ _*📢 PROSES...*_ 
┃     *ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ ʏᴀ...*
┗━━━━━━━━⪩ *ʟᴇxᴢʏ*`,
owner: `┏ ➫ _*📢 KHUSUS OWNER*_ 
┃     *ғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ*
┗━━━━━━━━⪩ *ʟᴇxᴢʏ*`, 
group: `┏ ➫ _*📢 KHUSUS GROUP*_ 
┃     *ғɪᴛᴜʀ ɪɴɪ ʜᴀɴʏᴀ ʙɪsᴀ ᴅɪ ɢʀᴏᴜᴘ*
┗━━━━━━━━⪩ *ʟᴇxᴢʏ*`, 
admin: `┏ ➫ _*📢 KHUSUS ADMIN*_ 
┃     *ғɪᴛᴜʀ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*
┗━━━━━━━━⪩ *ʟᴇxᴢʏ*`, 
botadmin: `┏ ➫ _*📢 BOT HARUS ADMIN*_ 
┃     *ʜᴀɴʏᴀ ʙɪsᴀ ᴊɪᴋᴀ ʙᴏᴛ ᴀᴅᴍɪɴ*
┗━━━━━━━━⪩ *ʟᴇxᴢʏ*`, 
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "), chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})