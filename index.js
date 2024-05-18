const http = require("http");
const ROUTES = require("./routes/routes");
const useStaticFiles = require("./middlewares/static-file-middlewares");

PORT = 5555;
const _service = http.createServer((req, res) => {
  useStaticFiles(req, res, () => {
    handleDynamicRoutes(req, res);
  });
});

const handleDynamicRoutes = (req, res) => {
  let found = false;

  for (const handler of ROUTES) {
    if (handler(req, res)) {
      found = true;
      break;
    }
  }
  if (!found) show404Page(req, res);
};

const show404Page = (req, res) => {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end(`NOT FOUND`);
};

_service.listen(PORT, () => {
  console.log(`Server is ${PORT} listening.`);
});
