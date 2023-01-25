const { ipcMain } = require('electron');
import YtsSpider from '../spiders/YtsSpider';

// Search event handler
ipcMain.handle("search", async (event, arg) => {
    const spider = new YtsSpider()
    const results = await spider.search(arg);
    return results;
});