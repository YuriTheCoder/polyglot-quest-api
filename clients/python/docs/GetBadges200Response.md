# GetBadges200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**data** | [**GetBadges200ResponseData**](GetBadges200ResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_badges200_response import GetBadges200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetBadges200Response from a JSON string
get_badges200_response_instance = GetBadges200Response.from_json(json)
# print the JSON string representation of the object
print(GetBadges200Response.to_json())

# convert the object into a dict
get_badges200_response_dict = get_badges200_response_instance.to_dict()
# create an instance of GetBadges200Response from a dict
get_badges200_response_from_dict = GetBadges200Response.from_dict(get_badges200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


