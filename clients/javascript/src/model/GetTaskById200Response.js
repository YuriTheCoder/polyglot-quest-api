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
import CreateTask201ResponseData from './CreateTask201ResponseData';

/**
 * The GetTaskById200Response model module.
 * @module model/GetTaskById200Response
 * @version 1.0.0
 */
class GetTaskById200Response {
    /**
     * Constructs a new <code>GetTaskById200Response</code>.
     * @alias module:model/GetTaskById200Response
     */
    constructor() { 
        
        GetTaskById200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTaskById200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTaskById200Response} obj Optional instance to populate.
     * @return {module:model/GetTaskById200Response} The populated <code>GetTaskById200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTaskById200Response();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = CreateTask201ResponseData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetTaskById200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetTaskById200Response</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          CreateTask201ResponseData.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {Boolean} success
 */
GetTaskById200Response.prototype['success'] = undefined;

/**
 * @member {module:model/CreateTask201ResponseData} data
 */
GetTaskById200Response.prototype['data'] = undefined;






export default GetTaskById200Response;

