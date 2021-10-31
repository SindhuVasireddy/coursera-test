//an AJAX library written by us to make AJAX request to the server and process the request 
(function(global){ //Wrapping the function with an iife-immediately invoked function expression

var ajaxUtils={};//Declaring a Fake namespace

//Create an HTTP request object with which the ajax sends a request to the server.
function getRequestObject(){//this function will not be available to the user of ajaxUtils.
	if (window.XMLHTTPRequest) {
		return (new XMLHTTPRequest());
	}
}

//Using the objected created using the above function send a request to the server.
ajaxUtils.sendGetRequest= function(requestUrl,responseHandler){//sendGetRequest is assigned a requestUrl using the fake namespace we defined in order to not have any clashes with the other Get requests.
	var request = getRequestObject(); //create an object for the function.
	request.onreadystatechange= function() {//onreadystatechange is different stages in the network communication between the client and the server. 
		handleResponse(request, responseHandler);
	};//this above function is going to get invoked everytime there is a change in state of th ecommunication until the final ostage of communication is reached.
	request.open("GET",requestUrl, true);
	request.send(null);
}

//if reponse is ready call user provided responseHandler.
function handleResponse(request,responseHandler){
	if ((request.readyState==4)&&(request.status==200)) {
		responseHandler(request);//the user of this library will start pulling the response of the server from this request object.
	}
}

//Expose utility to the global object
global.$ajaxUtils=ajaxUtils;

})(window);