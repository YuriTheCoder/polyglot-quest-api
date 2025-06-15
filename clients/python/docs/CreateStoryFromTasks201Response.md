# CreateStoryFromTasks201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**data** | [**CreateStoryFromTasks201ResponseData**](CreateStoryFromTasks201ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_story_from_tasks201_response import CreateStoryFromTasks201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateStoryFromTasks201Response from a JSON string
create_story_from_tasks201_response_instance = CreateStoryFromTasks201Response.from_json(json)
# print the JSON string representation of the object
print(CreateStoryFromTasks201Response.to_json())

# convert the object into a dict
create_story_from_tasks201_response_dict = create_story_from_tasks201_response_instance.to_dict()
# create an instance of CreateStoryFromTasks201Response from a dict
create_story_from_tasks201_response_from_dict = CreateStoryFromTasks201Response.from_dict(create_story_from_tasks201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


