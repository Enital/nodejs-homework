const { Contact } = require("../../models");

async function getById(req, res, next) {
  const { contactId } = req.params;

  try {
    const contact = await Contact.findById(contactId).exec();
    if (contact === null) {
      return res.status(404).send({ message: "Not found" });
    }

    return res.status(200).send({ message: "Contact found", contact });
  } catch (error) {
    next(error);
  }
}

module.exports = getById;
