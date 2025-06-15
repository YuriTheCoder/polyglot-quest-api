# ApiGamificationGlobalStatsGet200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**users** | [**ApiGamificationGlobalStatsGet200ResponseDataUsers**](ApiGamificationGlobalStatsGet200ResponseDataUsers.md) |  | [optional] 
**gamification** | [**ApiGamificationGlobalStatsGet200ResponseDataGamification**](ApiGamificationGlobalStatsGet200ResponseDataGamification.md) |  | [optional] 
**stories** | [**ApiGamificationGlobalStatsGet200ResponseDataStories**](ApiGamificationGlobalStatsGet200ResponseDataStories.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_gamification_global_stats_get200_response_data import ApiGamificationGlobalStatsGet200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiGamificationGlobalStatsGet200ResponseData from a JSON string
api_gamification_global_stats_get200_response_data_instance = ApiGamificationGlobalStatsGet200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ApiGamificationGlobalStatsGet200ResponseData.to_json())

# convert the object into a dict
api_gamification_global_stats_get200_response_data_dict = api_gamification_global_stats_get200_response_data_instance.to_dict()
# create an instance of ApiGamificationGlobalStatsGet200ResponseData from a dict
api_gamification_global_stats_get200_response_data_from_dict = ApiGamificationGlobalStatsGet200ResponseData.from_dict(api_gamification_global_stats_get200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


