import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

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
