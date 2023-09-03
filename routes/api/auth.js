const express = require("express");
const routes = express.Router();
const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/auth");

routes.post("/register", validateBody(schemas.registerSchema), ctrl.register);

routes.post("/login", validateBody(schemas.loginSchema), ctrl.login);

routes.get("/verify/:verificationToken", ctrl.verifyEmail);

routes.post(
  "/verify",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);

routes.get("/current", authenticate, ctrl.getCurrent);

routes.post("/logout", authenticate, ctrl.logout);

module.exports = routes;
