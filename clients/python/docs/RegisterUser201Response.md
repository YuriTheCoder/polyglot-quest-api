# RegisterUser201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**data** | [**RegisterUser201ResponseData**](RegisterUser201ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.register_user201_response import RegisterUser201Response

# TODO update the JSON string below
json = "{}"
# create an instance of RegisterUser201Response from a JSON string
register_user201_response_instance = RegisterUser201Response.from_json(json)
# print the JSON string representation of the object
print(RegisterUser201Response.to_json())

# convert the object into a dict
register_user201_response_dict = register_user201_response_instance.to_dict()
# create an instance of RegisterUser201Response from a dict
register_user201_response_from_dict = RegisterUser201Response.from_dict(register_user201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


