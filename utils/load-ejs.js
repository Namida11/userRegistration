const path = require("path");
const ejs = require("ejs");
const getRootPath = require("./root-path");
const fs = require("fs");
const { CONTENT_TYPES } = require("./constant");
const generaterResponce = require("./generater-responce");

const loadEJS = (filename, req, res, datas) => {
  const filePath = path.join(
    getRootPath(),
    "views",
    "pages",
    `${filename}.ejs`
  );

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      // generaterResponce({
      //   res: res,
      //   status: 500,
      //   header: CONTENT_TYPES[".txt"],
      //   data: "Internal server error",
      // });
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(`Internal server error`);
    } else {
      const renderHTML = ejs.render(data, {
        rootPath: getRootPath(),
        ...datas,
      });
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(renderHTML);
      // generaterResponce({
      //   res: res,
      //   status: 200,
      //   header: CONTENT_TYPES[".html"],
      //   data: renderHTML,
      // });
    }
  });
};

module.exports = loadEJS;
