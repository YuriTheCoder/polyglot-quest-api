# GetTaskById200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**CreateTask201ResponseData**](CreateTask201ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_task_by_id200_response import GetTaskById200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetTaskById200Response from a JSON string
get_task_by_id200_response_instance = GetTaskById200Response.from_json(json)
# print the JSON string representation of the object
print(GetTaskById200Response.to_json())

# convert the object into a dict
get_task_by_id200_response_dict = get_task_by_id200_response_instance.to_dict()
# create an instance of GetTaskById200Response from a dict
get_task_by_id200_response_from_dict = GetTaskById200Response.from_dict(get_task_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


