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
    instance = new GamifiedTaskManagementApi.ApiTasksIdCompleteQuestPost200ResponseDataGamification();
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

  describe('ApiTasksIdCompleteQuestPost200ResponseDataGamification', function() {
    it('should create an instance of ApiTasksIdCompleteQuestPost200ResponseDataGamification', function() {
      // uncomment below and update the code to test ApiTasksIdCompleteQuestPost200ResponseDataGamification
      //var instance = new GamifiedTaskManagementApi.ApiTasksIdCompleteQuestPost200ResponseDataGamification();
      //expect(instance).to.be.a(GamifiedTaskManagementApi.ApiTasksIdCompleteQuestPost200ResponseDataGamification);
    });

    it('should have the property xpGained (base name: "xpGained")', function() {
      // uncomment below and update the code to test the property xpGained
      //var instance = new GamifiedTaskManagementApi.ApiTasksIdCompleteQuestPost200ResponseDataGamification();
      //expect(instance).to.be();
    });

    it('should have the property leveledUp (base name: "leveledUp")', function() {
      // uncomment below and update the code to test the property leveledUp
      //var instance = new GamifiedTaskManagementApi.ApiTasksIdCompleteQuestPost200ResponseDataGamification();
      //expect(instance).to.be();
    });

    it('should have the property newLevel (base name: "newLevel")', function() {
      // uncomment below and update the code to test the property newLevel
      //var instance = new GamifiedTaskManagementApi.ApiTasksIdCompleteQuestPost200ResponseDataGamification();
      //expect(instance).to.be();
    });

    it('should have the property newBadges (base name: "newBadges")', function() {
      // uncomment below and update the code to test the property newBadges
      //var instance = new GamifiedTaskManagementApi.ApiTasksIdCompleteQuestPost200ResponseDataGamification();
      //expect(instance).to.be();
    });

    it('should have the property totalXP (base name: "totalXP")', function() {
      // uncomment below and update the code to test the property totalXP
      //var instance = new GamifiedTaskManagementApi.ApiTasksIdCompleteQuestPost200ResponseDataGamification();
      //expect(instance).to.be();
    });

    it('should have the property currentStreak (base name: "currentStreak")', function() {
      // uncomment below and update the code to test the property currentStreak
      //var instance = new GamifiedTaskManagementApi.ApiTasksIdCompleteQuestPost200ResponseDataGamification();
      //expect(instance).to.be();
    });

  });

}));
