var request = require("request");
var enterURL = "http://www.example.com";

function readHTML (enterURL, callback) {

request(enterURL, function(err, response, body) {
  if (err) {
    throw err;
  }
    console.log("Response Status Code:", response.statusCode);
    callback(body)
  });
}
readHTML(enterURL, function printHTML(data){
  console.log(data)
});
