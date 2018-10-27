# fcc-react-typescript-boilerplate

Once it was a simple boilerplate for React Projects section on freeCodeCamp and although it can be used that way, the simplicity is gone...

## Installation

In terminal:

1. `git clone <repo_url>`
2. `rm -rf .git README.md` to get rid of all existing git configs and records
3. `git init` to initialize a repo anew
4. `git remote add origin <url>` to add new remote for your project
5. `yarn install`
6. Edit name, licensing, etc. in `package.json`

## Basic Usage

- Dev build and serving with webpack-dev-server:
  ```
  yarn start
  ```
- Production build:
  ```
  yarn build
  ```
- Run tests:
  ```
  yarn test
  ```
  For more npm scripts check `package.json`

## How this works

**Webpack** goes through entry points, analyzes the code and bundles all project dependencies together. It uses **babel-loader** to compile `.ts` and `.tsx` files down to javascript syntax that most modern browsers can understand (`.browserslistrc`).

There are typings for **React** and **Redux** and several additional declarations to prevent TS compilation errors, when you use **Redux DevTools** or **react-hot-loader**.

Styles are written with **css-modules**. **[typings-for-css-modules-loader](https://github.com/Jimdo/typings-for-css-modules-loader)** removes the pain from adding them into components by automatically generating typings.

There is **Jest** testing framework, already set up to work with TS and **[Enzyme](https://github.com/airbnb/enzyme)**.

Githook with **tslint** precedes any commit.

There are more things behind the scenes in configs and `package.json`, but the main ideas are above.
