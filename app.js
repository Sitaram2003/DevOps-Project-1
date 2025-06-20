const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello from DevOps App!');
};

const server = http.createServer(requestHandler);
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});