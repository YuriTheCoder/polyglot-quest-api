# ToggleUserStatus200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**data** | [**ToggleUserStatus200ResponseData**](ToggleUserStatus200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.toggle_user_status200_response import ToggleUserStatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ToggleUserStatus200Response from a JSON string
toggle_user_status200_response_instance = ToggleUserStatus200Response.from_json(json)
# print the JSON string representation of the object
print(ToggleUserStatus200Response.to_json())

# convert the object into a dict
toggle_user_status200_response_dict = toggle_user_status200_response_instance.to_dict()
# create an instance of ToggleUserStatus200Response from a dict
toggle_user_status200_response_from_dict = ToggleUserStatus200Response.from_dict(toggle_user_status200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


