const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  value: String,
  doneAt: Date,
  order: Number,
});

TodoSchema.virtual("todoId").get(function () {
  return this._id.toHexString();
});

// json 변환시 virtuals 포함
TodoSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Todo", TodoSchema);
