# LogoutUser200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.logout_user200_response import LogoutUser200Response

# TODO update the JSON string below
json = "{}"
# create an instance of LogoutUser200Response from a JSON string
logout_user200_response_instance = LogoutUser200Response.from_json(json)
# print the JSON string representation of the object
print(LogoutUser200Response.to_json())

# convert the object into a dict
logout_user200_response_dict = logout_user200_response_instance.to_dict()
# create an instance of LogoutUser200Response from a dict
logout_user200_response_from_dict = LogoutUser200Response.from_dict(logout_user200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


