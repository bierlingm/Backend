var fibonacci = require("./fibonacci");

const http = require("http");
const filesystem = require("fs");

const requestListener = function (req, res) {
  const { url, method } = req;
  console.log("Access-Log", method, url);

  if (url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    //var fibonacci = filesystem.readFileSync("fibonacci.js");
    //const result = fibonacci(1);
    res.end(JSON.stringify(fibonacci(10)));
  }
};
const server = http.createServer(requestListener);
server.listen(8080);

// const requestListener = function (req, res) {
//   res.writeHead(200);
//   // console.log(Object.keys(req.path));
//   res.end("buhjah");
// };

// const server = http.createServer(requestListener);
// server.listen(8080);
