const http = require("http");

http.get("http://localhost:3000", (res) => {
  res.on("data", (data) => {
    console.info(data.toString());
  })
})