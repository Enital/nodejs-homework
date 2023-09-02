const { Contact } = require("../../models/contact");
const { HttpError } = require("../../utils");

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id).exec();
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

module.exports = getContactById;
