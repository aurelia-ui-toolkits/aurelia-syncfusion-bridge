import {Aurelia,inlineView} from 'aurelia-framework';
import {customElement,customAttribute,bindable,children,TemplatingEngine,BindableProperty,HtmlBehaviorResource,noView,processContent,TargetInstruction} from 'aurelia-templating';
import {inject,Container} from 'aurelia-dependency-injection';
import {metadata} from 'aurelia-metadata';
import {TaskQueue} from 'aurelia-task-queue';

/**
* Plugin configuration builder
*/
export class EjConfigBuilder {

  resources: string[] = [];
  useGlobalResources: boolean = true;

  /**
  * Globally register all EJ wrappers including templating support
  */
  useAll() : EjConfigBuilder {
    this.ejClickCounter().ejButton().ejMenu().ejCheckBox().ejGrid().ejTemplate().ejTab()
    .ejToggleButton().ejToolbar().ejListBox();
    return this;
  }

   /**
  * Don't globalize any resources
  * Allows you to import wrappers yourself via <require></require>
  */
  withoutGlobalResources(): EjConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }
  ejClickCounter(): EjConfigBuilder {
    this.resources.push('./clickcounter/clickcounter');
    return this;
  }
  ejButton(): EjConfigBuilder {
    this.resources.push('./button/button');
    return this;
  }

  ejMenu(): EjConfigBuilder {
    this.resources.push('./menu/menu');
    return this;
  }
  ejCheckBox():EjConfigBuilder {
    this.resources.push('./checkbox/checkbox');
    return this;
  }
  ejGrid(): EjConfigBuilder {
    this.resources.push('./grid/grid');
    this.resources.push('./grid/col');
    return this;
  }
  ejTemplate(): EjConfigBuilder {
    this.resources.push('./common/template');
    return this;
  }
  ejTab(): EjConfigBuilder {
    this.resources.push('./tab/tab');
    return this;
  }
  ejToolbar() : EjConfigBuilder {
    this.resources.push('./toolbar/toolbar');
    return this;
  }
  ejToggleButton() : EjConfigBuilder {
    this.resources.push('./togglebutton/togglebutton');
    return this;
  }
  ejListBox() : EjConfigBuilder {
    this.resources.push('./listbox/listbox');
    return this;
  }
}

export function configure(aurelia: Aurelia, configCallback?: (builder: EjConfigBuilder) => void) {
  let builder = new EjConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

      // Pull the data off the builder
  let resources = builder.resources;

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}

import 'ej.button.min';

@customAttribute(`${constants.attributePrefix}button`)
@generateBindables('ejButton', ['contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition',
    'prefixIcon', 'repeatButton', 'showRoundedCorner', 'size', 'suffixIcon', 'text', 'timeInterval', 'type', 'width'])

@inject(Element)
export class ejButton extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}

import 'ej.checkbox.min';

@customAttribute(`${constants.attributePrefix}checkbox`)
@generateBindables('ejCheckBox', ['checked', 'checkstate', 'enabled', 'cssClass', 'enablePersistence', 'enableRTL',
    'enableTriState', 'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner', 'size', 'text', 'validationMessage',
    'validationRules', 'value'], ['checked'])
@inject(Element)
export class ejCheckBox extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}

@customElement(`${constants.elementPrefix}click-counter`)
@inject(Element)
export class ClickCounter {
  count = 0;
constructor(element){
	this.element=element;
}
  increment() {
    this.count++;
  }
  attached(){

  }
}

export {customAttribute, bindable, inject, WidgetBase, constants, generateBindables, inlineView, customElement, children, TemplatingEngine, TemplateProcessor, Util};
export const constants = {
  eventPrefix: 'ej-on-',
  bindablePrefix: 'ej-',
  attributePrefix: 'ej-',
  elementPrefix: 'ej-'
};

export function generateBindables(controlName, inputs, twoWayProperties) {
  return function(target, key, descriptor) {
    let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
    let container = (Container.instance || new Container());
    let util = container.get(Util);
    inputs.push('options');
    let len = inputs.length;
    target.prototype.controlName = controlName;
    target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
    if (len) {
      target.prototype.controlProperties = inputs;
      for (let i = 0; i < len + 1; i++) {
        let option = inputs[i];
        let nameOrConfigOrTarget = {
          name: util.getBindablePropertyName(option)
        };
        let prop = new BindableProperty(nameOrConfigOrTarget);
        prop.registerWith(target, behaviorResource, descriptor);
      }
    }
  };
}

