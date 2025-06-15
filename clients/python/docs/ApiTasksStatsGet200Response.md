# ApiTasksStatsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**ApiTasksStatsGet200ResponseData**](ApiTasksStatsGet200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_stats_get200_response import ApiTasksStatsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksStatsGet200Response from a JSON string
api_tasks_stats_get200_response_instance = ApiTasksStatsGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiTasksStatsGet200Response.to_json())

# convert the object into a dict
api_tasks_stats_get200_response_dict = api_tasks_stats_get200_response_instance.to_dict()
# create an instance of ApiTasksStatsGet200Response from a dict
api_tasks_stats_get200_response_from_dict = ApiTasksStatsGet200Response.from_dict(api_tasks_stats_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


