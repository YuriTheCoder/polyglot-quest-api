# ApiTasksStatsGet200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stats** | [**ApiTasksStatsGet200ResponseDataStats**](ApiTasksStatsGet200ResponseDataStats.md) |  | [optional] 
**overdue_tasks** | [**List[Task]**](Task.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_stats_get200_response_data import ApiTasksStatsGet200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksStatsGet200ResponseData from a JSON string
api_tasks_stats_get200_response_data_instance = ApiTasksStatsGet200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ApiTasksStatsGet200ResponseData.to_json())

# convert the object into a dict
api_tasks_stats_get200_response_data_dict = api_tasks_stats_get200_response_data_instance.to_dict()
# create an instance of ApiTasksStatsGet200ResponseData from a dict
api_tasks_stats_get200_response_data_from_dict = ApiTasksStatsGet200ResponseData.from_dict(api_tasks_stats_get200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


