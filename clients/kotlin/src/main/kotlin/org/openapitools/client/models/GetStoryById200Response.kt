/**
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 *
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package org.openapitools.client.models

import org.openapitools.client.models.GetStoryById200ResponseData

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param success 
 * @param `data` 
 */


data class GetStoryById200Response (

    @Json(name = "success")
    val success: kotlin.Boolean? = null,

    @Json(name = "data")
    val `data`: GetStoryById200ResponseData? = null

) {


}

