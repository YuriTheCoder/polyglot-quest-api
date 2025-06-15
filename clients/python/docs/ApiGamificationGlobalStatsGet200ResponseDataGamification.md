# ApiGamificationGlobalStatsGet200ResponseDataGamification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_xp** | **float** |  | [optional] 
**total_tasks_completed** | **float** |  | [optional] 
**total_badges_earned** | **float** |  | [optional] 
**longest_streak** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.api_gamification_global_stats_get200_response_data_gamification import ApiGamificationGlobalStatsGet200ResponseDataGamification

# TODO update the JSON string below
json = "{}"
# create an instance of ApiGamificationGlobalStatsGet200ResponseDataGamification from a JSON string
api_gamification_global_stats_get200_response_data_gamification_instance = ApiGamificationGlobalStatsGet200ResponseDataGamification.from_json(json)
# print the JSON string representation of the object
print(ApiGamificationGlobalStatsGet200ResponseDataGamification.to_json())

# convert the object into a dict
api_gamification_global_stats_get200_response_data_gamification_dict = api_gamification_global_stats_get200_response_data_gamification_instance.to_dict()
# create an instance of ApiGamificationGlobalStatsGet200ResponseDataGamification from a dict
api_gamification_global_stats_get200_response_data_gamification_from_dict = ApiGamificationGlobalStatsGet200ResponseDataGamification.from_dict(api_gamification_global_stats_get200_response_data_gamification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


