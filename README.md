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

## What's included

* Typescript support via **ts-loader** with source maps
* Efficient transpiling and polyfills with **babel-loader**, **@babel/preset-env** and **browserslist**
* **css-modules** with TS typings
* Testing with **jest** and **enzyme**
* Precommit githook with **eslint** and **prettier**
* Autoprefixer

## What's left aside

* **react-hot-loader**
