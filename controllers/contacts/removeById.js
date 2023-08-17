const { Contact } = require("../../models");

async function removeById(req, res, next) {
  const { contactId } = req.params;

  try {
    const removedContact = await Contact.findByIdAndRemove(contactId).exec();
    if (removedContact === null) {
      return res.status(404).send({ message: "Not found" });
    }

    return res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
}

module.exports = removeById;
