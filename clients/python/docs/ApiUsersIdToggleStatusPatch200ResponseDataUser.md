# ApiUsersIdToggleStatusPatch200ResponseDataUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**is_active** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.api_users_id_toggle_status_patch200_response_data_user import ApiUsersIdToggleStatusPatch200ResponseDataUser

# TODO update the JSON string below
json = "{}"
# create an instance of ApiUsersIdToggleStatusPatch200ResponseDataUser from a JSON string
api_users_id_toggle_status_patch200_response_data_user_instance = ApiUsersIdToggleStatusPatch200ResponseDataUser.from_json(json)
# print the JSON string representation of the object
print(ApiUsersIdToggleStatusPatch200ResponseDataUser.to_json())

# convert the object into a dict
api_users_id_toggle_status_patch200_response_data_user_dict = api_users_id_toggle_status_patch200_response_data_user_instance.to_dict()
# create an instance of ApiUsersIdToggleStatusPatch200ResponseDataUser from a dict
api_users_id_toggle_status_patch200_response_data_user_from_dict = ApiUsersIdToggleStatusPatch200ResponseDataUser.from_dict(api_users_id_toggle_status_patch200_response_data_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


