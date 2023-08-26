const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logOut");
const { ctrlWrapper } = require("../../utils");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
};
