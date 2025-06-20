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
    /// CompleteQuest200ResponseDataTask
    /// </summary>
    public partial class CompleteQuest200ResponseDataTask : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CompleteQuest200ResponseDataTask" /> class.
        /// </summary>
        /// <param name="id">id</param>
        /// <param name="title">title</param>
        /// <param name="questTitle">questTitle</param>
        /// <param name="xpEarned">xpEarned</param>
        [JsonConstructor]
        public CompleteQuest200ResponseDataTask(Option<string?> id = default, Option<string?> title = default, Option<string?> questTitle = default, Option<decimal?> xpEarned = default)
        {
            IdOption = id;
            TitleOption = title;
            QuestTitleOption = questTitle;
            XpEarnedOption = xpEarned;
            OnCreated();
        }

        partial void OnCreated();

        /// <summary>
        /// Used to track the state of Id
        /// </summary>
        [JsonIgnore]
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        public Option<string?> IdOption { get; private set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [JsonPropertyName("id")]
        public string? Id { get { return this.IdOption; } set { this.IdOption = new(value); } }

        /// <summary>
        /// Used to track the state of Title
        /// </summary>
        [JsonIgnore]
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        public Option<string?> TitleOption { get; private set; }

        /// <summary>
        /// Gets or Sets Title
        /// </summary>
        [JsonPropertyName("title")]
        public string? Title { get { return this.TitleOption; } set { this.TitleOption = new(value); } }

        /// <summary>
        /// Used to track the state of QuestTitle
        /// </summary>
        [JsonIgnore]
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        public Option<string?> QuestTitleOption { get; private set; }

        /// <summary>
        /// Gets or Sets QuestTitle
        /// </summary>
        [JsonPropertyName("questTitle")]
        public string? QuestTitle { get { return this.QuestTitleOption; } set { this.QuestTitleOption = new(value); } }

        /// <summary>
        /// Used to track the state of XpEarned
        /// </summary>
        [JsonIgnore]
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        public Option<decimal?> XpEarnedOption { get; private set; }

        /// <summary>
        /// Gets or Sets XpEarned
        /// </summary>
        [JsonPropertyName("xpEarned")]
        public decimal? XpEarned { get { return this.XpEarnedOption; } set { this.XpEarnedOption = new(value); } }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CompleteQuest200ResponseDataTask {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
            sb.Append("  QuestTitle: ").Append(QuestTitle).Append("\n");
            sb.Append("  XpEarned: ").Append(XpEarned).Append("\n");
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
    /// A Json converter for type <see cref="CompleteQuest200ResponseDataTask" />
    /// </summary>
    public class CompleteQuest200ResponseDataTaskJsonConverter : JsonConverter<CompleteQuest200ResponseDataTask>
    {
        /// <summary>
        /// Deserializes json to <see cref="CompleteQuest200ResponseDataTask" />
        /// </summary>
        /// <param name="utf8JsonReader"></param>
        /// <param name="typeToConvert"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <returns></returns>
        /// <exception cref="JsonException"></exception>
        public override CompleteQuest200ResponseDataTask Read(ref Utf8JsonReader utf8JsonReader, Type typeToConvert, JsonSerializerOptions jsonSerializerOptions)
        {
            int currentDepth = utf8JsonReader.CurrentDepth;

            if (utf8JsonReader.TokenType != JsonTokenType.StartObject && utf8JsonReader.TokenType != JsonTokenType.StartArray)
                throw new JsonException();

            JsonTokenType startingTokenType = utf8JsonReader.TokenType;

            Option<string?> id = default;
            Option<string?> title = default;
            Option<string?> questTitle = default;
            Option<decimal?> xpEarned = default;

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
                        case "id":
                            id = new Option<string?>(utf8JsonReader.GetString()!);
                            break;
                        case "title":
                            title = new Option<string?>(utf8JsonReader.GetString()!);
                            break;
                        case "questTitle":
                            questTitle = new Option<string?>(utf8JsonReader.GetString()!);
                            break;
                        case "xpEarned":
                            xpEarned = new Option<decimal?>(utf8JsonReader.TokenType == JsonTokenType.Null ? (decimal?)null : utf8JsonReader.GetDecimal());
                            break;
                        default:
                            break;
                    }
                }
            }

            if (id.IsSet && id.Value == null)
                throw new ArgumentNullException(nameof(id), "Property is not nullable for class CompleteQuest200ResponseDataTask.");

            if (title.IsSet && title.Value == null)
                throw new ArgumentNullException(nameof(title), "Property is not nullable for class CompleteQuest200ResponseDataTask.");

            if (questTitle.IsSet && questTitle.Value == null)
                throw new ArgumentNullException(nameof(questTitle), "Property is not nullable for class CompleteQuest200ResponseDataTask.");

            if (xpEarned.IsSet && xpEarned.Value == null)
                throw new ArgumentNullException(nameof(xpEarned), "Property is not nullable for class CompleteQuest200ResponseDataTask.");

            return new CompleteQuest200ResponseDataTask(id, title, questTitle, xpEarned);
        }

        /// <summary>
        /// Serializes a <see cref="CompleteQuest200ResponseDataTask" />
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="completeQuest200ResponseDataTask"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public override void Write(Utf8JsonWriter writer, CompleteQuest200ResponseDataTask completeQuest200ResponseDataTask, JsonSerializerOptions jsonSerializerOptions)
        {
            writer.WriteStartObject();

            WriteProperties(writer, completeQuest200ResponseDataTask, jsonSerializerOptions);
            writer.WriteEndObject();
        }

        /// <summary>
        /// Serializes the properties of <see cref="CompleteQuest200ResponseDataTask" />
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="completeQuest200ResponseDataTask"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public void WriteProperties(Utf8JsonWriter writer, CompleteQuest200ResponseDataTask completeQuest200ResponseDataTask, JsonSerializerOptions jsonSerializerOptions)
        {
            if (completeQuest200ResponseDataTask.IdOption.IsSet && completeQuest200ResponseDataTask.Id == null)
                throw new ArgumentNullException(nameof(completeQuest200ResponseDataTask.Id), "Property is required for class CompleteQuest200ResponseDataTask.");

            if (completeQuest200ResponseDataTask.TitleOption.IsSet && completeQuest200ResponseDataTask.Title == null)
                throw new ArgumentNullException(nameof(completeQuest200ResponseDataTask.Title), "Property is required for class CompleteQuest200ResponseDataTask.");

            if (completeQuest200ResponseDataTask.QuestTitleOption.IsSet && completeQuest200ResponseDataTask.QuestTitle == null)
                throw new ArgumentNullException(nameof(completeQuest200ResponseDataTask.QuestTitle), "Property is required for class CompleteQuest200ResponseDataTask.");

            if (completeQuest200ResponseDataTask.IdOption.IsSet)
                writer.WriteString("id", completeQuest200ResponseDataTask.Id);

            if (completeQuest200ResponseDataTask.TitleOption.IsSet)
                writer.WriteString("title", completeQuest200ResponseDataTask.Title);

            if (completeQuest200ResponseDataTask.QuestTitleOption.IsSet)
                writer.WriteString("questTitle", completeQuest200ResponseDataTask.QuestTitle);

            if (completeQuest200ResponseDataTask.XpEarnedOption.IsSet)
                writer.WriteNumber("xpEarned", completeQuest200ResponseDataTask.XpEarnedOption.Value!.Value);
        }
    }
}
