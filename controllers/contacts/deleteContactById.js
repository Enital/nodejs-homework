const { Contact } = require("../../models/contact");
const { HttpError } = require("../../utils");

const deleteContactBiId = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json({ message: "Delete Success" });
};

module.exports = deleteContactBiId;
