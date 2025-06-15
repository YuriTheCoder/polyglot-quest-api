# GetAllUsers200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**users** | [**List[User]**](User.md) |  | [optional] 
**pagination** | [**GetAllUsers200ResponseDataPagination**](GetAllUsers200ResponseDataPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_all_users200_response_data import GetAllUsers200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllUsers200ResponseData from a JSON string
get_all_users200_response_data_instance = GetAllUsers200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetAllUsers200ResponseData.to_json())

# convert the object into a dict
get_all_users200_response_data_dict = get_all_users200_response_data_instance.to_dict()
# create an instance of GetAllUsers200ResponseData from a dict
get_all_users200_response_data_from_dict = GetAllUsers200ResponseData.from_dict(get_all_users200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


