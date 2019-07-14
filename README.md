# iox-store
 store in a main file

[![npm](https://img.shields.io/npm/v/iox-store.svg?style=flat-square)](https://www.npmjs.com/package/iox-store)
[![Travis (.com)](https://img.shields.io/travis/com/io-extreme/iox-store.svg?style=flat-square)](https://travis-ci.com/io-extreme/iox-store/)
[![Codecov](https://img.shields.io/codecov/c/github/io-extreme/iox-store.svg?style=flat-square)](https://codecov.io/gh/io-extreme/iox-store)
[![Known Vulnerabilities](https://snyk.io/test/github/io-extreme/iox-store/badge.svg?style=flat-square)](https://snyk.io/test/github/io-extreme/iox-store)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![Greenkeeper badge](https://badges.greenkeeper.io/io-extreme/iox-store.svg?style=flat-square)](https://greenkeeper.io/)

## Installation
```
npm install iox-store --save
```
## Options

- **$** Object  
> direct access in store

- **set** (name, value)  
> set the variable in store

- **get** (name)  
> get the variable in store

- **delete** (name)  
> delete variable in store   

# Example

``` javascript
const store = require('iox-store')

// set
store.set('main', 20)

// or
store.set('main', 25).set('multiple', 19)

// get
console.log(store.get('main'))

// delete
store.delete('main')

// direct access
console.log(store.$.multiple)
```
