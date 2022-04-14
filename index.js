const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("go to route for data");
});
app.post("/route", (req, res) => {
  const array = req.body.array;
  res.send(array).json().status(200);
});
app.listen(port, () => {
  console.log("Server is up and running");
});
