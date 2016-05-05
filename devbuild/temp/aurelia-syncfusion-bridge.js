'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

exports.configure = configure;
exports.generateBindables = generateBindables;
exports.getEventOption = getEventOption;
exports.fireEvent = fireEvent;

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaMetadata = require('aurelia-metadata');

var _aureliaTaskQueue = require('aurelia-task-queue');

require('ej.button.min');

require('ej.checkbox.min');

require('ej.grid.min');

require('ej.listbox.min');

require('ej.menu.min');

require('ej.tab.min');

require('ej.togglebutton.min');

require('ej.toolbar.min');

var EjConfigBuilder = (function () {
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

exports.EjConfigBuilder = EjConfigBuilder;

function configure(aurelia, configCallback) {
  var builder = new EjConfigBuilder();

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  var resources = builder.resources;

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}

var ejButton = (function (_WidgetBase) {
  _inherits(ejButton, _WidgetBase);

  function ejButton(element) {
    _classCallCheck(this, _ejButton);

    _WidgetBase.call(this);
    this.element = element;
  }

  var _ejButton = ejButton;
  ejButton = _aureliaDependencyInjection.inject(Element)(ejButton) || ejButton;
  ejButton = generateBindables('ejButton', ['contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'repeatButton', 'showRoundedCorner', 'size', 'suffixIcon', 'text', 'timeInterval', 'type', 'width'])(ejButton) || ejButton;
  ejButton = _aureliaTemplating.customAttribute(constants.attributePrefix + 'button')(ejButton) || ejButton;
  return ejButton;
})(WidgetBase);

exports.ejButton = ejButton;

var ejCheckBox = (function (_WidgetBase2) {
  _inherits(ejCheckBox, _WidgetBase2);

  function ejCheckBox(element) {
    _classCallCheck(this, _ejCheckBox);

    _WidgetBase2.call(this);
    this.element = element;
  }

  var _ejCheckBox = ejCheckBox;
  ejCheckBox = _aureliaDependencyInjection.inject(Element)(ejCheckBox) || ejCheckBox;
  ejCheckBox = generateBindables('ejCheckBox', ['checked', 'checkstate', 'enabled', 'cssClass', 'enablePersistence', 'enableRTL', 'enableTriState', 'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner', 'size', 'text', 'validationMessage', 'validationRules', 'value'], ['checked'])(ejCheckBox) || ejCheckBox;
  ejCheckBox = _aureliaTemplating.customAttribute(constants.attributePrefix + 'checkbox')(ejCheckBox) || ejCheckBox;
  return ejCheckBox;
})(WidgetBase);

exports.ejCheckBox = ejCheckBox;

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
  ClickCounter = _aureliaTemplating.customElement(constants.elementPrefix + 'click-counter')(ClickCounter) || ClickCounter;
  return ClickCounter;
})();

exports.ClickCounter = ClickCounter;
exports.customAttribute = _aureliaTemplating.customAttribute;
exports.bindable = _aureliaTemplating.bindable;
exports.inject = _aureliaDependencyInjection.inject;
exports.WidgetBase = WidgetBase;
exports.constants = constants;
exports.generateBindables = generateBindables;
exports.inlineView = _aureliaFramework.inlineView;
exports.customElement = _aureliaTemplating.customElement;
exports.children = _aureliaTemplating.children;
exports.TemplatingEngine = _aureliaTemplating.TemplatingEngine;
exports.TemplateProcessor = TemplateProcessor;
exports.Util = Util;
var constants = {
  eventPrefix: 'ej-on-',
  bindablePrefix: 'ej-',
  attributePrefix: 'ej-',
  elementPrefix: 'ej-'
};

exports.constants = constants;

function generateBindables(controlName, inputs, twoWayProperties) {
  return function (target, key, descriptor) {
    var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
    var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
    var util = container.get(Util);
    inputs.push('options');
    var len = inputs.length;
    target.prototype.controlName = controlName;
    target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
    if (len) {
      target.prototype.controlProperties = inputs;
      for (var i = 0; i < len + 1; i++) {
        var option = inputs[i];
        var nameOrConfigOrTarget = {
          name: util.getBindablePropertyName(option)
        };
        var prop = new _aureliaTemplating.BindableProperty(nameOrConfigOrTarget);
        prop.registerWith(target, behaviorResource, descriptor);
      }
    }
  };
}

function getEventOption(element) {
  var name = undefined;
  var attr = undefined;
  var attributes = element.attributes;
  var option = {};
  var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
  var util = container.get(Util);

  var _loop = function (i, len) {
    attr = attributes[i];
    name = attr.name;
    if (!name.startsWith(constants.eventPrefix)) {
      return 'continue';
    }
    var actualEventName = name.split('.')[0];
    var eventName = util._unhyphenate(actualEventName.split(constants.eventPrefix)[1]);
    option[eventName] = function (e) {
      return fireEvent(element, actualEventName, e);
    };
  };

  for (var i = 0, len = attributes.length; i < len; i++) {
    var _ret = _loop(i, len);

    if (_ret === 'continue') continue;
  }
  return option;
}

function fireEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);
  return event;
}

