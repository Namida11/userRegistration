const path = require("path");
const fs = require("fs");
const { CONTENT_TYPES } = require("../utils/constant");
const getRootPath = require("../utils/root-path");

function useStaticFiles(req, res, next) {
  const filePath = path.join(getRootPath(), "public", req.url);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      next();
    } else {
      const extname = path.extname(filePath);
      console.log(extname);
      res.writeHead(200, {
        "Content-Type": CONTENT_TYPES[extname] || "application/octet-stream",
      });
      res.end(content);
    }
  });
}

module.exports = useStaticFiles;
