const IMDMessage = require("./../models/imdChatModel");

const getAll = (req, res) => {
    IMDMessage.find((err, docs) => {
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
};

const getMessageById = async (req, res) => {
    try {
        const data = await IMDMessage.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const createMessage = (req, res) => {
    let message = new IMDMessage();
    message.user = req.body.user;
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
                "message": "created new message",
                "data": {
                    "messages": doc
                },
            })
        }
    })
};

const updateMessage = (req, res) => {
    let messageId = req.params.id;
    let newMessage = req.body.message;
    IMDMessage.findOneAndUpdate({
        _id: messageId
    }, {
        "message": newMessage
    }).then(doc => {
        res.json(
            {
                "status": "succes",
                "message": "updated a message",
                "update": " message " + "'" + messageId + "'" + " has been updated to " + "'" + newMessage + "'"
            })
    }).catch(err => {
        res.json(err);
    })
};

const deleteMessage = (req, res) => {
    let messageId = req.params.id;
    IMDMessage.findByIdAndDelete({
        _id: messageId
    }).then(doc => {
        res.json(
            {
                "status": "succes",
                "message": "deleted a message",
                "deleted message": doc
            })
    }).catch(err => {
        res.json(err);
    })
};

module.exports.getAll = getAll;
module.exports.getMessageById = getMessageById;
module.exports.createMessage = createMessage;
module.exports.updateMessage = updateMessage;
module.exports.deleteMessage = deleteMessage;