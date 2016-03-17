/**
 *
 * Perform a swipe on the screen or an element. If you want to swipe on a specific
 * element make sure you provide a selector argument. If not just pass `xoffset`
 * and `yoffset` as command arguments.
 *
 * start at a particulat screen location
 *
 * @param {String=} selector   element to swipe on
 * @param {Number=} xoffset    x offset of swipe gesture (in pixels or relative units)
 * @param {Number=} yoffset    y offset of swipe gesture (in pixels or relative units)
 * @param {Number=} speed      time (in seconds) to spend performing the swipe
 *
 * @uses protocol/element, protocol/touchFlick
 * @type mobile
 *
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _utilsErrorHandler = require('../utils/ErrorHandler');

var swipe = function swipe(selector, xoffset, yoffset, speed) {
  var _this = this;

  /*!
   * mobile check
   */
  if (!this.isMobile) {
    throw new _utilsErrorHandler.CommandError('swipe command is not supported on non mobile platforms');
  }

  if (arguments.length === 2 && typeof selector === 'number' && typeof xoffset === 'number') {
    /*!
     * you don't care where the swipe starts on the screen
     */
    var xspeed = selector;
    var yspeed = xoffset;

    return this.touchFlick(xspeed, yspeed);
  }

  /*!
   * command starts at a particular screen location
   */
  return this.element(selector).then(function (res) {
    return _this.touchFlick(res.value.ELEMENT.toString(), xoffset, yoffset, speed);
  });
};

exports['default'] = swipe;
module.exports = exports['default'];
