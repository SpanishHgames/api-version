const versions = require('../models/versionModel');

const getAllVersions = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(versions));
};

module.exports = {
    getAllVersions,
};
