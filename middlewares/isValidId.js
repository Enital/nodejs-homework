const { isValidObjectId } = require("mongoose");
const { HTTPError } = require("../utils");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(HTTPError(400, `${id} is not valid id`));
  }
  next();
};

module.exports = isValidId;
