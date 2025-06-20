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
    instance = new GamifiedTaskManagementApi.CreateStoryFromTasks201ResponseDataQuestsInner();
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

  describe('CreateStoryFromTasks201ResponseDataQuestsInner', function() {
    it('should create an instance of CreateStoryFromTasks201ResponseDataQuestsInner', function() {
      // uncomment below and update the code to test CreateStoryFromTasks201ResponseDataQuestsInner
      //var instance = new GamifiedTaskManagementApi.CreateStoryFromTasks201ResponseDataQuestsInner();
      //expect(instance).to.be.a(GamifiedTaskManagementApi.CreateStoryFromTasks201ResponseDataQuestsInner);
    });

    it('should have the property questTitle (base name: "questTitle")', function() {
      // uncomment below and update the code to test the property questTitle
      //var instance = new GamifiedTaskManagementApi.CreateStoryFromTasks201ResponseDataQuestsInner();
      //expect(instance).to.be();
    });

    it('should have the property questDescription (base name: "questDescription")', function() {
      // uncomment below and update the code to test the property questDescription
      //var instance = new GamifiedTaskManagementApi.CreateStoryFromTasks201ResponseDataQuestsInner();
      //expect(instance).to.be();
    });

    it('should have the property difficulty (base name: "difficulty")', function() {
      // uncomment below and update the code to test the property difficulty
      //var instance = new GamifiedTaskManagementApi.CreateStoryFromTasks201ResponseDataQuestsInner();
      //expect(instance).to.be();
    });

    it('should have the property xp (base name: "xp")', function() {
      // uncomment below and update the code to test the property xp
      //var instance = new GamifiedTaskManagementApi.CreateStoryFromTasks201ResponseDataQuestsInner();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new GamifiedTaskManagementApi.CreateStoryFromTasks201ResponseDataQuestsInner();
      //expect(instance).to.be();
    });

  });

}));
