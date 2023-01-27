const { ipcMain } = require('electron');
import Spider from '../types/BaseSpider';
import TestSpider from '../spiders/TestSpider';
import YtsSpider from '../spiders/YtsSpider';


const spider: Spider = new TestSpider()
// Search event handler
ipcMain.handle("search", async (event, arg) => {
    const results = await spider.search(arg);
    return results;
});


ipcMain.handle("getMovie", async (event, arg) => {
    const result = await spider.getMovie(arg);
    return result;
});