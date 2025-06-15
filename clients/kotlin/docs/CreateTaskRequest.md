
# CreateTaskRequest

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **title** | **kotlin.String** |  |  |
| **description** | **kotlin.String** |  |  |
| **status** | [**inline**](#Status) |  |  [optional] |
| **priority** | [**inline**](#Priority) |  |  [optional] |
| **dueDate** | [**java.time.OffsetDateTime**](java.time.OffsetDateTime.md) |  |  [optional] |
| **tags** | **kotlin.collections.List&lt;kotlin.String&gt;** |  |  [optional] |


<a id="Status"></a>
## Enum: status
| Name | Value |
| ---- | ----- |
| status | pending, in_progress, completed |


<a id="Priority"></a>
## Enum: priority
| Name | Value |
| ---- | ----- |
| priority | low, medium, high |



