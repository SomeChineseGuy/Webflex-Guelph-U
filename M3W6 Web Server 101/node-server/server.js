const http = require('http');
const PORT = 3000;

const server = http.createServer((request, repsonse) => {
  console.log('Someone has connected');
  console.log(request.url);
  if(request.url === '/') {
    repsonse.end('<h1>Welcome to my page! </h1>')
  } else if(request.url === '/something') {
    repsonse.end('<h1>There is nothing on this page :( </h1>')
  } else if(request.url === '/helloworld') {
    repsonse.end('<h1>Hello World</h1>')
  } else {
    repsonse.end("<h1>Nothing is made for this page</h1>")
  }
});

server.listen(PORT, () => {
  console.log('Server is now on!');
});