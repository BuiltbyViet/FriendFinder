
var express = require("express");
var bodyParser = require("body-parser");
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);


var app = express();

var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

// var friendList = require("../data/friends");



	app.get("/api/friends", function(req, res) {
		res.json(friendsArray);
	});

	app.post("/api/friends", function(req, res) {
		var newFriend = req.body;
		friendsArray.push(newFriend);


for (var i =0;i<friendsArray.length-1;i++){
	var newDifference=0;
	var friendDifference =100;
 for (var k=0;k<10;k++ ) {
newDifference = newDifference + (Math.abs(Number(newFriend.scores[k])-friendsArray[i].scores[k]));
if(newDifference<=friendDifference){
friendDifference=newDifference;
var matchName = friendsArray[i].name;
var matchPicLink = friendsArray[i].photo
}


}
}
	});


var path = require("path");



  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });

  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });

  

  var friendsArray = [
{
  "name":"Simon Cowell",
  "photo":"https://pmcdeadline2.files.wordpress.com/2015/10/simon-cowell.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]


}, 

{
  "name":"Taylor Swift",
  "photo":"http://www.billboard.com/files/styles/article_main_image/public/media/taylor-swift-2014-sarah-barlow-billboard-650.jpg",
  "scores":[
      3,
      1,
      5,
      2,
      2,
      4,
      1,
      5,
      3,
      2
    ]


},

{
  "name":"Justin Bieber",
  "photo":"http://i.axs.com/2016/07/promoted-media-optimized_5776cc52b3816.jpg",
  "scores":[
      4,
      2,
      5,
      5,
      2,
      1,
      1,
      3,
      1,
      2
    ]


},

{
  "name":"Kim Kardashian",
  "photo":"http://media.npr.org/assets/img/2015/06/17/Kim%20Kardashian-8b12194250ba930485f40c0d56b0176b5f26440d-s900-c85.jpg",
  "scores":[
      3,
      3,
      2,
      2,
      1,
      5,
      5,
      5,
      2,
      1
    ]


},

{
  "name":"Beyonce",
  "photo":"http://cdn.playbuzz.com/cdn/6b4354e7-d674-4a44-8150-215c27035f1c/202c8f4a-410f-4b6e-8e07-273ceaf5078d.jpeg",
  "scores":[
      4,
      4,
      3,
      2,
      1,
      1,
      3,
      4,
      4,
      3
    ]


}


]