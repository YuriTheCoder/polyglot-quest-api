# ProcessShareWebhookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_type** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 
**data** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.process_share_webhook_request import ProcessShareWebhookRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessShareWebhookRequest from a JSON string
process_share_webhook_request_instance = ProcessShareWebhookRequest.from_json(json)
# print the JSON string representation of the object
print(ProcessShareWebhookRequest.to_json())

# convert the object into a dict
process_share_webhook_request_dict = process_share_webhook_request_instance.to_dict()
# create an instance of ProcessShareWebhookRequest from a dict
process_share_webhook_request_from_dict = ProcessShareWebhookRequest.from_dict(process_share_webhook_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


