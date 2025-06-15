# ApiTasksStoryPost201ResponseDataStory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**story** | **str** |  | [optional] 
**theme** | **str** |  | [optional] 
**total_xp** | **float** |  | [optional] 
**estimated_play_time** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_tasks_story_post201_response_data_story import ApiTasksStoryPost201ResponseDataStory

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTasksStoryPost201ResponseDataStory from a JSON string
api_tasks_story_post201_response_data_story_instance = ApiTasksStoryPost201ResponseDataStory.from_json(json)
# print the JSON string representation of the object
print(ApiTasksStoryPost201ResponseDataStory.to_json())

# convert the object into a dict
api_tasks_story_post201_response_data_story_dict = api_tasks_story_post201_response_data_story_instance.to_dict()
# create an instance of ApiTasksStoryPost201ResponseDataStory from a dict
api_tasks_story_post201_response_data_story_from_dict = ApiTasksStoryPost201ResponseDataStory.from_dict(api_tasks_story_post201_response_data_story_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


