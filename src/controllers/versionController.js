const { getVersionsFromGitHub } = require('../models/versionModel');

const getNaisTrainingDiaryVersions = async (req, res) => {
    const versions = await getVersionsFromGitHub('SpanishHgames', 'NaisTrainingDiary');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(versions, null, 2));
};

const getTeachingFeelingLauncherVersions = async (req, res) => {
    const versions = await getVersionsFromGitHub('SpanishHgames', 'teaching-feeling---Launcher');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(versions, null, 2));
};

module.exports = {
    getNaisTrainingDiaryVersions,
    getTeachingFeelingLauncherVersions,
};
