# ApiLeaderboardGet200ResponseDataLeaderboardInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rank** | **float** |  | [optional] 
**username** | **str** |  | [optional] 
**level** | **float** |  | [optional] 
**total_xp** | **float** |  | [optional] 
**tasks_completed** | **float** |  | [optional] 
**current_streak** | **float** |  | [optional] 
**badges** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.api_leaderboard_get200_response_data_leaderboard_inner import ApiLeaderboardGet200ResponseDataLeaderboardInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiLeaderboardGet200ResponseDataLeaderboardInner from a JSON string
api_leaderboard_get200_response_data_leaderboard_inner_instance = ApiLeaderboardGet200ResponseDataLeaderboardInner.from_json(json)
# print the JSON string representation of the object
print(ApiLeaderboardGet200ResponseDataLeaderboardInner.to_json())

# convert the object into a dict
api_leaderboard_get200_response_data_leaderboard_inner_dict = api_leaderboard_get200_response_data_leaderboard_inner_instance.to_dict()
# create an instance of ApiLeaderboardGet200ResponseDataLeaderboardInner from a dict
api_leaderboard_get200_response_data_leaderboard_inner_from_dict = ApiLeaderboardGet200ResponseDataLeaderboardInner.from_dict(api_leaderboard_get200_response_data_leaderboard_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


