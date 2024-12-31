const express = require("express");
const chatRouter = require("./chatRoutes");
const router = express.Router();
const memberRouter = require("./member")

router.use("/convo", chatRouter)
router.use("/member",memberRouter )


module.exports = router;
