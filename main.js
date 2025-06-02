const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const fs = require('fs')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 900,
    minWidth: 500,
    minHeight: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
    icon: path.join(__dirname, 'assets/logo.ico')
  })

  // 加载你的HTML文件
  mainWindow.loadFile('index.html')

  // 开启开发者工具
  mainWindow.webContents.openDevTools();

  ipcMain.on('window-minimize', () => mainWindow.minimize())
  ipcMain.on('window-maximize', () => {
    mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()
  })
  ipcMain.on('window-close', () => mainWindow.close())
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}) 