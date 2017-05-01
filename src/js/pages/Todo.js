import React from 'react';
import TodoStore from '../store/TodoStore';
import ReactDOM from 'react-dom';
import * as TodoActions from '../action/TodoAction';
class Todo extends React.Component {
	constructor() {
      super();
		this.getTodo = this.getTodo.bind(this);
      this.state = {
         todos: TodoStore.getAll(),  
      };
   }
   
   getTodo () {
		this.setState({
				todos: TodoStore.getAll(), 
		});
   }
   //this method runs before the component render it content
   componentWillMount() {
		TodoStore.on("change", this.getTodo);
		console.log("count" ,TodoStore.listenerCount("change"));
   }
   
	componentWillUnmount() {
		TodoStore.removeListener("change", this.getTodo);
	}
	
	create_Todo() {
		const text = ReactDOM.findDOMNode(this.refs.text).value;
		TodoActions.newTodo(text);
	}
	
	reloadTodo() {
		TodoActions.reloadTodo();
	}
	
   render() {
      return (
         <div>
			<input ref="text" required/>
			<button onClick={this.create_Todo.bind(this)}> Create Todo </button>
			<button onClick={this.reloadTodo.bind(this)}> Reload Todo </button>
			<h2>Todo List  </h2>
            {this.state.todos.map((todo, i) => <TableRow key = {todo.id} data = {todo} />)}
         
         </div>
      );
   }
}


class TableRow extends React.Component {
   render() {
      return (
	  /*
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.text}</td>
            <td>{(this.props.data.complete) ? 'Uncompleted' : 'Completeted'}</td>
         </tr>
	**/
	<ul>
		{this.props.data.text}
	</ul>
      );
   }
}
export default Todo;