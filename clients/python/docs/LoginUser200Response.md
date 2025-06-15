# LoginUser200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**data** | [**RegisterUser201ResponseData**](RegisterUser201ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.login_user200_response import LoginUser200Response

# TODO update the JSON string below
json = "{}"
# create an instance of LoginUser200Response from a JSON string
login_user200_response_instance = LoginUser200Response.from_json(json)
# print the JSON string representation of the object
print(LoginUser200Response.to_json())

# convert the object into a dict
login_user200_response_dict = login_user200_response_instance.to_dict()
# create an instance of LoginUser200Response from a dict
login_user200_response_from_dict = LoginUser200Response.from_dict(login_user200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


