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
    /// CompleteQuest200Response
    /// </summary>
    public partial class CompleteQuest200Response : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CompleteQuest200Response" /> class.
        /// </summary>
        /// <param name="success">success</param>
        /// <param name="message">message</param>
        /// <param name="data">data</param>
        [JsonConstructor]
        public CompleteQuest200Response(Option<bool?> success = default, Option<string?> message = default, Option<CompleteQuest200ResponseData?> data = default)
        {
            SuccessOption = success;
            MessageOption = message;
            DataOption = data;
            OnCreated();
        }

        partial void OnCreated();

        /// <summary>
        /// Used to track the state of Success
        /// </summary>
        [JsonIgnore]
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        public Option<bool?> SuccessOption { get; private set; }

        /// <summary>
        /// Gets or Sets Success
        /// </summary>
        /* <example>true</example> */
        [JsonPropertyName("success")]
        public bool? Success { get { return this.SuccessOption; } set { this.SuccessOption = new(value); } }

        /// <summary>
        /// Used to track the state of Message
        /// </summary>
        [JsonIgnore]
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        public Option<string?> MessageOption { get; private set; }

        /// <summary>
        /// Gets or Sets Message
        /// </summary>
        /* <example>Quest completada! +25 XP</example> */
        [JsonPropertyName("message")]
        public string? Message { get { return this.MessageOption; } set { this.MessageOption = new(value); } }

        /// <summary>
        /// Used to track the state of Data
        /// </summary>
        [JsonIgnore]
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        public Option<CompleteQuest200ResponseData?> DataOption { get; private set; }

        /// <summary>
        /// Gets or Sets Data
        /// </summary>
        [JsonPropertyName("data")]
        public CompleteQuest200ResponseData? Data { get { return this.DataOption; } set { this.DataOption = new(value); } }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CompleteQuest200Response {\n");
            sb.Append("  Success: ").Append(Success).Append("\n");
            sb.Append("  Message: ").Append(Message).Append("\n");
            sb.Append("  Data: ").Append(Data).Append("\n");
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
    /// A Json converter for type <see cref="CompleteQuest200Response" />
    /// </summary>
    public class CompleteQuest200ResponseJsonConverter : JsonConverter<CompleteQuest200Response>
    {
        /// <summary>
        /// Deserializes json to <see cref="CompleteQuest200Response" />
        /// </summary>
        /// <param name="utf8JsonReader"></param>
        /// <param name="typeToConvert"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <returns></returns>
        /// <exception cref="JsonException"></exception>
        public override CompleteQuest200Response Read(ref Utf8JsonReader utf8JsonReader, Type typeToConvert, JsonSerializerOptions jsonSerializerOptions)
        {
            int currentDepth = utf8JsonReader.CurrentDepth;

            if (utf8JsonReader.TokenType != JsonTokenType.StartObject && utf8JsonReader.TokenType != JsonTokenType.StartArray)
                throw new JsonException();

            JsonTokenType startingTokenType = utf8JsonReader.TokenType;

            Option<bool?> success = default;
            Option<string?> message = default;
            Option<CompleteQuest200ResponseData?> data = default;

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
                        case "success":
                            success = new Option<bool?>(utf8JsonReader.TokenType == JsonTokenType.Null ? (bool?)null : utf8JsonReader.GetBoolean());
                            break;
                        case "message":
                            message = new Option<string?>(utf8JsonReader.GetString()!);
                            break;
                        case "data":
                            data = new Option<CompleteQuest200ResponseData?>(JsonSerializer.Deserialize<CompleteQuest200ResponseData>(ref utf8JsonReader, jsonSerializerOptions)!);
                            break;
                        default:
                            break;
                    }
                }
            }

            if (success.IsSet && success.Value == null)
                throw new ArgumentNullException(nameof(success), "Property is not nullable for class CompleteQuest200Response.");

            if (message.IsSet && message.Value == null)
                throw new ArgumentNullException(nameof(message), "Property is not nullable for class CompleteQuest200Response.");

            if (data.IsSet && data.Value == null)
                throw new ArgumentNullException(nameof(data), "Property is not nullable for class CompleteQuest200Response.");

            return new CompleteQuest200Response(success, message, data);
        }

        /// <summary>
        /// Serializes a <see cref="CompleteQuest200Response" />
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="completeQuest200Response"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public override void Write(Utf8JsonWriter writer, CompleteQuest200Response completeQuest200Response, JsonSerializerOptions jsonSerializerOptions)
        {
            writer.WriteStartObject();

            WriteProperties(writer, completeQuest200Response, jsonSerializerOptions);
            writer.WriteEndObject();
        }

        /// <summary>
        /// Serializes the properties of <see cref="CompleteQuest200Response" />
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="completeQuest200Response"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public void WriteProperties(Utf8JsonWriter writer, CompleteQuest200Response completeQuest200Response, JsonSerializerOptions jsonSerializerOptions)
        {
            if (completeQuest200Response.MessageOption.IsSet && completeQuest200Response.Message == null)
                throw new ArgumentNullException(nameof(completeQuest200Response.Message), "Property is required for class CompleteQuest200Response.");

            if (completeQuest200Response.DataOption.IsSet && completeQuest200Response.Data == null)
                throw new ArgumentNullException(nameof(completeQuest200Response.Data), "Property is required for class CompleteQuest200Response.");

            if (completeQuest200Response.SuccessOption.IsSet)
                writer.WriteBoolean("success", completeQuest200Response.SuccessOption.Value!.Value);

            if (completeQuest200Response.MessageOption.IsSet)
                writer.WriteString("message", completeQuest200Response.Message);

            if (completeQuest200Response.DataOption.IsSet)
            {
                writer.WritePropertyName("data");
                JsonSerializer.Serialize(writer, completeQuest200Response.Data, jsonSerializerOptions);
            }
        }
    }
}
