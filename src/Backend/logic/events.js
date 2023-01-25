const { ipcMain } = require('electron');
import ShahedSpider from "../spiders/ShahedSpider";

ipcMain.on("search", async (event, arg) => {
    console.log(arg);
    const shahedSpider = new ShahedSpider();
    const movies = await shahedSpider.search(arg);
    //console.log(movies);
});