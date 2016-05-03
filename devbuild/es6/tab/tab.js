import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

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
