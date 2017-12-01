

newCar ={
	lat: 43.2609,	
	lng: -79.9192,
	username: "brandonvanwyn",
	type: "json",
}
newCar2 ={
	lat: 42.3601,	
	lng: -71.0942,
	username: "brandonvanwyn",
	type: "json",
}
newCar3 ={
	lat: 28.6139,	
	lng: 77.2090,
	username: "brandonvanwyn",
	type: "json",
}
newCar4 ={
	lat: 34.3416,	
	lng: 108.9398,
	username: "brandonvanwyn",
	type: "json",
}

newCars = {
    "countryName": "Canada"
}

newCars2 = {
    "countryName": "United States"
}

newCars3 = {
    "countryName": "India"
}

newCars4 = {
    "countryName": "China"
}


datas = [newCar, newCar2, newCar3, newCar4]
names = ["Country Information 1", "Country Information 2", "Country Information 3", "Country Information 4"]
results = [newCars, newCars2, newCars3, newCars4]

console.log(JSON.stringify(newCar))

function updateInfo(){
	resource =	document.getElementById('inputRequest').value;
	sendData = JSON.parse(document.getElementById('inputDataTextArea').value);

	params = $.param(sendData);
	request_url = resource + "?" + params;
	rqType = document.getElementById('inputTypeSelect').value;
	document.getElementById('inputHTTPRequest').value = request_url;
	
	$.getJSON({
		dataType: "json",
		crossDomain: true,
		type: rqType,
		url: resource,
		data: sendData,
		success: function(data) {
			document.getElementById('responseTextArea').value = JSON.stringify(data, undefined, 4);

		},
		error: function(XHR, textStatus, errorThrown) {
			alert("error: " + textStatus);
			alert("error: " + errorThrown);
		}
	});

}
function loadTestData(i){
	document.getElementById('inputRequest').value = "http://api.geonames.org/countryCode";
	document.getElementById('inputDataTextArea').value = JSON.stringify(datas[i], undefined, 4);
	document.getElementById('inputExpectedResponseTextArea').value = JSON.stringify(results[i], undefined, 4);
	document.getElementById('testLabelInput').value = names[i];
	$('#inputExpectedResponseTextArea').prop('placeholder',  JSON.stringify(results[i], undefined, 4));
	updateCurrentRestStub();
}

document.addEventListener('DOMContentLoaded', function() {
	var link = document.getElementById('testButton');
    // onClick's logic below:
    link.addEventListener('click', function() {
    	updateInfo();
    });
});
document.addEventListener('DOMContentLoaded', function() {
	var link = document.getElementById('testDataButton1');
    // onClick's logic below:
    link.addEventListener('click', function() {
    	loadTestData(0);
    });
});
document.addEventListener('DOMContentLoaded', function() {
	var link = document.getElementById('testDataButton2');
    // onClick's logic below:
    link.addEventListener('click', function() {
    	loadTestData(1);
    });
});
document.addEventListener('DOMContentLoaded', function() {
	var link = document.getElementById('testDataButton3');
    // onClick's logic below:
    link.addEventListener('click', function() {
    	loadTestData(2);
    });
});
document.addEventListener('DOMContentLoaded', function() {
	var link = document.getElementById('testDataButton4');
    // onClick's logic below:
    link.addEventListener('click', function() {
    	loadTestData(3);
    });
});