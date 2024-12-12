const { scryptSync, randomBytes, timingSafeEqual } = require("node:crypto");

function createHashPassword(password) {
  const randomB = randomBytes(16).toString("hex");
  const hashPass = scryptSync(password, randomB, 64).toString("hex");
  return {
    hashPass,
    randomB,
  };
}

function validateHashPassword(passwordValidate, hashPasswordCorrect, salt) {
  const toValidateBuffer = scryptSync(passwordValidate, salt, 64);
  const correctBuffer = Buffer.from(hashPasswordCorrect, "hex");
  const toReturn = timingSafeEqual(toValidateBuffer, correctBuffer);
  return toReturn;
}

module.exports = { createHashPassword, validateHashPassword };
