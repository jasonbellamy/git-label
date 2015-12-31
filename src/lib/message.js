/**
 * Formats and returns a success message
 *
 * @name successMessage
 * @function
 * @param (Object} the response object from the server
 * @return {String} success message
 */
export function successMessage(response) {
  return `Successfully created ${response.length} labels`;
}

/**
 * Logs and returns an error message
 *
 * @name errorMessage
 * @function
 * @param (Object} the response object from the server
 * @return {String} error message
 */
export function errorMessage(response) {
  console.log(response);
  return response;
}
