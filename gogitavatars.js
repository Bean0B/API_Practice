var request = require('request');
var fs = require('fs');
var https = require('https');




function getRepoContributors(repoOwner, repoName, cb) {
var buildURL = 'https://api.github.com/repos/' + repoOwner + '/'+ repoName + '/contributors'
console.log(buildURL)
var configs = {
    url: buildURL,
    method: 'GET',
    headers: {
      'User-Agent': 'request'
    },
    json: true
  };
request(configs, (err, result, data) => {
  if (err) {
    throw err;
  }
    console.log("Response Status Code:", result.statusCode);
    data.map(function (contrib){
      var path = "./avatars" + "/" + contrib.login + ".jpg";
      var avurl = contrib.avatar_url;
      cb(avurl, path)
    })
  });
}

 function imageWrite (avurl, path) {
  var file = fs.createWriteStream(path);
  var request = https.get(avurl, function(response) {
    response.pipe(file);
  });
};


var myArgs = process.argv.slice(2);
getRepoContributors(myArgs[0], myArgs[1], imageWrite);





