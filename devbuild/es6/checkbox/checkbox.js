import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

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
