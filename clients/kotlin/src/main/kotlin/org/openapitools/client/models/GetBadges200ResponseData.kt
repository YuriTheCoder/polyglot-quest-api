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

import org.openapitools.client.models.GetBadges200ResponseDataEarnedInner

import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param earned 
 * @param available 
 * @param total 
 * @param earnedCount 
 */


data class GetBadges200ResponseData (

    @Json(name = "earned")
    val earned: kotlin.collections.List<GetBadges200ResponseDataEarnedInner>? = null,

    @Json(name = "available")
    val available: kotlin.collections.List<kotlin.Any>? = null,

    @Json(name = "total")
    val total: java.math.BigDecimal? = null,

    @Json(name = "earnedCount")
    val earnedCount: java.math.BigDecimal? = null

) {


}

