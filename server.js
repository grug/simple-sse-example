const http = require("http");

http
  .createServer(function (request, response) {
    if (
      request.headers.accept &&
      request.headers.accept == "text/event-stream"
    ) {
      response.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",

        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      });

      setInterval(function () {
        response.write(`data: ${Math.floor(Math.random() * 100 + 1)}\n\n`);
      }, 1500);
    } else {
      response.writeHead(200);
      response.write("Just a regular response");
      response.end();
    }
  })
  .listen(5000);
