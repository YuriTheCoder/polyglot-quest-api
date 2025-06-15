# ApiTasksIdPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**priority** | **str** |  | [optional] 
**due_date** | **datetime** |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_id_put_request import ApiTasksIdPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksIdPutRequest from a JSON string
api_tasks_id_put_request_instance = ApiTasksIdPutRequest.from_json(json)
# print the JSON string representation of the object
print(ApiTasksIdPutRequest.to_json())

# convert the object into a dict
api_tasks_id_put_request_dict = api_tasks_id_put_request_instance.to_dict()
# create an instance of ApiTasksIdPutRequest from a dict
api_tasks_id_put_request_from_dict = ApiTasksIdPutRequest.from_dict(api_tasks_id_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


