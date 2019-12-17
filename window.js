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
  constructor({file,...windowSetting}){
    super({... defaultProps,...windowSetting})
  }




}
