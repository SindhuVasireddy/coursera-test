document.addEventListener("DOMContentLoaded",
	function(event){
		//Unobstrusive Event Binding
		document.querySelector("button").addEventListener("click",
			function(){
				var self=this;
				var name="";

				//Call the server to get a name. Remember!!!This is an asynchronous call. It is not going to wait till the server responds to execute the next line which in our case is to print to console the output of the server.
				$ajaxUtils.sendGetRequest("name.txt",
					function (request){
						self.name=request.responseText;//responseText Property of the request object is what holds the response to our name query.
						console.log(self.name)
						document.querySelector("#content").innerHTML="<h2>Hello"+self.name+"!</h2>";
					}
					)
			})
				// document.querySelector("#content").innerHTML="<h2>Hello"+self.name+"!";//We cannot have this line outside the asynchronous call since this line will be executed even before a response is got back from the server!!!
			}
			)
