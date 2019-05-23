DOCKER_IMAGE = lime-web-components

.PHONY: build
build:
	@# Builds the ci image lime-web-components.
	docker build --pull -t $(DOCKER_IMAGE) .

.PHONY: commitlint
commitlint: HASH=''
commitlint:
	@# Lint the commit message of the commit with the given HASH
	docker run --rm -w /lime $(DOCKER_IMAGE) npx commitlint -f $(HASH)^ -t $(HASH)

.PHONY: release_dry_run
release_dry_run: BRANCH=''
release_dry_run:
	@# Builds the production build.
	docker run --rm --user=root -e CI -e GH_USERNAME -e GH_TOKEN -e NPM_TOKEN -e GIT_AUTHOR_NAME -e GIT_AUTHOR_EMAIL -e GIT_COMMITTER_NAME -e GIT_COMMITTER_EMAIL -w /lime $(DOCKER_IMAGE) /bin/bash -c "npm run build && cd dist && npx lerna exec --concurrency 1 -- npx --no-install semantic-release --dry-run --branch $(BRANCH)"

.PHONY: release
release: BRANCH='master'
release:
	@# Bumps and publishes.
	docker run --rm --user=root -e CI -e GH_USERNAME -e GH_TOKEN -e NPM_TOKEN -e GIT_AUTHOR_NAME -e GIT_AUTHOR_EMAIL -e GIT_COMMITTER_NAME -e GIT_COMMITTER_EMAIL -w /lime $(DOCKER_IMAGE) /bin/bash -c "npm run build && cd dist && npx lerna exec --concurrency 1 -- npx --no-install semantic-release --branch $(BRANCH)"
