const {
  generateNotNullMessage,
  generateMinAndMaxLength,
  generateExsistMessage,
} = require("../utils/messages/base-message");
const {
  generatePasswordMessage,
} = require("../utils/messages/password-messages");
const Validation = require("./validation-results");
const Result = require("../utils/results/result");

const userValidation = (datas = "", user) => {
  const validationResults = validationHelper(
    checkUserNameNotNull(user),
    checkUserNameLength(user),
    checkUserNameExsist(datas, user),
    checkEmailNotNull(user),
    checkEmailExsist(datas, user),
    checkPassword(user)
  );

  if (validationResults == null) return new Result.SuccessResult();
  return new Result.ErrorResult(validationResults.message);
};

const validationHelper = (...validationResults) => {
  for (const result of validationResults) {
    if (!result.success) return result;
  }
  return null;
};
const checkUserNameNotNull = (user) => {
  if (user.username === "") {
    return new Validation(false, generateNotNullMessage("username"));
  }
  return new Validation(true);
};

const checkUserNameLength = (user) => {
  if (user.username.length < 3 || user.username.length > 50) {
    return new Validation(false, generateMinAndMaxLength("username", 3, 50));
  }
  return new Validation(true);
};

const checkUserNameExsist = (datas, user) => {
  const isExsist = datas.some((data) => data.username === user.username);
  if (isExsist) return new Validation(false, generateExsistMessage("username"));
  return new Validation(true);
};
const checkEmailNotNull = (user) => {
  if (user.email === "") {
    return new Validation(false, generateNotNullMessage("email"));
  }
  return new Validation(true);
};
const checkEmailExsist = (datas, user) => {
  const isExsist = datas.some((data) => data.email === user.email);
  if (isExsist) return new Validation(false, generateExsistMessage("email"));
  return new Validation(true);
};

const checkPassword = (user) => {
  const isTruePassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/.test(
      user.password
    );
  if (!isTruePassword)
    return new Validation(false, generatePasswordMessage("password"));
  return new Validation(true);
};

module.exports = userValidation;
