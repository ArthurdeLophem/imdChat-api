const express = require('express');
const router = express.Router();
const imdChatController = require("./../controllers/imdChatController");

//get all messages
router.get("/", imdChatController.getAll);

//get message by id
router.get("/:id", imdChatController.getMessageById);

//post message
router.post("/", imdChatController.createMessage);

//update message
router.put("/:id", imdChatController.updateMessage);

//delete message
//router.delete("/:id", imdChatController.deleteMessageById);

//get message by username
//router.get('/api/v1/messages?user=username', imdChatController);

module.exports = router;