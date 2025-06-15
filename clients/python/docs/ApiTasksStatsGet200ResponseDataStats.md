# ApiTasksStatsGet200ResponseDataStats


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
from openapi_client.models.api_tasks_stats_get200_response_data_stats import ApiTasksStatsGet200ResponseDataStats

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksStatsGet200ResponseDataStats from a JSON string
api_tasks_stats_get200_response_data_stats_instance = ApiTasksStatsGet200ResponseDataStats.from_json(json)
# print the JSON string representation of the object
print(ApiTasksStatsGet200ResponseDataStats.to_json())

# convert the object into a dict
api_tasks_stats_get200_response_data_stats_dict = api_tasks_stats_get200_response_data_stats_instance.to_dict()
# create an instance of ApiTasksStatsGet200ResponseDataStats from a dict
api_tasks_stats_get200_response_data_stats_from_dict = ApiTasksStatsGet200ResponseDataStats.from_dict(api_tasks_stats_get200_response_data_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


