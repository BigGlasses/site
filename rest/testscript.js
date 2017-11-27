

newCar ={
	wantedParams: ["regular gasoline","year:2014"],
	budget:2000
}
console.log(JSON.stringify(newCar))

function updateInfo(){
	resource =	document.getElementById('inputRequest').value;
	sendData = JSON.parse(document.getElementById('inputDataTextArea').value);

	params = $.param(sendData);
	request_url = resource + "?" + params;
	document.getElementById('inputHTTPRequest').value = request_url;
	
	$.ajax({
	  dataType: "json",
	  url: resource	,
	  data: sendData,
	  success: function(data) {
		document.getElementById('responseTextArea').value = JSON.stringify(data, undefined, 4);

		}
	});
		
}

function loadTestData(){
	document.getElementById('inputRequest').value = "https://carfinding.azurewebsites.net/vehicles/search"
	document.getElementById('inputDataTextArea').value = JSON.stringify(newCar, undefined, 4);
	$('#inputExpectedResponseTextArea').prop('placeholder',  JSON.stringify(newCar, undefined, 4));

}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('testButton');
    // onClick's logic below:
    link.addEventListener('click', function() {
        updateInfo();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('testDataButton');
    // onClick's logic below:
    link.addEventListener('click', function() {
        loadTestData();
    });
});