const { User } = require("../../models/users");
const { HttpError } = require("../../utils");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken }).exec();

  if (!user) {
    throw HttpError(401, "User not found");
  }

  await User.findByIdAndUpdate(user._id, {
    verificationToken: null,
    verify: true,
  }).exec();
  res.json({ message: "Verification successful" });
};

module.exports = verifyEmail;
