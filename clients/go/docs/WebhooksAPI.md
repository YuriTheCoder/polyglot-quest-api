# \WebhooksAPI

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ProcessShareWebhook**](WebhooksAPI.md#ProcessShareWebhook) | **Post** /api/webhooks/share | Webhook para processar compartilhamentos



## ProcessShareWebhook

> ProcessShareWebhook200Response ProcessShareWebhook(ctx).ProcessShareWebhookRequest(processShareWebhookRequest).Execute()

Webhook para processar compartilhamentos

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	processShareWebhookRequest := *openapiclient.NewProcessShareWebhookRequest() // ProcessShareWebhookRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhooksAPI.ProcessShareWebhook(context.Background()).ProcessShareWebhookRequest(processShareWebhookRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.ProcessShareWebhook``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ProcessShareWebhook`: ProcessShareWebhook200Response
	fmt.Fprintf(os.Stdout, "Response from `WebhooksAPI.ProcessShareWebhook`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiProcessShareWebhookRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processShareWebhookRequest** | [**ProcessShareWebhookRequest**](ProcessShareWebhookRequest.md) |  | 

### Return type

[**ProcessShareWebhook200Response**](ProcessShareWebhook200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

