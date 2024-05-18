// const USER = require("../models/user");
// const { getData } = require("../services/base-service");
// const userService = require("../services/user-service");
// const generaterResponce = require("../utils/generater-responce");
// const parseRequestBody = require("../utils/parseRequest");

// async function getAllUsers() {
//   const data = await userService.getAllUsers();
//   generaterResponce(200, res, data);
// }

// async function addUser(req, res) {
//   const body = await parseRequestBody(req);
//   const user = new USER(
//     body.email,
//     body.username,
//     body.password,
//     body.isActive
//   );
//   const result = await userService.insertUser(user);
//   generaterResponce(201, res, result);
// }

// module.exports = {
//   getAllUsers,
//   addUser,
// };
