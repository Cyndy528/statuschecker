var express = require('express');
var app = express();

// setting up server to handle the GET request for a site
app.get('/api/sites/:id', function (req, res) {
  var todoId = parseInt(req.params.id);

  // using id to find the site
  var siteCheck = sites.filter(function (site) {
  	return site._id == siteId;
  })[0];

  // responding with the found site
  res.json(siteCheck);
});

// setting up server route to handle the POST request
app.post ('api/sites', function (req, res){

	// create a new site with form data
	var newSite = req.body;

	// assigning ID number for new site
	if (sites.length > 0 ){
		newSite._id = sites[sites.length - 1]._id + 1;
	} else {
		newSite._id = 1;
	}
	// adding new site to the array
	sites.push(newSite);
	res.json(newSite);
});


var server = app.listen(3000);