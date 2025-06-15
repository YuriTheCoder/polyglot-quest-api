# WebhooksApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**processShareWebhook**](WebhooksApi.md#processShareWebhook) | **POST** /api/webhooks/share | Webhook para processar compartilhamentos |


<a id="processShareWebhook"></a>
# **processShareWebhook**
> ProcessShareWebhook200Response processShareWebhook(processShareWebhookRequest)

Webhook para processar compartilhamentos

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = WebhooksApi()
val processShareWebhookRequest : ProcessShareWebhookRequest =  // ProcessShareWebhookRequest | 
try {
    val result : ProcessShareWebhook200Response = apiInstance.processShareWebhook(processShareWebhookRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling WebhooksApi#processShareWebhook")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling WebhooksApi#processShareWebhook")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **processShareWebhookRequest** | [**ProcessShareWebhookRequest**](ProcessShareWebhookRequest.md)|  | [optional] |

### Return type

[**ProcessShareWebhook200Response**](ProcessShareWebhook200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

