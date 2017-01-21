# fcc-react-boilerplate
A simple boilerplate for React Projects section of freeCodeCamp.

## Installation
In terminal:

1. `git clone <repo_url>` to clone obviously
2. `rm -rf .git README.md` to get rid of all existing git configs and records
3. `git init` to initialize new repo
4. `git remote origin <url>` to add new remote for your project
5. `npm install` or `yarn install` to install packages and meet dependencies
6. Remove/replace existing html, css and javascript files in src/ and test/ directories

## Usage

* To run web server, either:
`webpack-dev-server` or `npm start`
* To build for production:
`npm run build`
* To run tests:
`npm test` or `npm run test:watch` for auto run

## What's included
1. **Webpack** for bundling components, running tasks and generally orchestrating the work.
2. **Babel** for transpiling ES6 and JSX syntax.
3. **React** obviously.
4. **Redux** as alternative for state management of components.
5. **CSS and SASS loaders** for injecting styles into resulting bundle built by webpack.
6. **Mocha**, **Chai**, **jsdom** and **React Test Utilities** for testing components.
7. **React Hot Loader** for preserving the state of components and real time editing.
