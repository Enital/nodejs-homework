const { Contact } = require("../../models");
const { contactSchema } = require("../../schema");

async function updateById(req, res, next) {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: "missing fields" });
    }
    const { contactId } = req.params;
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      req.body,
      { new: true }
    ).exec();
    if (updatedContact === null) {
      return res.status(404).send({ message: "Not found" });
    }

    return res.status(200).send({ updatedContact });
  } catch (error) {
    next(error);
  }
}

module.exports = updateById;
