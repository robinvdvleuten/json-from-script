# Changelog

This page lists all releases/release notes for json-from-script back to v2.0.0. For releases prior to v2, please refer to the Github Releases Page.

## [3.1.0](https://github.com/robinvdvleuten/json-from-script/compare/v3.0.0...v3.1.0) (2025-09-18)

### Features

* accept generic so return type can be altered ([998ac44](https://github.com/robinvdvleuten/json-from-script/commit/998ac44b64701c2ae9abc55386fc42a75a380bc4))

### Bug Fixes

* pass through object when attribute is not defined ([906dc1c](https://github.com/robinvdvleuten/json-from-script/commit/906dc1cc5888062d8d8bacc4b54275ed57730b47))

## [3.0.0](https://github.com/robinvdvleuten/json-from-script/compare/v2.0.0...v3.0.0) (2025-09-18)

### Features

* return `unknown` instead of `any` ([3ea482d](https://github.com/robinvdvleuten/json-from-script/commit/3ea482d214fe38aa26aa257cb994a2a8eda646a7))

### Bug Fixes

* correctly decode non-named double quote ([8bde792](https://github.com/robinvdvleuten/json-from-script/commit/8bde7924e659673eb0eecedc6bbb39511bc63616))
* invalid param type for `document` ([aa80483](https://github.com/robinvdvleuten/json-from-script/commit/aa8048304c4704aea98fe359e7309d51380ae184))

## [2.0.0](https://github.com/robinvdvleuten/json-from-script/compare/v1.5.1...v2.0.0) (2018-09-19)

### ⚠ BREAKING CHANGES

* Instead of just passing the class name for the script tags or suffix of the data attribute, one now must pass the complete string.

### Features

* allow the query scope to be configured ([8e7cdea](https://github.com/robinvdvleuten/json-from-script/commit/8e7cdea1a5bd4f0344994e57cd73cce699a5c1e8))
* improved configuration of script selector and attributes ([fa8ae0c](https://github.com/robinvdvleuten/json-from-script/commit/fa8ae0ce31e63ba3414c850cd406aa3886d22cd5))
