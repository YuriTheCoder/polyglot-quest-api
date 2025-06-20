/*
 * Gamified Task Management API
 * API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * CompleteQuest200ResponseDataGamification
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-06-14T22:52:12.042322500-03:00[America/Sao_Paulo]", comments = "Generator version: 7.13.0")
public class CompleteQuest200ResponseDataGamification {
  public static final String SERIALIZED_NAME_XP_GAINED = "xpGained";
  @SerializedName(SERIALIZED_NAME_XP_GAINED)
  @javax.annotation.Nullable
  private BigDecimal xpGained;

  public static final String SERIALIZED_NAME_LEVELED_UP = "leveledUp";
  @SerializedName(SERIALIZED_NAME_LEVELED_UP)
  @javax.annotation.Nullable
  private Boolean leveledUp;

  public static final String SERIALIZED_NAME_NEW_LEVEL = "newLevel";
  @SerializedName(SERIALIZED_NAME_NEW_LEVEL)
  @javax.annotation.Nullable
  private BigDecimal newLevel;

  public static final String SERIALIZED_NAME_NEW_BADGES = "newBadges";
  @SerializedName(SERIALIZED_NAME_NEW_BADGES)
  @javax.annotation.Nullable
  private List<String> newBadges = new ArrayList<>();

  public static final String SERIALIZED_NAME_TOTAL_X_P = "totalXP";
  @SerializedName(SERIALIZED_NAME_TOTAL_X_P)
  @javax.annotation.Nullable
  private BigDecimal totalXP;

  public static final String SERIALIZED_NAME_CURRENT_STREAK = "currentStreak";
  @SerializedName(SERIALIZED_NAME_CURRENT_STREAK)
  @javax.annotation.Nullable
  private BigDecimal currentStreak;

  public CompleteQuest200ResponseDataGamification() {
  }

  public CompleteQuest200ResponseDataGamification xpGained(@javax.annotation.Nullable BigDecimal xpGained) {
    this.xpGained = xpGained;
    return this;
  }

  /**
   * Get xpGained
   * @return xpGained
   */
  @javax.annotation.Nullable
  public BigDecimal getXpGained() {
    return xpGained;
  }

  public void setXpGained(@javax.annotation.Nullable BigDecimal xpGained) {
    this.xpGained = xpGained;
  }


  public CompleteQuest200ResponseDataGamification leveledUp(@javax.annotation.Nullable Boolean leveledUp) {
    this.leveledUp = leveledUp;
    return this;
  }

  /**
   * Get leveledUp
   * @return leveledUp
   */
  @javax.annotation.Nullable
  public Boolean getLeveledUp() {
    return leveledUp;
  }

  public void setLeveledUp(@javax.annotation.Nullable Boolean leveledUp) {
    this.leveledUp = leveledUp;
  }


  public CompleteQuest200ResponseDataGamification newLevel(@javax.annotation.Nullable BigDecimal newLevel) {
    this.newLevel = newLevel;
    return this;
  }

  /**
   * Get newLevel
   * @return newLevel
   */
  @javax.annotation.Nullable
  public BigDecimal getNewLevel() {
    return newLevel;
  }

  public void setNewLevel(@javax.annotation.Nullable BigDecimal newLevel) {
    this.newLevel = newLevel;
  }


  public CompleteQuest200ResponseDataGamification newBadges(@javax.annotation.Nullable List<String> newBadges) {
    this.newBadges = newBadges;
    return this;
  }

  public CompleteQuest200ResponseDataGamification addNewBadgesItem(String newBadgesItem) {
    if (this.newBadges == null) {
      this.newBadges = new ArrayList<>();
    }
    this.newBadges.add(newBadgesItem);
    return this;
  }

  /**
   * Get newBadges
   * @return newBadges
   */
  @javax.annotation.Nullable
  public List<String> getNewBadges() {
    return newBadges;
  }

  public void setNewBadges(@javax.annotation.Nullable List<String> newBadges) {
    this.newBadges = newBadges;
  }


  public CompleteQuest200ResponseDataGamification totalXP(@javax.annotation.Nullable BigDecimal totalXP) {
    this.totalXP = totalXP;
    return this;
  }

  /**
   * Get totalXP
   * @return totalXP
   */
  @javax.annotation.Nullable
  public BigDecimal getTotalXP() {
    return totalXP;
  }

  public void setTotalXP(@javax.annotation.Nullable BigDecimal totalXP) {
    this.totalXP = totalXP;
  }


  public CompleteQuest200ResponseDataGamification currentStreak(@javax.annotation.Nullable BigDecimal currentStreak) {
    this.currentStreak = currentStreak;
    return this;
  }

  /**
   * Get currentStreak
   * @return currentStreak
   */
  @javax.annotation.Nullable
  public BigDecimal getCurrentStreak() {
    return currentStreak;
  }

  public void setCurrentStreak(@javax.annotation.Nullable BigDecimal currentStreak) {
    this.currentStreak = currentStreak;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CompleteQuest200ResponseDataGamification completeQuest200ResponseDataGamification = (CompleteQuest200ResponseDataGamification) o;
    return Objects.equals(this.xpGained, completeQuest200ResponseDataGamification.xpGained) &&
        Objects.equals(this.leveledUp, completeQuest200ResponseDataGamification.leveledUp) &&
        Objects.equals(this.newLevel, completeQuest200ResponseDataGamification.newLevel) &&
        Objects.equals(this.newBadges, completeQuest200ResponseDataGamification.newBadges) &&
        Objects.equals(this.totalXP, completeQuest200ResponseDataGamification.totalXP) &&
        Objects.equals(this.currentStreak, completeQuest200ResponseDataGamification.currentStreak);
  }

  @Override
  public int hashCode() {
    return Objects.hash(xpGained, leveledUp, newLevel, newBadges, totalXP, currentStreak);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CompleteQuest200ResponseDataGamification {\n");
    sb.append("    xpGained: ").append(toIndentedString(xpGained)).append("\n");
    sb.append("    leveledUp: ").append(toIndentedString(leveledUp)).append("\n");
    sb.append("    newLevel: ").append(toIndentedString(newLevel)).append("\n");
    sb.append("    newBadges: ").append(toIndentedString(newBadges)).append("\n");
    sb.append("    totalXP: ").append(toIndentedString(totalXP)).append("\n");
    sb.append("    currentStreak: ").append(toIndentedString(currentStreak)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("xpGained");
    openapiFields.add("leveledUp");
    openapiFields.add("newLevel");
    openapiFields.add("newBadges");
    openapiFields.add("totalXP");
    openapiFields.add("currentStreak");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to CompleteQuest200ResponseDataGamification
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!CompleteQuest200ResponseDataGamification.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in CompleteQuest200ResponseDataGamification is not found in the empty JSON string", CompleteQuest200ResponseDataGamification.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!CompleteQuest200ResponseDataGamification.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `CompleteQuest200ResponseDataGamification` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the optional json data is an array if present
      if (jsonObj.get("newBadges") != null && !jsonObj.get("newBadges").isJsonNull() && !jsonObj.get("newBadges").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `newBadges` to be an array in the JSON string but got `%s`", jsonObj.get("newBadges").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!CompleteQuest200ResponseDataGamification.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'CompleteQuest200ResponseDataGamification' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<CompleteQuest200ResponseDataGamification> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(CompleteQuest200ResponseDataGamification.class));

       return (TypeAdapter<T>) new TypeAdapter<CompleteQuest200ResponseDataGamification>() {
           @Override
           public void write(JsonWriter out, CompleteQuest200ResponseDataGamification value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public CompleteQuest200ResponseDataGamification read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of CompleteQuest200ResponseDataGamification given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of CompleteQuest200ResponseDataGamification
   * @throws IOException if the JSON string is invalid with respect to CompleteQuest200ResponseDataGamification
   */
  public static CompleteQuest200ResponseDataGamification fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, CompleteQuest200ResponseDataGamification.class);
  }

  /**
   * Convert an instance of CompleteQuest200ResponseDataGamification to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

