# WebhooksAPI

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**processShareWebhook**](WebhooksAPI.md#processsharewebhook) | **POST** /api/webhooks/share | Webhook para processar compartilhamentos


# **processShareWebhook**
```swift
    open class func processShareWebhook(processShareWebhookRequest: ProcessShareWebhookRequest? = nil, completion: @escaping (_ data: ProcessShareWebhook200Response?, _ error: Error?) -> Void)
```

Webhook para processar compartilhamentos

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let processShareWebhookRequest = processShareWebhook_request(eventType: "eventType_example", userId: "userId_example", data: 123) // ProcessShareWebhookRequest |  (optional)

// Webhook para processar compartilhamentos
WebhooksAPI.processShareWebhook(processShareWebhookRequest: processShareWebhookRequest) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processShareWebhookRequest** | [**ProcessShareWebhookRequest**](ProcessShareWebhookRequest.md) |  | [optional] 

### Return type

[**ProcessShareWebhook200Response**](ProcessShareWebhook200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

