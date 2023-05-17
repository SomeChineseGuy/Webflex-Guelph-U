const net = require('net');

const server = net.createServer((client)=> {
  console.log('Someone has connected! :)');
  client.on('data', (data) => {
    console.log('The client: ' + data);
  });

  client.write('hey how are you?')

  // setInterval(() => {
  //   client.write('Hey back to you!')
  // }, 1000);
  
})

server.on('error', (err) => {
  throw err;
});

server.listen(8999, () => {
  console.log('We Turned on the Server!!!! :D ');
});