var TemplateProcessor = (function () {
  function TemplateProcessor(context, templateEngine) {
    _classCallCheck(this, _TemplateProcessor);

    this.context = context;
    this.templatingEngine = templateEngine;
    this.util = new Util();
  }

  TemplateProcessor.prototype.initTemplate = function initTemplate() {
    var proxy = this;
    ej.template.render = function (self, selector, data, index) {
      return proxy.renderStringTemplate(self, selector, data, index);
    };
  };

  TemplateProcessor.prototype.initWidgetDependancies = function initWidgetDependancies() {
    if (this.context.widget.aureliaTemplate) {
      this.compileTemplate(this.context.widget.element);
    }
    var proxy = this.context;
    var element = this.context.widget.element;
    element.on(this.context.widget.pluginName + 'refresh', function () {
      if (proxy.widget.aureliaTemplate) {
        proxy.templateProcessor.compileTemplate(element);
      }
    });
  };

  TemplateProcessor.prototype.renderStringTemplate = function renderStringTemplate(self, selector, data, index) {
    var templateObject = self.aureliaTemplate;
    if (!templateObject || !templateObject[selector]) {
      templateObject = templateObject || {};
      templateObject[selector] = { key: ej.getGuid('aurtmpl'), itemData: [], views: [] };
      self.aureliaTemplate = templateObject;
    }
    var scope = templateObject[selector];
    if (this.util.hasValue(index)) {
      scope.itemData[index] = data;
    } else {
      scope.itemData = [data];
    }
    var actElement = $(selector).html();
    var tempElement = "<div class='" + templateObject[selector].key + " ej-aurelia-template'>" + actElement + '</div>';
    return tempElement;
  };

  TemplateProcessor.prototype.compileTemplate = function compileTemplate(element) {
    var templates = $(element).find('.ej-aurelia-template');
    var templateObject = this.context.widget.aureliaTemplate;
    for (var template in templateObject) {
      var tmplElement = templates.filter('.' + templateObject[template].key);
      if (tmplElement.length) {
        for (var i = 0; i < tmplElement.length; i++) {
          var view = this.templatingEngine.enhance(tmplElement[i]);
          view.bind(templateObject[template].itemData[i]);
          templateObject[template].views[i] = view;
        }
      } else {
        this.unbindViews(templateObject[template]);
        delete templateObject[template];
      }
    }
  };

  TemplateProcessor.prototype.clearTempalte = function clearTempalte() {
    var templateObject = this.context.widget.aureliaTemplate;
    if (templateObject && Object.keys(templateObject).length) {
      for (var t in templateObject) {
        this.unbindViews(templateObject[t]);
        delete templateObject[t];
      }
    }
  };

  TemplateProcessor.prototype.unbindViews = function unbindViews(obj) {
    for (var i = 0; i < obj.views.length; i++) {
      var view = obj.views[i];
      view.unbind();
    }
  };

  var _TemplateProcessor = TemplateProcessor;
  TemplateProcessor = _aureliaDependencyInjection.inject(_aureliaTemplating.TemplatingEngine, Util)(TemplateProcessor) || TemplateProcessor;
  return TemplateProcessor;
})();

exports.TemplateProcessor = TemplateProcessor;

var Template = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(Template, [{
    key: 'template',
    decorators: [_aureliaTemplating.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function Template(target) {
    _classCallCheck(this, _Template);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers);

    this.template = target.elementInstruction.template;
  }

  var _Template = Template;
  Template = _aureliaDependencyInjection.inject(_aureliaTemplating.TargetInstruction)(Template) || Template;
  Template = _aureliaTemplating.processContent(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
      instruction.template = html;
    }
    return true;
  })(Template) || Template;
  Template = _aureliaTemplating.noView()(Template) || Template;
  Template = _aureliaTemplating.customElement(constants.elementPrefix + 'template')(Template) || Template;
  return Template;
})();

exports.Template = Template;

