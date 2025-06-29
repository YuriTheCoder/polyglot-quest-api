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
import java.util.Arrays;

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
 * CompleteQuestRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-06-14T22:52:12.042322500-03:00[America/Sao_Paulo]", comments = "Generator version: 7.13.0")
public class CompleteQuestRequest {
  public static final String SERIALIZED_NAME_COMPLETION_TIME = "completionTime";
  @SerializedName(SERIALIZED_NAME_COMPLETION_TIME)
  @javax.annotation.Nullable
  private BigDecimal completionTime;

  public CompleteQuestRequest() {
  }

  public CompleteQuestRequest completionTime(@javax.annotation.Nullable BigDecimal completionTime) {
    this.completionTime = completionTime;
    return this;
  }

  /**
   * Tempo gasto em minutos
   * @return completionTime
   */
  @javax.annotation.Nullable
  public BigDecimal getCompletionTime() {
    return completionTime;
  }

  public void setCompletionTime(@javax.annotation.Nullable BigDecimal completionTime) {
    this.completionTime = completionTime;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CompleteQuestRequest completeQuestRequest = (CompleteQuestRequest) o;
    return Objects.equals(this.completionTime, completeQuestRequest.completionTime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(completionTime);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CompleteQuestRequest {\n");
    sb.append("    completionTime: ").append(toIndentedString(completionTime)).append("\n");
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
    openapiFields.add("completionTime");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to CompleteQuestRequest
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!CompleteQuestRequest.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in CompleteQuestRequest is not found in the empty JSON string", CompleteQuestRequest.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!CompleteQuestRequest.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `CompleteQuestRequest` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!CompleteQuestRequest.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'CompleteQuestRequest' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<CompleteQuestRequest> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(CompleteQuestRequest.class));

       return (TypeAdapter<T>) new TypeAdapter<CompleteQuestRequest>() {
           @Override
           public void write(JsonWriter out, CompleteQuestRequest value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public CompleteQuestRequest read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of CompleteQuestRequest given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of CompleteQuestRequest
   * @throws IOException if the JSON string is invalid with respect to CompleteQuestRequest
   */
  public static CompleteQuestRequest fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, CompleteQuestRequest.class);
  }

  /**
   * Convert an instance of CompleteQuestRequest to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

