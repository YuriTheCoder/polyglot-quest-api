# ApiGamificationDashboardGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**ApiGamificationDashboardGet200ResponseData**](ApiGamificationDashboardGet200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_gamification_dashboard_get200_response import ApiGamificationDashboardGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiGamificationDashboardGet200Response from a JSON string
api_gamification_dashboard_get200_response_instance = ApiGamificationDashboardGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiGamificationDashboardGet200Response.to_json())

# convert the object into a dict
api_gamification_dashboard_get200_response_dict = api_gamification_dashboard_get200_response_instance.to_dict()
# create an instance of ApiGamificationDashboardGet200Response from a dict
api_gamification_dashboard_get200_response_from_dict = ApiGamificationDashboardGet200Response.from_dict(api_gamification_dashboard_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


