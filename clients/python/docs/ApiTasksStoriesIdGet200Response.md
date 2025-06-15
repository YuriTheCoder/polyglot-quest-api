# ApiTasksStoriesIdGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**ApiTasksStoriesIdGet200ResponseData**](ApiTasksStoriesIdGet200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_stories_id_get200_response import ApiTasksStoriesIdGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksStoriesIdGet200Response from a JSON string
api_tasks_stories_id_get200_response_instance = ApiTasksStoriesIdGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiTasksStoriesIdGet200Response.to_json())

# convert the object into a dict
api_tasks_stories_id_get200_response_dict = api_tasks_stories_id_get200_response_instance.to_dict()
# create an instance of ApiTasksStoriesIdGet200Response from a dict
api_tasks_stories_id_get200_response_from_dict = ApiTasksStoriesIdGet200Response.from_dict(api_tasks_stories_id_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


