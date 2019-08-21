const {app, BrowserWindow} = require('electron')
const path = require('path')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 750,
    height: 500,
    icon: __dirname + '/icon.png',
    webPreferences: {
      preload: __dirname + '/script.js'
    }
  })

  mainWindow.loadFile('index.html')
  mainWindow.setMenu(null)

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
