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
 * CreateStoryFromTasks201ResponseDataStory
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-06-14T22:52:12.042322500-03:00[America/Sao_Paulo]", comments = "Generator version: 7.13.0")
public class CreateStoryFromTasks201ResponseDataStory {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  @javax.annotation.Nullable
  private String id;

  public static final String SERIALIZED_NAME_TITLE = "title";
  @SerializedName(SERIALIZED_NAME_TITLE)
  @javax.annotation.Nullable
  private String title;

  public static final String SERIALIZED_NAME_STORY = "story";
  @SerializedName(SERIALIZED_NAME_STORY)
  @javax.annotation.Nullable
  private String story;

  public static final String SERIALIZED_NAME_THEME = "theme";
  @SerializedName(SERIALIZED_NAME_THEME)
  @javax.annotation.Nullable
  private String theme;

  public static final String SERIALIZED_NAME_TOTAL_X_P = "totalXP";
  @SerializedName(SERIALIZED_NAME_TOTAL_X_P)
  @javax.annotation.Nullable
  private BigDecimal totalXP;

  public static final String SERIALIZED_NAME_ESTIMATED_PLAY_TIME = "estimatedPlayTime";
  @SerializedName(SERIALIZED_NAME_ESTIMATED_PLAY_TIME)
  @javax.annotation.Nullable
  private String estimatedPlayTime;

  public CreateStoryFromTasks201ResponseDataStory() {
  }

  public CreateStoryFromTasks201ResponseDataStory id(@javax.annotation.Nullable String id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @javax.annotation.Nullable
  public String getId() {
    return id;
  }

  public void setId(@javax.annotation.Nullable String id) {
    this.id = id;
  }


  public CreateStoryFromTasks201ResponseDataStory title(@javax.annotation.Nullable String title) {
    this.title = title;
    return this;
  }

  /**
   * Get title
   * @return title
   */
  @javax.annotation.Nullable
  public String getTitle() {
    return title;
  }

  public void setTitle(@javax.annotation.Nullable String title) {
    this.title = title;
  }


  public CreateStoryFromTasks201ResponseDataStory story(@javax.annotation.Nullable String story) {
    this.story = story;
    return this;
  }

  /**
   * Get story
   * @return story
   */
  @javax.annotation.Nullable
  public String getStory() {
    return story;
  }

  public void setStory(@javax.annotation.Nullable String story) {
    this.story = story;
  }


  public CreateStoryFromTasks201ResponseDataStory theme(@javax.annotation.Nullable String theme) {
    this.theme = theme;
    return this;
  }

  /**
   * Get theme
   * @return theme
   */
  @javax.annotation.Nullable
  public String getTheme() {
    return theme;
  }

  public void setTheme(@javax.annotation.Nullable String theme) {
    this.theme = theme;
  }


  public CreateStoryFromTasks201ResponseDataStory totalXP(@javax.annotation.Nullable BigDecimal totalXP) {
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


  public CreateStoryFromTasks201ResponseDataStory estimatedPlayTime(@javax.annotation.Nullable String estimatedPlayTime) {
    this.estimatedPlayTime = estimatedPlayTime;
    return this;
  }

  /**
   * Get estimatedPlayTime
   * @return estimatedPlayTime
   */
  @javax.annotation.Nullable
  public String getEstimatedPlayTime() {
    return estimatedPlayTime;
  }

  public void setEstimatedPlayTime(@javax.annotation.Nullable String estimatedPlayTime) {
    this.estimatedPlayTime = estimatedPlayTime;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateStoryFromTasks201ResponseDataStory createStoryFromTasks201ResponseDataStory = (CreateStoryFromTasks201ResponseDataStory) o;
    return Objects.equals(this.id, createStoryFromTasks201ResponseDataStory.id) &&
        Objects.equals(this.title, createStoryFromTasks201ResponseDataStory.title) &&
        Objects.equals(this.story, createStoryFromTasks201ResponseDataStory.story) &&
        Objects.equals(this.theme, createStoryFromTasks201ResponseDataStory.theme) &&
        Objects.equals(this.totalXP, createStoryFromTasks201ResponseDataStory.totalXP) &&
        Objects.equals(this.estimatedPlayTime, createStoryFromTasks201ResponseDataStory.estimatedPlayTime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, title, story, theme, totalXP, estimatedPlayTime);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateStoryFromTasks201ResponseDataStory {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    story: ").append(toIndentedString(story)).append("\n");
    sb.append("    theme: ").append(toIndentedString(theme)).append("\n");
    sb.append("    totalXP: ").append(toIndentedString(totalXP)).append("\n");
    sb.append("    estimatedPlayTime: ").append(toIndentedString(estimatedPlayTime)).append("\n");
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
    openapiFields.add("id");
    openapiFields.add("title");
    openapiFields.add("story");
    openapiFields.add("theme");
    openapiFields.add("totalXP");
    openapiFields.add("estimatedPlayTime");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to CreateStoryFromTasks201ResponseDataStory
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!CreateStoryFromTasks201ResponseDataStory.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in CreateStoryFromTasks201ResponseDataStory is not found in the empty JSON string", CreateStoryFromTasks201ResponseDataStory.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!CreateStoryFromTasks201ResponseDataStory.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `CreateStoryFromTasks201ResponseDataStory` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("id") != null && !jsonObj.get("id").isJsonNull()) && !jsonObj.get("id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("id").toString()));
      }
      if ((jsonObj.get("title") != null && !jsonObj.get("title").isJsonNull()) && !jsonObj.get("title").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `title` to be a primitive type in the JSON string but got `%s`", jsonObj.get("title").toString()));
      }
      if ((jsonObj.get("story") != null && !jsonObj.get("story").isJsonNull()) && !jsonObj.get("story").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `story` to be a primitive type in the JSON string but got `%s`", jsonObj.get("story").toString()));
      }
      if ((jsonObj.get("theme") != null && !jsonObj.get("theme").isJsonNull()) && !jsonObj.get("theme").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `theme` to be a primitive type in the JSON string but got `%s`", jsonObj.get("theme").toString()));
      }
      if ((jsonObj.get("estimatedPlayTime") != null && !jsonObj.get("estimatedPlayTime").isJsonNull()) && !jsonObj.get("estimatedPlayTime").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `estimatedPlayTime` to be a primitive type in the JSON string but got `%s`", jsonObj.get("estimatedPlayTime").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!CreateStoryFromTasks201ResponseDataStory.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'CreateStoryFromTasks201ResponseDataStory' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<CreateStoryFromTasks201ResponseDataStory> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(CreateStoryFromTasks201ResponseDataStory.class));

       return (TypeAdapter<T>) new TypeAdapter<CreateStoryFromTasks201ResponseDataStory>() {
           @Override
           public void write(JsonWriter out, CreateStoryFromTasks201ResponseDataStory value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public CreateStoryFromTasks201ResponseDataStory read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of CreateStoryFromTasks201ResponseDataStory given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of CreateStoryFromTasks201ResponseDataStory
   * @throws IOException if the JSON string is invalid with respect to CreateStoryFromTasks201ResponseDataStory
   */
  public static CreateStoryFromTasks201ResponseDataStory fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, CreateStoryFromTasks201ResponseDataStory.class);
  }

  /**
   * Convert an instance of CreateStoryFromTasks201ResponseDataStory to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

