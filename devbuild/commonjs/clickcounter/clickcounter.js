'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _commonConstants = require('../common/constants');

var ClickCounter = (function () {
  function ClickCounter(element) {
    _classCallCheck(this, _ClickCounter);

    this.count = 0;

    this.element = element;
  }

  ClickCounter.prototype.increment = function increment() {
    this.count++;
  };

  ClickCounter.prototype.attached = function attached() {};

  var _ClickCounter = ClickCounter;
  ClickCounter = _aureliaDependencyInjection.inject(Element)(ClickCounter) || ClickCounter;
  ClickCounter = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'click-counter')(ClickCounter) || ClickCounter;
  return ClickCounter;
})();

exports.ClickCounter = ClickCounter;