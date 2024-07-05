const http = require('http');
const versionRoutes = require('./src/routes/versionRoutes');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            message: 'Welcome to the version manager',
            routes: {
                versions: '/api/versions',
            }
        }));
    } else if (req.url.startsWith('/api/versions')) {
        versionRoutes(req, res);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
