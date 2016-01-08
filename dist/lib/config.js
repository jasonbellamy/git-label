"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;
/**
 * Configures and returns an object with the git server settings
 *
 * @name configure
 * @function
 * @param {Object} server the server configuration object
 * @param {String} server.api the api endpoint to connect to
 * @param {String} server.token the api token to use
 * @param {String} server.repo the git repo to manipulate
 * @return {Object} structured server configuration object
 */
function configure(_ref) {
  var api = _ref.api;
  var token = _ref.token;
  var repo = _ref.repo;

  return {
    api: api,
    repo: "repos/" + repo,
    token: token
  };
}