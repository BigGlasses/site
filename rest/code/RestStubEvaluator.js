function runTest(restStub, successCallback, failureCallback){
	var requestData = restStub.requestData;
	$.ajax({
				dataType: "json",
				url: restStub.resource,
				data: restStub.requestData,
				success: successCallback,
				failure: failureCallback,
				timeout: 2000,
				error: failureCallback,
			});
}