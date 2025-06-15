# ApiUsersIdGet200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**User**](User.md) |  | [optional] 
**task_stats** | [**ApiUsersIdGet200ResponseDataTaskStats**](ApiUsersIdGet200ResponseDataTaskStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_users_id_get200_response_data import ApiUsersIdGet200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiUsersIdGet200ResponseData from a JSON string
api_users_id_get200_response_data_instance = ApiUsersIdGet200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ApiUsersIdGet200ResponseData.to_json())

# convert the object into a dict
api_users_id_get200_response_data_dict = api_users_id_get200_response_data_instance.to_dict()
# create an instance of ApiUsersIdGet200ResponseData from a dict
api_users_id_get200_response_data_from_dict = ApiUsersIdGet200ResponseData.from_dict(api_users_id_get200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


