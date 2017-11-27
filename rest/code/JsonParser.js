// 
//Takes a JSON object and 
function prettify(data){
	return JSON.stringify(data, undefined, 4);
}

function JSONtoParam(data){
	return $.param(data);
}