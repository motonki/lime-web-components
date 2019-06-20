git remote rm origin
git remote add origin "https://${GH_TOKEN}@github.com/lundalogik/lime-web-components.git"
npm run build
npx lerna version --loglevel=DEBUG --conventional-commits --create-release=github --yes
npx lerna --loglevel=INFO publish from-git --registry=http://npm.lundalogik.com:4873/
