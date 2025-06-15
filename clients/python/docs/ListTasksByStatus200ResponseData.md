# ListTasksByStatus200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tasks** | [**List[Task]**](Task.md) |  | [optional] 
**pagination** | [**ListTasksByStatus200ResponseDataPagination**](ListTasksByStatus200ResponseDataPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_tasks_by_status200_response_data import ListTasksByStatus200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ListTasksByStatus200ResponseData from a JSON string
list_tasks_by_status200_response_data_instance = ListTasksByStatus200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ListTasksByStatus200ResponseData.to_json())

# convert the object into a dict
list_tasks_by_status200_response_data_dict = list_tasks_by_status200_response_data_instance.to_dict()
# create an instance of ListTasksByStatus200ResponseData from a dict
list_tasks_by_status200_response_data_from_dict = ListTasksByStatus200ResponseData.from_dict(list_tasks_by_status200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


