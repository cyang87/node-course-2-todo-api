var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose.js");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");

var app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  console.log(req.body);

  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get("/todos", (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log("Started on port 3000");
});

module.exports = {app};

// var newTodo = new Todo({
//   text: "Cook dinner"
// });
//
// newTodo.save().then((doc) => {
//   console.log("Saved todo", doc);
// }, (e) => {
//   console.log("Unable to save todo");
// });

// var otherTodo = new Todo({
//   text: "  Edit this video  "
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log("Unable to save", e);
// });


// var user = new User({
//   email: "jeffyang9999@gmail.com "
// });
//
// user.save().then((doc) => {
//   console.log("User saved", doc);
// }, (e) => {
//   console.log("Unable to save user", doc);
// });
