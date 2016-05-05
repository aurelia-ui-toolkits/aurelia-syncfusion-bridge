declare module 'aurelia-syncfusion-bridge' {
  import { Aurelia, inlineView }  from 'aurelia-framework';
  import { customElement, customAttribute, bindable, children, TemplatingEngine, BindableProperty, HtmlBehaviorResource, noView, processContent, TargetInstruction }  from 'aurelia-templating';
  import { inject, Container }  from 'aurelia-dependency-injection';
  import { metadata }  from 'aurelia-metadata';
  import { TaskQueue }  from 'aurelia-task-queue';
  import 'ej.button.min';
  import 'ej.checkbox.min';
  import 'ej.grid.min';
  import 'ej.listbox.min';
  import 'ej.menu.min';
  import 'ej.tab.min';
  import 'ej.togglebutton.min';
  import 'ej.toolbar.min';
  
  /**
  * Plugin configuration builder
  */
  export class EjConfigBuilder {
    resources: string[];
    useGlobalResources: boolean;
    
    /**
      * Globally register all EJ wrappers including templating support
      */
    useAll(): EjConfigBuilder;
    
    /**
      * Don't globalize any resources
      * Allows you to import wrappers yourself via <require></require>
      */
    withoutGlobalResources(): EjConfigBuilder;
    ejClickCounter(): EjConfigBuilder;
    ejButton(): EjConfigBuilder;
    ejMenu(): EjConfigBuilder;
    ejCheckBox(): EjConfigBuilder;
    ejGrid(): EjConfigBuilder;
    ejTemplate(): EjConfigBuilder;
    ejTab(): EjConfigBuilder;
    ejToolbar(): EjConfigBuilder;
    ejToggleButton(): EjConfigBuilder;
    ejListBox(): EjConfigBuilder;
  }
  export function configure(aurelia: Aurelia, configCallback?: ((builder: EjConfigBuilder) => void)): any;
  export class ejButton extends WidgetBase {
    constructor(element: any);
  }
  export class ejCheckBox extends WidgetBase {
    constructor(element: any);
  }
  export class ClickCounter {
    count: any;
    constructor(element: any);
    increment(): any;
    attached(): any;
  }
  export const constants: any;
  export function generateBindables(controlName: any, inputs: any, twoWayProperties: any): any;
  
  /**
  * To get binded events from the element
  * @param element The Element from which events acquired
  */
  export function getEventOption(element: any): any;
  
  /**
  * Fire DOM event on an element
  * @param element The Element which the DOM event will be fired on
  * @param name The Event's name
  * @param data Addition data to attach to an event
  */
  export function fireEvent(element: Element, name: string, data?: any): any;
  export class TemplateProcessor {
    constructor(context: any, templateEngine: any);
    initTemplate(): any;
    initWidgetDependancies(): any;
    renderStringTemplate(self: any, selector: any, data: any, index: any): any;
    compileTemplate(element: any): any;
    clearTempalte(): any;
    unbindViews(obj: any): any;
  }
  export class Template {
    template: any;
    constructor(target: any);
  }
  export class Util {
    getBindablePropertyName(propertyName: string): string;
    getOptions(model: any, properties: any): any;
    getControlPropertyName(options: any, propertyName: any): any;
    hasValue(prop: any): any;
    processData(value: any): any;
  }
  export class WidgetBase {
    
    /**
    * To Create an widget
    * @param option Object which contains  Element in which  widget will be created
    */
    createWidget(option: any): any;
    createTwoWays(): any;
    addTwoways(prop: any): any;
    
    /**
    * To get property and event options from the element
    * @param element Element from which options are acquired
    */
    getWidgetOptions(element: any): any;
    getChildProperties(options: any): any;
    attached(): any;
    
    /**
     * To change widget model value
     * @param property The viewModel property name
     * @param newValue New value of the property
     * @param oldvalue Pld value of the property
     */
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class Col {
    template: any;
    bind(): any;
  }
  export class ejGrid extends WidgetBase {
    columns: any;
    constructor(element: any, templateEngine: any);
  }
  export class ejListBox extends WidgetBase {
    constructor(element: any, templateEngine: any);
  }
  export class ejMenu extends WidgetBase {
    constructor(element: any);
  }
  export class ejTab extends WidgetBase {
    constructor(element: any);
  }
  export class ejToggleButton extends WidgetBase {
    constructor(element: any, templateEngine: any);
  }
  export class ejToolbar extends WidgetBase {
    constructor(element: any, templateEngine: any);
  }
}