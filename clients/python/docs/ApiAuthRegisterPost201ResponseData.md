# ApiAuthRegisterPost201ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**User**](User.md) |  | [optional] 
**token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_auth_register_post201_response_data import ApiAuthRegisterPost201ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiAuthRegisterPost201ResponseData from a JSON string
api_auth_register_post201_response_data_instance = ApiAuthRegisterPost201ResponseData.from_json(json)
# print the JSON string representation of the object
print(ApiAuthRegisterPost201ResponseData.to_json())

# convert the object into a dict
api_auth_register_post201_response_data_dict = api_auth_register_post201_response_data_instance.to_dict()
# create an instance of ApiAuthRegisterPost201ResponseData from a dict
api_auth_register_post201_response_data_from_dict = ApiAuthRegisterPost201ResponseData.from_dict(api_auth_register_post201_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


