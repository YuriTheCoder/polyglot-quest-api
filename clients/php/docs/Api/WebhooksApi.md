# OpenAPI\Client\WebhooksApi

All URIs are relative to http://localhost:3000, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**processShareWebhook()**](WebhooksApi.md#processShareWebhook) | **POST** /api/webhooks/share | Webhook para processar compartilhamentos |


## `processShareWebhook()`

```php
processShareWebhook($process_share_webhook_request): \OpenAPI\Client\Model\ProcessShareWebhook200Response
```

Webhook para processar compartilhamentos

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\WebhooksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$process_share_webhook_request = new \OpenAPI\Client\Model\ProcessShareWebhookRequest(); // \OpenAPI\Client\Model\ProcessShareWebhookRequest

try {
    $result = $apiInstance->processShareWebhook($process_share_webhook_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling WebhooksApi->processShareWebhook: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **process_share_webhook_request** | [**\OpenAPI\Client\Model\ProcessShareWebhookRequest**](../Model/ProcessShareWebhookRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\ProcessShareWebhook200Response**](../Model/ProcessShareWebhook200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
