const { DEFAULT_ENDPOINT } = require("../utils/url-helper");
const defaultController = require("../controllers/default-controller");

const Router = require("./route");

const router = new Router();

router.addRoute(DEFAULT_ENDPOINT, defaultController.getDefaultPage);

module.exports = router.handleRoute.bind(router);
