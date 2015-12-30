'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./lib/config');

var _label = require('./lib/label');

var _package = require('./lib/package');

var _message = require('./lib/message');

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
  return (0, _config.configure)(server).then(function (server) {
    return (0, _package.getPackages)(packages).then(_label.createLabels.bind(null, server)).then(function (message) {
      cb(null, (0, _message.successMessage)(message));
    });
  }).catch(function (message) {
    cb((0, _message.errorMessage)(message));
  });
}

exports.default = gitLabel;