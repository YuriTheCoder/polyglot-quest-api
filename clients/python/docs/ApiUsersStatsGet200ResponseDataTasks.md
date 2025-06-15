# ApiUsersStatsGet200ResponseDataTasks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | [optional] 
**completed** | **int** |  | [optional] 
**pending** | **int** |  | [optional] 
**in_progress** | **int** |  | [optional] 
**overdue** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.api_users_stats_get200_response_data_tasks import ApiUsersStatsGet200ResponseDataTasks

# TODO update the JSON string below
json = "{}"
# create an instance of ApiUsersStatsGet200ResponseDataTasks from a JSON string
api_users_stats_get200_response_data_tasks_instance = ApiUsersStatsGet200ResponseDataTasks.from_json(json)
# print the JSON string representation of the object
print(ApiUsersStatsGet200ResponseDataTasks.to_json())

# convert the object into a dict
api_users_stats_get200_response_data_tasks_dict = api_users_stats_get200_response_data_tasks_instance.to_dict()
# create an instance of ApiUsersStatsGet200ResponseDataTasks from a dict
api_users_stats_get200_response_data_tasks_from_dict = ApiUsersStatsGet200ResponseDataTasks.from_dict(api_users_stats_get200_response_data_tasks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


