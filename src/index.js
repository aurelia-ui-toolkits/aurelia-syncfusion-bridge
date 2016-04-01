import {Aurelia} from 'aurelia-framework';
import {EJConfigBuilder} from './config-builder';

export function configure(aurelia: Aurelia, configCallback?: (builder: EJConfigBuilder) => void) {
  let builder = new EJConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

  aurelia.globalResources(builder.globalResources);
}
