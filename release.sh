git remote rm origin
git remote add origin "https://${GH_TOKEN}@github.com/lundalogik/lime-web-components.git"
git push --set-upstream origin master

npm run build

cat << EOL >> ".npmrc"
registry=http://npm.lundalogik.com:4873/
//npm.lundalogik.com:4873/:_authToken=${NPM_TOKEN}
EOL

npx lerna version --loglevel=DEBUG --conventional-commits --create-release=github --yes
npx lerna --loglevel=INFO publish from-git --registry=http://npm.lundalogik.com:4873/ --yes --no-verify-access
