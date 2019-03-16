# drb (Date Regex Builder) <!-- omit in toc -->

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

A boilerplate with some sane defaults for building TypeScript libraries to be consumed by both browsers and Node.js projects.

# Table of Contents <!-- omit in toc -->

- [What's Included](#whats-included)
- [Setting Up Your Development Environment](#setting-up-your-development-environment)
- [Setting Up CircleCI](#setting-up-circleci)
- [Setting Up Travis CI](#setting-up-travis-ci)
- [Setting Up GitLab CI](#setting-up-gitlab-ci)
- [Setting Up Codecov](#setting-up-codecov)
- [Setting Up SonarQube](#setting-up-sonarqube)
- [License](#license)

# What's Included

This project includes tooling for

- [TypeScript](https://www.typescriptlang.org/) to add static typing to JavaScript
- [Jest](https://jestjs.io/) for automated testing
- [EditorConfig](https://editorconfig.org/) for consistent coding styles
- [Prettier](https://prettier.io/) for code formatting
- [TSLint](https://palantir.github.io/tslint/) for linting per prettier rules
- [rollup.js](https://rollupjs.org/) for module bundling and tree-shaking

With easy integrations for

- [CircleCI](https://circleci.com/) for continuous integration
- [Travis CI](https://travis-ci.org/) for continuous integration
- [GitLab CI](https://about.gitlab.com/features/gitlab-ci-cd/) for continuous integration
- [Codecov](https://codecov.io/gh/) for code coverage reports
- [SonarQube](https://www.sonarqube.org/) to ensure code quality

# Setting Up Your Development Environment

It is recommended that you install the following extensions for your editor:

- [EditorConfig](https://editorconfig.org/)
- [Prettier](https://prettier.io/)
- [TSLint](https://palantir.github.io/tslint/)

If you're using VSCode all the recommended extensions are included in [this extension pack]().

# Setting Up CircleCI

Login to [CircleCI](https://circleci.com/) and select "Add Projects" in the left-hand sidebar.<br>
Scroll down until you find your project and click "Set Up Project".<br>
For Operating System choose Linux and then click the "Start Building" button located at the bottom of the page.

If you aren't using SonarQube you'll want to remove `&& ./sonarqube.sh` from the run command in .circleci/config.yml. <br>
If you would like to use SonarQube make sure you setup SonarQube following the instructions below.

If you don't setup or disable SonarQube then CircleCI will fail with the message<br>
`You're only authorized to execute a local (preview) SonarQube`<br>
`analysis without pushing the results to the SonarQube server.`<br>
`Please contact your SonarQube administrator.`

# Setting Up Travis CI

Login to [https://travis-ci.org/](https://travis-ci.org/) and click the "+" next to "My Repositories".<br>
Click the toggle next to your project.<br>
And that's it! Your project will build next time you push to your repository.

# Setting Up GitLab CI

If your code is hosted on GitLab:

- From within your GitLab repository, click on "CI/CD" in the left-hand sidebar and click "Run Pipeline" then "Create Pipeline".

If your code is hosted on GitHub:

- From [https://gitlab.com/](https://gitlab.com/) click "New project" and select "CI/CD for external repo".<br>
  Click "GitHub" and then click "Connect" next to your project.

# Setting Up Codecov

Login to [https://codecov.io/gh](https://codecov.io/gh) and give them access to your git hosting account.<br>
Copy your Upload Token and add it with the key `CODECOV_TOKEN` as an environment variable to the CI service of your choice.

Here are some links to docs for setting up environment variables with the CI services this project supports:

- [CircleCI](https://circleci.com/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project) - Setting an Environment Variable in a Project
- [Travis CI](https://docs.travis-ci.com/user/environment-variables/#defining-variables-in-repository-settings) - Defining Variables in Repository Settings
- [GitLab CI](https://docs.gitlab.com/ee/ci/variables/#variables) - Variables

Congrats! After your next CI run you will see coverage reports.

> Reminder: Don't forget to update the badge in README.md to point to your project in codecov

# Setting Up SonarQube

Login to [https://sonarcloud.io/](https://sonarcloud.io/) and click "Create new project".<br>
Select your repository and click "Create".<br>
Enter a name for your token and click "Generate".<br>
Copy the token that was generated and add it as an environment variable with the key `SONAR_LOGIN` to your CI project.

If you're not using CircleCI then update your CI run script to call `./sonarqube.sh` after build.

After your next CI run you will see code quality analysis in SonarQube.

# License

MIT
