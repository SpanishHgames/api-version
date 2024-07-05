const { getAllVersions } = require('../controllers/versionController');

const versionRoutes = (req, res) => {
    if (req.method === 'GET' && req.url === '/api/versions') {
        getAllVersions(req, res);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
};

module.exports = versionRoutes;
