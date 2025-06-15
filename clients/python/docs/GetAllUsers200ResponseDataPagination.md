# GetAllUsers200ResponseDataPagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current** | **int** |  | [optional] 
**pages** | **int** |  | [optional] 
**total** | **int** |  | [optional] 
**limit** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_all_users200_response_data_pagination import GetAllUsers200ResponseDataPagination

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllUsers200ResponseDataPagination from a JSON string
get_all_users200_response_data_pagination_instance = GetAllUsers200ResponseDataPagination.from_json(json)
# print the JSON string representation of the object
print(GetAllUsers200ResponseDataPagination.to_json())

# convert the object into a dict
get_all_users200_response_data_pagination_dict = get_all_users200_response_data_pagination_instance.to_dict()
# create an instance of GetAllUsers200ResponseDataPagination from a dict
get_all_users200_response_data_pagination_from_dict = GetAllUsers200ResponseDataPagination.from_dict(get_all_users200_response_data_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


