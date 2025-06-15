# \WebhooksApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**process_share_webhook**](WebhooksApi.md#process_share_webhook) | **POST** /api/webhooks/share | Webhook para processar compartilhamentos



## process_share_webhook

> models::ProcessShareWebhook200Response process_share_webhook(process_share_webhook_request)
Webhook para processar compartilhamentos

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**process_share_webhook_request** | Option<[**ProcessShareWebhookRequest**](ProcessShareWebhookRequest.md)> |  |  |

### Return type

[**models::ProcessShareWebhook200Response**](processShareWebhook_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

