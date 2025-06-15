# ChangeUserPasswordRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_password** | **str** |  | 
**new_password** | **str** |  | 

## Example

```python
from openapi_client.models.change_user_password_request import ChangeUserPasswordRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeUserPasswordRequest from a JSON string
change_user_password_request_instance = ChangeUserPasswordRequest.from_json(json)
# print the JSON string representation of the object
print(ChangeUserPasswordRequest.to_json())

# convert the object into a dict
change_user_password_request_dict = change_user_password_request_instance.to_dict()
# create an instance of ChangeUserPasswordRequest from a dict
change_user_password_request_from_dict = ChangeUserPasswordRequest.from_dict(change_user_password_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


