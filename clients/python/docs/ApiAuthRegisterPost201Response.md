# ApiAuthRegisterPost201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**data** | [**ApiAuthRegisterPost201ResponseData**](ApiAuthRegisterPost201ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_auth_register_post201_response import ApiAuthRegisterPost201Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiAuthRegisterPost201Response from a JSON string
api_auth_register_post201_response_instance = ApiAuthRegisterPost201Response.from_json(json)
# print the JSON string representation of the object
print(ApiAuthRegisterPost201Response.to_json())

# convert the object into a dict
api_auth_register_post201_response_dict = api_auth_register_post201_response_instance.to_dict()
# create an instance of ApiAuthRegisterPost201Response from a dict
api_auth_register_post201_response_from_dict = ApiAuthRegisterPost201Response.from_dict(api_auth_register_post201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


