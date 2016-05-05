System.register([], function (_export) {
  'use strict';

  var constants;
  return {
    setters: [],
    execute: function () {
      constants = {
        eventPrefix: 'ej-on-',
        bindablePrefix: 'ej-',
        attributePrefix: 'ej-',
        elementPrefix: 'ej-'
      };

      _export('constants', constants);
    }
  };
});