import {inlineView, customElement, constants, generateBindables} from '../common/common';

@inlineView('<template><slot></slot></template>')
@customElement(`${constants.elementPrefix}range-series`)
@generateBindables('series', [])

export class RangeSeries {
}