var Util = (function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  Util.prototype.getBindablePropertyName = function getBindablePropertyName(propertyName) {
    var name = '' + constants.bindablePrefix + propertyName;
    return this._unhyphenate(name);
  };

  Util.prototype._unhyphenate = function _unhyphenate(name) {
    return name.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  };

  Util.prototype.getOptions = function getOptions(model, properties) {
    var bindableproperites = {};
    for (var _iterator = properties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var prop = _ref;

      var value = model[this.getBindablePropertyName(prop)];
      if (this.hasValue(value)) {
        if (typeof value === 'string') {
          value = this.processData(value);
        }
        bindableproperites[prop] = value;
      }
    }
    return bindableproperites;
  };

  Util.prototype.getControlPropertyName = function getControlPropertyName(options, propertyName) {
    var property = undefined;
    for (var _iterator2 = options.controlProperties, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var prop = _ref2;

      if (propertyName === this.getBindablePropertyName(prop)) {
        property = prop;
        break;
      }
    }
    return property;
  };

  Util.prototype.hasValue = function hasValue(prop) {
    return typeof prop !== 'undefined' && prop !== null;
  };

  Util.prototype.processData = function processData(value) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (+value + '' === value) {
      return +value;
    }
    return value;
  };

  return Util;
})();

exports.Util = Util;

var firstValue = {};

var WidgetBase = (function () {
  function WidgetBase() {
    _classCallCheck(this, WidgetBase);
  }

  WidgetBase.prototype.createWidget = function createWidget(option) {
    this.allOption = this.getWidgetOptions(option.element);
    if (!this.ejOptions) {
      this.createTwoWays();
    }
    this.widget = jQuery($(option.element))[this.controlName](this.allOption).data(this.controlName);
    if (this.templateProcessor) {
      this.templateProcessor.initWidgetDependancies();
    }
  };

  WidgetBase.prototype.createTwoWays = function createTwoWays() {
    var model = this.allOption;
    var twoWays = this.twoWays;
    var len = twoWays.length;
    for (var i = 0; i < len; i++) {
      var prop = twoWays[i];
      ej.createObject(prop, this.addTwoways(prop), model);
    }
  };

  WidgetBase.prototype.addTwoways = function addTwoways(prop) {
    var model = this;
    var value = firstValue;
    return function (newVal, isApp) {
      if (value === firstValue) {
        var viewModelProp = model.util.getBindablePropertyName(prop);
        value = model[viewModelProp];
        if (value === undefined) {
          value = this.defaults[prop];
        }
        return value;
      }
      if (newVal === undefined) {
        return value;
      }
      if (value === newVal) {
        return null;
      }
      value = newVal;
      if (!isApp && model.util.hasValue(newVal)) {
        var viewModelProp = model.util.getBindablePropertyName(prop);
        model[viewModelProp] = newVal;
      }
      return null;
    };
  };

  WidgetBase.prototype.getWidgetOptions = function getWidgetOptions(element) {
    var propOptions = undefined;
    if (this.ejOptions) {
      propOptions = this.ejOptions;
    } else {
      propOptions = this.util.getOptions(this, this.controlProperties);
    }
    var eventOption = getEventOption(element);
    if (this.hasChildProperty) {
      this.getChildProperties(propOptions);
    }
    return Object.assign({}, propOptions, eventOption);
  };

  WidgetBase.prototype.getChildProperties = function getChildProperties(options) {
    var PropertyName = this.childPropertyName;
    var childCollection = this[PropertyName];
    var len = childCollection.length;
    if (len) {
      options[PropertyName] = [];
      var childProperties = childCollection[0].controlProperties;
      for (var i = 0; i < len; i++) {
        options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
      }
    }
  };

  WidgetBase.prototype.attached = function attached() {
    this.util = new Util();
    this.createWidget({ element: this.element });
  };

  WidgetBase.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    if (this.widget) {
      var modelValue = undefined;
      var prop = this.util.getControlPropertyName(this, property);
      if (prop) {
        if (prop !== 'options') {
          modelValue = this.widget.model[prop];
          var isTwoway = typeof modelValue === 'function';
          if (isTwoway) {
            modelValue = modelValue();
          }
          if (modelValue !== newValue) {
            if (isTwoway) {
              newValue = this.addTwoways(prop);
            }
            this.widget.option(prop, newValue);
          }
        } else {
          this.widget.option(newValue);
        }
      }
    }
  };

  WidgetBase.prototype.detached = function detached() {
    if (this.templateProcessor) {
      this.templateProcessor.clearTempalte();
    }
    this.widget.destroy();
  };

  return WidgetBase;
})();

