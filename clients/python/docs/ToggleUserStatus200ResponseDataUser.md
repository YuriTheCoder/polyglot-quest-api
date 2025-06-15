# ToggleUserStatus200ResponseDataUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**is_active** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.toggle_user_status200_response_data_user import ToggleUserStatus200ResponseDataUser

# TODO update the JSON string below
json = "{}"
# create an instance of ToggleUserStatus200ResponseDataUser from a JSON string
toggle_user_status200_response_data_user_instance = ToggleUserStatus200ResponseDataUser.from_json(json)
# print the JSON string representation of the object
print(ToggleUserStatus200ResponseDataUser.to_json())

# convert the object into a dict
toggle_user_status200_response_data_user_dict = toggle_user_status200_response_data_user_instance.to_dict()
# create an instance of ToggleUserStatus200ResponseDataUser from a dict
toggle_user_status200_response_data_user_from_dict = ToggleUserStatus200ResponseDataUser.from_dict(toggle_user_status200_response_data_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


