import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('windowControls', {
  // minimize: () => ipcRenderer.invoke('window:minimize'),
  // toggleMaximize: () => ipcRenderer.invoke('window:toggleMaximize'),
  open: () => ipcRenderer.invoke('window:open'),
  close: () => ipcRenderer.invoke('window:close'),
  isMaximized: () => ipcRenderer.invoke('window:isMaximized')

});
