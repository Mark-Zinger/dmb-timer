const ghpages = require('gh-pages');

ghpages.publish('build', {
    message: 'Auto-generated commit'
}, () => console.log('publish success'));
