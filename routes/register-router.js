const {
  getRegisterPage,
  getRegisterUser,
} = require("../controllers/register-controller");
const {
  REGISTER_ENDPOINT,
  REGISTER_USER_ENDPOINT,
} = require("../utils/url-helper");
const Route = require("./route");

const router = new Route();

router.addRoute(REGISTER_ENDPOINT, getRegisterPage);
router.addRoute(REGISTER_USER_ENDPOINT, getRegisterUser);

module.exports = router.handleRoute.bind(router);
