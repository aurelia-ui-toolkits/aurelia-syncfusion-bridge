'use strict';

exports.__esModule = true;
exports.generateBindables = generateBindables;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaMetadata = require('aurelia-metadata');

var _util = require('./util');

function generateBindables(controlName, inputs, twoWayProperties) {
  return function (target, key, descriptor) {
    var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
    var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
    var util = container.get(_util.Util);
    inputs.push('options');
    var len = inputs.length;
    target.prototype.controlName = controlName;
    target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
    if (len) {
      target.prototype.controlProperties = inputs;
      for (var i = 0; i < len + 1; i++) {
        var option = inputs[i];
        var nameOrConfigOrTarget = {
          name: util.getBindablePropertyName(option)
        };
        var prop = new _aureliaTemplating.BindableProperty(nameOrConfigOrTarget);
        prop.registerWith(target, behaviorResource, descriptor);
      }
    }
  };
}