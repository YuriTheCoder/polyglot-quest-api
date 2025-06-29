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
 * The UpdateGamificationPreferencesRequest model module.
 * @module model/UpdateGamificationPreferencesRequest
 * @version 1.0.0
 */
class UpdateGamificationPreferencesRequest {
    /**
     * Constructs a new <code>UpdateGamificationPreferencesRequest</code>.
     * @alias module:model/UpdateGamificationPreferencesRequest
     */
    constructor() { 
        
        UpdateGamificationPreferencesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateGamificationPreferencesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateGamificationPreferencesRequest} obj Optional instance to populate.
     * @return {module:model/UpdateGamificationPreferencesRequest} The populated <code>UpdateGamificationPreferencesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateGamificationPreferencesRequest();

            if (data.hasOwnProperty('class')) {
                obj['class'] = ApiClient.convertToType(data['class'], 'String');
            }
            if (data.hasOwnProperty('theme')) {
                obj['theme'] = ApiClient.convertToType(data['theme'], 'String');
            }
            if (data.hasOwnProperty('autoShare')) {
                obj['autoShare'] = ApiClient.convertToType(data['autoShare'], 'Boolean');
            }
            if (data.hasOwnProperty('shareOnLevelUp')) {
                obj['shareOnLevelUp'] = ApiClient.convertToType(data['shareOnLevelUp'], 'Boolean');
            }
            if (data.hasOwnProperty('shareOnBadge')) {
                obj['shareOnBadge'] = ApiClient.convertToType(data['shareOnBadge'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateGamificationPreferencesRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateGamificationPreferencesRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['class'] && !(typeof data['class'] === 'string' || data['class'] instanceof String)) {
            throw new Error("Expected the field `class` to be a primitive type in the JSON string but got " + data['class']);
        }
        // ensure the json data is a string
        if (data['theme'] && !(typeof data['theme'] === 'string' || data['theme'] instanceof String)) {
            throw new Error("Expected the field `theme` to be a primitive type in the JSON string but got " + data['theme']);
        }

        return true;
    }


}



/**
 * @member {module:model/UpdateGamificationPreferencesRequest.ClassEnum} class
 */
UpdateGamificationPreferencesRequest.prototype['class'] = undefined;

/**
 * @member {module:model/UpdateGamificationPreferencesRequest.ThemeEnum} theme
 */
UpdateGamificationPreferencesRequest.prototype['theme'] = undefined;

/**
 * @member {Boolean} autoShare
 */
UpdateGamificationPreferencesRequest.prototype['autoShare'] = undefined;

/**
 * @member {Boolean} shareOnLevelUp
 */
UpdateGamificationPreferencesRequest.prototype['shareOnLevelUp'] = undefined;

/**
 * @member {Boolean} shareOnBadge
 */
UpdateGamificationPreferencesRequest.prototype['shareOnBadge'] = undefined;





/**
 * Allowed values for the <code>class</code> property.
 * @enum {String}
 * @readonly
 */
UpdateGamificationPreferencesRequest['ClassEnum'] = {

    /**
     * value: "Aventureiro"
     * @const
     */
    "Aventureiro": "Aventureiro",

    /**
     * value: "Guerreiro"
     * @const
     */
    "Guerreiro": "Guerreiro",

    /**
     * value: "Mago"
     * @const
     */
    "Mago": "Mago",

    /**
     * value: "Ladino"
     * @const
     */
    "Ladino": "Ladino",

    /**
     * value: "Paladino"
     * @const
     */
    "Paladino": "Paladino",

    /**
     * value: "Explorador"
     * @const
     */
    "Explorador": "Explorador"
};


/**
 * Allowed values for the <code>theme</code> property.
 * @enum {String}
 * @readonly
 */
UpdateGamificationPreferencesRequest['ThemeEnum'] = {

    /**
     * value: "medieval"
     * @const
     */
    "medieval": "medieval",

    /**
     * value: "scifi"
     * @const
     */
    "scifi": "scifi",

    /**
     * value: "modern"
     * @const
     */
    "modern": "modern",

    /**
     * value: "fantasy"
     * @const
     */
    "fantasy": "fantasy"
};



export default UpdateGamificationPreferencesRequest;

