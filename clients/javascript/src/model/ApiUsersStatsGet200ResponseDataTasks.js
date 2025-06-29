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

/**
 * The ApiUsersStatsGet200ResponseDataTasks model module.
 * @module model/ApiUsersStatsGet200ResponseDataTasks
 * @version 1.0.0
 */
class ApiUsersStatsGet200ResponseDataTasks {
    /**
     * Constructs a new <code>ApiUsersStatsGet200ResponseDataTasks</code>.
     * @alias module:model/ApiUsersStatsGet200ResponseDataTasks
     */
    constructor() { 
        
        ApiUsersStatsGet200ResponseDataTasks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiUsersStatsGet200ResponseDataTasks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiUsersStatsGet200ResponseDataTasks} obj Optional instance to populate.
     * @return {module:model/ApiUsersStatsGet200ResponseDataTasks} The populated <code>ApiUsersStatsGet200ResponseDataTasks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiUsersStatsGet200ResponseDataTasks();

            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('completed')) {
                obj['completed'] = ApiClient.convertToType(data['completed'], 'Number');
            }
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = ApiClient.convertToType(data['pending'], 'Number');
            }
            if (data.hasOwnProperty('inProgress')) {
                obj['inProgress'] = ApiClient.convertToType(data['inProgress'], 'Number');
            }
            if (data.hasOwnProperty('overdue')) {
                obj['overdue'] = ApiClient.convertToType(data['overdue'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiUsersStatsGet200ResponseDataTasks</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiUsersStatsGet200ResponseDataTasks</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} total
 */
ApiUsersStatsGet200ResponseDataTasks.prototype['total'] = undefined;

/**
 * @member {Number} completed
 */
ApiUsersStatsGet200ResponseDataTasks.prototype['completed'] = undefined;

/**
 * @member {Number} pending
 */
ApiUsersStatsGet200ResponseDataTasks.prototype['pending'] = undefined;

/**
 * @member {Number} inProgress
 */
ApiUsersStatsGet200ResponseDataTasks.prototype['inProgress'] = undefined;

/**
 * @member {Number} overdue
 */
ApiUsersStatsGet200ResponseDataTasks.prototype['overdue'] = undefined;






export default ApiUsersStatsGet200ResponseDataTasks;

