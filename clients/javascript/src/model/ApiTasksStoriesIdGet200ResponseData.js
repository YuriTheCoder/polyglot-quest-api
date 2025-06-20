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
import Story from './Story';

/**
 * The ApiTasksStoriesIdGet200ResponseData model module.
 * @module model/ApiTasksStoriesIdGet200ResponseData
 * @version 1.0.0
 */
class ApiTasksStoriesIdGet200ResponseData {
    /**
     * Constructs a new <code>ApiTasksStoriesIdGet200ResponseData</code>.
     * @alias module:model/ApiTasksStoriesIdGet200ResponseData
     */
    constructor() { 
        
        ApiTasksStoriesIdGet200ResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiTasksStoriesIdGet200ResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiTasksStoriesIdGet200ResponseData} obj Optional instance to populate.
     * @return {module:model/ApiTasksStoriesIdGet200ResponseData} The populated <code>ApiTasksStoriesIdGet200ResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiTasksStoriesIdGet200ResponseData();

            if (data.hasOwnProperty('story')) {
                obj['story'] = Story.constructFromObject(data['story']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiTasksStoriesIdGet200ResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiTasksStoriesIdGet200ResponseData</code>.
     */
    static validateJSON(data) {
        // validate the optional field `story`
        if (data['story']) { // data not null
          Story.validateJSON(data['story']);
        }

        return true;
    }


}



/**
 * @member {module:model/Story} story
 */
ApiTasksStoriesIdGet200ResponseData.prototype['story'] = undefined;






export default ApiTasksStoriesIdGet200ResponseData;

