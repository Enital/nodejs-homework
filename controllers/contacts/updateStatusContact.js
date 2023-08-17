const { Contact } = require("../../models");
const { contactStatusSchema } = require("../../schema");

async function updateStatusContact(req, res, next) {
  try {
    const { error } = contactStatusSchema.validate(req.body);
    if (error) {
      return res.status(400).send({ message: "missing field favorite" });
    }
    const { contactId } = req.params;
    const { favorite } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
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

module.exports = updateStatusContact;
