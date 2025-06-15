# CompleteQuest200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**data** | [**CompleteQuest200ResponseData**](CompleteQuest200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.complete_quest200_response import CompleteQuest200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteQuest200Response from a JSON string
complete_quest200_response_instance = CompleteQuest200Response.from_json(json)
# print the JSON string representation of the object
print(CompleteQuest200Response.to_json())

# convert the object into a dict
complete_quest200_response_dict = complete_quest200_response_instance.to_dict()
# create an instance of CompleteQuest200Response from a dict
complete_quest200_response_from_dict = CompleteQuest200Response.from_dict(complete_quest200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


