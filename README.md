# React API Driven CMS

**PLEASE NOTE**:
I am undertaking this for my own learning so cannot gurantee support or even that it will get finished! This is being developed to be used with a custom API service. Without access to this API or without replacing the service in the project you will be unable to run the CMS. A dummy API will be available in due course as well as the full source to adapt your own. 

## Table of contents
* [Setup](#user-content-setup)
* [Running in dev mode](#user-content-running-in-dev-mode)
* [Build (production)](#user-content-build-production)
* [Running in preview production mode](#user-content-running-in-preview-production-mode)
* [Linting](#user-content-linting)
* [Git hooks](#user-content-git-hooks)
* [Changelog](#user-content-changelog)


<sup>1</sup> Using source maps breaks urls in the CSS loader - https://github.com/webpack/css-loader/issues/232. Try [this](https://github.com/webpack/css-loader/issues/232#issuecomment-240449998) to fix it (but it breaks testing from local network).

## Setup

Tested with node 6.x and 7.x

```
$ yarn install
```

## Running in dev mode

```
$ npm start
```

Visit `http://localhost:3000/` from your browser of choice.
Server is visible from the local network as well.


## Build (production)

Build will be placed in the `build` folder.

```
$ npm run build
```

If your app is not running on the server root you should change `publicPath` at two places.

In `webpack.config.js` (ATM line 147):

```
output: {
  path: buildPath,
  publicPath: '/your-app/',
  filename: 'app-[hash].js',
},
```

and in `routes` (ATM line 9):

```
const publicPath = '/your-app/';
```

Don't forget the trailing slash (`/`). In development visit `http://localhost:3000/your-app/`.

## Running in preview production mode

This command will start webpack dev server, but with `NODE_ENV` set to `production`.
Everything will be minified and served.
Hot reload will not work, so you need to refresh the page manually after changing the code.

```
npm run preview
```

## Linting

For linting I'm using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb),
but some options are overridden to my personal preferences.

```
$ npm run lint
```

## Git hooks

Linting pre-push hook is not enabled by default.
It will prevent the push if lint task fails,
but you need to add it manually by running:

```
npm run hook-add
```

To remove it, run this task:

```
npm run hook-remove
```


-----

## Changelog

#### 0.0.1

* Initial setup
* Real login
