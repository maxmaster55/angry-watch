const { ipcMain } = require('electron');
import YtsSpider from '../spiders/YtsSpider';

// Search event handler
ipcMain.on("search", async (event, arg) => {
    const spider = new YtsSpider()
    const results = await spider.search(arg);
    event.reply("search", results);
});