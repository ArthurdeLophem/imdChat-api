const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IMDMessageSchema = new Schema({
    username: String,
    message: String,
})

const IMDMessage = mongoose.model('IMDMessage', IMDMessageSchema);

module.exports = IMDMessage;