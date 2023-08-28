const express = require("express");
const router = express.Router();

const { authenticate, upload } = require("../../middlewares");

const ctrl = require("../../controllers/users");
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
