# ApiTasksPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | 
**description** | **str** |  | 
**status** | **str** |  | [optional] [default to 'pending']
**priority** | **str** |  | [optional] [default to 'medium']
**due_date** | **datetime** |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_post_request import ApiTasksPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksPostRequest from a JSON string
api_tasks_post_request_instance = ApiTasksPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiTasksPostRequest.to_json())

# convert the object into a dict
api_tasks_post_request_dict = api_tasks_post_request_instance.to_dict()
# create an instance of ApiTasksPostRequest from a dict
api_tasks_post_request_from_dict = ApiTasksPostRequest.from_dict(api_tasks_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


