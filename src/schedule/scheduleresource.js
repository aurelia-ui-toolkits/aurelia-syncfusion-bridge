import {inlineView, customElement, constants, generateBindables} from '../common/common';

@inlineView('<template><slot></slot></template>')
@customElement(`${constants.elementPrefix}schedule-resource`)
@generateBindables('resources', ['field', 'title', 'name', 'allowMultiple', 'resourceSettings'])

export class ScheduleResource {
}

