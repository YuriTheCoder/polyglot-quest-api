# ApiTasksPost201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**data** | [**ApiTasksPost201ResponseData**](ApiTasksPost201ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_post201_response import ApiTasksPost201Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksPost201Response from a JSON string
api_tasks_post201_response_instance = ApiTasksPost201Response.from_json(json)
# print the JSON string representation of the object
print(ApiTasksPost201Response.to_json())

# convert the object into a dict
api_tasks_post201_response_dict = api_tasks_post201_response_instance.to_dict()
# create an instance of ApiTasksPost201Response from a dict
api_tasks_post201_response_from_dict = ApiTasksPost201Response.from_dict(api_tasks_post201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


