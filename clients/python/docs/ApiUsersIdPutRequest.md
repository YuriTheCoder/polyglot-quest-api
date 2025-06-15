# ApiUsersIdPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**role** | **str** |  | [optional] 
**is_active** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.api_users_id_put_request import ApiUsersIdPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiUsersIdPutRequest from a JSON string
api_users_id_put_request_instance = ApiUsersIdPutRequest.from_json(json)
# print the JSON string representation of the object
print(ApiUsersIdPutRequest.to_json())

# convert the object into a dict
api_users_id_put_request_dict = api_users_id_put_request_instance.to_dict()
# create an instance of ApiUsersIdPutRequest from a dict
api_users_id_put_request_from_dict = ApiUsersIdPutRequest.from_dict(api_users_id_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


