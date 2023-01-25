const { ipcMain } = require('electron');
import YtsSpider from '../spiders/YtsSpider';

ipcMain.on("search", async (event, arg) => {

    const spider = new YtsSpider()
    const results = await spider.search(arg);

});