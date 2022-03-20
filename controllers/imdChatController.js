const IMDMessage = require("./../models/imdChatModel");

const getAll = (req, res) => {
    IMDMessage.find({ "username": "muskies" }, (err, docs) => {
        if (!err) {
            res.json({
                "status": "success",
                "message": "getting messages",
                "data": {
                    "messages": docs
                }
            });
        }
    });
}

const getMessageById = (req, res) => {
    const response = {
        "status": "success",
        "message": "getting message by id",
        data: {
            messages: [
                {
                    "username": "elon",
                    "message": "1v1 putin bro"
                }
            ],
        },
    };
    res.json(response);
}

const createMessage = (req, res) => {
    let message = new IMDMessage();
    message.username = req.body.username;
    message.message = req.body.message;

    message.save((err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "could not create message",
            })
        }
        if (!err) {
            res.json({
                "status": "success",
                "message": "getting message by id",
                "data": {
                    "messages": doc
                },
            })
        }
    })
}

module.exports.getAll = getAll;
module.exports.getMessageById = getMessageById;
module.exports.createMessage = createMessage;