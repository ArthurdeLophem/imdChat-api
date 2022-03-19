const IMDMessage = require("./../models/imdChatModel");

const getAll = (req, res) => {
    const response = {
        "status": "success",
        "message": "getting messages",
        data: {
            messages: [
                {
                    "username": "elon",
                    "message": "1v1 putin bro"
                },
                {
                    "username": "putin",
                    "message": "no"
                },
            ],
        }
    };
    res.json(response);
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

module.exports.getAll = getAll;
module.exports.getMessageById = getMessageById;