# ApiTasksStatusStatusGet200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tasks** | [**List[Task]**](Task.md) |  | [optional] 
**pagination** | [**ApiTasksStatusStatusGet200ResponseDataPagination**](ApiTasksStatusStatusGet200ResponseDataPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_status_status_get200_response_data import ApiTasksStatusStatusGet200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksStatusStatusGet200ResponseData from a JSON string
api_tasks_status_status_get200_response_data_instance = ApiTasksStatusStatusGet200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ApiTasksStatusStatusGet200ResponseData.to_json())

# convert the object into a dict
api_tasks_status_status_get200_response_data_dict = api_tasks_status_status_get200_response_data_instance.to_dict()
# create an instance of ApiTasksStatusStatusGet200ResponseData from a dict
api_tasks_status_status_get200_response_data_from_dict = ApiTasksStatusStatusGet200ResponseData.from_dict(api_tasks_status_status_get200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


