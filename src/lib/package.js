import fs from 'fs';


/**
 * Processes a list of packages and concatenates their contents into a single object.
 *
 * @name getPackages
 * @function
 * @param {Array} packages array of paths to package files
 * @return {Promise}
 */
export function getPackages(packages = []) {
  return Promise
    .all(packages.map(readFile))
    .then(labels => labels.reduce((prev, curr) => prev.concat(curr)))
}

/**
 * Reads and returns the contents of a file
 *
 * @name readFile
 * @function
 * @param {String} path the path of the file to read
 * @return {Promise}
 */
export function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, res) => {
      if (err) { reject(err); }
      resolve(JSON.parse(res));
    });
  });
}
