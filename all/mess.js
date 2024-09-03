require("./global")

const mess = {
   wait: "*`[ Loading ]` - Wait , Still Processing*",
   success: "*`[ Success ]` - Sent Successful ✅*`",
   on: "*`[ On Feature ]` - Sudah Aktif*", 
   off: "*`[ Off Feature ]` - Sudah Off*",
   query: {
       text: "*`[ QUERY ]` - Activated?*",
       link: "*`[ NEED ]` - Deactivated?*",
   },
   error: {
       fitur: "*`[ Error ]` - Sorry, Error Feature, Please Chat with the Bot Developer So It Can Be Fixed Immediately*",
   },
   only: {
       group: "*`[ GROUP ]` - This is a group Command*",
       private: "*`[ PRIVATE ]` - Use it on Private Chat*",
       owner: "*`[ OWNER ]` - *ONLY VINOR KING AND OWNER CAN USE*",
       admin: "*`[ ADMIN ]` - This is admin CMD*",
       badmin: "*`[ BOT ADMIN ]` - Bot must be an admin to use this CMD*",
       premium: "*`[ PREMIUM ]` - premium users only, if you want premium, get it from PREXZY 2347063956321*",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
