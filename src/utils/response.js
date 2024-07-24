const { response } = require("express");

/**
 * The function `Error` is designed to handle errors by sending a JSON response with an error flag,
 * status code, and message.
 * @param response - The `response` parameter is typically the response object that is used to send a
 * response back to the client in a Node.js application. It is commonly used with frameworks like
 * Express.js to handle HTTP requests and responses.
 * @param statusCode - The `statusCode` parameter in the `Error` function represents the HTTP status
 * code that will be returned in the response. This code indicates the status of the request, such as
 * success, error, or redirection. Examples of status codes include 200 for a successful request, 404
 * for not found
 * @param message - The `message` parameter in the `Error` function is a string that represents the
 * error message that will be included in the JSON response when the function is called.
 * @returns The `Error` function is returning a JSON response with an error flag set to true, along
 * with the provided message and status code.
 */
const Error = (response, statusCode, message) => {
  return response.status(statusCode).json({
    error: true,
    message
  });
};

/**
 * The function `Success` takes in a response object, status code, and message, and returns a JSON
 * response with an error flag set to false and the provided message.
 * @param response - The `response` parameter is typically the response object that is sent back to the
 * client in a web application. It is used to send data, status codes, and other information back to
 * the client making the request.
 * @param statusCode - The `statusCode` parameter in the `Success` function is used to specify the HTTP
 * status code that will be returned in the response. This code indicates the success status of the
 * operation.
 * @param message - The `message` parameter in the `Success` function is a string that represents the
 * success message that will be included in the JSON response.
 * @returns The `Success` function is being returned, which takes three parameters: `response`,
 * `statusCode`, and `message`. It then returns a JSON response with the specified status code and
 * message.
 */
const Success = (response, statusCode, message, data) => {
  return response.status(statusCode).json({
    error: false,
    message,
    data
  });
};

module.exports = { Error, Success };