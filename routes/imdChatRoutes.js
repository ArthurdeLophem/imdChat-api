const express = require('express');
const router = express.Router();
const imdChatController = require("./../controllers/imdChatController");

//get all messages
router.get("/api/v1/messages", imdChatController.getAll);

//get message by id
router.get("/api/v1/messages/:id", imdChatController.getMessageById);

//post message
//router.post("/api/v1/messages", imdChatController.createMessage);

//update message
//router.update("/api/v1/messages/:id", imdChatController.updateMessageById);

//delete message
//router.delete("/api/v1/messages/:id", imdChatController.deleteMessageById);

//get message by username
//router.get('/api/v1/messages?user=username', imdChatController);



module.exports = router;