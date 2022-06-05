const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if( req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3])); // converts array into string
        res.end();
    }
}); // has all the EvenEmitter object functionality such as server.on, server.emit()

server.listen(3000);

console.log('Listening on port 3000');
 