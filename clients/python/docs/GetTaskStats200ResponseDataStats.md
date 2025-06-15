# GetTaskStats200ResponseDataStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | [optional] 
**pending** | **int** |  | [optional] 
**in_progress** | **int** |  | [optional] 
**completed** | **int** |  | [optional] 
**overdue** | **int** |  | [optional] 
**completed_this_month** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_task_stats200_response_data_stats import GetTaskStats200ResponseDataStats

# TODO update the JSON string below
json = "{}"
# create an instance of GetTaskStats200ResponseDataStats from a JSON string
get_task_stats200_response_data_stats_instance = GetTaskStats200ResponseDataStats.from_json(json)
# print the JSON string representation of the object
print(GetTaskStats200ResponseDataStats.to_json())

# convert the object into a dict
get_task_stats200_response_data_stats_dict = get_task_stats200_response_data_stats_instance.to_dict()
# create an instance of GetTaskStats200ResponseDataStats from a dict
get_task_stats200_response_data_stats_from_dict = GetTaskStats200ResponseDataStats.from_dict(get_task_stats200_response_data_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


