# UpdateGamificationPreferences200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**data** | [**UpdateGamificationPreferences200ResponseData**](UpdateGamificationPreferences200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_gamification_preferences200_response import UpdateGamificationPreferences200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateGamificationPreferences200Response from a JSON string
update_gamification_preferences200_response_instance = UpdateGamificationPreferences200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateGamificationPreferences200Response.to_json())

# convert the object into a dict
update_gamification_preferences200_response_dict = update_gamification_preferences200_response_instance.to_dict()
# create an instance of UpdateGamificationPreferences200Response from a dict
update_gamification_preferences200_response_from_dict = UpdateGamificationPreferences200Response.from_dict(update_gamification_preferences200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


