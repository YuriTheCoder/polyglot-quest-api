# CreateStoryFromTasks201ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**story** | [**CreateStoryFromTasks201ResponseDataStory**](CreateStoryFromTasks201ResponseDataStory.md) |  | [optional] 
**quests** | [**List[CreateStoryFromTasks201ResponseDataQuestsInner]**](CreateStoryFromTasks201ResponseDataQuestsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_story_from_tasks201_response_data import CreateStoryFromTasks201ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateStoryFromTasks201ResponseData from a JSON string
create_story_from_tasks201_response_data_instance = CreateStoryFromTasks201ResponseData.from_json(json)
# print the JSON string representation of the object
print(CreateStoryFromTasks201ResponseData.to_json())

# convert the object into a dict
create_story_from_tasks201_response_data_dict = create_story_from_tasks201_response_data_instance.to_dict()
# create an instance of CreateStoryFromTasks201ResponseData from a dict
create_story_from_tasks201_response_data_from_dict = CreateStoryFromTasks201ResponseData.from_dict(create_story_from_tasks201_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


