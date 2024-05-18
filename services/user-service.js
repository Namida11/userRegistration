const baseService = require("./base-service");
const { JSON_KEY } = require("../utils/enum");

async function getAllUsers() {
  return await baseService.getData(JSON_KEY.USERS);
}

async function insertUser(model) {
  return await baseService.insertData(JSON_KEY.USERS, model);
}

module.exports = {
  getAllUsers,
  insertUser,
};
