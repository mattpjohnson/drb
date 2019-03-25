# drb <!-- omit in toc -->

> Easily build date regular expressions

<p>
  <a href="https://travis-ci.org/mattpjohnson/drb">
    <img alt="Travis CI Build Status" src="https://img.shields.io/travis/mattpjohnson/drb/master.svg?style=flat&label=Travis+CI">
  </a>
  <a href="https://circleci.com/gh/mattpjohnson/drb">
    <img alt="CircleCI Build Status" src="https://img.shields.io/circleci/project/github/mattpjohnson/drb/master.svg?style=flat&label=CircleCI">
  </a>
  <a href="https://gitlab.com/mattpjohnson/crb/pipelines">
    <img alt="GitLab CI Build Status" src="https://gitlab.com/mattpjohnson/drb/badges/master/build.svg?style=flat">
  </a>
  <a href="https://codecov.io/gh/mattpjohnson/drb">
    <img alt="Codecov Coverage Status" src="https://img.shields.io/codecov/c/github/mattpjohnson/drb?style=flat">
  </a>
  <a href="https://sonarcloud.io/dashboard?id=mattpjohnson_drb">
    <img alt="SonarQube Technical Debt" src="https://img.shields.io/sonar/http/sonarcloud.io/mattpjohnson_drb/tech_debt.svg?style=flat">
  </a>
  <a href="https://github.com/prettier/prettier#badge">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat">
  </a>
</p>

drb (Date Regex Builder) is a library to aide in generating regular expressions to match dates.

# Table of Contents <!-- omit in toc -->

- [Purpose](#purpose)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

# Purpose

Regular expressions are difficult to get right and can get messy quickly. Consider creating a regular expression to match a day of the month. A naïve attempt might be to create a regex that matches two digits:

```shell
\d{2}
```

But there's a problem with this - `99` matches this regular expression and is not a valid day of the month. So we must refactor this to be a little more clever:

```shell
[0-3][0-9]
```

This is closer to what we want, but it still matches numbers from `32` to `39`.

```shell
[0-2][0-9]|3[0-1]
```

We're almost there. Valid dates still match correctly, and `32+` numbers are not matching, which is what we want. However, `00` generates a false-positive match when using this regex. We can finally meet all of the requirements with the following regex:

```shell
0[1-9]|[1-2][0-9]|3[0-1]
```

Using drb, this regex is easy to generate:

```javascript
const drbMoment = drb(momentFormatter)
const regex = drbMoment('DD')
console.log(regex) // (?:(?:0[1-9]|[12][0-9]|3[01]))
```

# Installation

Install with [npm](https://npmjs.com):

```sh
$ npm install --save drb
```

Or optionally using [yarn](https://yarnpkg.com)

```sh
$ yarn add drb
```

# Usage

Import drb and a formatter (currently only [Moment.js](http://momentjs.com) is supported) using one of these methods:

Node.js

```javascript
const { drb } = require('drb')
const { momentFormatter } = require('drb/formatters/momentFormatter')
```

ES6/TypeScript

```javascript
import { drb } from 'drb'
import { momentFormatter } from 'drb/formatters/momentFormatter'
```

Now combine drb with a formatter

```javascript
const drbMoment = drb(momentFormatter)
```

Use `drbMoment` to create regexes using the syntax provided by [Moment.js](http://momentjs.com)

```javascript
const regex1 = drbMoment('DD')
console.log(regex1) // (?:(?:0[1-9]|[12][0-9]|3[01]))

const regex2 = drbMoment('MM-DD-YYYY hh:mm:ss')
console.log(regex2)
// (?:(?:0[1-9]|1[0-2]))(?:-)(?:(?:0[1-9]|[12][0-9]|3[01]))(?:-)(?:\d{4})(?: )(?:(?:0[1-9]|1[0-2]))(?::)(?:(?:0[0-9]|[1-5][0-9]))(?::)(?:(?:0[0-9]|[1-5][0-9]))
```

# License

MIT
