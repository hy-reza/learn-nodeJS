const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  const home = fs.createReadStream('./views/index.html', {encoding: 'utf-8'});
  const about = fs.createReadStream('./views/about.html', {encoding: 'utf-8'});
  const notFound = fs.createReadStream('./views/404.html', {encoding: 'utf-8'});
  
  res.setHeader('Content-Type', 'text/html');
  
  if(req.url === '/'){
    home.on('data', (chunk) => {
      res.statusCode = 200;
      res.end(chunk);
    })
  }else if(req.url === '/about'){
    about.on('data', (chunk) => {
      res.statusCode = 200;
      res.end(chunk);
    })
  }else{
    notFound.on('data', (chunk) => {
      res.statusCode = 404;
      res.end(chunk)
    })
  }

});

server.listen(3000, "localhost", () => {
  console.log("server started on port 3000");
});
