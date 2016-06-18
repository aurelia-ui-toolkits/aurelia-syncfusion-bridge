import {inlineView, customElement, constants, generateBindables} from '../common/common';

@inlineView('<template><slot></slot></template>')
@customElement(`${constants.elementPrefix}sheet`)
@generateBindables('sheets', ['colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'headerStyles', 'primaryKey', 'query', 'rangeSettings', 'rowCount', 'showGridlines', 'showHeader', 'showHeadings', 'startCell'])

export class Sheet {
}

