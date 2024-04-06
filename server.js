const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`CyberInfo is now Connected to Server`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("CyberInfo " + Date.now()) });
}
 
module.exports = keepAlive;
