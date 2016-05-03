import {customElement} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {constants} from '../common/constants';

@customElement(`${constants.elementPrefix}click-counter`)
@inject(Element)
export class ClickCounter {
  count = 0;
constructor(element){
	this.element=element;
}
  increment() {
    this.count++;
  }
  attached(){

  }
}
