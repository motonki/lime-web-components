const fs = require('fs');

try {
    fs.appendFileSync('.npmrc', `\n//npm.lundalogik.com/:_authToken=\${NPM_TOKEN}`, 'utf8');
    console.log(`Added NPM_TOKEN to '.npmrc'`)
}
catch (error) {
    console.error(error);
}
