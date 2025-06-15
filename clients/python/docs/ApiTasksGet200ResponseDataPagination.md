# ApiTasksGet200ResponseDataPagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current** | **int** |  | [optional] 
**pages** | **int** |  | [optional] 
**total** | **int** |  | [optional] 
**limit** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_get200_response_data_pagination import ApiTasksGet200ResponseDataPagination

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksGet200ResponseDataPagination from a JSON string
api_tasks_get200_response_data_pagination_instance = ApiTasksGet200ResponseDataPagination.from_json(json)
# print the JSON string representation of the object
print(ApiTasksGet200ResponseDataPagination.to_json())

# convert the object into a dict
api_tasks_get200_response_data_pagination_dict = api_tasks_get200_response_data_pagination_instance.to_dict()
# create an instance of ApiTasksGet200ResponseDataPagination from a dict
api_tasks_get200_response_data_pagination_from_dict = ApiTasksGet200ResponseDataPagination.from_dict(api_tasks_get200_response_data_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


