import {inject} from 'aurelia-dependency-injection';
import {customAttribute, bindable} from 'aurelia-templating';
import {ejConstants} from '../common/constants';

@customAttribute(`${ejConstants.attributePrefix}datepicker`)
@inject()
export class DatePicker {
  constructor() {
	  
  }
}