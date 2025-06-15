# ApiTasksIdGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**ApiTasksPost201ResponseData**](ApiTasksPost201ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_id_get200_response import ApiTasksIdGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksIdGet200Response from a JSON string
api_tasks_id_get200_response_instance = ApiTasksIdGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiTasksIdGet200Response.to_json())

# convert the object into a dict
api_tasks_id_get200_response_dict = api_tasks_id_get200_response_instance.to_dict()
# create an instance of ApiTasksIdGet200Response from a dict
api_tasks_id_get200_response_from_dict = ApiTasksIdGet200Response.from_dict(api_tasks_id_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


