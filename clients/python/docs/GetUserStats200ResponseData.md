# GetUserStats200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**users** | [**GetUserStats200ResponseDataUsers**](GetUserStats200ResponseDataUsers.md) |  | [optional] 
**tasks** | [**GetUserStats200ResponseDataTasks**](GetUserStats200ResponseDataTasks.md) |  | [optional] 
**most_active_users** | [**List[GetUserStats200ResponseDataMostActiveUsersInner]**](GetUserStats200ResponseDataMostActiveUsersInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_user_stats200_response_data import GetUserStats200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserStats200ResponseData from a JSON string
get_user_stats200_response_data_instance = GetUserStats200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetUserStats200ResponseData.to_json())

# convert the object into a dict
get_user_stats200_response_data_dict = get_user_stats200_response_data_instance.to_dict()
# create an instance of GetUserStats200ResponseData from a dict
get_user_stats200_response_data_from_dict = GetUserStats200ResponseData.from_dict(get_user_stats200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


