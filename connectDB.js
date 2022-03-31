const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://lakecombs:lakecombs@cluster0.rv4zq.mongodb.net/MEDIUMUSSD?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`Database connected to ${connect.connection.host}`);
  } catch (error) {
    console.log(`An Error occured : ${error.message}`);
  }
};

module.exports = connectDB;
