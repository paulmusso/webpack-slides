# Webpack slides

[![Build Status](https://travis-ci.org/paulmusso/webpack-slides.svg?branch=master)](https://travis-ci.org/paulmusso/webpack-slides)
[![Dependency Status](https://david-dm.org/paulmusso/webpack-slides.svg)](https://david-dm.org/paulmusso/webpack-slides)
[![devDependency Status](https://david-dm.org/paulmusso/webpack-slides/dev-status.svg)](https://david-dm.org/paulmusso/webpack-slides#info=devDependencies)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Webpack presentation (use Reveal.JS)

## Getting started

Ensure you have [node][node-link] greater than version 5 

### Installation

1. Get repo with `git clone https://github.com/paulmusso/webpack-slides.git`

2. Delete the existing git repository by running `rm -rf .git`

3. Run `npm install` to install the dependencies

### Development server (with hot reload)

```bash
npm start
```

Go to `http://localhost:8080` and you should see the app running!

### Build for production

```bash
npm run build
```

Output files are copied to `dist` folder

### Serve production files

```bash
npm run serve
```

## License

This project is licensed under the MIT license

[node-link]: https://nodejs.org/en/