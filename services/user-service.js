const baseService = require("./base-service");
const { JSON_KEY } = require("../utils/enum");
const userValidation = require("../validations/user-validation");
const Result = require("../utils/results/result");
const { DATA_ADDED_SUCCESSFULLY } = require("../utils/common-messages");
const bcrypt = require("bcrypt");
const {
  USER_USERNAME_DOESNT_EXSIST,
  USER_USERNAME_PASSWORD_INCORRECT,
  USER_IS_BLOCKED,
  USER_SUCCESSFULLY_LOGIN,
} = require("../utils/messages/user-messages");

async function getAllUsers() {
  return await baseService.getData(JSON_KEY.USERS);
}

async function insertUser(model) {
  const allUsers = await baseService.getData(JSON_KEY.USERS);

  const validationResult = userValidation(allUsers, model);

  if (!validationResult.success) return validationResult;
  const saltRounds = 10;
  const saltKey = await bcrypt.genSalt(saltRounds);
  model.password = await bcrypt.hash(model.password, saltKey);

  const data = await baseService.insertData(JSON_KEY.USERS, model);
  return new Result.SuccessResult(DATA_ADDED_SUCCESSFULLY, data);
}

async function userVerify(user) {
  const allUsers = await baseService.getData(JSON_KEY.USERS);
  const exsistUser = allUsers.find((data) => data.username == user.username);

  if (exsistUser === undefined)
    return new Result.ErrorResult(USER_USERNAME_DOESNT_EXSIST);

  const passwordVerifyResult = await bcrypt.compare(
    user.password,
    exsistUser.password
  );
  if (!passwordVerifyResult)
    return new Result.ErrorResult(USER_USERNAME_PASSWORD_INCORRECT);

  if (!exsistUser.isActive) return new Result.ErrorResult(USER_IS_BLOCKED);

  return new Result.SuccessResult(USER_SUCCESSFULLY_LOGIN);
}

module.exports = {
  getAllUsers,
  insertUser,
  userVerify,
};
