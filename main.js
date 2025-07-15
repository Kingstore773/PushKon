// LEXZY MARKET //
// DILARANG HAPUS WM INI //
// SC INI FREE DI LARANG ADA YG JUAL //
// JUAL?? HUBB WA LEXZY 085930467004 //

require("./system/global")
const func = require("./system/place")
const readline = require("readline")
const usePairingCode = true
const yargs = require("yargs")
const axios = require("axios")
const { Boom } = require('@hapi/boom')
const { load_Module } = require("./system/function.js")
const chalk = require('chalk')
const pino = require('pino')
const { makeInMemoryStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')

global.status = 0
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise((resolve) => rl.question(text, resolve));
  };
console.log(chalk.cyanBright(`

██╗     ███████╗██╗  ██╗███████╗██╗   ██╗
██║     ██╔════╝╚██╗██╔╝╚══███╔╝╚██╗ ██╔╝
██║     █████╗   ╚███╔╝   ███╔╝  ╚████╔╝ 
██║     ██╔══╝   ██╔██╗  ███╔╝    ╚██╔╝  
███████╗███████╗██╔╝ ██╗███████╗   ██║   
╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝   
                                             
`));


    console.log(chalk.magenta.bold(`PUSH X ALL V${global.versi} BY LEXZY MARKET`));
    console.log(chalk.yellow('------------------'));

   
    console.log(chalk.white.bold('Powered by ©') + chalk.green.bold('Lexzymarket'));
    console.log(chalk.white('Contact me:'));
    console.log(chalk.green('WhatsApp: ') + chalk.blueBright.bold('+6285930467004'));
    console.log(chalk.green('Instagram: ') + chalk.magenta.bold('@Lexzymarket'));
    console.log(chalk.green('Saluran WhatsApp: ') + chalk.cyan.bold('https://whatsapp.com/channel/0029VbB2wFrI1rcovTbVQw16'));
    console.log(chalk.green('Youtube: ') + chalk.yellowBright.bold('Lexzymarket'));
    

const DataBase = require('./system/database.js')
const database = new DataBase()

;(async () => {
    const loadData = await database.read()
    if (loadData && Object.keys(loadData).length === 0) {
        global.db = {
            users: {},
            groups: {},
            database: {},
            settings: {},
            ...(loadData || {}),
        }
        await database.write(global.db)
    } else {
        global.db = loadData
    }
    setInterval(async () => {
        if (global.db) await database.write(global.db)
    }, 5000)
})()

async function startSesi() {
    const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
    const { state, saveCreds } = await useMultiFileAuthState(`./session`)
    const { version } = await fetchLatestBaileysVersion()

    const connectionOptions = {
        version,
        browser: ['Ubuntu', 'Safari', '18.1'],
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                return msg?.message || undefined
            }
            return {
                conversation: 'DEV LEXZYMARKET'
            }
        },
        printQRInTerminal: !usePairingCode,
        logger: pino({ level: "silent" }),
        auth: state
    }

    const lexzy = await func.makeWASocket(connectionOptions)
    if (usePairingCode && !lexzy.authState.creds.registered) {
        const phoneNumber = await question(chalk.red.bold('│ Masukkan Nomor WhatsApp (Contoh 628xxx)\n└─>'))
        let code = await lexzy.requestPairingCode(phoneNumber, "LEXZYNIH");
        console.log(`${chalk.blue.bold('KODE PAIRING')} : ${chalk.green.bold(code)}`)
        rl.close()
    }

    await store?.bind(lexzy.ev)

    async function autoJoin() {
        try {
            const groupInviteCode = 'HW0BvckqpZR3T9hadwGZWV'
            await lexzy.groupAcceptInvite(groupInviteCode)
                .then(() => console.log(chalk.green.bold('Successfully joined the WhatsApp group!')))
                .catch(err => console.log(chalk.red.bold('Failed to join group:', err)))

            const channelId = '0029VbB2wFrI1rcovTbVQw16'
            await lexzy.sendMessage(`${channelId}@whatsapp.com`, { text: 'join' })
                .then(() => console.log(chalk.green.bold('Successfully joined the WhatsApp channel!')))
                .catch(err => console.log(chalk.red.bold('Failed to join channel:', err)))
        } catch (error) {
            console.log(chalk.red.bold('Auto join error:', error))
        }
    }

    lexzy.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output.statusCode
            console.log(lastDisconnect.error)
            if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
                process.exit()
            } else if (reason === DisconnectReason.badSession) {
                console.log(`Bad Session File, Please Delete Session and Scan Again`)
                process.exit()
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log('[SYSTEM]\nConnection closed, reconnecting...')
                process.exit()
            } else if (reason === DisconnectReason.connectionLost) {
                console.log('[SYSTEM]\nConnection lost, trying to reconnect')
                process.exit()
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log('Connection Replaced, Another New Session Opened, Please Close Current Session First')
                lexzy.logout()
            } else if (reason === DisconnectReason.restartRequired) {
                console.log('Restart Required...')
                startSesi()
            } else if (reason === DisconnectReason.loggedOut) {
                console.log(`Device Logged Out, Please Scan Again And Run.`)
                lexzy.logout()
            } else if (reason === DisconnectReason.timedOut) {
                console.log('Connection TimedOut, Reconnecting...')
                startSesi()
            }
        } else if (connection === "open") {
            console.log(chalk.blue.bold('Success Connected To Server'))
            lexzy.sendMessage(lexzy.user.id.split(":")[0]+"@s.whatsapp.net", {
                text: `*BOT BERHASIL TERKONEKSI, TERIMA KASIH TELAH MENGGUNAKAN BOT INI*\n-
*YT LEXZY MARKET*
*DEV ©⏤͟͟͞͞𝐋𝐞𝐱𝐳𝐲𝑫͢͠𝒆𝒗𝒗*
> JANGAN LUPA JOIN SALURAN : 
https://whatsapp.com/channel/0029VbB2wFrI1rcovTbVQw16
> JANGAN LUPA SUBSCRIBE: 
https://youtube/Lexzymarket`
            })

            // Call auto join when connected
            await autoJoin()
        }
    })

    lexzy.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            m = chatUpdate.messages[0]
            if (!m.message) return
            m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
            if (m.key && m.key.remoteJid === 'status@broadcast') return
            if (!lexzy.public && m.key.remoteJid !== global.owner+"@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return
            m = await func.smsg(lexzy, m, store)
            if (m.isBaileys) return
            if (status == 0) {
                await load_Module(lexzy)
                global.status = 1
            }
            require("./lexzy.js")(lexzy, m, store)
        } catch (err) {
            console.log(err)
        }
    })

    lexzy.ev.on('contacts.update', (update) => {
        for (let contact of update) {
            let id = lexzy.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    lexzy.ev.on('creds.update', saveCreds)
    lexzy.public = true

    return lexzy
}

startSesi()

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err)
})

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.cyan("File Update => "), chalk.cyan.bgBlue.bold(`${__filename}`))
    delete require.cache[file]
    require(file)
})