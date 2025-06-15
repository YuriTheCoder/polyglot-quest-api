# ProcessShareWebhook200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** |  | [optional] 
**message** | **str** |  | [optional] 
**timestamp** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.process_share_webhook200_response import ProcessShareWebhook200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessShareWebhook200Response from a JSON string
process_share_webhook200_response_instance = ProcessShareWebhook200Response.from_json(json)
# print the JSON string representation of the object
print(ProcessShareWebhook200Response.to_json())

# convert the object into a dict
process_share_webhook200_response_dict = process_share_webhook200_response_instance.to_dict()
# create an instance of ProcessShareWebhook200Response from a dict
process_share_webhook200_response_from_dict = ProcessShareWebhook200Response.from_dict(process_share_webhook200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


