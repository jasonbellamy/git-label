import request from 'request';


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
      if (err) { reject(err); }
      resolve(res.body);
    });
  });
}
