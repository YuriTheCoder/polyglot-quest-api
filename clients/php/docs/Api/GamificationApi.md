# OpenAPI\Client\GamificationApi

All URIs are relative to http://localhost:3000, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**completeQuest()**](GamificationApi.md#completeQuest) | **POST** /api/tasks/{id}/complete-quest | Complete a quest (task) and get XP |
| [**createStoryFromTasks()**](GamificationApi.md#createStoryFromTasks) | **POST** /api/tasks/story | Generate a story from tasks |
| [**getBadges()**](GamificationApi.md#getBadges) | **GET** /api/gamification/badges | Listar badges disponíveis e conquistados |
| [**getGamificationDashboard()**](GamificationApi.md#getGamificationDashboard) | **GET** /api/gamification/dashboard | Dashboard de gamificação do usuário |
| [**getGlobalStats()**](GamificationApi.md#getGlobalStats) | **GET** /api/gamification/global-stats | Estatísticas globais da plataforma |
| [**getLeaderboard()**](GamificationApi.md#getLeaderboard) | **GET** /api/leaderboard | Obter leaderboard público |
| [**getStoryById()**](GamificationApi.md#getStoryById) | **GET** /api/tasks/stories/{id} | Get a specific story by ID |
| [**listStories()**](GamificationApi.md#listStories) | **GET** /api/tasks/stories | List all stories for the user |
| [**shareMilestone()**](GamificationApi.md#shareMilestone) | **POST** /api/gamification/share | Compartilhar conquista manualmente |
| [**updateGamificationPreferences()**](GamificationApi.md#updateGamificationPreferences) | **PUT** /api/gamification/preferences | Atualizar preferências de gamificação |


## `completeQuest()`

```php
completeQuest($id, $complete_quest_request): \OpenAPI\Client\Model\CompleteQuest200Response
```

Complete a quest (task) and get XP

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GamificationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | ID da tarefa/quest
$complete_quest_request = new \OpenAPI\Client\Model\CompleteQuestRequest(); // \OpenAPI\Client\Model\CompleteQuestRequest

try {
    $result = $apiInstance->completeQuest($id, $complete_quest_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamificationApi->completeQuest: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| ID da tarefa/quest | |
| **complete_quest_request** | [**\OpenAPI\Client\Model\CompleteQuestRequest**](../Model/CompleteQuestRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\CompleteQuest200Response**](../Model/CompleteQuest200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createStoryFromTasks()`

```php
createStoryFromTasks($create_story_from_tasks_request): \OpenAPI\Client\Model\CreateStoryFromTasks201Response
```

Generate a story from tasks

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GamificationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_story_from_tasks_request = new \OpenAPI\Client\Model\CreateStoryFromTasksRequest(); // \OpenAPI\Client\Model\CreateStoryFromTasksRequest

try {
    $result = $apiInstance->createStoryFromTasks($create_story_from_tasks_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamificationApi->createStoryFromTasks: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_story_from_tasks_request** | [**\OpenAPI\Client\Model\CreateStoryFromTasksRequest**](../Model/CreateStoryFromTasksRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\CreateStoryFromTasks201Response**](../Model/CreateStoryFromTasks201Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getBadges()`

```php
getBadges(): \OpenAPI\Client\Model\GetBadges200Response
```

Listar badges disponíveis e conquistados

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GamificationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getBadges();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamificationApi->getBadges: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\GetBadges200Response**](../Model/GetBadges200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getGamificationDashboard()`

```php
getGamificationDashboard(): \OpenAPI\Client\Model\GetGamificationDashboard200Response
```

Dashboard de gamificação do usuário

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GamificationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getGamificationDashboard();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamificationApi->getGamificationDashboard: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\GetGamificationDashboard200Response**](../Model/GetGamificationDashboard200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getGlobalStats()`

```php
getGlobalStats(): \OpenAPI\Client\Model\GetGlobalStats200Response
```

Estatísticas globais da plataforma

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GamificationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getGlobalStats();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamificationApi->getGlobalStats: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\GetGlobalStats200Response**](../Model/GetGlobalStats200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getLeaderboard()`

```php
getLeaderboard($limit, $period): \OpenAPI\Client\Model\GetLeaderboard200Response
```

Obter leaderboard público

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GamificationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$limit = 10; // int | Número de usuários no ranking
$period = 'all'; // string | Período do ranking

try {
    $result = $apiInstance->getLeaderboard($limit, $period);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamificationApi->getLeaderboard: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **int**| Número de usuários no ranking | [optional] [default to 10] |
| **period** | **string**| Período do ranking | [optional] [default to &#39;all&#39;] |

### Return type

[**\OpenAPI\Client\Model\GetLeaderboard200Response**](../Model/GetLeaderboard200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getStoryById()`

```php
getStoryById($id): \OpenAPI\Client\Model\GetStoryById200Response
```

Get a specific story by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GamificationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | ID da história

try {
    $result = $apiInstance->getStoryById($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamificationApi->getStoryById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| ID da história | |

### Return type

[**\OpenAPI\Client\Model\GetStoryById200Response**](../Model/GetStoryById200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listStories()`

```php
listStories($active, $limit, $page): \OpenAPI\Client\Model\ListStories200Response
```

List all stories for the user

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GamificationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$active = 'true'; // string | Filtrar histórias ativas
$limit = 10; // int | Limite de resultados
$page = 1; // int | Página

try {
    $result = $apiInstance->listStories($active, $limit, $page);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamificationApi->listStories: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **active** | **string**| Filtrar histórias ativas | [optional] [default to &#39;true&#39;] |
| **limit** | **int**| Limite de resultados | [optional] [default to 10] |
| **page** | **int**| Página | [optional] [default to 1] |

### Return type

[**\OpenAPI\Client\Model\ListStories200Response**](../Model/ListStories200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `shareMilestone()`

```php
shareMilestone($share_milestone_request): \OpenAPI\Client\Model\ShareMilestone200Response
```

Compartilhar conquista manualmente

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GamificationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$share_milestone_request = new \OpenAPI\Client\Model\ShareMilestoneRequest(); // \OpenAPI\Client\Model\ShareMilestoneRequest

try {
    $result = $apiInstance->shareMilestone($share_milestone_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamificationApi->shareMilestone: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **share_milestone_request** | [**\OpenAPI\Client\Model\ShareMilestoneRequest**](../Model/ShareMilestoneRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\ShareMilestone200Response**](../Model/ShareMilestone200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateGamificationPreferences()`

```php
updateGamificationPreferences($update_gamification_preferences_request): \OpenAPI\Client\Model\UpdateGamificationPreferences200Response
```

Atualizar preferências de gamificação

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\GamificationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$update_gamification_preferences_request = new \OpenAPI\Client\Model\UpdateGamificationPreferencesRequest(); // \OpenAPI\Client\Model\UpdateGamificationPreferencesRequest

try {
    $result = $apiInstance->updateGamificationPreferences($update_gamification_preferences_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling GamificationApi->updateGamificationPreferences: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **update_gamification_preferences_request** | [**\OpenAPI\Client\Model\UpdateGamificationPreferencesRequest**](../Model/UpdateGamificationPreferencesRequest.md)|  | [optional] |

### Return type

[**\OpenAPI\Client\Model\UpdateGamificationPreferences200Response**](../Model/UpdateGamificationPreferences200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
