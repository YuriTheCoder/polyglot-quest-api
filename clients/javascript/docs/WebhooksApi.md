# GamifiedTaskManagementApi.WebhooksApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**processShareWebhook**](WebhooksApi.md#processShareWebhook) | **POST** /api/webhooks/share | Webhook para processar compartilhamentos



## processShareWebhook

> ProcessShareWebhook200Response processShareWebhook(opts)

Webhook para processar compartilhamentos

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.WebhooksApi();
let opts = {
  'processShareWebhookRequest': new GamifiedTaskManagementApi.ProcessShareWebhookRequest() // ProcessShareWebhookRequest | 
};
apiInstance.processShareWebhook(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processShareWebhookRequest** | [**ProcessShareWebhookRequest**](ProcessShareWebhookRequest.md)|  | [optional] 

### Return type

[**ProcessShareWebhook200Response**](ProcessShareWebhook200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

