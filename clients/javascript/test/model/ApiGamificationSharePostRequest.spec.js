/**
 * Gamified Task Management API
 * API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GamifiedTaskManagementApi);
  }
}(this, function(expect, GamifiedTaskManagementApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GamifiedTaskManagementApi.ApiGamificationSharePostRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ApiGamificationSharePostRequest', function() {
    it('should create an instance of ApiGamificationSharePostRequest', function() {
      // uncomment below and update the code to test ApiGamificationSharePostRequest
      //var instance = new GamifiedTaskManagementApi.ApiGamificationSharePostRequest();
      //expect(instance).to.be.a(GamifiedTaskManagementApi.ApiGamificationSharePostRequest);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new GamifiedTaskManagementApi.ApiGamificationSharePostRequest();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new GamifiedTaskManagementApi.ApiGamificationSharePostRequest();
      //expect(instance).to.be();
    });

  });

}));
