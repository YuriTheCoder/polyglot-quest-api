# ApiTasksStoryPost201ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**story** | [**ApiTasksStoryPost201ResponseDataStory**](ApiTasksStoryPost201ResponseDataStory.md) |  | [optional] 
**quests** | [**List[ApiTasksStoryPost201ResponseDataQuestsInner]**](ApiTasksStoryPost201ResponseDataQuestsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_story_post201_response_data import ApiTasksStoryPost201ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksStoryPost201ResponseData from a JSON string
api_tasks_story_post201_response_data_instance = ApiTasksStoryPost201ResponseData.from_json(json)
# print the JSON string representation of the object
print(ApiTasksStoryPost201ResponseData.to_json())

# convert the object into a dict
api_tasks_story_post201_response_data_dict = api_tasks_story_post201_response_data_instance.to_dict()
# create an instance of ApiTasksStoryPost201ResponseData from a dict
api_tasks_story_post201_response_data_from_dict = ApiTasksStoryPost201ResponseData.from_dict(api_tasks_story_post201_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


