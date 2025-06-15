# ApiAuthChangePasswordPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_password** | **str** |  | 
**new_password** | **str** |  | 

## Example

```python
from openapi_client.models.api_auth_change_password_put_request import ApiAuthChangePasswordPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiAuthChangePasswordPutRequest from a JSON string
api_auth_change_password_put_request_instance = ApiAuthChangePasswordPutRequest.from_json(json)
# print the JSON string representation of the object
print(ApiAuthChangePasswordPutRequest.to_json())

# convert the object into a dict
api_auth_change_password_put_request_dict = api_auth_change_password_put_request_instance.to_dict()
# create an instance of ApiAuthChangePasswordPutRequest from a dict
api_auth_change_password_put_request_from_dict = ApiAuthChangePasswordPutRequest.from_dict(api_auth_change_password_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


