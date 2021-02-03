const ghpages = require('gh-pages');

ghpages.publish('build', {
    message: 'Auto-generated commit',
    branch: 'publish'
}, () => console.log('publish success'));
