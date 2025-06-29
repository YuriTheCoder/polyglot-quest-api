// <auto-generated>
/*
 * Gamified Task Management API
 *
 * API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas
 *
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

#nullable enable

using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;
using GamifiedTasks.Client.Client;

namespace GamifiedTasks.Client.Model
{
    /// <summary>
    /// GetStoryById200ResponseData
    /// </summary>
    public partial class GetStoryById200ResponseData : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetStoryById200ResponseData" /> class.
        /// </summary>
        /// <param name="story">story</param>
        [JsonConstructor]
        public GetStoryById200ResponseData(Option<Story?> story = default)
        {
            StoryOption = story;
            OnCreated();
        }

        partial void OnCreated();

        /// <summary>
        /// Used to track the state of Story
        /// </summary>
        [JsonIgnore]
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        public Option<Story?> StoryOption { get; private set; }

        /// <summary>
        /// Gets or Sets Story
        /// </summary>
        [JsonPropertyName("story")]
        public Story? Story { get { return this.StoryOption; } set { this.StoryOption = new(value); } }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetStoryById200ResponseData {\n");
            sb.Append("  Story: ").Append(Story).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

    /// <summary>
    /// A Json converter for type <see cref="GetStoryById200ResponseData" />
    /// </summary>
    public class GetStoryById200ResponseDataJsonConverter : JsonConverter<GetStoryById200ResponseData>
    {
        /// <summary>
        /// Deserializes json to <see cref="GetStoryById200ResponseData" />
        /// </summary>
        /// <param name="utf8JsonReader"></param>
        /// <param name="typeToConvert"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <returns></returns>
        /// <exception cref="JsonException"></exception>
        public override GetStoryById200ResponseData Read(ref Utf8JsonReader utf8JsonReader, Type typeToConvert, JsonSerializerOptions jsonSerializerOptions)
        {
            int currentDepth = utf8JsonReader.CurrentDepth;

            if (utf8JsonReader.TokenType != JsonTokenType.StartObject && utf8JsonReader.TokenType != JsonTokenType.StartArray)
                throw new JsonException();

            JsonTokenType startingTokenType = utf8JsonReader.TokenType;

            Option<Story?> story = default;

            while (utf8JsonReader.Read())
            {
                if (startingTokenType == JsonTokenType.StartObject && utf8JsonReader.TokenType == JsonTokenType.EndObject && currentDepth == utf8JsonReader.CurrentDepth)
                    break;

                if (startingTokenType == JsonTokenType.StartArray && utf8JsonReader.TokenType == JsonTokenType.EndArray && currentDepth == utf8JsonReader.CurrentDepth)
                    break;

                if (utf8JsonReader.TokenType == JsonTokenType.PropertyName && currentDepth == utf8JsonReader.CurrentDepth - 1)
                {
                    string? localVarJsonPropertyName = utf8JsonReader.GetString();
                    utf8JsonReader.Read();

                    switch (localVarJsonPropertyName)
                    {
                        case "story":
                            story = new Option<Story?>(JsonSerializer.Deserialize<Story>(ref utf8JsonReader, jsonSerializerOptions)!);
                            break;
                        default:
                            break;
                    }
                }
            }

            if (story.IsSet && story.Value == null)
                throw new ArgumentNullException(nameof(story), "Property is not nullable for class GetStoryById200ResponseData.");

            return new GetStoryById200ResponseData(story);
        }

        /// <summary>
        /// Serializes a <see cref="GetStoryById200ResponseData" />
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="getStoryById200ResponseData"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public override void Write(Utf8JsonWriter writer, GetStoryById200ResponseData getStoryById200ResponseData, JsonSerializerOptions jsonSerializerOptions)
        {
            writer.WriteStartObject();

            WriteProperties(writer, getStoryById200ResponseData, jsonSerializerOptions);
            writer.WriteEndObject();
        }

        /// <summary>
        /// Serializes the properties of <see cref="GetStoryById200ResponseData" />
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="getStoryById200ResponseData"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public void WriteProperties(Utf8JsonWriter writer, GetStoryById200ResponseData getStoryById200ResponseData, JsonSerializerOptions jsonSerializerOptions)
        {
            if (getStoryById200ResponseData.StoryOption.IsSet && getStoryById200ResponseData.Story == null)
                throw new ArgumentNullException(nameof(getStoryById200ResponseData.Story), "Property is required for class GetStoryById200ResponseData.");

            if (getStoryById200ResponseData.StoryOption.IsSet)
            {
                writer.WritePropertyName("story");
                JsonSerializer.Serialize(writer, getStoryById200ResponseData.Story, jsonSerializerOptions);
            }
        }
    }
}
