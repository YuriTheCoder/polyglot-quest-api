# ApiAuthLoginPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**password** | **str** |  | 

## Example

```python
from openapi_client.models.api_auth_login_post_request import ApiAuthLoginPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiAuthLoginPostRequest from a JSON string
api_auth_login_post_request_instance = ApiAuthLoginPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiAuthLoginPostRequest.to_json())

# convert the object into a dict
api_auth_login_post_request_dict = api_auth_login_post_request_instance.to_dict()
# create an instance of ApiAuthLoginPostRequest from a dict
api_auth_login_post_request_from_dict = ApiAuthLoginPostRequest.from_dict(api_auth_login_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


