const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: "5c0c14a8fd8ea87e65e4bb24"}).then((todo) => {

});


Todo.findByIdAndRemove("5c0c14a8fd8ea87e65e4bb24").then((todo) => {
  console.log(todo);
});
