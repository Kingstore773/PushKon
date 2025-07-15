// LEXZY MARKET //
// DILARANG HAPUS WM INI //
// SC INI FREE DI LARANG ADA YG JUAL //
// JUAL?? HUBB WA LEXZY 085930467004 /

require("./module")
require("../settings")
require("./exif")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "), chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})