/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the ResourceProviderOperationDefinition class.
 * @constructor
 * Resource provider operation information.
 * @member {string} [name] Gets or sets the provider operation name.
 * 
 * @member {object} [display] Gets or sets the display property of the
 * provider operation.
 * 
 * @member {string} [display.publisher] Gets or sets operation description.
 * 
 * @member {string} [display.provider] Gets or sets operation provider.
 * 
 * @member {string} [display.resource] Gets or sets operation resource.
 * 
 * @member {string} [display.operation] Gets or sets operation.
 * 
 * @member {string} [display.description] Gets or sets operation description.
 * 
 */
function ResourceProviderOperationDefinition() {
}

/**
 * Defines the metadata of ResourceProviderOperationDefinition
 *
 * @returns {object} metadata of ResourceProviderOperationDefinition
 *
 */
ResourceProviderOperationDefinition.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ResourceProviderOperationDefinition',
    type: {
      name: 'Composite',
      className: 'ResourceProviderOperationDefinition',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        display: {
          required: false,
          serializedName: 'display',
          type: {
            name: 'Composite',
            className: 'ResourceProviderOperationDisplayProperties'
          }
        }
      }
    }
  };
};

module.exports = ResourceProviderOperationDefinition;