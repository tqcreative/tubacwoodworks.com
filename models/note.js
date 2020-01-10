const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.set('useFindAndModify', false);

const noteSchema = new Schema({
  content: {
    type: String,
    required: "Must have some notes saved",
    minlength: [1, 'Note must be at least 1 character.']
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  }
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
