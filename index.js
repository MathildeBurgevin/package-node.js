const axios = require('axios');
const getRepos = async ({
  nomutilisateur = 'MathildeBurgevin',
  page = 1,
  per_page = 30
} = {}) => {
  try {
    const repos = await axios.get(
      `https://api.github.com/users/${nomutilisateur}/repos?page=${page}&per_page=${per_page}&sort=updated`
    );
    return repos.data
      .map((repo) => {
        return {
          nom: repo.name,
          url: repo.html_url,
          description: repo.description,
          etoiles: repo.stargazers_count
        };
      })
      .sort((first, second) => second.stars - first.stars);
  } catch (error) {
    return [];
  }
};getRepos().then((repositories) => console.log(repositories));
