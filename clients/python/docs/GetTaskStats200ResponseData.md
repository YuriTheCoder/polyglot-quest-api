# GetTaskStats200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stats** | [**GetTaskStats200ResponseDataStats**](GetTaskStats200ResponseDataStats.md) |  | [optional] 
**overdue_tasks** | [**List[Task]**](Task.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_task_stats200_response_data import GetTaskStats200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetTaskStats200ResponseData from a JSON string
get_task_stats200_response_data_instance = GetTaskStats200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetTaskStats200ResponseData.to_json())

# convert the object into a dict
get_task_stats200_response_data_dict = get_task_stats200_response_data_instance.to_dict()
# create an instance of GetTaskStats200ResponseData from a dict
get_task_stats200_response_data_from_dict = GetTaskStats200ResponseData.from_dict(get_task_stats200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


