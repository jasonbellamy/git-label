import {configure} from './lib/config';
import {createLabels, deleteLabels} from './lib/label';
import {getPackages} from './lib/package';
import {createSuccessHandler, deleteSuccessHandler, errorHandler} from './lib/handlers';


/**
 * Automates and simplifies the creation of labels for GitHub repositories
 *
 * @name add
 * @function
 * @param {Object} server the server configuration object
 * @param {String} server.api the api endpoint to connect to
 * @param {String} server.token the api token to use
 * @param {String} server.repo the git repo to manipulate
 * @param {Array} packages array of paths to package files
 * @return {Promise}
 */
export function add(server, packages) {
  return getPackages(packages)
    .then(createLabels.bind(null, configure(server)))
    .then(createSuccessHandler)
    .catch(errorHandler);
}

/**
 * Removes all of the current labels associated with the GitHub repo
 *
 * @name remove
 * @function
 * @param {Object} server the server configuration object
 * @param {String} server.api the api endpoint to connect to
 * @param {String} server.token the api token to use
 * @param {String} server.repo the git repo to manipulate
 * @param {Array} packages array of paths to package files
 * @return {Promise}
 */
export function remove(server) {
  return deleteLabels(configure(server))
    .then(deleteSuccessHandler)
    .catch(errorHandler);
}
