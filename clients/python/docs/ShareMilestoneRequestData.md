# ShareMilestoneRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **float** |  | [optional] 
**badge** | **object** |  | [optional] 
**streak** | **float** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.share_milestone_request_data import ShareMilestoneRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of ShareMilestoneRequestData from a JSON string
share_milestone_request_data_instance = ShareMilestoneRequestData.from_json(json)
# print the JSON string representation of the object
print(ShareMilestoneRequestData.to_json())

# convert the object into a dict
share_milestone_request_data_dict = share_milestone_request_data_instance.to_dict()
# create an instance of ShareMilestoneRequestData from a dict
share_milestone_request_data_from_dict = ShareMilestoneRequestData.from_dict(share_milestone_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


