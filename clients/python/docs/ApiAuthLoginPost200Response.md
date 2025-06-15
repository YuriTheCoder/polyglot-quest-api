# ApiAuthLoginPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**data** | [**ApiAuthRegisterPost201ResponseData**](ApiAuthRegisterPost201ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_auth_login_post200_response import ApiAuthLoginPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiAuthLoginPost200Response from a JSON string
api_auth_login_post200_response_instance = ApiAuthLoginPost200Response.from_json(json)
# print the JSON string representation of the object
print(ApiAuthLoginPost200Response.to_json())

# convert the object into a dict
api_auth_login_post200_response_dict = api_auth_login_post200_response_instance.to_dict()
# create an instance of ApiAuthLoginPost200Response from a dict
api_auth_login_post200_response_from_dict = ApiAuthLoginPost200Response.from_dict(api_auth_login_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


