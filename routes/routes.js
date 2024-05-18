const defaultHandlerRoute = require("./default-router");
const loginHandlerRoute = require("./login-router");
// const authHandlerRoute = require("./auth-router");
const registerHandlerRoute = require("./register-router");

module.exports = [defaultHandlerRoute, loginHandlerRoute, registerHandlerRoute];
