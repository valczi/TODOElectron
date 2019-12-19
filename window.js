const{BrowserWindow}= require('electron')

const defaultProps={
  widht :500,
  height:800,
  show :false,
  webPreferences:{
    nodeIntegration:true
  }
}


class Window extends BrowserWindow{
  constructor({file,...windowSettings}){
    //appel une nouvelle fenetre avec le constructeur BrowserWindow de electron
    super({... defaultProps,...windowSettings})
    //fichier html
    this.loadFile('index.html')
    this.webContents.openDevTools()


    this.once('ready-to-show',()=>{
      this.show()
    })
    
    this.on('closed', () => {
    this = null;
  });
  }
}

module.exports=Window
