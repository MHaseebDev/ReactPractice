const { createServer } = require("http");

const server = createServer((req, res) => {
  res.end("Hello workd");
});

server.listen(8000, () => {
  console.log("Listening on port 8000");
});
