const { getRepos } = require('recherche-repos-github');getRepos().then((repositories) => console.log(repositories));
