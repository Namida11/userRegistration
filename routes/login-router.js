const { LOGIN_ENDPOINT } = require("../utils/url-helper");
const loginController = require("../controllers/login-controller");
const Router = require("./route");

const router = new Router();

router.addRoute(LOGIN_ENDPOINT, loginController.getLoginPage);

module.exports = router.handleRoute.bind(router);
