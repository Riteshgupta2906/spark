const express = require("express");
const router = express.Router();
const { getPrivateData } = require("../controllers/privateController");
const { protect } = require("../middleware/authProtect");
router.route("/").get(protect, getPrivateData);
module.exports = router;
