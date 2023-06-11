import http from "http";

import config from "./config.js";

http
  .createServer(async function (request, response) {
    try {
      if (request.url === "/check") {
        response.end("Sent");
        return;
      }
    } catch (err) {
      console.log(err);
    }

    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
  })
  .listen(config.PORT, () => {
    console.log(`listening on port ${config.PORT}`);
  });
