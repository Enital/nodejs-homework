const express = require("express");
const routes = express.Router();
const { authenticate, upload } = require("../../middlewares");
const ctrl = require("../../controllers/users");

routes.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = routes;
