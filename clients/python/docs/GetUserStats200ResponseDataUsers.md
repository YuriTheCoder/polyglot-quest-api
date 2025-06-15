# GetUserStats200ResponseDataUsers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** |  | [optional] 
**active** | **int** |  | [optional] 
**inactive** | **int** |  | [optional] 
**admins** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_user_stats200_response_data_users import GetUserStats200ResponseDataUsers

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserStats200ResponseDataUsers from a JSON string
get_user_stats200_response_data_users_instance = GetUserStats200ResponseDataUsers.from_json(json)
# print the JSON string representation of the object
print(GetUserStats200ResponseDataUsers.to_json())

# convert the object into a dict
get_user_stats200_response_data_users_dict = get_user_stats200_response_data_users_instance.to_dict()
# create an instance of GetUserStats200ResponseDataUsers from a dict
get_user_stats200_response_data_users_from_dict = GetUserStats200ResponseDataUsers.from_dict(get_user_stats200_response_data_users_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


