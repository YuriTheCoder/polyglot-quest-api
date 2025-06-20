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
import ApiGamificationGlobalStatsGet200ResponseData from './ApiGamificationGlobalStatsGet200ResponseData';

/**
 * The ApiGamificationGlobalStatsGet200Response model module.
 * @module model/ApiGamificationGlobalStatsGet200Response
 * @version 1.0.0
 */
class ApiGamificationGlobalStatsGet200Response {
    /**
     * Constructs a new <code>ApiGamificationGlobalStatsGet200Response</code>.
     * @alias module:model/ApiGamificationGlobalStatsGet200Response
     */
    constructor() { 
        
        ApiGamificationGlobalStatsGet200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiGamificationGlobalStatsGet200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiGamificationGlobalStatsGet200Response} obj Optional instance to populate.
     * @return {module:model/ApiGamificationGlobalStatsGet200Response} The populated <code>ApiGamificationGlobalStatsGet200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiGamificationGlobalStatsGet200Response();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiGamificationGlobalStatsGet200ResponseData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiGamificationGlobalStatsGet200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiGamificationGlobalStatsGet200Response</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          ApiGamificationGlobalStatsGet200ResponseData.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {Boolean} success
 */
ApiGamificationGlobalStatsGet200Response.prototype['success'] = undefined;

/**
 * @member {module:model/ApiGamificationGlobalStatsGet200ResponseData} data
 */
ApiGamificationGlobalStatsGet200Response.prototype['data'] = undefined;






export default ApiGamificationGlobalStatsGet200Response;

