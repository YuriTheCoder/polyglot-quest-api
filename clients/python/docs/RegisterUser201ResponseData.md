# RegisterUser201ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**User**](User.md) |  | [optional] 
**token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.register_user201_response_data import RegisterUser201ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of RegisterUser201ResponseData from a JSON string
register_user201_response_data_instance = RegisterUser201ResponseData.from_json(json)
# print the JSON string representation of the object
print(RegisterUser201ResponseData.to_json())

# convert the object into a dict
register_user201_response_data_dict = register_user201_response_data_instance.to_dict()
# create an instance of RegisterUser201ResponseData from a dict
register_user201_response_data_from_dict = RegisterUser201ResponseData.from_dict(register_user201_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


