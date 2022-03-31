const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const connectDB = require("./connectDB");
const Ask = require("./ask");

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello ussd");
});

app.post("*", async (req, res) => {
  let { text, sessionId, phoneNumber } = req.body;
  let response;
  if (text === "") {
    response = `CON select an option
    1. request airtime
    2. request data
    `;
    res.send(response);
  } else if (text === "1") {
    response = `CON select an option
     1. 100
     2. 200
     `;
    res.send(response);
  } else if (text === "1*1") {
    await Ask.create({
      phone: phoneNumber,
      sessionId: sessionId,
      requested: 100,
    }).then(() => {
      response = `END you have requested for 100 credit`;
      res.send(response);
    });
  } else if (text === "1*2") {
    await Ask.create({
      phone: phoneNumber,
      sessionId: sessionId,
      requested: 200,
    }).then(() => {
      response = `END you have requested for 200 credit`;
      res.send(response);
    });
  } else if (text === "2") {
    response = `CON select an option
     1. 1GB
     2. 2GB
     `;
    res.send(response);
  } else if (text === "2*1") {
    await Ask.create({
      phone: phoneNumber,
      sessionId: sessionId,
      requested: "1GB",
    }).then(() => {
      response = `END you have requested for 1GB credit`;
      res.send(response);
    });
  } else if (text === "2*2") {
    await Ask.create({
      phone: phoneNumber,
      sessionId: sessionId,
      requested: "2GB",
    }).then(() => {
      response = `END you have requested for 2GB credit`;
      res.send(response);
    });
  }
});

app.listen(PORT, () => {
  console.log(`app is listening to port ${PORT}`);
});
