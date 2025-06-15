# GetGlobalStats200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**users** | [**GetGlobalStats200ResponseDataUsers**](GetGlobalStats200ResponseDataUsers.md) |  | [optional] 
**gamification** | [**GetGlobalStats200ResponseDataGamification**](GetGlobalStats200ResponseDataGamification.md) |  | [optional] 
**stories** | [**GetGlobalStats200ResponseDataStories**](GetGlobalStats200ResponseDataStories.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_global_stats200_response_data import GetGlobalStats200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetGlobalStats200ResponseData from a JSON string
get_global_stats200_response_data_instance = GetGlobalStats200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetGlobalStats200ResponseData.to_json())

# convert the object into a dict
get_global_stats200_response_data_dict = get_global_stats200_response_data_instance.to_dict()
# create an instance of GetGlobalStats200ResponseData from a dict
get_global_stats200_response_data_from_dict = GetGlobalStats200ResponseData.from_dict(get_global_stats200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


