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
