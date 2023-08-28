const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const { ctrlWrapper } = require("../../utils");

router.get("/", authenticate, ctrlWrapper(ctrl.getAllContacts));

router.get("/:id", authenticate, isValidId, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.addContact)
);

router.put(
  "/:id",
  authenticate,
  validateBody(schemas.addSchema),
  isValidId,
  ctrlWrapper(ctrl.updateContactById)
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.updateStatusContact)
);

router.delete(
  "/:id",
  authenticate,
  isValidId,
  ctrlWrapper(ctrl.deleteContactBiId)
);

module.exports = router;
