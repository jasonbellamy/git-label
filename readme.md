# git-label [![Build Status](https://travis-ci.org/jasonbellamy/git-label.svg)](https://travis-ci.org/jasonbellamy/git-label)

> Automates and simplifies the creation of labels for GitHub repositories


## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save git-label`


## Usage

```javascript
var gitLabel = require('git-label');

var config = {
  api   : 'https://api.github.com',
  repo  : 'username/repo'
  token : 'yoursupersecretapitoken'
};

var packages = ['pathto/package.json'];

// remove specified labels from a repo
gitLabel.remove(config, packages)
  .then(console.log)  //=> success message
  .catch(console.log) //=> error message

// add specified labels to a repo
gitLabel.add(config, packages)
  .then(console.log)  //=> success message
  .catch(console.log) //=> error message
```


#API

### add( config, packages )

Name         | Type     | Argument     | Default | Description
-------------|----------|--------------|---------|------------
config       | `object` | `<required>` | `null`  | the server configuration object
config.api   | `string` | `<required>` | `null`  | the api endpoint to connect to
config.token | `string` | `<required>` | `null`  | the api token to use
config.repo  | `string` | `<required>` | `null`  | the git repo to add labels to
packages     | `array`  | `<required>` | `null`  | the path(s) to the package files to use

### remove( config, packages )

Name         | Type     | Argument     | Default | Description
-------------|----------|--------------|---------|------------
config       | `object` | `<required>` | `null`  | the server configuration object
config.api   | `string` | `<required>` | `null`  | the api endpoint to connect to
config.token | `string` | `<required>` | `null`  | the api token to use
config.repo  | `string` | `<required>` | `null`  | the git repo to add labels to
packages     | `array`  | `<required>` | `null`  | the path(s) to the package files to use


## Developing

[git-label](https://github.com/jasonbellamy/git-label) is built using **ES6**. Run the following task to compile the `src/` into `dist/`.

```bash
npm run build
```


## Related

- [git-label-cli](https://github.com/jasonbellamy/git-label-cli) - CLI for this module
- [git-label-packages](https://github.com/jasonbellamy/git-label-packages) - Default label packages for this module


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2016 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
