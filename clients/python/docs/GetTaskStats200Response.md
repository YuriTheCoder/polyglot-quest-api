# GetTaskStats200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**GetTaskStats200ResponseData**](GetTaskStats200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_task_stats200_response import GetTaskStats200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetTaskStats200Response from a JSON string
get_task_stats200_response_instance = GetTaskStats200Response.from_json(json)
# print the JSON string representation of the object
print(GetTaskStats200Response.to_json())

# convert the object into a dict
get_task_stats200_response_dict = get_task_stats200_response_instance.to_dict()
# create an instance of GetTaskStats200Response from a dict
get_task_stats200_response_from_dict = GetTaskStats200Response.from_dict(get_task_stats200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


