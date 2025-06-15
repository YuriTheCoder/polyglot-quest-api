# ApiGamificationDashboardGet200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**ApiGamificationDashboardGet200ResponseDataUser**](ApiGamificationDashboardGet200ResponseDataUser.md) |  | [optional] 
**stats** | [**ApiGamificationDashboardGet200ResponseDataStats**](ApiGamificationDashboardGet200ResponseDataStats.md) |  | [optional] 
**stories** | **object** |  | [optional] 
**recent_achievements** | **List[str]** |  | [optional] 
**active_stories** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.api_gamification_dashboard_get200_response_data import ApiGamificationDashboardGet200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiGamificationDashboardGet200ResponseData from a JSON string
api_gamification_dashboard_get200_response_data_instance = ApiGamificationDashboardGet200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ApiGamificationDashboardGet200ResponseData.to_json())

# convert the object into a dict
api_gamification_dashboard_get200_response_data_dict = api_gamification_dashboard_get200_response_data_instance.to_dict()
# create an instance of ApiGamificationDashboardGet200ResponseData from a dict
api_gamification_dashboard_get200_response_data_from_dict = ApiGamificationDashboardGet200ResponseData.from_dict(api_gamification_dashboard_get200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


