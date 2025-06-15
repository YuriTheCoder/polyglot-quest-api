# ApiGamificationSharePostRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **float** |  | [optional] 
**badge** | **object** |  | [optional] 
**streak** | **float** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_gamification_share_post_request_data import ApiGamificationSharePostRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiGamificationSharePostRequestData from a JSON string
api_gamification_share_post_request_data_instance = ApiGamificationSharePostRequestData.from_json(json)
# print the JSON string representation of the object
print(ApiGamificationSharePostRequestData.to_json())

# convert the object into a dict
api_gamification_share_post_request_data_dict = api_gamification_share_post_request_data_instance.to_dict()
# create an instance of ApiGamificationSharePostRequestData from a dict
api_gamification_share_post_request_data_from_dict = ApiGamificationSharePostRequestData.from_dict(api_gamification_share_post_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


