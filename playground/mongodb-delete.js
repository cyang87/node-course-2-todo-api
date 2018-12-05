const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB serve");
  }
  console.log("Connected to MongoDB server");

  // db.collection("Todos").deleteMany({text: "Eat Lunch"}).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection("Todos").deleteOne({text: "Eat Lunch"}).then((result) => {
  //   console.log(result);
  // });
  //
  // db.collection("Todos").findOneAndDelete({completed: "Eat Lunch"}).then((result) => {
  //   console.log(result);
  // })

  db.collection("Users").deleteMany({name: "Andrew"});
   
  db.collection("Users").findOneAndDelete({
    _id: new ObjectID("123")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  //db.close();
});
