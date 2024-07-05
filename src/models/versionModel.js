const axios = require('axios');

const GITHUB_API_BASE_URL = 'https://api.github.com/repos';

const getVersionsFromGitHub = async (owner, repo) => {
    try {
        const tagsResponse = await axios.get(`${GITHUB_API_BASE_URL}/${owner}/${repo}/tags`);
        const releasesResponse = await axios.get(`${GITHUB_API_BASE_URL}/${owner}/${repo}/releases`);
        
        const versions = tagsResponse.data.map(tag => {
            const release = releasesResponse.data.find(release => release.tag_name === tag.name);
            return {
                id: tag.commit.sha,
                version: tag.name,
                description: release ? release.body : 'No description available'
            };
        });

        return versions;
    } catch (error) {
        console.error('Error fetching data from GitHub:', error);
        return [];
    }
};

module.exports = {
    getVersionsFromGitHub,
};
