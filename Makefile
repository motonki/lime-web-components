DOCKER_IMAGE = lime-web-components

.PHONY: build
build:
	@# Builds the ci image lime-web-components.
	docker build --pull -t $(DOCKER_IMAGE) .

.PHONY: lint
lint:
	@# Lints all applicable files.
	docker run --rm -w /lime $(DOCKER_IMAGE) npm run lint

.PHONY: commitlint
commitlint: HASH=''
commitlint:
	@# Lint the commit message of the commit with the given HASH
	docker run --rm -w /lime $(DOCKER_IMAGE) npx commitlint -f $(HASH)^ -t $(HASH)

.PHONY: release_dry_run
release_dry_run: BRANCH='master'
release_dry_run:
	@# Builds the production build.
	docker run --rm --user=root -e CI -e GH_USERNAME -e GH_TOKEN -e NPM_TOKEN -e GIT_AUTHOR_NAME -e GIT_AUTHOR_EMAIL -e GIT_COMMITTER_NAME -e GIT_COMMITTER_EMAIL -w /lime $(DOCKER_IMAGE) /bin/bash -c "npm run build && npx lerna version --allow-branch=$(BRANCH) --yes --no-push --no-git-tag-version && git status && git diff"

.PHONY: release
release: BRANCH='master'
release:
	@# Bumps and publishes.
	docker run --rm --user=root -e CI -e GH_USERNAME -e GH_TOKEN -e NPM_TOKEN -e GIT_AUTHOR_NAME -e GIT_AUTHOR_EMAIL -e GIT_COMMITTER_NAME -e GIT_COMMITTER_EMAIL -w /lime $(DOCKER_IMAGE) /bin/bash -c "npm run build && npx lerna version --allow-branch=$(BRANCH) --conventional-commits --create-release=github --yes && npx lerna publish from-git --registry=http://npm.lundalogik.com:4873/"
