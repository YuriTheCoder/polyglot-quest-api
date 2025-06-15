# ApiGamificationDashboardGet200ResponseDataStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **float** |  | [optional] 
**total_xp** | **float** |  | [optional] 
**tasks_completed** | **float** |  | [optional] 
**current_streak** | **float** |  | [optional] 
**longest_streak** | **float** |  | [optional] 
**badges** | **List[str]** |  | [optional] 
**next_level** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.api_gamification_dashboard_get200_response_data_stats import ApiGamificationDashboardGet200ResponseDataStats

# TODO update the JSON string below
json = "{}"
# create an instance of ApiGamificationDashboardGet200ResponseDataStats from a JSON string
api_gamification_dashboard_get200_response_data_stats_instance = ApiGamificationDashboardGet200ResponseDataStats.from_json(json)
# print the JSON string representation of the object
print(ApiGamificationDashboardGet200ResponseDataStats.to_json())

# convert the object into a dict
api_gamification_dashboard_get200_response_data_stats_dict = api_gamification_dashboard_get200_response_data_stats_instance.to_dict()
# create an instance of ApiGamificationDashboardGet200ResponseDataStats from a dict
api_gamification_dashboard_get200_response_data_stats_from_dict = ApiGamificationDashboardGet200ResponseDataStats.from_dict(api_gamification_dashboard_get200_response_data_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


