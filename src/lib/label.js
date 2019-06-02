import request from '../lib/request';


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
 * @param {String} description the description of the label
 * @return {Promise}
 */
export function createLabel({api, token, repo}, name, color, description) {
  return request({
    headers: {'User-Agent': 'request', 'Authorization': `token ${token}`, 'Accept': 'text/html, application/vnd.github.symmetra-preview+json'},
    url: `${api}/${repo}/labels`,
    form: JSON.stringify({name, color, description}),
    method: 'POST',
    json: true
  });
}

/**
 * Sends a request to GitHub to delete a label
 *
 * @name deleteLabel
 * @function
 * @param {Object} server the server configuration object
 * @param {String} server.api the api endpoint to connect to
 * @param {String} server.token the api token to use
 * @param {String} server.repo the git repo to manipulate
 * @param {String} name the name of the label to delete
 * @return {Promise}
 */
export function deleteLabel({api, token, repo}, name) {
  return request({
    headers: {'User-Agent': 'request', 'Authorization': `token ${token}`},
    url: `${api}/${repo}/labels/${name}`,
    method: 'DELETE',
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
export function getLabels({api, token, repo}) {
  return request({
    headers: {'User-Agent': 'request', 'Authorization': `token ${token}`},
    url: `${api}/${repo}/labels`,
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
 * @param {String} description the description of the label
 * @return {Object} a properly formated label object that can be sent to GitHub
 */
export function formatLabel({name, color, description}) {
  return {name, description, color: color.replace('#', '')};
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
export function createLabels(server, labels) {
  return Promise.all(
    labels
    .map(formatLabel)
    .map(({name, color, description}) => createLabel(server, name, color, description))
  );
}

/**
 * Deletes all of the current labels associated with the GitHub repo
 *
 * @name deleteLabels
 * @function
 * @param {Object} server the server configuration object
 * @param {String} server.api the api endpoint to connect to
 * @param {String} server.token the api token to use
 * @param {String} server.repo the git repo to manipulate
 * @return {Promise}
 */
export function deleteLabels(server, labels) {
  return Promise.all(
    labels
    .map(formatLabel)
    .map(({name, color}) => deleteLabel(server, name))
  );
}
