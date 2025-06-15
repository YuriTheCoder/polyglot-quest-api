# ApiAuthProfilePutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**email** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_auth_profile_put_request import ApiAuthProfilePutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiAuthProfilePutRequest from a JSON string
api_auth_profile_put_request_instance = ApiAuthProfilePutRequest.from_json(json)
# print the JSON string representation of the object
print(ApiAuthProfilePutRequest.to_json())

# convert the object into a dict
api_auth_profile_put_request_dict = api_auth_profile_put_request_instance.to_dict()
# create an instance of ApiAuthProfilePutRequest from a dict
api_auth_profile_put_request_from_dict = ApiAuthProfilePutRequest.from_dict(api_auth_profile_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


