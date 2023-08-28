const { User } = require("../../models/users");
const { HttpError } = require("../../utils");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).exec();

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...req.body, password: hashPassword });
  res.status(201).json({
    data: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
