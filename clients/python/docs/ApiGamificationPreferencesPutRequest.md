# ApiGamificationPreferencesPutRequest


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
from openapi_client.models.api_gamification_preferences_put_request import ApiGamificationPreferencesPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiGamificationPreferencesPutRequest from a JSON string
api_gamification_preferences_put_request_instance = ApiGamificationPreferencesPutRequest.from_json(json)
# print the JSON string representation of the object
print(ApiGamificationPreferencesPutRequest.to_json())

# convert the object into a dict
api_gamification_preferences_put_request_dict = api_gamification_preferences_put_request_instance.to_dict()
# create an instance of ApiGamificationPreferencesPutRequest from a dict
api_gamification_preferences_put_request_from_dict = ApiGamificationPreferencesPutRequest.from_dict(api_gamification_preferences_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


