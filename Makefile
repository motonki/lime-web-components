DOCKER_IMAGE = lime-web-component-interfaces
DOCKER_DOCS_IMAGE = lime-web-component-interfaces-docs

.PHONY: build-docs
build-docs:
	@# Builds the docs image for lime-web-component-interfaces
	docker build --file Dockerfile.docs --pull -t $(DOCKER_DOCS_IMAGE) .

.PHONY: build
build:
	@# Builds the ci image lime-web-component-interfaces.
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
	docker run --rm --user=root -e CI -e GH_TOKEN -e NPM_TOKEN -e GIT_AUTHOR_NAME -e GIT_AUTHOR_EMAIL -e GIT_COMMITTER_NAME -e GIT_COMMITTER_EMAIL -w /lime $(DOCKER_IMAGE) /bin/bash -c "npm run build && cd dist && npx semantic-release --dry-run --branch $(BRANCH)"

.PHONY: release
release:
	@# Bumps and publishes.
	docker run --rm --user=root -e CI -e GH_TOKEN -e NPM_TOKEN -e GIT_AUTHOR_NAME -e GIT_AUTHOR_EMAIL -e GIT_COMMITTER_NAME -e GIT_COMMITTER_EMAIL -w /lime $(DOCKER_IMAGE) /bin/bash -c "npm run build && cd dist && npx semantic-release"
