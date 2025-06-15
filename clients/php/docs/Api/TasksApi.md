# OpenAPI\Client\TasksApi

All URIs are relative to http://localhost:3000, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**completeTask()**](TasksApi.md#completeTask) | **PATCH** /api/tasks/{id}/complete | Mark a task as complete |
| [**createTask()**](TasksApi.md#createTask) | **POST** /api/tasks | Create a new task |
| [**deleteTask()**](TasksApi.md#deleteTask) | **DELETE** /api/tasks/{id} | Delete a task |
| [**getTaskById()**](TasksApi.md#getTaskById) | **GET** /api/tasks/{id} | Get a specific task by ID |
| [**getTaskStats()**](TasksApi.md#getTaskStats) | **GET** /api/tasks/stats | Get task statistics |
| [**listTasks()**](TasksApi.md#listTasks) | **GET** /api/tasks | Get all tasks for the logged-in user |
| [**listTasksByStatus()**](TasksApi.md#listTasksByStatus) | **GET** /api/tasks/status/{status} | Get tasks by status |
| [**updateTask()**](TasksApi.md#updateTask) | **PUT** /api/tasks/{id} | Update a task |


## `completeTask()`

```php
completeTask($id): \OpenAPI\Client\Model\CompleteTask200Response
```

Mark a task as complete

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | ID da tarefa

try {
    $result = $apiInstance->completeTask($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->completeTask: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| ID da tarefa | |

### Return type

[**\OpenAPI\Client\Model\CompleteTask200Response**](../Model/CompleteTask200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `createTask()`

```php
createTask($create_task_request): \OpenAPI\Client\Model\CreateTask201Response
```

Create a new task

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$create_task_request = new \OpenAPI\Client\Model\CreateTaskRequest(); // \OpenAPI\Client\Model\CreateTaskRequest

try {
    $result = $apiInstance->createTask($create_task_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->createTask: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **create_task_request** | [**\OpenAPI\Client\Model\CreateTaskRequest**](../Model/CreateTaskRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\CreateTask201Response**](../Model/CreateTask201Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `deleteTask()`

```php
deleteTask($id): \OpenAPI\Client\Model\DeleteTask200Response
```

Delete a task

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | ID da tarefa

try {
    $result = $apiInstance->deleteTask($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->deleteTask: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| ID da tarefa | |

### Return type

[**\OpenAPI\Client\Model\DeleteTask200Response**](../Model/DeleteTask200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTaskById()`

```php
getTaskById($id): \OpenAPI\Client\Model\GetTaskById200Response
```

Get a specific task by ID

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | ID da tarefa

try {
    $result = $apiInstance->getTaskById($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->getTaskById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| ID da tarefa | |

### Return type

[**\OpenAPI\Client\Model\GetTaskById200Response**](../Model/GetTaskById200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getTaskStats()`

```php
getTaskStats(): \OpenAPI\Client\Model\GetTaskStats200Response
```

Get task statistics

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getTaskStats();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->getTaskStats: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\GetTaskStats200Response**](../Model/GetTaskStats200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listTasks()`

```php
listTasks($status, $priority, $page, $limit, $sort_by, $sort_order, $search): \OpenAPI\Client\Model\ListTasks200Response
```

Get all tasks for the logged-in user

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$status = 'status_example'; // string | Filtrar por status
$priority = 'priority_example'; // string | Filtrar por prioridade
$page = 1; // int | Número da página
$limit = 10; // int | Itens por página
$sort_by = 'createdAt'; // string | Campo para ordenação
$sort_order = 'desc'; // string | Ordem da classificação
$search = 'search_example'; // string | Buscar no título e descrição

try {
    $result = $apiInstance->listTasks($status, $priority, $page, $limit, $sort_by, $sort_order, $search);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->listTasks: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **status** | **string**| Filtrar por status | [optional] |
| **priority** | **string**| Filtrar por prioridade | [optional] |
| **page** | **int**| Número da página | [optional] [default to 1] |
| **limit** | **int**| Itens por página | [optional] [default to 10] |
| **sort_by** | **string**| Campo para ordenação | [optional] [default to &#39;createdAt&#39;] |
| **sort_order** | **string**| Ordem da classificação | [optional] [default to &#39;desc&#39;] |
| **search** | **string**| Buscar no título e descrição | [optional] |

### Return type

[**\OpenAPI\Client\Model\ListTasks200Response**](../Model/ListTasks200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listTasksByStatus()`

```php
listTasksByStatus($status, $page, $limit): \OpenAPI\Client\Model\ListTasksByStatus200Response
```

Get tasks by status

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$status = 'status_example'; // string | Status das tarefas
$page = 1; // int | Número da página
$limit = 10; // int | Itens por página

try {
    $result = $apiInstance->listTasksByStatus($status, $page, $limit);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->listTasksByStatus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **status** | **string**| Status das tarefas | |
| **page** | **int**| Número da página | [optional] [default to 1] |
| **limit** | **int**| Itens por página | [optional] [default to 10] |

### Return type

[**\OpenAPI\Client\Model\ListTasksByStatus200Response**](../Model/ListTasksByStatus200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateTask()`

```php
updateTask($id, $update_task_request): \OpenAPI\Client\Model\UpdateTask200Response
```

Update a task

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\TasksApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | ID da tarefa
$update_task_request = new \OpenAPI\Client\Model\UpdateTaskRequest(); // \OpenAPI\Client\Model\UpdateTaskRequest

try {
    $result = $apiInstance->updateTask($id, $update_task_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TasksApi->updateTask: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| ID da tarefa | |
| **update_task_request** | [**\OpenAPI\Client\Model\UpdateTaskRequest**](../Model/UpdateTaskRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\UpdateTask200Response**](../Model/UpdateTask200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
