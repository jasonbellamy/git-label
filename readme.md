# git-label [![Build Status](https://travis-ci.org/git-label/git-label.svg)](https://travis-ci.org/git-label/git-label)

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


gitLabel(config, packages, function(err, res) {
  if (err) {
    throw err;
  }
 console.log(res); //=> Successfully created x labels
});
```


#API

### gitLabel( config, packages, callback )

Name         | Type     | Argument     | Default | Description
-------------|----------|--------------|---------|------------
config       | `object` | `<required>` | `null`  | the server configuration object
config.api   | `string` | `<required>` | `null`  | the api endpoint to connect to
config.token | `string` | `<required>` | `null`  | the api token to use
config.repo  | `string` | `<required>` | `null`  | the git repo to add labels to
packages     | `array`  | `<required>` | `null`  | the path(s) to the package files to use

#### callback( error, response )

Name     | Type       | Argument     | Description
---------|------------|--------------|------------
error    | `error`    | `<required>` | any errors that may have occured.
response | `string`   | `<required>` | success message.


## Developing

[git-label-core](https://github.com/git-label-core) is built using **ES6**. Run the following task to compile the `src/` into `dist/`.

```bash
npm run build
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2016 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
