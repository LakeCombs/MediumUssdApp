const mongoose = require("mongoose");

const askSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
    },
    sessionId: {
      type: String,
    },
    requested: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ask", askSchema);
