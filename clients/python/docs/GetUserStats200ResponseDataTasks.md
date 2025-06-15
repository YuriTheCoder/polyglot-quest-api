# GetUserStats200ResponseDataTasks


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
from openapi_client.models.get_user_stats200_response_data_tasks import GetUserStats200ResponseDataTasks

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserStats200ResponseDataTasks from a JSON string
get_user_stats200_response_data_tasks_instance = GetUserStats200ResponseDataTasks.from_json(json)
# print the JSON string representation of the object
print(GetUserStats200ResponseDataTasks.to_json())

# convert the object into a dict
get_user_stats200_response_data_tasks_dict = get_user_stats200_response_data_tasks_instance.to_dict()
# create an instance of GetUserStats200ResponseDataTasks from a dict
get_user_stats200_response_data_tasks_from_dict = GetUserStats200ResponseDataTasks.from_dict(get_user_stats200_response_data_tasks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


