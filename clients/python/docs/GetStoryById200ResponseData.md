# GetStoryById200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**story** | [**Story**](Story.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_story_by_id200_response_data import GetStoryById200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetStoryById200ResponseData from a JSON string
get_story_by_id200_response_data_instance = GetStoryById200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetStoryById200ResponseData.to_json())

# convert the object into a dict
get_story_by_id200_response_data_dict = get_story_by_id200_response_data_instance.to_dict()
# create an instance of GetStoryById200ResponseData from a dict
get_story_by_id200_response_data_from_dict = GetStoryById200ResponseData.from_dict(get_story_by_id200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


