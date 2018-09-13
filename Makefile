DOCKER_IMAGE = lime-web-component-interfaces

.PHONY: build
build:
	@# Builds the ci image lime-web-component-interfaces.
	docker build --pull -t $(DOCKER_IMAGE) .

.PHONY: publish
publish:
	@# Bumps and publishes.
	docker run --rm -e CI -e GH_TOKEN -e NPM_TOKEN -w /lime $(DOCKER_IMAGE) npm publish
