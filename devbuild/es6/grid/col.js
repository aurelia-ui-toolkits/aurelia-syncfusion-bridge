import {inlineView, customElement, children, constants, generateBindables, Util} from '../common/common';
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
