# OpenAPI\Client\UsersApi

All URIs are relative to http://localhost:3000, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**deleteUser()**](UsersApi.md#deleteUser) | **DELETE** /api/users/{id} | Deletar usuário (Admin only) |
| [**getAllUsers()**](UsersApi.md#getAllUsers) | **GET** /api/users | Listar todos os usuários (Admin only) |
| [**getUserById()**](UsersApi.md#getUserById) | **GET** /api/users/{id} | Obter usuário específico (Admin only) |
| [**getUserStats()**](UsersApi.md#getUserStats) | **GET** /api/users/stats | Obter estatísticas gerais do sistema (Admin only) |
| [**toggleUserStatus()**](UsersApi.md#toggleUserStatus) | **PATCH** /api/users/{id}/toggle-status | Ativar/Desativar usuário (Admin only) |
| [**updateUser()**](UsersApi.md#updateUser) | **PUT** /api/users/{id} | Atualizar usuário (Admin only) |


## `deleteUser()`

```php
deleteUser($id): \OpenAPI\Client\Model\DeleteUser200Response
```

Deletar usuário (Admin only)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | ID do usuário

try {
    $result = $apiInstance->deleteUser($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->deleteUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| ID do usuário | |

### Return type

[**\OpenAPI\Client\Model\DeleteUser200Response**](../Model/DeleteUser200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getAllUsers()`

```php
getAllUsers($page, $limit, $search, $role, $is_active): \OpenAPI\Client\Model\GetAllUsers200Response
```

Listar todos os usuários (Admin only)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$page = 1; // int | Número da página
$limit = 10; // int | Itens por página
$search = 'search_example'; // string | Buscar por nome ou email
$role = 'role_example'; // string | Filtrar por papel
$is_active = True; // bool | Filtrar por status ativo

try {
    $result = $apiInstance->getAllUsers($page, $limit, $search, $role, $is_active);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->getAllUsers: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **int**| Número da página | [optional] [default to 1] |
| **limit** | **int**| Itens por página | [optional] [default to 10] |
| **search** | **string**| Buscar por nome ou email | [optional] |
| **role** | **string**| Filtrar por papel | [optional] |
| **is_active** | **bool**| Filtrar por status ativo | [optional] |

### Return type

[**\OpenAPI\Client\Model\GetAllUsers200Response**](../Model/GetAllUsers200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserById()`

```php
getUserById($id): \OpenAPI\Client\Model\GetUserById200Response
```

Obter usuário específico (Admin only)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | ID do usuário

try {
    $result = $apiInstance->getUserById($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->getUserById: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| ID do usuário | |

### Return type

[**\OpenAPI\Client\Model\GetUserById200Response**](../Model/GetUserById200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserStats()`

```php
getUserStats(): \OpenAPI\Client\Model\GetUserStats200Response
```

Obter estatísticas gerais do sistema (Admin only)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getUserStats();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->getUserStats: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\GetUserStats200Response**](../Model/GetUserStats200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `toggleUserStatus()`

```php
toggleUserStatus($id): \OpenAPI\Client\Model\ToggleUserStatus200Response
```

Ativar/Desativar usuário (Admin only)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | ID do usuário

try {
    $result = $apiInstance->toggleUserStatus($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->toggleUserStatus: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| ID do usuário | |

### Return type

[**\OpenAPI\Client\Model\ToggleUserStatus200Response**](../Model/ToggleUserStatus200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateUser()`

```php
updateUser($id, $update_user_request): \OpenAPI\Client\Model\UpdateUser200Response
```

Atualizar usuário (Admin only)

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = 'id_example'; // string | ID do usuário
$update_user_request = new \OpenAPI\Client\Model\UpdateUserRequest(); // \OpenAPI\Client\Model\UpdateUserRequest

try {
    $result = $apiInstance->updateUser($id, $update_user_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->updateUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| ID do usuário | |
| **update_user_request** | [**\OpenAPI\Client\Model\UpdateUserRequest**](../Model/UpdateUserRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\UpdateUser200Response**](../Model/UpdateUser200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
