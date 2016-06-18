import {inject, WidgetBase, constants, generateBindables, inlineView, customElement, children, TemplatingEngine, TemplateProcessor} from '../common/common';

import 'ej.radialmenu.min';

@customElement(`${constants.elementPrefix}radial-menu`)
@inlineView('<template><slot></slot></template>')
@generateBindables('ejRadialMenu', ['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass', 'items', 'radius', 'targetElementId', 'position'])
@inject(Element, TemplatingEngine)
export class ejRadialMenu extends WidgetBase {
  @children(`${constants.elementPrefix}item`) items = [];
  constructor(element, templateEngine) {
    super();
    this.element = element;
    this.hasChildProperty = true;
    this.childPropertyName = 'items';
    this.templateProcessor = new TemplateProcessor(this, templateEngine);
    this.templateProcessor.initTemplate();
  }

  attached() {
    this.items.forEach(item => item.setTemplates());
    super.attached();
  }
}
