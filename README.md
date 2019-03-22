# drb (Date Regex Builder) <!-- omit in toc -->

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

A library to aide in generating regular expressions to match dates. See the [documentation](https://mattpjohnson.github.io/drb).

# Table of Contents <!-- omit in toc -->

- [Purpose](#purpose)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

# Purpose

Regular expressions are difficult and can get messy pretty quickly. Consider creating a regular expression to match a day of the month. A naïve attempt might be to create a regex that matches two digits:

```shell
\d{2}
```

But there's a problem with this - `99` matches and is not a valid day of the month. So we can refactor this to be a little more clever:

```shell
[0-3][0-9]
```

This is closer to what we want, but it still matches `35`.

```shell
[0-2][0-9]|3[0-1]
```

We're almost there. Valid dates still match correctly, and `32+` numbers are not matching, which is what we want. However, `00` generates a match when using this regex. We can finally meet all of the requirements with the following regex:

```shell
0[1-9]|[1-2][0-9]|3[0-1]
```

Using drb, this regex is easy to generate:

```javascript
const drbMoment = drb(momentFormatter)
const regex = drbMoment('DD')
```

# Installation

You can install drb using npm

```shell
npm install --save drb
```

# Usage

TODO

# License

MIT
