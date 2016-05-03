System.register([], function (_export) {
  'use strict';

  var EjConfigBuilder;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      EjConfigBuilder = (function () {
        function EjConfigBuilder() {
          _classCallCheck(this, EjConfigBuilder);

          this.resources = [];
          this.useGlobalResources = true;
        }

        EjConfigBuilder.prototype.useAll = function useAll() {
          this.ejClickCounter().ejButton().ejMenu().ejCheckBox().ejGrid().ejTemplate().ejTab().ejToggleButton().ejToolbar().ejListBox();
          return this;
        };

        EjConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
          this.useGlobalResources = false;
          return this;
        };

        EjConfigBuilder.prototype.ejClickCounter = function ejClickCounter() {
          this.resources.push('./clickcounter/clickcounter');
          return this;
        };

        EjConfigBuilder.prototype.ejButton = function ejButton() {
          this.resources.push('./button/button');
          return this;
        };

        EjConfigBuilder.prototype.ejMenu = function ejMenu() {
          this.resources.push('./menu/menu');
          return this;
        };

        EjConfigBuilder.prototype.ejCheckBox = function ejCheckBox() {
          this.resources.push('./checkbox/checkbox');
          return this;
        };

        EjConfigBuilder.prototype.ejGrid = function ejGrid() {
          this.resources.push('./grid/grid');
          this.resources.push('./grid/col');
          return this;
        };

        EjConfigBuilder.prototype.ejTemplate = function ejTemplate() {
          this.resources.push('./common/template');
          return this;
        };

        EjConfigBuilder.prototype.ejTab = function ejTab() {
          this.resources.push('./tab/tab');
          return this;
        };

        EjConfigBuilder.prototype.ejToolbar = function ejToolbar() {
          this.resources.push('./toolbar/toolbar');
          return this;
        };

        EjConfigBuilder.prototype.ejToggleButton = function ejToggleButton() {
          this.resources.push('./togglebutton/togglebutton');
          return this;
        };

        EjConfigBuilder.prototype.ejListBox = function ejListBox() {
          this.resources.push('./listbox/listbox');
          return this;
        };

        return EjConfigBuilder;
      })();

      _export('EjConfigBuilder', EjConfigBuilder);
    }
  };
});
//# sourceMappingURL=devbuild/dev/config-builder.js.map
