const { ipcMain } = require('electron');
import Spider from '../types/BaseSpider';
import TestSpider from '../spiders/TestSpider';
import YtsSpider from '../spiders/YtsSpider';

var spider: Spider;

// setup the spider from the frontend



// Search event handler
ipcMain.handle("search", async (event, arg) => {
    const results = await spider.search(arg);
    return results;
});


ipcMain.handle("getMovie", async (event, arg) => {
    const result = await spider.getMovie(arg);
    return result;
});