const {app, BrowserWindow} = require('electron')
const path = require('path')

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
      width: 830,
      height: 420
    })
  
    mainWindow.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
  }

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});