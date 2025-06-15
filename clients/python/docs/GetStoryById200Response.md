# GetStoryById200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**GetStoryById200ResponseData**](GetStoryById200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_story_by_id200_response import GetStoryById200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetStoryById200Response from a JSON string
get_story_by_id200_response_instance = GetStoryById200Response.from_json(json)
# print the JSON string representation of the object
print(GetStoryById200Response.to_json())

# convert the object into a dict
get_story_by_id200_response_dict = get_story_by_id200_response_instance.to_dict()
# create an instance of GetStoryById200Response from a dict
get_story_by_id200_response_from_dict = GetStoryById200Response.from_dict(get_story_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


