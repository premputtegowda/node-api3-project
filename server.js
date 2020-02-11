const express = require('express');

const server = express();

server.use(express.json());
server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
 const {method, url } = req;
//  function timeStamp(){
//    const d = new Date();
//    const year = d.getFullYear;
//    const month = d.getMonth()+1
//    const date = d.getDate();
//    return `${month}/${date}/${year}`
//  }

 
 
 console.log(method, url, new Date())
 next()
}

module.exports = server;
