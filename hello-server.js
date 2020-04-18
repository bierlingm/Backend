// Eigenen HTTP-Server anlegen, der auf “/andreas”,
// “Hello, Andreas” antwortet
//
// -irgendetwas “Hello, irgendetwas” etc.
// -Localhost:8000/dynamisch
// -hello-server.js
//var hello = require("./hello");

const http = require("http");

const requestListener = function (req, res) {
  const { url, method } = req;
  console.log("Access-Log", method, url);

  if (url == "/andreas") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const input = "Hello Andreas";

    res.end(input);
  } else if (url !== "/andreas") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const name = url.slice(1).charAt(0).toUpperCase() + url.slice(2);
    res.end("Hello, " + name);
  }
};
const server = http.createServer(requestListener);
server.listen(8182);
