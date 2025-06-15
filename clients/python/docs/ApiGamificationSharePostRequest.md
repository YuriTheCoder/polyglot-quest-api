# ApiGamificationSharePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**data** | [**ApiGamificationSharePostRequestData**](ApiGamificationSharePostRequestData.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_gamification_share_post_request import ApiGamificationSharePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiGamificationSharePostRequest from a JSON string
api_gamification_share_post_request_instance = ApiGamificationSharePostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiGamificationSharePostRequest.to_json())

# convert the object into a dict
api_gamification_share_post_request_dict = api_gamification_share_post_request_instance.to_dict()
# create an instance of ApiGamificationSharePostRequest from a dict
api_gamification_share_post_request_from_dict = ApiGamificationSharePostRequest.from_dict(api_gamification_share_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


