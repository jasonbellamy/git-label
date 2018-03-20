import request from 'request';

const IS_OK = /^(200|201|204)$/;

/**
 * Creates a "Promisfied" HTTPRequest object
 *
 * @name requestPromisfied
 * @function
 * @param {Object} options request options: https://github.com/request/request)
 * @return {Promise}
 */
export default function requestPromisfied(options) {
  return new Promise((resolve, reject) => {
    request(options, (err, res) => {
      if (err) { 
        reject(err); 
      } else if (!err && res && IS_OK.test(res.statusCode)) {
        resolve(res.body);
      }

      reject(res.body);
    });
  });
}
