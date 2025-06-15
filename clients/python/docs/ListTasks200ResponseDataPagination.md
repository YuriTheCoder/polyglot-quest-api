# ListTasks200ResponseDataPagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current** | **int** |  | [optional] 
**pages** | **int** |  | [optional] 
**total** | **int** |  | [optional] 
**limit** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_tasks200_response_data_pagination import ListTasks200ResponseDataPagination

# TODO update the JSON string below
json = "{}"
# create an instance of ListTasks200ResponseDataPagination from a JSON string
list_tasks200_response_data_pagination_instance = ListTasks200ResponseDataPagination.from_json(json)
# print the JSON string representation of the object
print(ListTasks200ResponseDataPagination.to_json())

# convert the object into a dict
list_tasks200_response_data_pagination_dict = list_tasks200_response_data_pagination_instance.to_dict()
# create an instance of ListTasks200ResponseDataPagination from a dict
list_tasks200_response_data_pagination_from_dict = ListTasks200ResponseDataPagination.from_dict(list_tasks200_response_data_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


