# ApiTasksStoriesGet200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stories** | [**List[Story]**](Story.md) |  | [optional] 
**pagination** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_stories_get200_response_data import ApiTasksStoriesGet200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksStoriesGet200ResponseData from a JSON string
api_tasks_stories_get200_response_data_instance = ApiTasksStoriesGet200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ApiTasksStoriesGet200ResponseData.to_json())

# convert the object into a dict
api_tasks_stories_get200_response_data_dict = api_tasks_stories_get200_response_data_instance.to_dict()
# create an instance of ApiTasksStoriesGet200ResponseData from a dict
api_tasks_stories_get200_response_data_from_dict = ApiTasksStoriesGet200ResponseData.from_dict(api_tasks_stories_get200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


