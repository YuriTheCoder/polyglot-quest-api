# UpdateGamificationPreferencesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_class** | **str** |  | [optional] 
**theme** | **str** |  | [optional] 
**auto_share** | **bool** |  | [optional] 
**share_on_level_up** | **bool** |  | [optional] 
**share_on_badge** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.update_gamification_preferences_request import UpdateGamificationPreferencesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateGamificationPreferencesRequest from a JSON string
update_gamification_preferences_request_instance = UpdateGamificationPreferencesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateGamificationPreferencesRequest.to_json())

# convert the object into a dict
update_gamification_preferences_request_dict = update_gamification_preferences_request_instance.to_dict()
# create an instance of UpdateGamificationPreferencesRequest from a dict
update_gamification_preferences_request_from_dict = UpdateGamificationPreferencesRequest.from_dict(update_gamification_preferences_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


