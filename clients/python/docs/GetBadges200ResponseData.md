# GetBadges200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**earned** | [**List[GetBadges200ResponseDataEarnedInner]**](GetBadges200ResponseDataEarnedInner.md) |  | [optional] 
**available** | **List[object]** |  | [optional] 
**total** | **float** |  | [optional] 
**earned_count** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.get_badges200_response_data import GetBadges200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetBadges200ResponseData from a JSON string
get_badges200_response_data_instance = GetBadges200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetBadges200ResponseData.to_json())

# convert the object into a dict
get_badges200_response_data_dict = get_badges200_response_data_instance.to_dict()
# create an instance of GetBadges200ResponseData from a dict
get_badges200_response_data_from_dict = GetBadges200ResponseData.from_dict(get_badges200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


