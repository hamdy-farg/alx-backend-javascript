/**
 * Displays a message on the STDOUT.
 * @param {string} msg - The message to display.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const displayMessage = (msg) => {
  if (typeof msg !== 'string') {
    throw new TypeError('The "msg" parameter must be a string.');
  }
  console.log(msg);
};
module.exports = displayMessage;
