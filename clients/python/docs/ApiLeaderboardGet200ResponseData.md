# ApiLeaderboardGet200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**leaderboard** | [**List[ApiLeaderboardGet200ResponseDataLeaderboardInner]**](ApiLeaderboardGet200ResponseDataLeaderboardInner.md) |  | [optional] 
**period** | **str** |  | [optional] 
**total** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.api_leaderboard_get200_response_data import ApiLeaderboardGet200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiLeaderboardGet200ResponseData from a JSON string
api_leaderboard_get200_response_data_instance = ApiLeaderboardGet200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ApiLeaderboardGet200ResponseData.to_json())

# convert the object into a dict
api_leaderboard_get200_response_data_dict = api_leaderboard_get200_response_data_instance.to_dict()
# create an instance of ApiLeaderboardGet200ResponseData from a dict
api_leaderboard_get200_response_data_from_dict = ApiLeaderboardGet200ResponseData.from_dict(api_leaderboard_get200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


