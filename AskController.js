const Ask = require("./ask");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./connectDB");
const bodyParser = require("body-parser");

connectDB();

app.get("/", (req, res) => {
  res.send("hello lakes");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("*", (req, res) => {
  let { sessionId, service, phoneNumber, text } = req.body;
  console.log(req.body);
  console.log(text, sessionId, phoneNumber);
});

app.listen(PORT, () => {
  console.log(`app is listening to port ${PORT}`);
});
