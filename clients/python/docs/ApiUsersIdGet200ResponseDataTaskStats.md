# ApiUsersIdGet200ResponseDataTaskStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | [optional] 
**pending** | **int** |  | [optional] 
**in_progress** | **int** |  | [optional] 
**completed** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.api_users_id_get200_response_data_task_stats import ApiUsersIdGet200ResponseDataTaskStats

# TODO update the JSON string below
json = "{}"
# create an instance of ApiUsersIdGet200ResponseDataTaskStats from a JSON string
api_users_id_get200_response_data_task_stats_instance = ApiUsersIdGet200ResponseDataTaskStats.from_json(json)
# print the JSON string representation of the object
print(ApiUsersIdGet200ResponseDataTaskStats.to_json())

# convert the object into a dict
api_users_id_get200_response_data_task_stats_dict = api_users_id_get200_response_data_task_stats_instance.to_dict()
# create an instance of ApiUsersIdGet200ResponseDataTaskStats from a dict
api_users_id_get200_response_data_task_stats_from_dict = ApiUsersIdGet200ResponseDataTaskStats.from_dict(api_users_id_get200_response_data_task_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


