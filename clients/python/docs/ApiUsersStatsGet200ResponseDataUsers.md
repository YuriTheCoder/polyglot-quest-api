# ApiUsersStatsGet200ResponseDataUsers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | [optional] 
**active** | **int** |  | [optional] 
**inactive** | **int** |  | [optional] 
**admins** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.api_users_stats_get200_response_data_users import ApiUsersStatsGet200ResponseDataUsers

# TODO update the JSON string below
json = "{}"
# create an instance of ApiUsersStatsGet200ResponseDataUsers from a JSON string
api_users_stats_get200_response_data_users_instance = ApiUsersStatsGet200ResponseDataUsers.from_json(json)
# print the JSON string representation of the object
print(ApiUsersStatsGet200ResponseDataUsers.to_json())

# convert the object into a dict
api_users_stats_get200_response_data_users_dict = api_users_stats_get200_response_data_users_instance.to_dict()
# create an instance of ApiUsersStatsGet200ResponseDataUsers from a dict
api_users_stats_get200_response_data_users_from_dict = ApiUsersStatsGet200ResponseDataUsers.from_dict(api_users_stats_get200_response_data_users_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


