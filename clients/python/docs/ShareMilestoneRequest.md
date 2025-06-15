# ShareMilestoneRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**data** | [**ShareMilestoneRequestData**](ShareMilestoneRequestData.md) |  | [optional] 

## Example

```python
from openapi_client.models.share_milestone_request import ShareMilestoneRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ShareMilestoneRequest from a JSON string
share_milestone_request_instance = ShareMilestoneRequest.from_json(json)
# print the JSON string representation of the object
print(ShareMilestoneRequest.to_json())

# convert the object into a dict
share_milestone_request_dict = share_milestone_request_instance.to_dict()
# create an instance of ShareMilestoneRequest from a dict
share_milestone_request_from_dict = ShareMilestoneRequest.from_dict(share_milestone_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


