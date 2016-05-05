import {inject, WidgetBase, constants, generateBindables, inlineView, customElement, children} from '../common/common';

import 'ej.kanban.min';

@customElement(`${constants.elementPrefix}kanban`)
@inlineView('<template><content></content></template>')

@generateBindables('ejKanban', ['allowDragAndDrop', 'allowTitle', 'swimlaneSettings', 'allowToggleColumn', 'allowSearching', 'allowSelection',
    'allowHover', 'allowKeyboardNavigation', 'allowScrolling', 'contextMenuSettings', 'columns', 'cardSettings', 'cssClass', 'dataSource', 'enableRTL', 'enableTotalCount', 'editSettings', 'fields', 'keyField', 'isResponsive', 'minWidth', 'filterSettings', 'query', 'keySettings', 'scrollSettings', 'searchSettings', 'selectionType', 'stackedHeaderRows', 'tooltipSettings', 'locale'], ['dataSource'])
@inject(Element)
export class ejKanban extends WidgetBase {
    @children(`${constants.elementPrefix}kanbanColumn`) columns
    constructor(element) {
        super();
        this.element = element;
        this.hasChildProperty = true;
        this.childPropertyName = 'columns';
    }
}