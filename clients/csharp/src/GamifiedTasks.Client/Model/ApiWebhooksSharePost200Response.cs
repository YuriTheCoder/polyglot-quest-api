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
    /// ApiWebhooksSharePost200Response
    /// </summary>
    public partial class ApiWebhooksSharePost200Response : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ApiWebhooksSharePost200Response" /> class.
        /// </summary>
        /// <param name="success">success</param>
        /// <param name="message">message</param>
        /// <param name="timestamp">timestamp</param>
        [JsonConstructor]
        public ApiWebhooksSharePost200Response(Option<bool?> success = default, Option<string?> message = default, Option<string?> timestamp = default)
        {
            SuccessOption = success;
            MessageOption = message;
            TimestampOption = timestamp;
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
        [JsonPropertyName("message")]
        public string? Message { get { return this.MessageOption; } set { this.MessageOption = new(value); } }

        /// <summary>
        /// Used to track the state of Timestamp
        /// </summary>
        [JsonIgnore]
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        public Option<string?> TimestampOption { get; private set; }

        /// <summary>
        /// Gets or Sets Timestamp
        /// </summary>
        [JsonPropertyName("timestamp")]
        public string? Timestamp { get { return this.TimestampOption; } set { this.TimestampOption = new(value); } }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ApiWebhooksSharePost200Response {\n");
            sb.Append("  Success: ").Append(Success).Append("\n");
            sb.Append("  Message: ").Append(Message).Append("\n");
            sb.Append("  Timestamp: ").Append(Timestamp).Append("\n");
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
    /// A Json converter for type <see cref="ApiWebhooksSharePost200Response" />
    /// </summary>
    public class ApiWebhooksSharePost200ResponseJsonConverter : JsonConverter<ApiWebhooksSharePost200Response>
    {
        /// <summary>
        /// Deserializes json to <see cref="ApiWebhooksSharePost200Response" />
        /// </summary>
        /// <param name="utf8JsonReader"></param>
        /// <param name="typeToConvert"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <returns></returns>
        /// <exception cref="JsonException"></exception>
        public override ApiWebhooksSharePost200Response Read(ref Utf8JsonReader utf8JsonReader, Type typeToConvert, JsonSerializerOptions jsonSerializerOptions)
        {
            int currentDepth = utf8JsonReader.CurrentDepth;

            if (utf8JsonReader.TokenType != JsonTokenType.StartObject && utf8JsonReader.TokenType != JsonTokenType.StartArray)
                throw new JsonException();

            JsonTokenType startingTokenType = utf8JsonReader.TokenType;

            Option<bool?> success = default;
            Option<string?> message = default;
            Option<string?> timestamp = default;

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
                        case "timestamp":
                            timestamp = new Option<string?>(utf8JsonReader.GetString()!);
                            break;
                        default:
                            break;
                    }
                }
            }

            if (success.IsSet && success.Value == null)
                throw new ArgumentNullException(nameof(success), "Property is not nullable for class ApiWebhooksSharePost200Response.");

            if (message.IsSet && message.Value == null)
                throw new ArgumentNullException(nameof(message), "Property is not nullable for class ApiWebhooksSharePost200Response.");

            if (timestamp.IsSet && timestamp.Value == null)
                throw new ArgumentNullException(nameof(timestamp), "Property is not nullable for class ApiWebhooksSharePost200Response.");

            return new ApiWebhooksSharePost200Response(success, message, timestamp);
        }

        /// <summary>
        /// Serializes a <see cref="ApiWebhooksSharePost200Response" />
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="apiWebhooksSharePost200Response"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public override void Write(Utf8JsonWriter writer, ApiWebhooksSharePost200Response apiWebhooksSharePost200Response, JsonSerializerOptions jsonSerializerOptions)
        {
            writer.WriteStartObject();

            WriteProperties(writer, apiWebhooksSharePost200Response, jsonSerializerOptions);
            writer.WriteEndObject();
        }

        /// <summary>
        /// Serializes the properties of <see cref="ApiWebhooksSharePost200Response" />
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="apiWebhooksSharePost200Response"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public void WriteProperties(Utf8JsonWriter writer, ApiWebhooksSharePost200Response apiWebhooksSharePost200Response, JsonSerializerOptions jsonSerializerOptions)
        {
            if (apiWebhooksSharePost200Response.MessageOption.IsSet && apiWebhooksSharePost200Response.Message == null)
                throw new ArgumentNullException(nameof(apiWebhooksSharePost200Response.Message), "Property is required for class ApiWebhooksSharePost200Response.");

            if (apiWebhooksSharePost200Response.TimestampOption.IsSet && apiWebhooksSharePost200Response.Timestamp == null)
                throw new ArgumentNullException(nameof(apiWebhooksSharePost200Response.Timestamp), "Property is required for class ApiWebhooksSharePost200Response.");

            if (apiWebhooksSharePost200Response.SuccessOption.IsSet)
                writer.WriteBoolean("success", apiWebhooksSharePost200Response.SuccessOption.Value!.Value);

            if (apiWebhooksSharePost200Response.MessageOption.IsSet)
                writer.WriteString("message", apiWebhooksSharePost200Response.Message);

            if (apiWebhooksSharePost200Response.TimestampOption.IsSet)
                writer.WriteString("timestamp", apiWebhooksSharePost200Response.Timestamp);
        }
    }
}
