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
 * The ApiUsersIdPutRequest model module.
 * @module model/ApiUsersIdPutRequest
 * @version 1.0.0
 */
class ApiUsersIdPutRequest {
    /**
     * Constructs a new <code>ApiUsersIdPutRequest</code>.
     * @alias module:model/ApiUsersIdPutRequest
     */
    constructor() { 
        
        ApiUsersIdPutRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiUsersIdPutRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiUsersIdPutRequest} obj Optional instance to populate.
     * @return {module:model/ApiUsersIdPutRequest} The populated <code>ApiUsersIdPutRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiUsersIdPutRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiUsersIdPutRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiUsersIdPutRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
ApiUsersIdPutRequest.prototype['name'] = undefined;

/**
 * @member {String} email
 */
ApiUsersIdPutRequest.prototype['email'] = undefined;

/**
 * @member {module:model/ApiUsersIdPutRequest.RoleEnum} role
 */
ApiUsersIdPutRequest.prototype['role'] = undefined;

/**
 * @member {Boolean} isActive
 */
ApiUsersIdPutRequest.prototype['isActive'] = undefined;





/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
ApiUsersIdPutRequest['RoleEnum'] = {

    /**
     * value: "user"
     * @const
     */
    "user": "user",

    /**
     * value: "admin"
     * @const
     */
    "admin": "admin"
};



export default ApiUsersIdPutRequest;

