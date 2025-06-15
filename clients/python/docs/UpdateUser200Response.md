# UpdateUser200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**data** | [**GetUserProfile200ResponseData**](GetUserProfile200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_user200_response import UpdateUser200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateUser200Response from a JSON string
update_user200_response_instance = UpdateUser200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateUser200Response.to_json())

# convert the object into a dict
update_user200_response_dict = update_user200_response_instance.to_dict()
# create an instance of UpdateUser200Response from a dict
update_user200_response_from_dict = UpdateUser200Response.from_dict(update_user200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


