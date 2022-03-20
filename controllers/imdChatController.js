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
}

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

const updateMessage = (req, res) => {
    //let username = req.username._id;
    let messageId = req.params.id;
    let newMessage = req.body.message;
    IMDMessage.findOneAndUpdate({
        _id: messageId
    }, {
        "message": newMessage
    }).then(doc => {
        res.json(doc);
    }).catch(err => {
        res.json(err);
    })
}

module.exports.getAll = getAll;
module.exports.getMessageById = getMessageById;
module.exports.createMessage = createMessage;
module.exports.updateMessage = updateMessage;