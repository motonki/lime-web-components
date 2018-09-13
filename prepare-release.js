const fs = require('fs');

fs.appendFileSync('.npmrc', `\n//npm.lundalogik.com/:_authToken=\${NPM_TOKEN}`, 'utf8');
