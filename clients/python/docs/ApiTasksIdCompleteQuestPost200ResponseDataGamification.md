# ApiTasksIdCompleteQuestPost200ResponseDataGamification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**xp_gained** | **float** |  | [optional] 
**leveled_up** | **bool** |  | [optional] 
**new_level** | **float** |  | [optional] 
**new_badges** | **List[str]** |  | [optional] 
**total_xp** | **float** |  | [optional] 
**current_streak** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_id_complete_quest_post200_response_data_gamification import ApiTasksIdCompleteQuestPost200ResponseDataGamification

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksIdCompleteQuestPost200ResponseDataGamification from a JSON string
api_tasks_id_complete_quest_post200_response_data_gamification_instance = ApiTasksIdCompleteQuestPost200ResponseDataGamification.from_json(json)
# print the JSON string representation of the object
print(ApiTasksIdCompleteQuestPost200ResponseDataGamification.to_json())

# convert the object into a dict
api_tasks_id_complete_quest_post200_response_data_gamification_dict = api_tasks_id_complete_quest_post200_response_data_gamification_instance.to_dict()
# create an instance of ApiTasksIdCompleteQuestPost200ResponseDataGamification from a dict
api_tasks_id_complete_quest_post200_response_data_gamification_from_dict = ApiTasksIdCompleteQuestPost200ResponseDataGamification.from_dict(api_tasks_id_complete_quest_post200_response_data_gamification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


