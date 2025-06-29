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

import ApiClient from '../ApiClient';
import ApiTasksStoryPostRequestUserPreferences from './ApiTasksStoryPostRequestUserPreferences';

/**
 * The ApiTasksStoryPostRequest model module.
 * @module model/ApiTasksStoryPostRequest
 * @version 1.0.0
 */
class ApiTasksStoryPostRequest {
    /**
     * Constructs a new <code>ApiTasksStoryPostRequest</code>.
     * @alias module:model/ApiTasksStoryPostRequest
     * @param taskIds {Array.<String>} 
     */
    constructor(taskIds) { 
        
        ApiTasksStoryPostRequest.initialize(this, taskIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, taskIds) { 
        obj['taskIds'] = taskIds;
    }

    /**
     * Constructs a <code>ApiTasksStoryPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiTasksStoryPostRequest} obj Optional instance to populate.
     * @return {module:model/ApiTasksStoryPostRequest} The populated <code>ApiTasksStoryPostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiTasksStoryPostRequest();

            if (data.hasOwnProperty('taskIds')) {
                obj['taskIds'] = ApiClient.convertToType(data['taskIds'], ['String']);
            }
            if (data.hasOwnProperty('userPreferences')) {
                obj['userPreferences'] = ApiTasksStoryPostRequestUserPreferences.constructFromObject(data['userPreferences']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiTasksStoryPostRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiTasksStoryPostRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApiTasksStoryPostRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['taskIds'])) {
            throw new Error("Expected the field `taskIds` to be an array in the JSON data but got " + data['taskIds']);
        }
        // validate the optional field `userPreferences`
        if (data['userPreferences']) { // data not null
          ApiTasksStoryPostRequestUserPreferences.validateJSON(data['userPreferences']);
        }

        return true;
    }


}

ApiTasksStoryPostRequest.RequiredProperties = ["taskIds"];

/**
 * @member {Array.<String>} taskIds
 */
ApiTasksStoryPostRequest.prototype['taskIds'] = undefined;

/**
 * @member {module:model/ApiTasksStoryPostRequestUserPreferences} userPreferences
 */
ApiTasksStoryPostRequest.prototype['userPreferences'] = undefined;






export default ApiTasksStoryPostRequest;

