import {configure} from './lib/config';
import {createLabels} from './lib/label';
import {getPackages} from './lib/package';
import {successMessage, errorMessage} from './lib/message';


/**
 * Automates and simplifies the creation of labels for GitHub repositories
 *
 * @name gitLabel
 * @function
 * @param {Object} server the server configuration object
 * @param {String} server.api the api endpoint to connect to
 * @param {String} server.token the api token to use
 * @param {String} server.repo the git repo to manipulate
 * @param {Array} packages array of paths to package files
 * @param {Function} cb callback
 */
function gitLabel(server, packages, cb) {
  return configure(server)
    .then((server) => {
      return getPackages(packages)
        .then(createLabels.bind(null, server))
        .then((message) => {
          cb(null, successMessage(message));
        })
    })
    .catch((message) => {
      cb(errorMessage(message));
    });
}


export default gitLabel
