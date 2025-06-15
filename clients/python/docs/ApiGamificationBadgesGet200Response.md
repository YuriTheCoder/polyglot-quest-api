# ApiGamificationBadgesGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**ApiGamificationBadgesGet200ResponseData**](ApiGamificationBadgesGet200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_gamification_badges_get200_response import ApiGamificationBadgesGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiGamificationBadgesGet200Response from a JSON string
api_gamification_badges_get200_response_instance = ApiGamificationBadgesGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiGamificationBadgesGet200Response.to_json())

# convert the object into a dict
api_gamification_badges_get200_response_dict = api_gamification_badges_get200_response_instance.to_dict()
# create an instance of ApiGamificationBadgesGet200Response from a dict
api_gamification_badges_get200_response_from_dict = ApiGamificationBadgesGet200Response.from_dict(api_gamification_badges_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


