/*
 * Plaxy
 * http://github.com/chrisvanmook/plaxy
 *
 * Author: Chris van Mook and other contributors
 * @class Plaxy
 * @license: MIT - http://www.opensource.org/licenses/MIT
 * @copyright Chris van Mook 2015
 *
 * Simply include this file in your html file, together with jQuery.
 *
 * @example
 * $('.parallax').Plaxy({
 *  speed: 5,
 *  device: true
 * });
 */

(function ($, window) {
  'use strict';

  var defaultOptions = {
    speed: 5,
    device: false
  };

  /**
   * @param {String} selector
   * @param {Object} options
   * @constructor
   */
  function Plaxy(selector, options) {
    this.el = selector;
    this.options = $.extend({}, defaultOptions, options);

    //unfortunately device detection
    if (!this.options.device && checkDevice()) {
      return;
    }

    this.speed = $(this.el).data('speed') || this.options.speed;

    // Validate speed
    if (typeof this.speed !== 'number') {
      console.warn('Please enter a valid number for speed');
      return;
    } else {
      if (this.speed < 0 || this.speed > 10) {
        console.warn('Please enter a speed number between 0 and 10');
        return;
      }
    }

    //Continue parallax scrolling
    this.startParallax(); //start parallax
  }

  Plaxy.prototype.startParallax = function () {
    var self = this,
      elPosition = $(this.el).offset(),
      elHeight = $(this.el).height(),
      elLimit = elPosition.top + elHeight;

    // Calculate background position
    $(window).scroll(function () {
      if ((elLimit + $(window).scrollTop() - $(window).height()) > $(window).height()) {
        return;
      }

      var yPos = -($(window).scrollTop() / self.speed),
        coords = '50% ' + yPos + 'px';

      $(self.el).css({
        backgroundPosition: coords
      });
    });
  };

  /**
   * Check if the script is running on a device
   * @returns {boolean} true if one of the devices matches with the useragent, false otherwise
   */
  function checkDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  /**
   * Add parallax effect to your site
   * @param {Object} options
   * @returns {Plaxy}
   */
  $.fn.Plaxy = function (options) {
    return this.each(function () {
      return new Plaxy(this, options);
    });
  };

})($, window);
