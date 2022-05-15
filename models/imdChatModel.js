const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IMDMessageSchema = new Schema({
    user: String,
    message: String,
})

const IMDMessage = mongoose.model('IMDMessage', IMDMessageSchema);

module.exports = IMDMessage;