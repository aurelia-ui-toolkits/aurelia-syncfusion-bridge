import {customAttribute, bindable, customElement, children, TemplatingEngine} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {inlineView} from 'aurelia-framework';

import {WidgetBase} from './widget-base';
import {constants} from './constants';
import {generateBindables} from './decorators';
import {TemplateProcessor} from './template-processor';
import {Util} from './util';

export {customAttribute, bindable, inject, WidgetBase, constants, generateBindables, inlineView, customElement, children, TemplatingEngine, TemplateProcessor, Util};