const { Contact } = require("../../models");
const { contactSchema } = require("../../schema");

async function add(req, res, next) {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: "missing required name field" });
    }
    const newContact = await Contact.create(req.body);
    return res.status(201).json({ newContact });
  } catch (error) {
    next(error);
  }
}

module.exports = add;
