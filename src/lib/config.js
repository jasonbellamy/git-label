import { join } from 'path';

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
export function configure({api, token, repo}) {
  return {
    api,
    repo: join(repos, repo),
    token
  };
}
