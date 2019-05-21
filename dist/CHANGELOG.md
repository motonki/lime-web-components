# [5.1.0](https://github.com/Lundalogik/lime-web-component-interfaces/compare/v5.0.0...v5.1.0) (2019-05-21)


### Features

* **route-service:** send in origin to track from where a user navigates to the table-view ([8ddfd1d](https://github.com/Lundalogik/lime-web-component-interfaces/commit/8ddfd1d))

# [5.0.0](https://github.com/Lundalogik/lime-web-component-interfaces/compare/v4.1.0...v5.0.0) (2019-05-20)


### Features

* add TaskService to LimeWebComponentPlatform ([8640efc](https://github.com/Lundalogik/lime-web-component-interfaces/commit/8640efc))


### BREAKING CHANGES

* The LimeWebComponentPlatform interface has changed.

# [4.1.0](https://github.com/Lundalogik/lime-web-component-interfaces/compare/v4.0.0...v4.1.0) (2019-05-17)


### Features

* **platform:** add TaskService to plugininterface ([9a344ea](https://github.com/Lundalogik/lime-web-component-interfaces/commit/9a344ea))
* **task-service:** add task service interface ([4e703db](https://github.com/Lundalogik/lime-web-component-interfaces/commit/4e703db))

# [4.0.0](https://github.com/Lundalogik/lime-web-component-interfaces/compare/v3.0.0...v4.0.0) (2019-05-17)


### Features

* **commandbus:** add command events ([4082e2c](https://github.com/Lundalogik/lime-web-component-interfaces/commit/4082e2c))
* **event dispatcher:** new service for handling application events ([565055c](https://github.com/Lundalogik/lime-web-component-interfaces/commit/565055c))


### BREAKING CHANGES

* **event dispatcher:** Added eventDispatcher service on platform interface

# [3.0.0](https://github.com/Lundalogik/lime-web-component-interfaces/compare/v2.9.0...v3.0.0) (2019-05-14)


### Features

* **commandbus:** new commandbus service ([469c668](https://github.com/Lundalogik/lime-web-component-interfaces/commit/469c668))
* **commands:** commands for create new and bulk ([6fdccf4](https://github.com/Lundalogik/lime-web-component-interfaces/commit/6fdccf4))
* **dialog:** new service for handling dialogs ([88ec04c](https://github.com/Lundalogik/lime-web-component-interfaces/commit/88ec04c))


### Reverts

* **action:** remove old action service on the platform ([573fab3](https://github.com/Lundalogik/lime-web-component-interfaces/commit/573fab3))


### BREAKING CHANGES

* **dialog:** New dialog service on the platform interface
* **action:** Removed action service in favor of commandbus service
* **commandbus:** New commandbus service on the platform interface
