# GamifiedTasks.Client.Api.WebhooksApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ProcessShareWebhook**](WebhooksApi.md#processsharewebhook) | **POST** /api/webhooks/share | Webhook para processar compartilhamentos |

<a id="processsharewebhook"></a>
# **ProcessShareWebhook**
> ProcessShareWebhook200Response ProcessShareWebhook (ProcessShareWebhookRequest processShareWebhookRequest = null)

Webhook para processar compartilhamentos

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class ProcessShareWebhookExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new WebhooksApi(config);
            var processShareWebhookRequest = new ProcessShareWebhookRequest(); // ProcessShareWebhookRequest |  (optional) 

            try
            {
                // Webhook para processar compartilhamentos
                ProcessShareWebhook200Response result = apiInstance.ProcessShareWebhook(processShareWebhookRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling WebhooksApi.ProcessShareWebhook: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ProcessShareWebhookWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Webhook para processar compartilhamentos
    ApiResponse<ProcessShareWebhook200Response> response = apiInstance.ProcessShareWebhookWithHttpInfo(processShareWebhookRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling WebhooksApi.ProcessShareWebhookWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **processShareWebhookRequest** | [**ProcessShareWebhookRequest**](ProcessShareWebhookRequest.md) |  | [optional]  |

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
| **200** | Webhook processado |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

