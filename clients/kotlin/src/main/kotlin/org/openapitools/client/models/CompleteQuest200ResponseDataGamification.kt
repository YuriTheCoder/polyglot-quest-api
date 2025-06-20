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


import com.squareup.moshi.Json
import com.squareup.moshi.JsonClass

/**
 * 
 *
 * @param xpGained 
 * @param leveledUp 
 * @param newLevel 
 * @param newBadges 
 * @param totalXP 
 * @param currentStreak 
 */


data class CompleteQuest200ResponseDataGamification (

    @Json(name = "xpGained")
    val xpGained: java.math.BigDecimal? = null,

    @Json(name = "leveledUp")
    val leveledUp: kotlin.Boolean? = null,

    @Json(name = "newLevel")
    val newLevel: java.math.BigDecimal? = null,

    @Json(name = "newBadges")
    val newBadges: kotlin.collections.List<kotlin.String>? = null,

    @Json(name = "totalXP")
    val totalXP: java.math.BigDecimal? = null,

    @Json(name = "currentStreak")
    val currentStreak: java.math.BigDecimal? = null

) {


}

