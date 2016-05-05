System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/constants'], function (_export) {
  'use strict';

  var customElement, inject, constants, ClickCounter;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      ClickCounter = (function () {
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
        ClickCounter = inject(Element)(ClickCounter) || ClickCounter;
        ClickCounter = customElement(constants.elementPrefix + 'click-counter')(ClickCounter) || ClickCounter;
        return ClickCounter;
      })();

      _export('ClickCounter', ClickCounter);
    }
  };
});