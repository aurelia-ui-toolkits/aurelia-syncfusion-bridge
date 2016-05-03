import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

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


