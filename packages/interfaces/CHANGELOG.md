# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.2.0](https://github.com/Lundalogik/lime-web-components/compare/v2.1.0...v2.2.0) (2019-12-20)


### Features

* **limetype interface:** adds system type to property type ([3e1799e](https://github.com/Lundalogik/lime-web-components/commit/3e1799e4393df1facf7b0d4d9357140c06c3ad31))





# [2.1.0](https://github.com/Lundalogik/lime-web-components/compare/v2.0.0...v2.1.0) (2019-08-09)


### Features

* **notification-service:** report non-blocking and non-transient message ([e02ff9f](https://github.com/Lundalogik/lime-web-components/commit/e02ff9f))





# [2.0.0](https://github.com/Lundalogik/lime-web-components/compare/v1.4.1...v2.0.0) (2019-07-04)


### Code Refactoring

* **platform:** add get method in favor of public properties ([5d0c903](https://github.com/Lundalogik/lime-web-components/commit/5d0c903))


### BREAKING CHANGES

* **platform:** Removed all public properties, services are now retrieved with the `get` method.
New services can be registered with the `register` method which can also be used by 3rd parties to
register new services on the platform. Core platform service names are exposed in the
`PlatformServiceName` enum.





## [1.4.1](https://github.com/Lundalogik/lime-web-components/compare/v1.4.0...v1.4.1) (2019-06-28)

**Note:** Version bump only for package @limetech/lime-web-components-interfaces





# [1.4.0](https://github.com/Lundalogik/lime-web-components/compare/v1.3.0...v1.4.0) (2019-06-24)


### Features

* **task service:** add getStatus method ([fb28b85](https://github.com/Lundalogik/lime-web-components/commit/fb28b85))





# [1.3.0](https://github.com/Lundalogik/lime-web-components/compare/v1.2.8...v1.3.0) (2019-06-24)


### Features

* license under Apache-2.0 ([34b755e](https://github.com/Lundalogik/lime-web-components/commit/34b755e))





## [1.2.1](https://github.com/Lundalogik/lime-web-components/compare/v1.2.0...v1.2.1) (2019-06-19)

**Note:** Version bump only for package @limetech/lime-web-components-interfaces





# [1.2.0](https://github.com/Lundalogik/lime-web-components/compare/v1.1.0...v1.2.0) (2019-06-19)


### Features

* **notification:** add dismissible option ([b163f6b](https://github.com/Lundalogik/lime-web-components/commit/b163f6b))





# [1.1.0](https://github.com/Lundalogik/lime-web-components/compare/v1.0.1...v1.1.0) (2019-06-05)

**Note:** Version bump only for package @limetech/lime-web-components-interfaces





# [1.0.0](https://github.com/Lundalogik/lime-web-components/compare/v0.1.0...v1.0.0) (2019-05-29)


### Features

* convert lime-web-component-interfaces to monorepo lime-web-components ([2266483](https://github.com/Lundalogik/lime-web-components/commit/2266483))
* rename packages to `@limetech/lime-web-components-<package-name>` ([25f7a9f](https://github.com/Lundalogik/lime-web-components/commit/25f7a9f))
