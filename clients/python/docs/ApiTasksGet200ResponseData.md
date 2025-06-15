# ApiTasksGet200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tasks** | [**List[Task]**](Task.md) |  | [optional] 
**pagination** | [**ApiTasksGet200ResponseDataPagination**](ApiTasksGet200ResponseDataPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_get200_response_data import ApiTasksGet200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksGet200ResponseData from a JSON string
api_tasks_get200_response_data_instance = ApiTasksGet200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ApiTasksGet200ResponseData.to_json())

# convert the object into a dict
api_tasks_get200_response_data_dict = api_tasks_get200_response_data_instance.to_dict()
# create an instance of ApiTasksGet200ResponseData from a dict
api_tasks_get200_response_data_from_dict = ApiTasksGet200ResponseData.from_dict(api_tasks_get200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


