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
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.openapitools.client.model.GetTaskStats200ResponseDataStats;
import org.openapitools.client.model.Task;

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
 * GetTaskStats200ResponseData
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-06-14T22:52:12.042322500-03:00[America/Sao_Paulo]", comments = "Generator version: 7.13.0")
public class GetTaskStats200ResponseData {
  public static final String SERIALIZED_NAME_STATS = "stats";
  @SerializedName(SERIALIZED_NAME_STATS)
  @javax.annotation.Nullable
  private GetTaskStats200ResponseDataStats stats;

  public static final String SERIALIZED_NAME_OVERDUE_TASKS = "overdueTasks";
  @SerializedName(SERIALIZED_NAME_OVERDUE_TASKS)
  @javax.annotation.Nullable
  private List<Task> overdueTasks = new ArrayList<>();

  public GetTaskStats200ResponseData() {
  }

  public GetTaskStats200ResponseData stats(@javax.annotation.Nullable GetTaskStats200ResponseDataStats stats) {
    this.stats = stats;
    return this;
  }

  /**
   * Get stats
   * @return stats
   */
  @javax.annotation.Nullable
  public GetTaskStats200ResponseDataStats getStats() {
    return stats;
  }

  public void setStats(@javax.annotation.Nullable GetTaskStats200ResponseDataStats stats) {
    this.stats = stats;
  }


  public GetTaskStats200ResponseData overdueTasks(@javax.annotation.Nullable List<Task> overdueTasks) {
    this.overdueTasks = overdueTasks;
    return this;
  }

  public GetTaskStats200ResponseData addOverdueTasksItem(Task overdueTasksItem) {
    if (this.overdueTasks == null) {
      this.overdueTasks = new ArrayList<>();
    }
    this.overdueTasks.add(overdueTasksItem);
    return this;
  }

  /**
   * Get overdueTasks
   * @return overdueTasks
   */
  @javax.annotation.Nullable
  public List<Task> getOverdueTasks() {
    return overdueTasks;
  }

  public void setOverdueTasks(@javax.annotation.Nullable List<Task> overdueTasks) {
    this.overdueTasks = overdueTasks;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetTaskStats200ResponseData getTaskStats200ResponseData = (GetTaskStats200ResponseData) o;
    return Objects.equals(this.stats, getTaskStats200ResponseData.stats) &&
        Objects.equals(this.overdueTasks, getTaskStats200ResponseData.overdueTasks);
  }

  @Override
  public int hashCode() {
    return Objects.hash(stats, overdueTasks);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetTaskStats200ResponseData {\n");
    sb.append("    stats: ").append(toIndentedString(stats)).append("\n");
    sb.append("    overdueTasks: ").append(toIndentedString(overdueTasks)).append("\n");
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
    openapiFields.add("stats");
    openapiFields.add("overdueTasks");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to GetTaskStats200ResponseData
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!GetTaskStats200ResponseData.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in GetTaskStats200ResponseData is not found in the empty JSON string", GetTaskStats200ResponseData.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!GetTaskStats200ResponseData.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `GetTaskStats200ResponseData` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // validate the optional field `stats`
      if (jsonObj.get("stats") != null && !jsonObj.get("stats").isJsonNull()) {
        GetTaskStats200ResponseDataStats.validateJsonElement(jsonObj.get("stats"));
      }
      if (jsonObj.get("overdueTasks") != null && !jsonObj.get("overdueTasks").isJsonNull()) {
        JsonArray jsonArrayoverdueTasks = jsonObj.getAsJsonArray("overdueTasks");
        if (jsonArrayoverdueTasks != null) {
          // ensure the json data is an array
          if (!jsonObj.get("overdueTasks").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `overdueTasks` to be an array in the JSON string but got `%s`", jsonObj.get("overdueTasks").toString()));
          }

          // validate the optional field `overdueTasks` (array)
          for (int i = 0; i < jsonArrayoverdueTasks.size(); i++) {
            Task.validateJsonElement(jsonArrayoverdueTasks.get(i));
          };
        }
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!GetTaskStats200ResponseData.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'GetTaskStats200ResponseData' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<GetTaskStats200ResponseData> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(GetTaskStats200ResponseData.class));

       return (TypeAdapter<T>) new TypeAdapter<GetTaskStats200ResponseData>() {
           @Override
           public void write(JsonWriter out, GetTaskStats200ResponseData value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public GetTaskStats200ResponseData read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of GetTaskStats200ResponseData given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of GetTaskStats200ResponseData
   * @throws IOException if the JSON string is invalid with respect to GetTaskStats200ResponseData
   */
  public static GetTaskStats200ResponseData fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, GetTaskStats200ResponseData.class);
  }

  /**
   * Convert an instance of GetTaskStats200ResponseData to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

