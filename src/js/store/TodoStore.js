import {EventEmitter} from "events";
import dispatcher from '../Dispatcher';
class TodoStore extends  EventEmitter {
	constructor() {
		super();
		this.todos =[
            {
               "id":1,
               "text":"Pray to God ",
               "complete":false
            },
				
            {
               "id":2,
               "text":"Check on family",
               "complete":false
            },
				
            {
               "id":3,
               "text":"Check your trello board and email",
               "complete":false
            },
			{
               "id":4,
               "text":"Check my today's activity",
               "complete":false
            }
         ];
	}
	//method to return all todo
	getAll() {
		return this.todos;
	}
	// method to add new todo 
	createTodo(text) {
		const id = Date.now();
		const newtodo ={
			id,
			text,
			"complete":false
		};
		this.todos.push(newtodo);
		this.emit("change");
		console.log(this.todos);
	}
	
	handleActions(action) {
		//console.log("TodoStore received an action ...", action);
		switch(action.type) {
			case "CREATE_TODO" : {
				this.createTodo(action.text);
			}
			case "RECIEVE_TODO" : {
				this.todos= action.todos;
				this.emit("change");
				console.log(this.todos);
			}
		}
	}
}
const todostore = new TodoStore;
dispatcher.register(todostore.handleActions.bind(todostore));
// to use the on=bject on browser console
window.todoStore = todostore;
window.dispatcher = dispatcher;
export default todostore;