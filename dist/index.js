'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.remove = remove;
exports.find = find;

var _config = require('./lib/config');

var _package = require('./lib/package');

var _label = require('./lib/label');

var _handlers = require('./lib/handlers');

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
function add(server, labels) {
  return (0, _label.createLabels)((0, _config.configure)(server), labels).then(_handlers.createSuccessHandler).catch(_handlers.errorHandler);
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
function remove(server, labels) {
  return (0, _label.deleteLabels)((0, _config.configure)(server), labels).then(_handlers.deleteSuccessHandler).catch(_handlers.errorHandler);
}

/**
 * Finds and gets the data from label packages
 *
 * @name find
 * @function
 * @param {String} path a globbing pattern to the label packages
 * @return {Promise} an array of label objects
 */
function find(glob) {
  return (0, _package.findPackages)(path).then(_package.readPackages);
}