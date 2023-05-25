const { ipcMain } = require('electron');
import Spider from '../types/BaseSpider';
import { Channels } from "../types/Channels"
import TestSpider from '../spiders/TestSpider';
import YtsSpider from '../spiders/YtsSpider';
import { ReadStream } from 'original-fs';

var spider = new YtsSpider();

// Search event handler
ipcMain.handle(Channels.SEARCH, async (event, arg) => {
    const results = await spider.search(arg);
    return results;
});


ipcMain.handle(Channels.GET_MOVIE, async (event, arg) => {
    const result = await spider.getMovie(arg);
    return result;
});

ipcMain.handle(Channels.DOWNLOAD, async (event, arg) => {
    spider.download(arg, (file: TorrentStream.TorrentFile) => {
        const stream: ReadStream = file.createReadStream()
        return stream;
    })
})