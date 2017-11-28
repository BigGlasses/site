log_list = []

function restLog(message){
	log_list.push(message);
	reRenderConsole();
}

function reRenderConsole(){

	listItems = log_list.map(consoleMessage);
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  listItems
	), document.getElementById('consoleholder'));

}