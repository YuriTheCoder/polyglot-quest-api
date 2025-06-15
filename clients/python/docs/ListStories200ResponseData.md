# ListStories200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stories** | [**List[Story]**](Story.md) |  | [optional] 
**pagination** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.list_stories200_response_data import ListStories200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ListStories200ResponseData from a JSON string
list_stories200_response_data_instance = ListStories200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ListStories200ResponseData.to_json())

# convert the object into a dict
list_stories200_response_data_dict = list_stories200_response_data_instance.to_dict()
# create an instance of ListStories200ResponseData from a dict
list_stories200_response_data_from_dict = ListStories200ResponseData.from_dict(list_stories200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


