'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requestPromisfied;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a "Promisfied" HTTPRequest object
 *
 * @name requestPromisfied
 * @function
 * @param {Object} options request options: https://github.com/request/request)
 * @return {Promise}
 */
function requestPromisfied(options) {
  return new Promise(function (resolve, reject) {
    (0, _request2.default)(options, function (err, res) {
      if (err) {
        reject(err);
      }
      resolve(res.body);
    });
  });
}