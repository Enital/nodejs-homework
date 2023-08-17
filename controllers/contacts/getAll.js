const { Contact } = require("../../models");

async function getAll(req, res, next) {
  try {
    const contacts = await Contact.find({}).exec();
    return res.status(200).send({ contacts });
  } catch (error) {
    next(error);
  }
}

module.exports = getAll;
