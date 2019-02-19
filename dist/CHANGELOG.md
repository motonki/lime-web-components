# [2.4.0](https://github.com/Lundalogik/lime-web-component-interfaces/compare/v2.3.0...v2.4.0) (2019-02-19)


### Features

* **query interface:** add optional type attribute on expression interface ([2fd6a78](https://github.com/Lundalogik/lime-web-component-interfaces/commit/2fd6a78))

# [2.3.0](https://github.com/Lundalogik/lime-web-component-interfaces/compare/v2.2.0...v2.3.0) (2019-02-05)


### Bug Fixes

* **limetype interfaces:** some fixes in the interfaces ([00693fe](https://github.com/Lundalogik/lime-web-component-interfaces/commit/00693fe))


### Features

* **limetype:** add interfaces for limetype and property ([5014f4d](https://github.com/Lundalogik/lime-web-component-interfaces/commit/5014f4d))
* **query:** add interface for query ([2b8f91e](https://github.com/Lundalogik/lime-web-component-interfaces/commit/2b8f91e))

# [2.2.0](https://github.com/Lundalogik/lime-web-component-interfaces/compare/v2.1.0...v2.2.0) (2019-01-31)


### Features

* **filters state decorator:** adds filters decorator to state ([7942bcb](https://github.com/Lundalogik/lime-web-component-interfaces/commit/7942bcb))

# [2.1.0](https://github.com/Lundalogik/lime-web-component-interfaces/compare/v2.0.0...v2.1.0) (2018-11-30)


### Features

* **release:** force new release ([17e2bc8](https://github.com/Lundalogik/lime-web-component-interfaces/commit/17e2bc8))

# [2.0.0](https://github.com/Lundalogik/lime-web-component-interfaces/compare/v1.10.0...v2.0.0) (2018-11-30)


### Code Refactoring

* **state:** removed connect decorator in favor of specific services ([6e22946](https://github.com/Lundalogik/lime-web-component-interfaces/commit/6e22946))


### BREAKING CHANGES

* **state:** The @Connect decorator has been removed. Consumers should instead use service
specific decorators like @Limetypes or @CurrentLimeobject to get information from the state. The
generic state service have also been deprecated in favor of multiple specific services.
