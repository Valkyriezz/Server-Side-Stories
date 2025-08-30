const http = require("http");
const catMe = require("cat-me");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h1>Welcome to our home page</h1>
      <img src="https://cataas.com/cat?${Date.now()}" alt="Random Cat" /> <!-- Random cat image -->
      <p>Refresh to see a new cat!</p>
    `);
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back home</a>
    `);
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
