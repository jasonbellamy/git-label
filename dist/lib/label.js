'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLabel = createLabel;
exports.getLabels = getLabels;
exports.formatLabel = formatLabel;
exports.createLabels = createLabels;

var _request = require('../lib/request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sends a request to GitHub to create a label
 *
 * @name createLabel
 * @function
 * @param {Object} server the server configuration object
 * @param {String} server.api the api endpoint to connect to
 * @param {String} server.token the api token to use
 * @param {String} server.repo the git repo to manipulate
 * @param {String} name the name of the label
 * @param {String} color the hexidecimal color of the label
 * @return {Promise}
 */
function createLabel(_ref, name, color) {
  var api = _ref.api;
  var token = _ref.token;
  var repo = _ref.repo;

  return (0, _request2.default)({
    headers: { 'User-Agent': 'request', 'Authorization': 'token ' + token },
    url: api + '/' + repo + '/labels',
    form: JSON.stringify({ name: name, color: color }),
    method: 'POST',
    json: true
  });
}

/**
 * Retrieves a list of labels from Github
 *
 * @name getLabels
 * @function
 * @param {Object} server the server configuration object
 * @param {String} server.api the api endpoint to connect to
 * @param {String} server.token the api token to use
 * @param {String} server.repo the git repo to manipulate
 * @return {Promise}
 */
function getLabels(_ref2) {
  var api = _ref2.api;
  var token = _ref2.token;
  var repo = _ref2.repo;

  return (0, _request2.default)({
    headers: { 'User-Agent': 'request', 'Authorization': 'token ' + token },
    url: api + '/' + repo + '/labels',
    method: 'GET',
    json: true
  });
}

/**
 * Properly formats an object for a label for a GitHub request
 *
 * @name formatLabel
 * @function
 * @param {String} name the name of the label
 * @param {String} color the hexidecimal color of the label
 * @param {String} type the type of the label
 * @return {Object} a properly formated label object that can be sent to GitHub
 */
function formatLabel(_ref3) {
  var name = _ref3.name;
  var color = _ref3.color;
  var type = _ref3.type;

  return { name: type + ': ' + name, color: color };
}

/**
 * Prepares and sends a request to GitHub to create multiple labels
 *
 * @name createLabels
 * @function
 * @param {Object} server the server configuration object
 * @param {String} server.api the api endpoint to connect to
 * @param {String} server.token the api token to use
 * @param {String} server.repo the git repo to manipulate
 * @param {array} labels an array of objects containing data to be formatted and sent to GitHub
 * @return {Promise}
 */
function createLabels(server, labels) {
  return Promise.all(labels.map(formatLabel).map(function (_ref4) {
    var name = _ref4.name;
    var color = _ref4.color;
    return createLabel(server, name, color);
  }));
}