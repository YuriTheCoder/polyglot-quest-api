# ApiUsersGet200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**users** | [**List[User]**](User.md) |  | [optional] 
**pagination** | [**ApiUsersGet200ResponseDataPagination**](ApiUsersGet200ResponseDataPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_users_get200_response_data import ApiUsersGet200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiUsersGet200ResponseData from a JSON string
api_users_get200_response_data_instance = ApiUsersGet200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ApiUsersGet200ResponseData.to_json())

# convert the object into a dict
api_users_get200_response_data_dict = api_users_get200_response_data_instance.to_dict()
# create an instance of ApiUsersGet200ResponseData from a dict
api_users_get200_response_data_from_dict = ApiUsersGet200ResponseData.from_dict(api_users_get200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


