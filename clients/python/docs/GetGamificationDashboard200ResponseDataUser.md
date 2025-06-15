# GetGamificationDashboard200ResponseDataUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **str** |  | [optional] 
**level** | **float** |  | [optional] 
**total_xp** | **float** |  | [optional] 
**rank** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.get_gamification_dashboard200_response_data_user import GetGamificationDashboard200ResponseDataUser

# TODO update the JSON string below
json = "{}"
# create an instance of GetGamificationDashboard200ResponseDataUser from a JSON string
get_gamification_dashboard200_response_data_user_instance = GetGamificationDashboard200ResponseDataUser.from_json(json)
# print the JSON string representation of the object
print(GetGamificationDashboard200ResponseDataUser.to_json())

# convert the object into a dict
get_gamification_dashboard200_response_data_user_dict = get_gamification_dashboard200_response_data_user_instance.to_dict()
# create an instance of GetGamificationDashboard200ResponseDataUser from a dict
get_gamification_dashboard200_response_data_user_from_dict = GetGamificationDashboard200ResponseDataUser.from_dict(get_gamification_dashboard200_response_data_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


