import {readFile} from 'fs';
import {glob} from 'glob';


/**
 * Takes a glob and returns a list of label package files
 *
 * @name findPackages
 * @function
 * @param {String} path a globbing pattern
 * @return {Promise} array containing any found label packages
 */
export function findPackages(path) {
  return new Promise((resolve, reject) => {
    glob(path, function (err, res) {
      if (err) { reject(err); }
      resolve(res.filter(file => file.endsWith('.json')));
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
export function readPackages(packages = []) {
  return Promise
    .all(packages.map(readPackage))
    .then(labels => labels.reduce((prev, curr) => prev.concat(curr)))
}

/**
 * Reads and returns the contents of a package file
 *
 * @name readPackage
 * @function
 * @param {String} path the path of the file to read
 * @return {Promise}
 */
export function readPackage(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, res) => {
      if (err) { reject(err); }
      resolve(JSON.parse(res));
    });
  });
}
