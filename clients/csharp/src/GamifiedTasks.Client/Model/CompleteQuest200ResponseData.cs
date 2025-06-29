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
    /// CompleteQuest200ResponseData
    /// </summary>
    public partial class CompleteQuest200ResponseData : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CompleteQuest200ResponseData" /> class.
        /// </summary>
        /// <param name="task">task</param>
        /// <param name="gamification">gamification</param>
        [JsonConstructor]
        public CompleteQuest200ResponseData(Option<CompleteQuest200ResponseDataTask?> task = default, Option<CompleteQuest200ResponseDataGamification?> gamification = default)
        {
            TaskOption = task;
            GamificationOption = gamification;
            OnCreated();
        }

        partial void OnCreated();

        /// <summary>
        /// Used to track the state of Task
        /// </summary>
        [JsonIgnore]
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        public Option<CompleteQuest200ResponseDataTask?> TaskOption { get; private set; }

        /// <summary>
        /// Gets or Sets Task
        /// </summary>
        [JsonPropertyName("task")]
        public CompleteQuest200ResponseDataTask? Task { get { return this.TaskOption; } set { this.TaskOption = new(value); } }

        /// <summary>
        /// Used to track the state of Gamification
        /// </summary>
        [JsonIgnore]
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        public Option<CompleteQuest200ResponseDataGamification?> GamificationOption { get; private set; }

        /// <summary>
        /// Gets or Sets Gamification
        /// </summary>
        [JsonPropertyName("gamification")]
        public CompleteQuest200ResponseDataGamification? Gamification { get { return this.GamificationOption; } set { this.GamificationOption = new(value); } }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CompleteQuest200ResponseData {\n");
            sb.Append("  Task: ").Append(Task).Append("\n");
            sb.Append("  Gamification: ").Append(Gamification).Append("\n");
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
    /// A Json converter for type <see cref="CompleteQuest200ResponseData" />
    /// </summary>
    public class CompleteQuest200ResponseDataJsonConverter : JsonConverter<CompleteQuest200ResponseData>
    {
        /// <summary>
        /// Deserializes json to <see cref="CompleteQuest200ResponseData" />
        /// </summary>
        /// <param name="utf8JsonReader"></param>
        /// <param name="typeToConvert"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <returns></returns>
        /// <exception cref="JsonException"></exception>
        public override CompleteQuest200ResponseData Read(ref Utf8JsonReader utf8JsonReader, Type typeToConvert, JsonSerializerOptions jsonSerializerOptions)
        {
            int currentDepth = utf8JsonReader.CurrentDepth;

            if (utf8JsonReader.TokenType != JsonTokenType.StartObject && utf8JsonReader.TokenType != JsonTokenType.StartArray)
                throw new JsonException();

            JsonTokenType startingTokenType = utf8JsonReader.TokenType;

            Option<CompleteQuest200ResponseDataTask?> task = default;
            Option<CompleteQuest200ResponseDataGamification?> gamification = default;

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
                        case "task":
                            task = new Option<CompleteQuest200ResponseDataTask?>(JsonSerializer.Deserialize<CompleteQuest200ResponseDataTask>(ref utf8JsonReader, jsonSerializerOptions)!);
                            break;
                        case "gamification":
                            gamification = new Option<CompleteQuest200ResponseDataGamification?>(JsonSerializer.Deserialize<CompleteQuest200ResponseDataGamification>(ref utf8JsonReader, jsonSerializerOptions)!);
                            break;
                        default:
                            break;
                    }
                }
            }

            if (task.IsSet && task.Value == null)
                throw new ArgumentNullException(nameof(task), "Property is not nullable for class CompleteQuest200ResponseData.");

            if (gamification.IsSet && gamification.Value == null)
                throw new ArgumentNullException(nameof(gamification), "Property is not nullable for class CompleteQuest200ResponseData.");

            return new CompleteQuest200ResponseData(task, gamification);
        }

        /// <summary>
        /// Serializes a <see cref="CompleteQuest200ResponseData" />
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="completeQuest200ResponseData"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public override void Write(Utf8JsonWriter writer, CompleteQuest200ResponseData completeQuest200ResponseData, JsonSerializerOptions jsonSerializerOptions)
        {
            writer.WriteStartObject();

            WriteProperties(writer, completeQuest200ResponseData, jsonSerializerOptions);
            writer.WriteEndObject();
        }

        /// <summary>
        /// Serializes the properties of <see cref="CompleteQuest200ResponseData" />
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="completeQuest200ResponseData"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public void WriteProperties(Utf8JsonWriter writer, CompleteQuest200ResponseData completeQuest200ResponseData, JsonSerializerOptions jsonSerializerOptions)
        {
            if (completeQuest200ResponseData.TaskOption.IsSet && completeQuest200ResponseData.Task == null)
                throw new ArgumentNullException(nameof(completeQuest200ResponseData.Task), "Property is required for class CompleteQuest200ResponseData.");

            if (completeQuest200ResponseData.GamificationOption.IsSet && completeQuest200ResponseData.Gamification == null)
                throw new ArgumentNullException(nameof(completeQuest200ResponseData.Gamification), "Property is required for class CompleteQuest200ResponseData.");

            if (completeQuest200ResponseData.TaskOption.IsSet)
            {
                writer.WritePropertyName("task");
                JsonSerializer.Serialize(writer, completeQuest200ResponseData.Task, jsonSerializerOptions);
            }
            if (completeQuest200ResponseData.GamificationOption.IsSet)
            {
                writer.WritePropertyName("gamification");
                JsonSerializer.Serialize(writer, completeQuest200ResponseData.Gamification, jsonSerializerOptions);
            }
        }
    }
}
