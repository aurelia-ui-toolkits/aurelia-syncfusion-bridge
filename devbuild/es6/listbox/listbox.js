import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

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


