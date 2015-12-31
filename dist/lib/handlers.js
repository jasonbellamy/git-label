"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSuccessHandler = createSuccessHandler;
exports.deleteSuccessHandler = deleteSuccessHandler;
exports.errorHandler = errorHandler;
/**
 * Formats and returns a response for the createSuccess event
 *
 * @name createSuccessHandler
 * @function
 * @param (Object} the response object from the server
 * @return {String} success message
 */
function createSuccessHandler(response) {
  return "Successfully created " + response.length + " labels";
}

/**
 * Formats and returns a response for the deleteSuccess event
 *
 * @name deleteSuccessHandler
 * @function
 * @param (Object} the response object from the server
 * @return {String} success message
 */
function deleteSuccessHandler(response) {
  return "Successfully deleted " + response.length + " labels";
}

/**
 * Formats, logs and returns a response an error event
 *
 * @name errorMessage
 * @function
 * @param (Object} the response object from the server
 * @return {String} error message
 */
function errorHandler(response) {
  console.log(response);
  return response;
}