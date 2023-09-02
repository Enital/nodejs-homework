const updateAvatar = require("./updateAvatar");
const { ctrlWrapper } = require("../../utils");

module.exports = {
  updateAvatar: ctrlWrapper(updateAvatar),
};
