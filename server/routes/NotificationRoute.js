// relif center route add notification router
const express = require("express");
const { addNotification} = require("../controllers/NotificationControler");

const router = express.Router();

router.post("/addNotification",addNotification);
module.exports = router;