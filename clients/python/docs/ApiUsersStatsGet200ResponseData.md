# ApiUsersStatsGet200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**users** | [**ApiUsersStatsGet200ResponseDataUsers**](ApiUsersStatsGet200ResponseDataUsers.md) |  | [optional] 
**tasks** | [**ApiUsersStatsGet200ResponseDataTasks**](ApiUsersStatsGet200ResponseDataTasks.md) |  | [optional] 
**most_active_users** | [**List[ApiUsersStatsGet200ResponseDataMostActiveUsersInner]**](ApiUsersStatsGet200ResponseDataMostActiveUsersInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_users_stats_get200_response_data import ApiUsersStatsGet200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiUsersStatsGet200ResponseData from a JSON string
api_users_stats_get200_response_data_instance = ApiUsersStatsGet200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ApiUsersStatsGet200ResponseData.to_json())

# convert the object into a dict
api_users_stats_get200_response_data_dict = api_users_stats_get200_response_data_instance.to_dict()
# create an instance of ApiUsersStatsGet200ResponseData from a dict
api_users_stats_get200_response_data_from_dict = ApiUsersStatsGet200ResponseData.from_dict(api_users_stats_get200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


