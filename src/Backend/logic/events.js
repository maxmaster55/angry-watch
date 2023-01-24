
const { ipcMain } = require('electron');

ipcMain.on("searchs", (event, arg) => {
    console.log(arg);
    event.reply("search-reply", "search-reply");
});