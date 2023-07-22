const express = require("express");
const cors = require('cors');
const app = express();
const mongoDB = require("./db"); //retriving the data from the database.
app.use(cors());
mongoDB();

app.get("/", (req, res) => {
  res.send("Helo world");
});
app.use(express.json());
app.use("/api", require("./Routes/CreateUser")); //inserting the user data into mongodb using mongoose model and routes.
app.use("/api", require("./Routes/DisplayData")); //Displaying  the user data into mongodb using mongoose model and routes.

app.listen(5000, () => {
  console.log("Server started at port 5000");
});


