# GetAllUsers200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**GetAllUsers200ResponseData**](GetAllUsers200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_all_users200_response import GetAllUsers200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllUsers200Response from a JSON string
get_all_users200_response_instance = GetAllUsers200Response.from_json(json)
# print the JSON string representation of the object
print(GetAllUsers200Response.to_json())

# convert the object into a dict
get_all_users200_response_dict = get_all_users200_response_instance.to_dict()
# create an instance of GetAllUsers200Response from a dict
get_all_users200_response_from_dict = GetAllUsers200Response.from_dict(get_all_users200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


