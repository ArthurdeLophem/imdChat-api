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

module.exports.getAll = getAll;
module.exports.getMessageById = getMessageById;
module.exports.createMessage = createMessage;