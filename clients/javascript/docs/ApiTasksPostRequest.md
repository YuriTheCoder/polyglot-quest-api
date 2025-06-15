# GamifiedTaskManagementApi.ApiTasksPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** |  | 
**description** | **String** |  | 
**status** | **String** |  | [optional] [default to &#39;pending&#39;]
**priority** | **String** |  | [optional] [default to &#39;medium&#39;]
**dueDate** | **Date** |  | [optional] 
**tags** | **[String]** |  | [optional] 



## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `in_progress` (value: `"in_progress"`)

* `completed` (value: `"completed"`)





## Enum: PriorityEnum


* `low` (value: `"low"`)

* `medium` (value: `"medium"`)

* `high` (value: `"high"`)




