const net = require('net');
const stdin = process.stdin;

const client = net.createConnection({host: 'localhost', port: 8999 })

client.setEncoding('utf8');

client.on('connect', () => {
  console.log('Welcome, you are connected');
});

stdin.on('data', (data) => {
  // What you in your terminal 
  // After you press enter
  // will be sent to the server
  console.log(data);
  client.write(data)
})

// setInterval(()=> {
//   client.write("Hello! HOw's it going??");
// }, 2000)

client.on("data", (data) => {
  console.log("Message from client: ", data);
});
