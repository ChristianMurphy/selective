# Contributing Guide

## Reporting an Issue

1. [Open an issue on GitHub](https://github.com/ChristianMurphy/selective/issues/new)
2. Describe the issue
3. Include any logs or stacktraces in a [Markdown fenced block](https://help.github.com/articles/creating-and-highlighting-code-blocks/)
4. Consider opening a [Pull Request](#sharing-code) resolving the issue.

## Requesting a Feature

1. [Open an issue on GitHub](https://github.com/ChristianMurphy/selective/issues/new)
2. Describe the feature
   * Provide an example if possible
   * Include links to external references as needed
3. Consider opening a [Pull Request](#sharing-code)

## Sharing Documentation

1. Create a fork of the repository
2. Create a feature branch
3. Make changes
4. [Commit changes](https://conventionalcommits.org)
5. Push branch
6. Open pull request to `ChristianMurphy/selective` on the `master` branch

## Sharing Code

1. Create a fork of the repository
2. [Install the project](#installation)
3. Create a feature branch
4. Make changes
5. [Test changes](#testing)
6. [Commit changes](https://conventionalcommits.org)
7. Push branch
8. Open pull request to `ChristianMurphy/selective` on the `master` branch

## Installation

### Requirements

1. [Git](https://git-scm.com/downloads)
2. [Node.js](https://nodejs.org/en/download/)
3. [Yarn](https://yarnpkg.com/en/docs/install)
4. [Lerna](https://lernajs.io)

### Setup

1. `git clone https://github.com/ChristianMurphy/selective`
   * :notebook: alternatively replace `ChristianMurphy/selective` with a fork name
   * If installing a fork additionally run `git remote add upstream https://github.com/ChristianMurphy/selective`
2. `cd selective`
3. `yarn`
4. `lerna bootstrap`

## Testing

1. `yarn test`
2. `yarn lint`
