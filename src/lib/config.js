/**
 * Configures and returns an object with the git server settings
 *
 * @name configure
 * @function
 * @param {Object} server the server configuration object
 * @param {String} server.api the api endpoint to connect to
 * @param {String} server.token the api token to use
 * @param {String} server.repo the git repo to manipulate
 * @return {Promise} propelly structured server configuration object
 */
export function configure({api = 'https://api.github.com', token, repo}) {
  return new Promise(function(resolve, reject) {
    resolve({
      api   : api,
      token : token,
      repo  : `repos/${repo}`
    });
  });
}
