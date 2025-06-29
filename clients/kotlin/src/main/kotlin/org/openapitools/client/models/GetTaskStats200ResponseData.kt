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

import org.openapitools.client.models.GetTaskStats200ResponseDataStats
import org.openapitools.client.models.Task

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param stats 
 * @param overdueTasks 
 */


data class GetTaskStats200ResponseData (

    @Json(name = "stats")
    val stats: GetTaskStats200ResponseDataStats? = null,

    @Json(name = "overdueTasks")
    val overdueTasks: kotlin.collections.List<Task>? = null

) {


}

