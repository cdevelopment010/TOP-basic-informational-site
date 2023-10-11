const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {

    let filePath = path.join(__dirname, "public");

    switch(req.url) {
        case '/':
            filePath = path.join(filePath,"routes","index.html");
            break;
        case '/about':
            filePath = path.join(filePath,"routes","about.html");
            break;
        case '/contact-me':
            filePath = path.join(filePath,"routes","contact-me.html");
            break;
        case '/styles/style.css': // Handle CSS file request
            filePath = path.join(__dirname, 'public', "styles","style.css");
            break;
        default: 
            filePath = path.join(filePath,"routes","404.html");
            break;
    }

    const extname = path.extname(filePath);
    const contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
    }[extname] || 'text/plain';

    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(404, "text/html");
            res.end();
            return;
        }

        res.writeHead(200, contentType); 
        res.end(data); 

    })
            
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
