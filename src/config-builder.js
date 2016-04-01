/**
* Plugin configuration builder
*/
export class EJConfigBuilder {

  globalResources = [];

  web() : EJConfigBuilder {
    return this.ejDatePicker();
  }

  ejDatePicker(): EJConfigBuilder {
    this.globalResources.push('./web/ej.datepicker');
    return this;
  }
}
