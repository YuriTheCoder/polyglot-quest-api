# ApiWebhooksSharePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_type** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 
**data** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.api_webhooks_share_post_request import ApiWebhooksSharePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiWebhooksSharePostRequest from a JSON string
api_webhooks_share_post_request_instance = ApiWebhooksSharePostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiWebhooksSharePostRequest.to_json())

# convert the object into a dict
api_webhooks_share_post_request_dict = api_webhooks_share_post_request_instance.to_dict()
# create an instance of ApiWebhooksSharePostRequest from a dict
api_webhooks_share_post_request_from_dict = ApiWebhooksSharePostRequest.from_dict(api_webhooks_share_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


