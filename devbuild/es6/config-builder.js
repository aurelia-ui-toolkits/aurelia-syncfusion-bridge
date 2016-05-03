/**
* Plugin configuration builder
*/
export class EjConfigBuilder {

  resources: string[] = [];
  useGlobalResources: boolean = true;

  /**
  * Globally register all EJ wrappers including templating support
  */
  useAll() : EjConfigBuilder {
    this.ejClickCounter().ejButton().ejMenu().ejCheckBox().ejGrid().ejTemplate().ejTab()
    .ejToggleButton().ejToolbar().ejListBox();
    return this;
  }

   /**
  * Don't globalize any resources
  * Allows you to import wrappers yourself via <require></require>
  */
  withoutGlobalResources(): EjConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }
  ejClickCounter(): EjConfigBuilder {
    this.resources.push('./clickcounter/clickcounter');
    return this;
  }
  ejButton(): EjConfigBuilder {
    this.resources.push('./button/button');
    return this;
  }

  ejMenu(): EjConfigBuilder {
    this.resources.push('./menu/menu');
    return this;
  }
  ejCheckBox():EjConfigBuilder {
    this.resources.push('./checkbox/checkbox');
    return this;
  }
  ejGrid(): EjConfigBuilder {
    this.resources.push('./grid/grid');
    this.resources.push('./grid/col');
    return this;
  }
  ejTemplate(): EjConfigBuilder {
    this.resources.push('./common/template');
    return this;
  }
  ejTab(): EjConfigBuilder {
    this.resources.push('./tab/tab');
    return this;
  }
  ejToolbar() : EjConfigBuilder {
    this.resources.push('./toolbar/toolbar');
    return this;
  }
  ejToggleButton() : EjConfigBuilder {
    this.resources.push('./togglebutton/togglebutton');
    return this;
  }
  ejListBox() : EjConfigBuilder {
    this.resources.push('./listbox/listbox');
    return this;
  }
}
