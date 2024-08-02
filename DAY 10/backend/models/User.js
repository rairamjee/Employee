const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  employeeID: { type: String, required: true, unique: true },
  attendance: [
    {
      date: { type: Date, required: true },
      status: { type: String, required: true },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
