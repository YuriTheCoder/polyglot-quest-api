# GetGamificationDashboard200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**GetGamificationDashboard200ResponseData**](GetGamificationDashboard200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_gamification_dashboard200_response import GetGamificationDashboard200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetGamificationDashboard200Response from a JSON string
get_gamification_dashboard200_response_instance = GetGamificationDashboard200Response.from_json(json)
# print the JSON string representation of the object
print(GetGamificationDashboard200Response.to_json())

# convert the object into a dict
get_gamification_dashboard200_response_dict = get_gamification_dashboard200_response_instance.to_dict()
# create an instance of GetGamificationDashboard200Response from a dict
get_gamification_dashboard200_response_from_dict = GetGamificationDashboard200Response.from_dict(get_gamification_dashboard200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


