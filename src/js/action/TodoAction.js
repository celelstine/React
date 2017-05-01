import dispatcher from '../Dispatcher';
export function newTodo(text) {
	dispatcher.dispatch({
		type : "CREATE_TODO",
		text,
	});
}

export function deteleTodo(text) {
	dispatcher.dispatch({
		type : "DETELE_TODO",
		id,
	});
}

export function reloadTodo() {
	dispatcher.dispatch({ type : "FETCH_TODOS"});
	setTimeout(() => {
		dispatcher.dispatch({
			type : "RECIEVE_TODO",
			todos : [
				{
				   "id":5,
				   "text":"God is the source of wisdom ",
				   "complete":false
				},
				{
				   "id":6,
				   "text":"Practice makes perfect",
				   "complete":true
				}
			 ],
		});
	},1000);

}