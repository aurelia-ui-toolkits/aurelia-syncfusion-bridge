import {Aurelia} from 'aurelia-framework';
import {EjConfigBuilder} from './config-builder';

export function configure(aurelia: Aurelia, configCallback?: (builder: EjConfigBuilder) => void) {
  let builder = new EjConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

      // Pull the data off the builder
  let resources = builder.resources;

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}
