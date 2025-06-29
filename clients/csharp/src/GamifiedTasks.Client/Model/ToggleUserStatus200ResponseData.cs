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
    /// ToggleUserStatus200ResponseData
    /// </summary>
    public partial class ToggleUserStatus200ResponseData : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ToggleUserStatus200ResponseData" /> class.
        /// </summary>
        /// <param name="user">user</param>
        [JsonConstructor]
        public ToggleUserStatus200ResponseData(Option<ToggleUserStatus200ResponseDataUser?> user = default)
        {
            UserOption = user;
            OnCreated();
        }

        partial void OnCreated();

        /// <summary>
        /// Used to track the state of User
        /// </summary>
        [JsonIgnore]
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        public Option<ToggleUserStatus200ResponseDataUser?> UserOption { get; private set; }

        /// <summary>
        /// Gets or Sets User
        /// </summary>
        [JsonPropertyName("user")]
        public ToggleUserStatus200ResponseDataUser? User { get { return this.UserOption; } set { this.UserOption = new(value); } }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ToggleUserStatus200ResponseData {\n");
            sb.Append("  User: ").Append(User).Append("\n");
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
    /// A Json converter for type <see cref="ToggleUserStatus200ResponseData" />
    /// </summary>
    public class ToggleUserStatus200ResponseDataJsonConverter : JsonConverter<ToggleUserStatus200ResponseData>
    {
        /// <summary>
        /// Deserializes json to <see cref="ToggleUserStatus200ResponseData" />
        /// </summary>
        /// <param name="utf8JsonReader"></param>
        /// <param name="typeToConvert"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <returns></returns>
        /// <exception cref="JsonException"></exception>
        public override ToggleUserStatus200ResponseData Read(ref Utf8JsonReader utf8JsonReader, Type typeToConvert, JsonSerializerOptions jsonSerializerOptions)
        {
            int currentDepth = utf8JsonReader.CurrentDepth;

            if (utf8JsonReader.TokenType != JsonTokenType.StartObject && utf8JsonReader.TokenType != JsonTokenType.StartArray)
                throw new JsonException();

            JsonTokenType startingTokenType = utf8JsonReader.TokenType;

            Option<ToggleUserStatus200ResponseDataUser?> user = default;

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
                        case "user":
                            user = new Option<ToggleUserStatus200ResponseDataUser?>(JsonSerializer.Deserialize<ToggleUserStatus200ResponseDataUser>(ref utf8JsonReader, jsonSerializerOptions)!);
                            break;
                        default:
                            break;
                    }
                }
            }

            if (user.IsSet && user.Value == null)
                throw new ArgumentNullException(nameof(user), "Property is not nullable for class ToggleUserStatus200ResponseData.");

            return new ToggleUserStatus200ResponseData(user);
        }

        /// <summary>
        /// Serializes a <see cref="ToggleUserStatus200ResponseData" />
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="toggleUserStatus200ResponseData"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public override void Write(Utf8JsonWriter writer, ToggleUserStatus200ResponseData toggleUserStatus200ResponseData, JsonSerializerOptions jsonSerializerOptions)
        {
            writer.WriteStartObject();

            WriteProperties(writer, toggleUserStatus200ResponseData, jsonSerializerOptions);
            writer.WriteEndObject();
        }

        /// <summary>
        /// Serializes the properties of <see cref="ToggleUserStatus200ResponseData" />
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="toggleUserStatus200ResponseData"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public void WriteProperties(Utf8JsonWriter writer, ToggleUserStatus200ResponseData toggleUserStatus200ResponseData, JsonSerializerOptions jsonSerializerOptions)
        {
            if (toggleUserStatus200ResponseData.UserOption.IsSet && toggleUserStatus200ResponseData.User == null)
                throw new ArgumentNullException(nameof(toggleUserStatus200ResponseData.User), "Property is required for class ToggleUserStatus200ResponseData.");

            if (toggleUserStatus200ResponseData.UserOption.IsSet)
            {
                writer.WritePropertyName("user");
                JsonSerializer.Serialize(writer, toggleUserStatus200ResponseData.User, jsonSerializerOptions);
            }
        }
    }
}