exports.WidgetBase = WidgetBase;

var Col = (function () {
  var _instanceInitializers2 = {};

  function Col() {
    _classCallCheck(this, _Col);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers2);
  }

  Col.prototype.bind = function bind() {
    if (this.template[0]) {
      var util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  };

  _createDecoratedClass(Col, [{
    key: 'template',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'template')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers2);

  var _Col = Col;
  Col = generateBindables('ejColumns', ['allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting', 'allowResizing', 'showInColumnChooser', 'commands', 'cssClass', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'editParams', 'editTemplate', 'editType', 'field', 'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'isUnbound', 'template', 'templateID', 'textAlign', 'tooltip', 'clipMode', 'type', 'validationRules', 'visible', 'width'])(Col) || Col;
  Col = _aureliaTemplating.customElement(constants.elementPrefix + 'col')(Col) || Col;
  Col = _aureliaFramework.inlineView('<template><content></content></template>')(Col) || Col;
  return Col;
})();

exports.Col = Col;

var ejGrid = (function (_WidgetBase3) {
  var _instanceInitializers3 = {};

  _inherits(ejGrid, _WidgetBase3);

  _createDecoratedClass(ejGrid, [{
    key: 'columns',
    decorators: [_aureliaTemplating.children(constants.elementPrefix + 'col')],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers3);

  function ejGrid(element, templateEngine) {
    _classCallCheck(this, _ejGrid);

    _WidgetBase3.call(this);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers3);

    this.hasChildProperty = true;
    this.childPropertyName = 'columns';
    this.element = element;
    this.templateProcessor = new TemplateProcessor(this, templateEngine);
    this.templateProcessor.initTemplate();
  }

  var _ejGrid = ejGrid;
  ejGrid = _aureliaDependencyInjection.inject(Element, _aureliaTemplating.TemplatingEngine)(ejGrid) || ejGrid;
  ejGrid = generateBindables('ejGrid', ['allowCellMerging', 'allowGrouping', 'allowKeyboardNavigation', 'allowFiltering', 'allowSorting', 'allowMultiSorting', 'allowPaging', 'allowReordering', 'allowResizeToFit', 'allowResizing', 'allowScrolling', 'allowSearching', 'allowSelection', 'allowTextWrap', 'allowMultipleExporting', 'commonWidth', 'gridLines', 'childGrid', 'columnLayout', 'columns', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'editSettings', 'enableAltRow', 'enableAutoSaveOnSelectionChange', 'enableHeaderHover', 'enablePersistence', 'enableResponsiveRow', 'enableRowHover', 'enableRTL', 'enableTouch', 'filterSettings', 'groupSettings', 'textWrapSettings', 'isResponsive', 'keySettings', 'locale', 'minWidth', 'pageSettings', 'query', 'rowTemplate', 'scrollSettings', 'searchSettings', 'selectedRecords', 'selectedRowIndex', 'selectionSettings', 'selectionType', 'showAddNewRow', 'showColumnChooser', 'showInColumnChooser', 'showStackedHeader', 'showSummary', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'toolbarSettings'], ['dataSource'])(ejGrid) || ejGrid;
  ejGrid = _aureliaTemplating.customElement(constants.elementPrefix + 'grid')(ejGrid) || ejGrid;
  ejGrid = _aureliaFramework.inlineView('<template><content></content></template>')(ejGrid) || ejGrid;
  return ejGrid;
})(WidgetBase);

exports.ejGrid = ejGrid;

var ejListBox = (function (_WidgetBase4) {
  _inherits(ejListBox, _WidgetBase4);

  function ejListBox(element, templateEngine) {
    _classCallCheck(this, _ejListBox);

    _WidgetBase4.call(this);
    this.element = element;
  }

  var _ejListBox = ejListBox;
  ejListBox = _aureliaDependencyInjection.inject(Element)(ejListBox) || ejListBox;
  ejListBox = generateBindables('ejListBox', ['allowDrag', 'allowDrop', 'allowMultiSelection', 'allowVirtualScrolling', 'caseSensitiveSearch', 'cascadeTo', 'checkedIndices', 'cssClass', 'dataSource', 'enabled', 'enableIncrementalSearch', 'enablePersistence', 'enableRTL', 'fields', 'height', 'itemsCount', 'totalItemsCount', 'itemRequestCount', 'loadDataOnInit', 'query', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showRoundedCorner', 'template', 'value', 'virtualScrollMode', 'width', 'targetID'])(ejListBox) || ejListBox;
  ejListBox = _aureliaTemplating.customAttribute(constants.attributePrefix + 'list-box')(ejListBox) || ejListBox;
  return ejListBox;
})(WidgetBase);

exports.ejListBox = ejListBox;

var ejMenu = (function (_WidgetBase5) {
  _inherits(ejMenu, _WidgetBase5);

  function ejMenu(element) {
    _classCallCheck(this, _ejMenu);

    _WidgetBase5.call(this);
    this.element = element;
  }

  var _ejMenu = ejMenu;
  ejMenu = _aureliaDependencyInjection.inject(Element)(ejMenu) || ejMenu;
  ejMenu = generateBindables('ejMenu', ['height', 'width', 'animationType', 'orientation', 'menuType', 'contextMenuTarget', 'htmlAttributes', 'cssClass', 'openOnClick', 'subMenuDirection', 'enableCenterAlign', 'showRootLevelArrows', 'showSubLevelArrows', 'enableAnimation', 'enableSeparator', 'enabled', 'fields', 'enableRTL', 'titleText', 'excludeTarget'])(ejMenu) || ejMenu;
  ejMenu = _aureliaTemplating.customAttribute(constants.attributePrefix + 'menu')(ejMenu) || ejMenu;
  return ejMenu;
})(WidgetBase);

exports.ejMenu = ejMenu;

var ejTab = (function (_WidgetBase6) {
  _inherits(ejTab, _WidgetBase6);

  function ejTab(element) {
    _classCallCheck(this, _ejTab);

    _WidgetBase6.call(this);
    this.element = element;
  }

  var _ejTab = ejTab;
  ejTab = _aureliaDependencyInjection.inject(Element)(ejTab) || ejTab;
  ejTab = generateBindables('ejTab', ['collapsible', 'enableAnimation', 'ajaxSettings', 'disabledItemIndex', 'enabledItemIndex', 'hiddenItemIndex', 'events', 'idPrefix', 'heightAdjustMode', 'selectedItemIndex', 'cssClass', 'showCloseButton', 'htmlAttributes', 'enableTabScroll', 'showReloadIcon', 'headerPosition', 'width', 'height', 'headerSize', 'enableRTL', 'allowKeyboardNavigation', 'showRoundedCorner', 'enablePersistence', 'enabled'])(ejTab) || ejTab;
  ejTab = _aureliaTemplating.customAttribute(constants.attributePrefix + 'tab')(ejTab) || ejTab;
  return ejTab;
})(WidgetBase);

exports.ejTab = ejTab;

var ejToggleButton = (function (_WidgetBase7) {
  _inherits(ejToggleButton, _WidgetBase7);

  function ejToggleButton(element, templateEngine) {
    _classCallCheck(this, _ejToggleButton);

    _WidgetBase7.call(this);
    this.element = element;
  }

  var _ejToggleButton = ejToggleButton;
  ejToggleButton = _aureliaDependencyInjection.inject(Element)(ejToggleButton) || ejToggleButton;
  ejToggleButton = generateBindables('ejToggleButton', ['activePrefixIcon', 'activeSuffixIcon', 'activeText', 'contentType', 'cssClass', 'defaultPrefixIcon', 'defaultSuffixIcon', 'defaultText', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'preventToggle', 'showRoundedCorner', 'size', 'toggleState', 'type', 'width'])(ejToggleButton) || ejToggleButton;
  ejToggleButton = _aureliaTemplating.customAttribute(constants.attributePrefix + 'toggle-button')(ejToggleButton) || ejToggleButton;
  return ejToggleButton;
})(WidgetBase);

exports.ejToggleButton = ejToggleButton;

var ejToolbar = (function (_WidgetBase8) {
  _inherits(ejToolbar, _WidgetBase8);

  function ejToolbar(element, templateEngine) {
    _classCallCheck(this, _ejToolbar);

    _WidgetBase8.call(this);
    this.element = element;
  }

  var _ejToolbar = ejToolbar;
  ejToolbar = _aureliaDependencyInjection.inject(Element)(ejToolbar) || ejToolbar;
  ejToolbar = generateBindables('ejToolbar', ['cssClass', 'dataSource', 'enabled', 'enableRTL', 'enableSeparator', 'fields', 'height', 'hide', 'isResponsive', 'orientation', 'query', 'showRoundedCorner', 'width'])(ejToolbar) || ejToolbar;
  ejToolbar = _aureliaTemplating.customAttribute(constants.attributePrefix + 'toolbar')(ejToolbar) || ejToolbar;
  return ejToolbar;
})(WidgetBase);

exports.ejToolbar = ejToolbar;