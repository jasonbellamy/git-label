import {configure} from './lib/config';
import {createLabels, deleteLabels} from './lib/label';
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
 * @param {Array} labels array of label objects
 * @return {Promise}
 */
export function add(server, labels) {
  return createLabels(configure(server), labels)
    .then(createSuccessHandler)
    .catch(errorHandler);
}

/**
 * Removes all of the specified labels associated with the GitHub repo
 *
 * @name remove
 * @function
 * @param {Object} server the server configuration object
 * @param {String} server.api the api endpoint to connect to
 * @param {String} server.token the api token to use
 * @param {String} server.repo the git repo to manipulate
 * @param {Array} labels array of label objects
 * @return {Promise}
 */
export function remove(server, labels) {
  return deleteLabels(configure(server), labels)
    .then(deleteSuccessHandler)
    .catch(errorHandler);
}
