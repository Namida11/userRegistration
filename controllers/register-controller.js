const generaterResponce = require("../utils/generater-responce");
const loadEJS = require("../utils/load-ejs");
const USER = require("../models/user");
const { getData } = require("../services/base-service");
const userService = require("../services/user-service");
const parseRequestBody = require("../utils/parseRequest");

const getRegisterPage = (req, res) => {
  loadEJS("register", req, res);
};

async function getRegisterUser(req, res) {
  const body = await parseRequestBody(req);
  const user = new USER(
    body.email,
    body.username,
    body.password,
    body.isActive
  );
  const result = await userService.insertUser(user);
  generaterResponce(201, res, result);
}

module.exports = {
  getRegisterPage,
  getRegisterUser,
};
