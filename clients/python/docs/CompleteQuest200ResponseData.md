# CompleteQuest200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task** | [**CompleteQuest200ResponseDataTask**](CompleteQuest200ResponseDataTask.md) |  | [optional] 
**gamification** | [**CompleteQuest200ResponseDataGamification**](CompleteQuest200ResponseDataGamification.md) |  | [optional] 

## Example

```python
from openapi_client.models.complete_quest200_response_data import CompleteQuest200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteQuest200ResponseData from a JSON string
complete_quest200_response_data_instance = CompleteQuest200ResponseData.from_json(json)
# print the JSON string representation of the object
print(CompleteQuest200ResponseData.to_json())

# convert the object into a dict
complete_quest200_response_data_dict = complete_quest200_response_data_instance.to_dict()
# create an instance of CompleteQuest200ResponseData from a dict
complete_quest200_response_data_from_dict = CompleteQuest200ResponseData.from_dict(complete_quest200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


