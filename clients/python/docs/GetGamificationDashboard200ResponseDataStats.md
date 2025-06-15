# GetGamificationDashboard200ResponseDataStats


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
from openapi_client.models.get_gamification_dashboard200_response_data_stats import GetGamificationDashboard200ResponseDataStats

# TODO update the JSON string below
json = "{}"
# create an instance of GetGamificationDashboard200ResponseDataStats from a JSON string
get_gamification_dashboard200_response_data_stats_instance = GetGamificationDashboard200ResponseDataStats.from_json(json)
# print the JSON string representation of the object
print(GetGamificationDashboard200ResponseDataStats.to_json())

# convert the object into a dict
get_gamification_dashboard200_response_data_stats_dict = get_gamification_dashboard200_response_data_stats_instance.to_dict()
# create an instance of GetGamificationDashboard200ResponseDataStats from a dict
get_gamification_dashboard200_response_data_stats_from_dict = GetGamificationDashboard200ResponseDataStats.from_dict(get_gamification_dashboard200_response_data_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