/**
* To get binded events from the element
* @param element The Element from which events acquired
*/
export function getEventOption(element) {
  let name;
  let attr;
  let attributes = element.attributes;
  let option = {};
  let container = (Container.instance || new Container());
  let util = container.get(Util);
  for (let i = 0, len = attributes.length; i < len; i++) {
    attr = attributes[i];
    name = attr.name;
    if (!name.startsWith(constants.eventPrefix)) {
      continue;
    }
    let actualEventName = name.split('.')[0];//Event name with constants event prefix
    let eventName = util._unhyphenate(actualEventName.split(constants.eventPrefix)[1]);
    option[eventName] = e => fireEvent(element, actualEventName, e);
  }
  return option;
}
/**
* Fire DOM event on an element
* @param element The Element which the DOM event will be fired on
* @param name The Event's name
* @param data Addition data to attach to an event
*/
export function fireEvent(element: Element, name: string, data? = {}) {
  let event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);
  return event;
}

@inject(TemplatingEngine, Util)
export class TemplateProcessor {

  constructor(context, templateEngine) {
    this.context = context;
    this.templatingEngine = templateEngine;
    this.util = new Util();
  }

  initTemplate() {
    let proxy = this;
    ej.template.render = function(self, selector, data, index) {
      return proxy.renderStringTemplate(self, selector, data, index);
    };
  }

  initWidgetDependancies() {
    if ( this.context.widget.aureliaTemplate) {
      this.compileTemplate(this.context.widget.element);
    }
    let proxy =  this.context;
    let element =  this.context.widget.element;
    element.on( this.context.widget.pluginName + 'refresh', function() {
      if (proxy.widget.aureliaTemplate) {
        proxy.templateProcessor.compileTemplate(element);
      }
    });
  }

  renderStringTemplate(self, selector, data, index) {
    let templateObject = self.aureliaTemplate;
    if (!templateObject || !templateObject[selector]) {
      templateObject = templateObject || {};
      templateObject[selector] = { key: ej.getGuid('aurtmpl'), itemData: [], views: [] };
      self.aureliaTemplate = templateObject;
    }
    let scope = templateObject[selector];
    if (this.util.hasValue(index)) {
      scope.itemData[index] = data;
    } else {
      scope.itemData = [data];
    }
    let actElement = $(selector).html();
    let tempElement = "<div class='" + templateObject[selector].key + " ej-aurelia-template'>" + actElement + '</div>';
    return tempElement;
  }

  compileTemplate(element) {
    let templates = $(element).find('.ej-aurelia-template');
    let templateObject =  this.context.widget.aureliaTemplate;
    for (let template in templateObject) {
      let tmplElement = templates.filter('.' + templateObject[template].key);
      if (tmplElement.length) {
        for (let i = 0; i < tmplElement.length; i++) {
          let view = this.templatingEngine.enhance(tmplElement[i]);
          view.bind(templateObject[template].itemData[i]);
          templateObject[template].views[i] = view;
        }
      } else {
        this.unbindViews(templateObject[template]);
        delete templateObject[template];
      }
    }
  }

  clearTempalte() {
    let templateObject =  this.context.widget.aureliaTemplate;
    if (templateObject && Object.keys(templateObject).length) {
      for (let t in templateObject) {
        this.unbindViews(templateObject[t]);
        delete templateObject[t];
      }
    }
  }

  unbindViews(obj) {
    for (let i = 0; i < obj.views.length; i++) {
      let view = obj.views[i];
      view.unbind();
    }
  }

}

@customElement(`${constants.elementPrefix}template`)
@noView()
@processContent((compiler, resources, element, instruction) => {
  let html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }
  return true;
})
@inject(TargetInstruction)
export class Template {
  @bindable template;
  constructor(target) {
    this.template = target.elementInstruction.template;
  }

}

export class Util {

  getBindablePropertyName(propertyName: string): string {
    let name = `${constants.bindablePrefix}${propertyName}`;
    return this._unhyphenate(name);
  }

  _unhyphenate(name: string): string {
    return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  }

  getOptions(model, properties ) {
    let bindableproperites = {};
    for (let prop of properties) {
      let value = model[this.getBindablePropertyName(prop)];
      if (this.hasValue(value)) {
        if (typeof value === 'string' ) {
          value = this.processData(value);
        }
        bindableproperites[prop] = value;
      }
    }
    return bindableproperites;
  }

