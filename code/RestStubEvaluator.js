function runTest(restStub, successCallback, failureCallback){
	var requestData = restStub.requestData;
	$.ajax({
				type: restStub.requestType,
				dataType: "jsonp",
				url: restStub.resource,
				data: restStub.requestData,
				success: successCallback,
				failure: failureCallback,
				timeout: 2000,
				error: failureCallback,
			});
}