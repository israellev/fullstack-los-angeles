const http = require('http');//ייבוא ספריית http 

//create the server 
const server = http.createServer((req, res)=>{
    res.end('Hello World!!');
});

//start the server 
server.listen(3000, ()=>{
    console.log(`Server listening on port ${3000}`);
});

