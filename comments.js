// Create web server
// const http = require('http');
// const fs = require('fs');
// const port = 8080;
// const server = http.createServer((req, res) => {
//     fs.readFile(__dirname + '/index.html', (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.end(JSON.stringify(err));
//             return;
//         }
//         res.writeHead(200);
//         res.end(data);
//     });
// });
// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });