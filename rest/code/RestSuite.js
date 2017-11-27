// import * as Constants from 'Constants.js';
// import * as ProfileStore from 'Constants.js';
// import * as IO from 'Constants.js';
// import * as JsonParser from 'Constants.js';

function display(){
	
}

function saveAllToDisk(){
	
}

function loadAllFromDisk(location){
	
}

function saveSpecifiedToDisk(data){
	
}

var currentRestChain;
var currentRestStub;
var currentProfileStore;

function reRenderTestSelect(){
	rList = [];
	tests = currentRestChain.reststublist;
	for (var i = 0; i < tests.length; i ++){
		var k = currentProfileStore.getRestStubFromID(tests[i]);
		k.selected = k == currentRestStub;
		rList.push(k);
	}

	listItems = rList.map(stubSelect);
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  listItems
	), document.getElementById('stubholder'));

}

function uiDeleteRestStub(identifier){
	currentRestChain.removeTest(identifier);
	if (currentRestStub.identifier == identifier){
		changeCurrentRestStub(currentRestChain.reststublist[0]);
	}
	displayCurrentRestStub();
	reRenderTestSelect();
}

function uiCopyRestStub(identifier){
	currentProfileStore.copyRestStub(identifier);
	var newStubId = currentProfileStore.copyRestStub(identifier);
	currentRestChain.addTest(newStubId);
	changeCurrentRestStub(newStubId);
	reRenderTestSelect();
}

function uiCreateRestStub(){
	console.log(currentProfileStore.allRestStubs);
	var id = currentProfileStore.newRestStub();
	currentRestChain.addTest(id);
	console.log(currentProfileStore.allRestStubs);
	if (currentProfileStore.allRestStubs.length == 1){
		currentRestStub = currentProfileStore.getRestStubFromID(id);
		console.log(currentRestStub);
		displayCurrentRestStub();
	}
	changeCurrentRestStub(id);
	reRenderTestSelect();
}

// Saves the form data to the current test
function updateCurrentRestStub(){

	label =	$('#testLabelInput').val();
	requestData = $('#inputDataTextArea').val();
	requestExpectedData = $('#inputExpectedResponseTextArea').val();
	responseData = $('#responseTextArea').val();
	typeData = $('#inputTypeSelect').val();
	sendData = JSON.parse($('#inputDataTextArea').val());
	resourceLocation = $('#inputRequest').val();

	currentRestStub.label = label;
	currentRestStub.requestType = typeData;
	currentRestStub.responseData = JSON.parse(responseData);
	currentRestStub.requestData = JSON.parse(requestData);
	currentRestStub.responseData = JSON.parse(responseData);
	currentRestStub.resource = resourceLocation;
	console.log(requestExpectedData)
	currentRestStub.expectedData = JSON.parse(requestExpectedData);

	reRenderTestSelect();
}

//Change between expanded tests.
function changeCurrentRestStub(identifier){
	console.log("Changing to " + identifier)
	updateCurrentRestStub();
	currentRestStub = currentProfileStore.getRestStubFromID(identifier);
	displayCurrentRestStub();
	reRenderTestSelect();
}

//Show an expanded version of the current test.
function displayCurrentRestStub(){

	$('#testLabelInput').val(currentRestStub.label);
	$('#inputDataTextArea').val(prettify(currentRestStub.requestData));
	$('#inputExpectedResponseTextArea').val(prettify(currentRestStub.expectedData));
	$('#responseTextArea').val(prettify(currentRestStub.responseData));
	$('#inputTypeSelect').val(currentRestStub.requestType);
	$('#inputRequest').val(currentRestStub.resource);


	sendData = currentRestStub.requestData;

	params = $.param(sendData);
	request_url = currentRestStub.resource + "?" + params;
	$('#inputHTTPRequest').val(request_url);

}



currentProfileStore = new ProfileStore();
var id = currentProfileStore.newRestChain();
currentRestChain = currentProfileStore.getRestChainFromID(id);
uiCreateRestStub();

// ReactDOM.render(
//   <div>{listItems}</div>,
//   document.getElementById('stubholder')
// );


// Nice Tabs, thanks stackoverflow!
var textareas = document.getElementsByTagName('textarea');
var count = textareas.length;
for(var i=0;i<count;i++){
    textareas[i].onkeydown = function(e){
        if(e.keyCode==9 || e.which==9){
            e.preventDefault();
            var s = this.selectionStart;
            this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
            this.selectionEnd = s+1; 
        }
    }
}

$('input').change(function() {
    updateCurrentRestStub();
}).click(function() {
    // do something
});
$('select').change(function() {
    updateCurrentRestStub();
}).click(function() {
    // do something
});

var testQueue = []
function runAllTests(){
	if (testQueue != []){
		testQueue = currentRestChain.reststublist.slice();
		runNextTest();
	}
	else{
		alert("Tests are already running!");
	}
}

function runNextTest(){
	reRenderTestSelect();
	if (testQueue.length > 0){
		console.log('run');
		var testid = testQueue.splice(0, 1) [0];
		var test = currentProfileStore.getRestStubFromID(testid);

		var successFunction = function(data){
			var s = compare(test.expectedData, data);
			test.success = s;
			if (s){
				runNextTest();
			}
			else{
				failTests();
			}
		}

		var failureFunction = function(data){
			test.success = false;
			failTests();
		}

		test.ranTest = true;
		setTimeout(function() {
			runTest(test, successFunction, failureFunction);
			}, 500)

	}
	else{
		succeedTests();

	}
}

function failTests(){
	reRenderTestSelect();
	testQueue = [];
	alert("Tests failed!");
}
function succeedTests(){
	reRenderTestSelect();
	testQueue = [];
	alert("Tests succeeded!");
}