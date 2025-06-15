# GetLeaderboard200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**leaderboard** | [**List[GetLeaderboard200ResponseDataLeaderboardInner]**](GetLeaderboard200ResponseDataLeaderboardInner.md) |  | [optional] 
**period** | **str** |  | [optional] 
**total** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.get_leaderboard200_response_data import GetLeaderboard200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetLeaderboard200ResponseData from a JSON string
get_leaderboard200_response_data_instance = GetLeaderboard200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetLeaderboard200ResponseData.to_json())

# convert the object into a dict
get_leaderboard200_response_data_dict = get_leaderboard200_response_data_instance.to_dict()
# create an instance of GetLeaderboard200ResponseData from a dict
get_leaderboard200_response_data_from_dict = GetLeaderboard200ResponseData.from_dict(get_leaderboard200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


