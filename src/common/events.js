import {ejConstants} from './constants';

/**
* Collection of useful functions used in multiple parts of the plugin
*/
export class EJEvent {
  /**
  * Fire DOM event on an element
  * @param element The Element which the DOM event will be fired on
  * @param name The Event's name
  * @param data Addition data to attach to an event
  */
  fireEvent(element: Element, name: string, data = {}) {
    let event = new CustomEvent(name, {
      detail: data,
      bubbles: true
    });
    element.dispatchEvent(event);

    return event;
  }

  /**
  * Fire DOM event on an element with the ej-on prefix
  * @param element The Element which the DOM event will be fired on
  * @param name The Event's name, without ej-on prefix
  * @param data Addition data to attach to an event
  */
  fireEJEvent(element: Element, name: string, data = {}) {
    return this.fireEvent(element, `${ejConstants.eventPrefix}${name}`, data);
  }
}