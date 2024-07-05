const { getNaisTrainingDiaryVersions, getTeachingFeelingLauncherVersions } = require('../controllers/versionController');

const versionRoutes = async (req, res) => {
    if (req.method === 'GET' && req.url === '/api/versions/NaisTrainingDiary') {
        await getNaisTrainingDiaryVersions(req, res);
    } else if (req.method === 'GET' && req.url === '/api/versions/teaching-feeling---Launcher') {
        await getTeachingFeelingLauncherVersions(req, res);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
};

module.exports = versionRoutes;
