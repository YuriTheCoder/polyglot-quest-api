# CreateStoryFromTasksRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_ids** | **List[str]** |  | 
**user_preferences** | [**CreateStoryFromTasksRequestUserPreferences**](CreateStoryFromTasksRequestUserPreferences.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_story_from_tasks_request import CreateStoryFromTasksRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateStoryFromTasksRequest from a JSON string
create_story_from_tasks_request_instance = CreateStoryFromTasksRequest.from_json(json)
# print the JSON string representation of the object
print(CreateStoryFromTasksRequest.to_json())

# convert the object into a dict
create_story_from_tasks_request_dict = create_story_from_tasks_request_instance.to_dict()
# create an instance of CreateStoryFromTasksRequest from a dict
create_story_from_tasks_request_from_dict = CreateStoryFromTasksRequest.from_dict(create_story_from_tasks_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


