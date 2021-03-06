const Window  = require('./window')
const {app}=require('electron')
const DataStore =require('./DataStore')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.



  function main(){

    //test DataStore
  /*  let todosData=new DataStore({name:'main todo'})
    todosData
              .addTodo('Create todo app')
              .addTodo('another todo')
              .addTodo('one more todo')
              .deleteTodo('another todo')

    console.log(todosData.todos)*/

    let mainWindow = new Window({
      file:'index.html'
    })
    mainWindow.setIcon('kebab.png')
  }

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', main)
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})




// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
