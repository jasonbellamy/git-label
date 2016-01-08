'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findPackages = findPackages;
exports.readPackages = readPackages;
exports.readPackage = readPackage;

var _fs = require('fs');

var _glob = require('glob');

/**
 * Takes a glob and returns a list of label package files
 *
 * @name findPackages
 * @function
 * @param {String} path a globbing pattern
 * @return {Promise} array containing any found label packages
 */
function findPackages(path) {
  return new Promise(function (resolve, reject) {
    (0, _glob.glob)(path, function (err, res) {
      if (err) {
        reject(err);
      }
      resolve(res.filter(function (file) {
        return file.endsWith('.json');
      }));
    });
  });
};

/**
 * Processes a list of packages and concatenates their contents into a single object.
 *
 * @name readPackages
 * @function
 * @param {Array} packages array of paths to package files
 * @return {Promise}
 */
function readPackages() {
  var packages = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return Promise.all(packages.map(readPackage)).then(function (labels) {
    return labels.reduce(function (prev, curr) {
      return prev.concat(curr);
    });
  });
}

/**
 * Reads and returns the contents of a package file
 *
 * @name readPackage
 * @function
 * @param {String} path the path of the file to read
 * @return {Promise}
 */
function readPackage(path) {
  return new Promise(function (resolve, reject) {
    (0, _fs.readFile)(path, 'utf8', function (err, res) {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(res));
    });
  });
}