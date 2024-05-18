// const fs = require("fs");
// const path = require("path");
// const getRootPath = require("../utils/root-path");
// const ejs = require("ejs");
const loadEJS = require("../utils/load-ejs");

const getDefaultPage = (req, res) => {
  loadEJS("default", req, res);
  // const ejsFilePath = path.join(getRootPath(), "views", "pages", "default.ejs");

  // fs.readFile(ejsFilePath, "utf-8", (err, data) => {
  //   if (err) {
  //     res.writeHead(500, { "Content-Type": "text/plain" });
  //     res.end(`Internal server error`);
  //   }
  //   const renderedHTML = ejs.render(data, { rootPath: getRootPath() });
  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.end(renderedHTML);
  // });
};

module.exports = {
  getDefaultPage,
};
