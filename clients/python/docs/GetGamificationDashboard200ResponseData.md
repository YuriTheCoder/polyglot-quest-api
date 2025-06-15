# GetGamificationDashboard200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**GetGamificationDashboard200ResponseDataUser**](GetGamificationDashboard200ResponseDataUser.md) |  | [optional] 
**stats** | [**GetGamificationDashboard200ResponseDataStats**](GetGamificationDashboard200ResponseDataStats.md) |  | [optional] 
**stories** | **object** |  | [optional] 
**recent_achievements** | **List[str]** |  | [optional] 
**active_stories** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.get_gamification_dashboard200_response_data import GetGamificationDashboard200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetGamificationDashboard200ResponseData from a JSON string
get_gamification_dashboard200_response_data_instance = GetGamificationDashboard200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetGamificationDashboard200ResponseData.to_json())

# convert the object into a dict
get_gamification_dashboard200_response_data_dict = get_gamification_dashboard200_response_data_instance.to_dict()
# create an instance of GetGamificationDashboard200ResponseData from a dict
get_gamification_dashboard200_response_data_from_dict = GetGamificationDashboard200ResponseData.from_dict(get_gamification_dashboard200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


