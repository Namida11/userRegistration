const generaterResponce = require("../utils/generater-responce");
const loadEJS = require("../utils/load-ejs");
const USER = require("../models/user");
const { getData } = require("../services/base-service");
const userService = require("../services/user-service");
const parseRequestBody = require("../utils/parseRequest");

const getLoginPage = (req, res) => {
  loadEJS("login", req, res);
};

async function verifyUser(req, res) {
  const body = await parseRequestBody(req);
  const result = await userService.userVerify(body);
  generaterResponce(200, res, result);
}

module.exports = {
  getLoginPage,
  verifyUser,
};
