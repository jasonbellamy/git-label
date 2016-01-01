'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.remove = remove;

var _config = require('./lib/config');

var _label = require('./lib/label');

var _package = require('./lib/package');

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
 * @param {Array} packages array of paths to package files
 * @return {Promise}
 */
function add(server, packages) {
  return (0, _package.getPackages)(packages).then(_label.createLabels.bind(null, (0, _config.configure)(server))).then(_handlers.createSuccessHandler).catch(_handlers.errorHandler);
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
 * @param {Array} packages array of paths to package files
 * @return {Promise}
 */
function remove(server, packages) {
  return (0, _package.getPackages)(packages).then(_label.deleteLabels.bind(null, (0, _config.configure)(server))).then(_handlers.deleteSuccessHandler).catch(_handlers.errorHandler);
}