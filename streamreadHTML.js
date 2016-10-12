var http = require('http');
var enterURL = {
  host: "example.com",
  path: "/"
};

function readHTML (enterURL, data) {
 http.get(enterURL, function(response){


    response.setEncoding("utf8");

     response.on("data", function printHTML (data){
      console.log(data)
     });
   });

}
console.log(readHTML(enterURL))
