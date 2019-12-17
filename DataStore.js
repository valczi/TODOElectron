const Store =require('electron-store')

class DataStore extends Store{
  constructor (settings){
    // same as new Store(settings)
    super(settings)
  }
  //initialize todos with empty arrays
  this.todos=this.get('todos')|| []
}

saveTodos(){
  //save todos to JSON files
  this.set('todos',this.todos)

  return this
}

getTodos(){
  //set object's todos to todos in JSON files
  this.todos=this.get('todos')|| []
  return this
}

addTodo(todo){
  this.todos=[...this.todos,todo]

  return this.saveTodos()
}

deleteTodo(todo){

  this.todos=this.todos.filter(t=>t!==todo)

  return this.saveTodos()
  }
}

module.exports=DataStore
