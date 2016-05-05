'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonCommon = require('../common/common');

require('ej.tab.min');

var ejTab = (function (_WidgetBase) {
    _inherits(ejTab, _WidgetBase);

    function ejTab(element) {
        _classCallCheck(this, _ejTab);

        _WidgetBase.call(this);
        this.element = element;
    }

    var _ejTab = ejTab;
    ejTab = _commonCommon.inject(Element)(ejTab) || ejTab;
    ejTab = _commonCommon.generateBindables('ejTab', ['collapsible', 'enableAnimation', 'ajaxSettings', 'disabledItemIndex', 'enabledItemIndex', 'hiddenItemIndex', 'events', 'idPrefix', 'heightAdjustMode', 'selectedItemIndex', 'cssClass', 'showCloseButton', 'htmlAttributes', 'enableTabScroll', 'showReloadIcon', 'headerPosition', 'width', 'height', 'headerSize', 'enableRTL', 'allowKeyboardNavigation', 'showRoundedCorner', 'enablePersistence', 'enabled'])(ejTab) || ejTab;
    ejTab = _commonCommon.customAttribute(_commonCommon.constants.attributePrefix + 'tab')(ejTab) || ejTab;
    return ejTab;
})(_commonCommon.WidgetBase);

exports.ejTab = ejTab;