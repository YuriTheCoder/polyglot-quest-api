# ApiGamificationPreferencesPut200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**data** | [**ApiGamificationPreferencesPut200ResponseData**](ApiGamificationPreferencesPut200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_gamification_preferences_put200_response import ApiGamificationPreferencesPut200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiGamificationPreferencesPut200Response from a JSON string
api_gamification_preferences_put200_response_instance = ApiGamificationPreferencesPut200Response.from_json(json)
# print the JSON string representation of the object
print(ApiGamificationPreferencesPut200Response.to_json())

# convert the object into a dict
api_gamification_preferences_put200_response_dict = api_gamification_preferences_put200_response_instance.to_dict()
# create an instance of ApiGamificationPreferencesPut200Response from a dict
api_gamification_preferences_put200_response_from_dict = ApiGamificationPreferencesPut200Response.from_dict(api_gamification_preferences_put200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


