# ChangeUserPassword200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.change_user_password200_response import ChangeUserPassword200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeUserPassword200Response from a JSON string
change_user_password200_response_instance = ChangeUserPassword200Response.from_json(json)
# print the JSON string representation of the object
print(ChangeUserPassword200Response.to_json())

# convert the object into a dict
change_user_password200_response_dict = change_user_password200_response_instance.to_dict()
# create an instance of ChangeUserPassword200Response from a dict
change_user_password200_response_from_dict = ChangeUserPassword200Response.from_dict(change_user_password200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


