const { LOGIN_ENDPOINT, LOGIN_USER } = require("../utils/url-helper");
const loginController = require("../controllers/login-controller");
const Router = require("./route");

const router = new Router();

router.addRoute(LOGIN_ENDPOINT, loginController.getLoginPage);
router.addRoute(LOGIN_USER, loginController.verifyUser);

module.exports = router.handleRoute.bind(router);
