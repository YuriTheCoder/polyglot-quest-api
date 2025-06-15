# ApiTasksStoryPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_ids** | **List[str]** |  | 
**user_preferences** | [**ApiTasksStoryPostRequestUserPreferences**](ApiTasksStoryPostRequestUserPreferences.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_story_post_request import ApiTasksStoryPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksStoryPostRequest from a JSON string
api_tasks_story_post_request_instance = ApiTasksStoryPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiTasksStoryPostRequest.to_json())

# convert the object into a dict
api_tasks_story_post_request_dict = api_tasks_story_post_request_instance.to_dict()
# create an instance of ApiTasksStoryPostRequest from a dict
api_tasks_story_post_request_from_dict = ApiTasksStoryPostRequest.from_dict(api_tasks_story_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


