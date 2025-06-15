# ApiGamificationBadgesGet200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**earned** | [**List[ApiGamificationBadgesGet200ResponseDataEarnedInner]**](ApiGamificationBadgesGet200ResponseDataEarnedInner.md) |  | [optional] 
**available** | **List[object]** |  | [optional] 
**total** | **float** |  | [optional] 
**earned_count** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.api_gamification_badges_get200_response_data import ApiGamificationBadgesGet200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiGamificationBadgesGet200ResponseData from a JSON string
api_gamification_badges_get200_response_data_instance = ApiGamificationBadgesGet200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ApiGamificationBadgesGet200ResponseData.to_json())

# convert the object into a dict
api_gamification_badges_get200_response_data_dict = api_gamification_badges_get200_response_data_instance.to_dict()
# create an instance of ApiGamificationBadgesGet200ResponseData from a dict
api_gamification_badges_get200_response_data_from_dict = ApiGamificationBadgesGet200ResponseData.from_dict(api_gamification_badges_get200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


