var express = require("express");
var path = require("path");
var app = express();
var _template = require("lodash").template;
var fs = require("fs");

var users = require("./users").users;

app.use(express.static(path.join()));

app.get("/users", function (_, res) {
  var htmlFile = fs.readFileSync(path.join(__dirname, "users.html"));
  var usersTemplate = _template(htmlFile);
  var finalTemplate = usersTemplate({ users: JSON.stringify(users, null, 2) });

  res.send(finalTemplate);
});

app.listen(8888, function () {
  console.log("Server is running at port 8888");
});
