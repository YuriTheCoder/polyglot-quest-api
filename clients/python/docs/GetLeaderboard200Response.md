# GetLeaderboard200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**GetLeaderboard200ResponseData**](GetLeaderboard200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_leaderboard200_response import GetLeaderboard200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetLeaderboard200Response from a JSON string
get_leaderboard200_response_instance = GetLeaderboard200Response.from_json(json)
# print the JSON string representation of the object
print(GetLeaderboard200Response.to_json())

# convert the object into a dict
get_leaderboard200_response_dict = get_leaderboard200_response_instance.to_dict()
# create an instance of GetLeaderboard200Response from a dict
get_leaderboard200_response_from_dict = GetLeaderboard200Response.from_dict(get_leaderboard200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


