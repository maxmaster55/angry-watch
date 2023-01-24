const { app, BrowserWindow } = require('electron')
const events = require('../src/Backend/logic/events')

const path = require('path')



function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        minWidth: 600,
        minHeight: 600,
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, // false or it will not work
        },

    })
    win.setMenu(null);
    if (process.env.NODE_ENV === 'development') {
        win.setAlwaysOnTop(true);
    }


    win.loadURL('http://localhost:3000');

    // Open the DevTools.
    win.webContents.openDevTools("detach")
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.

    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

