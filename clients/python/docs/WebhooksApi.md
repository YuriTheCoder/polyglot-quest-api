# openapi_client.WebhooksApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**process_share_webhook**](WebhooksApi.md#process_share_webhook) | **POST** /api/webhooks/share | Webhook para processar compartilhamentos


# **process_share_webhook**
> ProcessShareWebhook200Response process_share_webhook(process_share_webhook_request=process_share_webhook_request)

Webhook para processar compartilhamentos

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.process_share_webhook200_response import ProcessShareWebhook200Response
from openapi_client.models.process_share_webhook_request import ProcessShareWebhookRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    process_share_webhook_request = openapi_client.ProcessShareWebhookRequest() # ProcessShareWebhookRequest |  (optional)

    try:
        # Webhook para processar compartilhamentos
        api_response = api_instance.process_share_webhook(process_share_webhook_request=process_share_webhook_request)
        print("The response of WebhooksApi->process_share_webhook:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->process_share_webhook: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **process_share_webhook_request** | [**ProcessShareWebhookRequest**](ProcessShareWebhookRequest.md)|  | [optional] 

### Return type

[**ProcessShareWebhook200Response**](ProcessShareWebhook200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook processado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

