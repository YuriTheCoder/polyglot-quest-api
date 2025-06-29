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
import ApiTasksStatsGet200ResponseDataStats from './ApiTasksStatsGet200ResponseDataStats';
import Task from './Task';

/**
 * The ApiTasksStatsGet200ResponseData model module.
 * @module model/ApiTasksStatsGet200ResponseData
 * @version 1.0.0
 */
class ApiTasksStatsGet200ResponseData {
    /**
     * Constructs a new <code>ApiTasksStatsGet200ResponseData</code>.
     * @alias module:model/ApiTasksStatsGet200ResponseData
     */
    constructor() { 
        
        ApiTasksStatsGet200ResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiTasksStatsGet200ResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiTasksStatsGet200ResponseData} obj Optional instance to populate.
     * @return {module:model/ApiTasksStatsGet200ResponseData} The populated <code>ApiTasksStatsGet200ResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiTasksStatsGet200ResponseData();

            if (data.hasOwnProperty('stats')) {
                obj['stats'] = ApiTasksStatsGet200ResponseDataStats.constructFromObject(data['stats']);
            }
            if (data.hasOwnProperty('overdueTasks')) {
                obj['overdueTasks'] = ApiClient.convertToType(data['overdueTasks'], [Task]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiTasksStatsGet200ResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiTasksStatsGet200ResponseData</code>.
     */
    static validateJSON(data) {
        // validate the optional field `stats`
        if (data['stats']) { // data not null
          ApiTasksStatsGet200ResponseDataStats.validateJSON(data['stats']);
        }
        if (data['overdueTasks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['overdueTasks'])) {
                throw new Error("Expected the field `overdueTasks` to be an array in the JSON data but got " + data['overdueTasks']);
            }
            // validate the optional field `overdueTasks` (array)
            for (const item of data['overdueTasks']) {
                Task.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/ApiTasksStatsGet200ResponseDataStats} stats
 */
ApiTasksStatsGet200ResponseData.prototype['stats'] = undefined;

/**
 * @member {Array.<module:model/Task>} overdueTasks
 */
ApiTasksStatsGet200ResponseData.prototype['overdueTasks'] = undefined;






export default ApiTasksStatsGet200ResponseData;

