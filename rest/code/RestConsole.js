log_list = []

function restLog(message){
	log_list.push(message);
	reRenderConsole();
}

function reRenderConsole(){
	var x = log_list.slice();
	x.reverse();
	listItems = x.map(consoleMessage);
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  listItems
	), document.getElementById('consoleholder'));
	setTimeout(function(){
	$('#consoleholder>div').scrollTop($('#consoleholder>div')[0].scrollHeight);
	}, 100);
		$('#consoleholder>div').scrollTop($('#consoleholder>div')[0].scrollHeight)
}