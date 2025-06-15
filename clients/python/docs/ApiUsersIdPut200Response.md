# ApiUsersIdPut200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**data** | [**ApiAuthProfileGet200ResponseData**](ApiAuthProfileGet200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_users_id_put200_response import ApiUsersIdPut200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiUsersIdPut200Response from a JSON string
api_users_id_put200_response_instance = ApiUsersIdPut200Response.from_json(json)
# print the JSON string representation of the object
print(ApiUsersIdPut200Response.to_json())

# convert the object into a dict
api_users_id_put200_response_dict = api_users_id_put200_response_instance.to_dict()
# create an instance of ApiUsersIdPut200Response from a dict
api_users_id_put200_response_from_dict = ApiUsersIdPut200Response.from_dict(api_users_id_put200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


