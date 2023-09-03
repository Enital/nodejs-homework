const { User } = require("../../models/user");
const { HttpError } = require("../../utils");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken }).exec();

  if (!user) {
    throw HttpError(401, "User Not found");
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  }).exec();

  res.json({
    message: "Verification successful",
  });
};

module.exports = verifyEmail;
