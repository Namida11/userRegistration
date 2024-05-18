class Router {
  constructor() {
    this.routes = {};
  }

  addRoute(path, handler, isExtractId = false) {
    console.log(path);
    this.routes[path] = { handler, isExtractId };
  }

  handleRoute(req, res) {
    const { url } = req;

    let spiltedUrl = url;
    if (this.isParamPath(url)) spiltedUrl = this.getBaseUrl(url);

    const route = this.routes[spiltedUrl];

    if (!route) return false;

    const { handler, isExtractId } = route;
    const id = isExtractId ? this.getExtractIdFromUrl(url) : null;
    handler(req, res, id);
    return true;
  }

  isParamPath(url) {
    const lastPart = url.split("/").pop();
    return !isNaN(+lastPart);
  }

  getBaseUrl(url) {
    const splitedUrl = url.split("/");

    splitedUrl.pop();
    return `${splitedUrl.join("/")}/`;
  }

  getExtractIdFromUrl(url) {
    return +url.split("/").pop();
  }
}
module.exports = Router;
