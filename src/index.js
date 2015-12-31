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
 * @return {Promise}
 */
function gitLabel(server, packages) {
  return getPackages(packages)
    .then(createLabels.bind(null, configure(server)))
    .then(successMessage)
    .catch(errorMessage);
}


export default gitLabel
