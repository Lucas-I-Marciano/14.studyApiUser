const { scryptSync, randomBytes } = require("node:crypto");

function createHashPassword(password) {
  const randomB = randomBytes(16).toString("hex");
  const hashPass = scryptSync(password, randomB, 64).toString("hex");
  return {
    hashPass,
    randomB,
  };
}

module.exports = createHashPassword;
