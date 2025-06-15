# CompleteQuest200ResponseDataTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**quest_title** | **str** |  | [optional] 
**xp_earned** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.complete_quest200_response_data_task import CompleteQuest200ResponseDataTask

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteQuest200ResponseDataTask from a JSON string
complete_quest200_response_data_task_instance = CompleteQuest200ResponseDataTask.from_json(json)
# print the JSON string representation of the object
print(CompleteQuest200ResponseDataTask.to_json())

# convert the object into a dict
complete_quest200_response_data_task_dict = complete_quest200_response_data_task_instance.to_dict()
# create an instance of CompleteQuest200ResponseDataTask from a dict
complete_quest200_response_data_task_from_dict = CompleteQuest200ResponseDataTask.from_dict(complete_quest200_response_data_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


