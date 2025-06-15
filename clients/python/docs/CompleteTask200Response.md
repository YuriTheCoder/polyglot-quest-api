# CompleteTask200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**data** | [**CreateTask201ResponseData**](CreateTask201ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.complete_task200_response import CompleteTask200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteTask200Response from a JSON string
complete_task200_response_instance = CompleteTask200Response.from_json(json)
# print the JSON string representation of the object
print(CompleteTask200Response.to_json())

# convert the object into a dict
complete_task200_response_dict = complete_task200_response_instance.to_dict()
# create an instance of CompleteTask200Response from a dict
complete_task200_response_from_dict = CompleteTask200Response.from_dict(complete_task200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


