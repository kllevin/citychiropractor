/**
 * Helper functions.
 */


/**
 * jQuery style “$” function to make it easier to apply
 * `document.querySelector`.
 * @param  {String} DOM selector to target
 * @return {Object}
 */

var $ = function(selector) {
  return document.querySelector(selector);
}
