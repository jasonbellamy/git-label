"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.successMessage = successMessage;
exports.errorMessage = errorMessage;
/**
 * Formats and logs a success message
 *
 * @name successMessage
 * @function
 * @param (Object} the response object from the server
 * @return {String} success message
 */
function successMessage(response) {
  return "Successfully created " + response.length + " labels";
}

/**
 * Formats and logs a error message
 *
 * @name errorMessage
 * @function
 * @param (Object} the response object from the server
 * @return {String} error message
 */
function errorMessage(response) {
  return response;
}