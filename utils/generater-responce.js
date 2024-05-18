const generaterResponce = (status, res, data) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Max-Age": 86400,
  };
  res.writeHead(status, headers);
  res.end(JSON.stringify(data));
};

module.exports = generaterResponce;
