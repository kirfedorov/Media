import { app, BrowserWindow, ipcMain, shell } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let win;

function createWindow() {
  win = new BrowserWindow({
    // width: 1080,
    // height: 1920,
    width: 360,
    height: 640,
    // minWidth: 640,
    // minHeight: 360,
    // fullscreen: true,   // на весь экран
    frame: false,       // без рамки
    // kiosk: true,        // блокировка "выхода" пользователем
    transparent: true,           // оставим фон нормальным (без прозрачности)
    show: false,                  // покажем, когда готов
    backgroundColor: '#2222c0d0',   // тёмный фон при запуске
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'default',
    trafficLightPosition: { x: 12, y: 14 },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });

  const devServer = process.env.VITE_DEV_SERVER_URL;

  if (devServer) {
    win.loadURL(devServer);
    win.webContents.openDevTools({ mode: 'detach' });
  } else {
    win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
  }

  win.once('ready-to-show', () => win.show());

  // Безопасные IPC-хэндлеры для управления окном
  ipcMain.handle('window:minimize', () => win?.minimize());
  ipcMain.handle('window:toggleMaximize', () => {
    if (!win) return;
    if (win.isMaximized()) win.unmaximize();
    else win.maximize();
    return win.isMaximized();
  });
  ipcMain.handle('window:close', () => win?.close());
  ipcMain.handle('window:open', async () => {
    const folderPath = 'C:\Media\src\assets\media'; 
    await shell.openPath(folderPath); // откроет проводник Windows в указанной папке
  });

  ipcMain.handle('window:isMaximized', () => win?.isMaximized());
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
