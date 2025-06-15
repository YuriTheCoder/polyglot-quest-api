# LoginUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**password** | **str** |  | 

## Example

```python
from openapi_client.models.login_user_request import LoginUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LoginUserRequest from a JSON string
login_user_request_instance = LoginUserRequest.from_json(json)
# print the JSON string representation of the object
print(LoginUserRequest.to_json())

# convert the object into a dict
login_user_request_dict = login_user_request_instance.to_dict()
# create an instance of LoginUserRequest from a dict
login_user_request_from_dict = LoginUserRequest.from_dict(login_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