  getControlPropertyName(options, propertyName) {
    let property;
    for (let prop of options.controlProperties) {
      if (propertyName === this.getBindablePropertyName(prop)) {
        property = prop;
        break;
      }
    }
    return property;
  }

  hasValue(prop) {
    return typeof (prop) !== 'undefined' && prop !== null;
  }

  processData(value) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (+value + '' === value) {
      return +value;
    }
    return value;
  }
}

let firstValue = {};
export class WidgetBase {
/**
* To Create an widget
* @param option Object which contains  Element in which  widget will be created
*/
  createWidget(option) {
    this.allOption = this.getWidgetOptions(option.element);
    if (!this.ejOptions) {
      this.createTwoWays();
    }
    this.widget = jQuery($(option.element))[this.controlName](this.allOption ).data(this.controlName);
    if (this.templateProcessor) {
      this.templateProcessor.initWidgetDependancies();
    }
  }

  createTwoWays() {
    let model = this.allOption;
    let twoWays = this.twoWays;
    let len = twoWays.length;
    for (let i = 0; i < len; i++) {
      let prop = twoWays[i];
      ej.createObject(prop, this.addTwoways(prop), model);
    }
  }

  addTwoways(prop) {
    let model = this;
    let value = firstValue;
    return function(newVal, isApp) {
      if (value === firstValue) {
        let viewModelProp = model.util.getBindablePropertyName(prop);
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
      if (!isApp && model.util.hasValue(newVal) ) {
        let viewModelProp = model.util.getBindablePropertyName(prop);
        model[viewModelProp] = newVal;
      }
      return null;
    };
  }
/**
* To get property and event options from the element
* @param element Element from which options are acquired
*/
  getWidgetOptions(element) {
    let propOptions;
    if (this.ejOptions) {
      propOptions = this.ejOptions;
    } else {
      propOptions = this.util.getOptions(this, this.controlProperties);
    }
    let eventOption = getEventOption(element);
    if (this.hasChildProperty) {
      this.getChildProperties(propOptions);
    }
    return Object.assign({}, propOptions, eventOption);
  }

  getChildProperties(options) {
    let PropertyName = this.childPropertyName;
    let childCollection = this[PropertyName];
    let len = childCollection.length;
    if (len) {
      options[PropertyName] = [];
      let childProperties = childCollection[0].controlProperties;
      for (let i = 0; i < len; i++) {
        options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
      }
    }
  }

  attached() {
    this.util = new Util();
    this.createWidget({ element: this.element });
  }
/**
 * To change widget model value
 * @param property The viewModel property name
 * @param newValue New value of the property
 * @param oldvalue Pld value of the property
 */
  propertyChanged(property, newValue, oldValue) {
    if (this.widget) {
      let modelValue;
      let prop = this.util.getControlPropertyName(this, property);
      if (prop) {
        if (prop !== 'options') {
          modelValue = this.widget.model[prop];
          let isTwoway = typeof modelValue === 'function';
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
  }
  detached() {
    if (this.templateProcessor) {
      this.templateProcessor.clearTempalte();
    }
    this.widget.destroy();
  }
}


@inlineView('<template><content></content></template>')
@customElement(`${constants.elementPrefix}col`)
  @generateBindables('ejColumns', ['allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting', 'allowResizing',
    'showInColumnChooser', 'commands', 'cssClass', 'customAttributes',
    'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'editParams', 'editTemplate',
    'editType', 'field', 'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID',
    'headerText', 'headerTextAlign', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'isUnbound',
    'template', 'templateID', 'textAlign', 'tooltip', 'clipMode', 'type',
    'validationRules', 'visible', 'width'])
export class Col {
 @children(`${constants.elementPrefix}template`) template
  bind() {
    if (this.template[0]) {
      let util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  }
}

import 'ej.grid.min';
@inlineView('<template><content></content></template>')
@customElement(`${constants.elementPrefix}grid`)
  @generateBindables('ejGrid', ['allowCellMerging', 'allowGrouping', 'allowKeyboardNavigation', 'allowFiltering', 'allowSorting', 'allowMultiSorting', 'allowPaging',
    'allowReordering', 'allowResizeToFit', 'allowResizing', 'allowScrolling', 'allowSearching', 'allowSelection',
    'allowTextWrap', 'allowMultipleExporting', 'commonWidth', 'gridLines', 'childGrid', 'columnLayout',
    'columns', 'contextMenuSettings', 'cssClass',
    'dataSource', 'detailsTemplate', 'editSettings', 'enableAltRow',
    'enableAutoSaveOnSelectionChange', 'enableHeaderHover', 'enablePersistence', 'enableResponsiveRow', 'enableRowHover', 'enableRTL',
    'enableTouch', 'filterSettings', 'groupSettings', 'textWrapSettings', 'isResponsive', 'keySettings', 'locale', 'minWidth', 'pageSettings', 'query', 'rowTemplate', 'scrollSettings',
    'searchSettings', 'selectedRecords', 'selectedRowIndex', 'selectionSettings', 'selectionType', 'showAddNewRow', 'showColumnChooser', 'showInColumnChooser', 'showStackedHeader', 'showSummary',
    'sortSettings', 'stackedHeaderRows', 'summaryRows', 'toolbarSettings'], ['dataSource'])

@inject(Element, TemplatingEngine)
export class ejGrid extends WidgetBase {
  @children(`${constants.elementPrefix}col`) columns
  constructor(element, templateEngine) {
    super();
    this.hasChildProperty = true;
    this.childPropertyName = 'columns';
    this.element = element;
    this.templateProcessor = new TemplateProcessor(this, templateEngine);
    this.templateProcessor.initTemplate();
  }
}

import 'ej.listbox.min';

@customAttribute(`${constants.attributePrefix}list-box`)

@generateBindables('ejListBox', ['allowDrag', 'allowDrop', 'allowMultiSelection', 'allowVirtualScrolling', 'caseSensitiveSearch', 'cascadeTo', 'checkedIndices',
  'cssClass', 'dataSource', 'enabled', 'enableIncrementalSearch', 'enablePersistence', 'enableRTL',
  'fields', 'height', 'itemsCount', 'totalItemsCount', 'itemRequestCount', 'loadDataOnInit',
  'query', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showRoundedCorner', 'template',
  'value', 'virtualScrollMode', 'width', 'targetID'])
@inject(Element)
export class ejListBox extends WidgetBase {
  constructor(element, templateEngine) {
    super();
    this.element = element;
  }
}



import 'ej.menu.min';

@customAttribute(`${constants.attributePrefix}menu`)
@generateBindables('ejMenu', ['height', 'width', 'animationType', 'orientation', 'menuType', 'contextMenuTarget', 'htmlAttributes', 'cssClass',
    'openOnClick', 'subMenuDirection', 'enableCenterAlign', 'showRootLevelArrows', 'showSubLevelArrows', 'enableAnimation', 'enableSeparator', 'enabled', 'fields', 'enableRTL',
    'titleText', 'excludeTarget'])

@inject(Element)
export class ejMenu extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}

import 'ej.tab.min';

@customAttribute(`${constants.attributePrefix}tab`)
@generateBindables('ejTab', ['collapsible', 'enableAnimation', 'ajaxSettings', 'disabledItemIndex', 'enabledItemIndex', 'hiddenItemIndex', 'events', 'idPrefix',
    'heightAdjustMode', 'selectedItemIndex', 'cssClass', 'showCloseButton', 'htmlAttributes', 'enableTabScroll', 'showReloadIcon', 'headerPosition', 'width', 'height',
    'headerSize', 'enableRTL', 'allowKeyboardNavigation', 'showRoundedCorner', 'enablePersistence', 'enabled',])

@inject(Element)
export class ejTab extends WidgetBase {
    constructor(element) {
        super();
        this.element = element;
    }
}

import 'ej.togglebutton.min';

@customAttribute(`${constants.attributePrefix}toggle-button`)

@generateBindables('ejToggleButton', ['activePrefixIcon', 'activeSuffixIcon', 'activeText', 'contentType', 'cssClass', 'defaultPrefixIcon', 'defaultSuffixIcon',
  'defaultText', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes',
  'imagePosition', 'preventToggle', 'showRoundedCorner', 'size', 'toggleState', 'type',
  'width'])
@inject(Element)
export class ejToggleButton extends WidgetBase {
  constructor(element, templateEngine) {
    super();
    this.element = element;
  }
}



import 'ej.toolbar.min';

@customAttribute(`${constants.attributePrefix}toolbar`)

@generateBindables('ejToolbar', ['cssClass', 'dataSource', 'enabled', 'enableRTL', 'enableSeparator', 'fields', 'height', 'hide', 'isResponsive', 'orientation', 'query',
  'showRoundedCorner', 'width'])
@inject(Element)
export class ejToolbar extends WidgetBase {
  constructor(element, templateEngine) {
    super();
    this.element = element;
  }
}


