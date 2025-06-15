# ListStories200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**ListStories200ResponseData**](ListStories200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_stories200_response import ListStories200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListStories200Response from a JSON string
list_stories200_response_instance = ListStories200Response.from_json(json)
# print the JSON string representation of the object
print(ListStories200Response.to_json())

# convert the object into a dict
list_stories200_response_dict = list_stories200_response_instance.to_dict()
# create an instance of ListStories200Response from a dict
list_stories200_response_from_dict = ListStories200Response.from_dict(list_stories200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


