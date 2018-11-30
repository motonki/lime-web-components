# [2.0.0](https://github.com/Lundalogik/lime-web-component-interfaces/compare/v1.10.0...v2.0.0) (2018-11-30)


### Code Refactoring

* **state:** removed connect decorator in favor of specific services ([6e22946](https://github.com/Lundalogik/lime-web-component-interfaces/commit/6e22946))


### BREAKING CHANGES

* **state:** The @Connect decorator has been removed. Consumers should instead use service
specific decorators like @Limetypes or @CurrentLimeobject to get information from the state. The
generic state service have also been deprecated in favor of multiple specific services.
