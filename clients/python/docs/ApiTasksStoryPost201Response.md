# ApiTasksStoryPost201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**data** | [**ApiTasksStoryPost201ResponseData**](ApiTasksStoryPost201ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_story_post201_response import ApiTasksStoryPost201Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksStoryPost201Response from a JSON string
api_tasks_story_post201_response_instance = ApiTasksStoryPost201Response.from_json(json)
# print the JSON string representation of the object
print(ApiTasksStoryPost201Response.to_json())

# convert the object into a dict
api_tasks_story_post201_response_dict = api_tasks_story_post201_response_instance.to_dict()
# create an instance of ApiTasksStoryPost201Response from a dict
api_tasks_story_post201_response_from_dict = ApiTasksStoryPost201Response.from_dict(api_tasks_story_post201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


