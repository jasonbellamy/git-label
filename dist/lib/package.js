'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPackages = getPackages;
exports.readFile = readFile;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Processes a list of packages and concatenates their contents into a single object.
 *
 * @name getPackages
 * @function
 * @param {Array} packages array of paths to package files
 * @return {Promise}
 */
function getPackages() {
  var packages = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return Promise.all(packages.map(readFile)).then(function (labels) {
    return labels.reduce(function (prev, curr) {
      return prev.concat(curr);
    });
  });
}

/**
 * Reads and returns the contents of a file
 *
 * @name readFile
 * @function
 * @param {String} path the path of the file to read
 * @return {Promise}
 */
function readFile(path) {
  return new Promise(function (resolve, reject) {
    _fs2.default.readFile(path, 'utf8', function (err, res) {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(res));
    });
  });
}