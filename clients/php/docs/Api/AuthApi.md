# OpenAPI\Client\AuthApi

All URIs are relative to http://localhost:3000, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**changeUserPassword()**](AuthApi.md#changeUserPassword) | **PUT** /api/auth/change-password | Alterar senha do usuário |
| [**getUserProfile()**](AuthApi.md#getUserProfile) | **GET** /api/auth/profile | Obter perfil do usuário logado |
| [**loginUser()**](AuthApi.md#loginUser) | **POST** /api/auth/login | Login de usuário |
| [**logoutUser()**](AuthApi.md#logoutUser) | **POST** /api/auth/logout | Logout do usuário |
| [**registerUser()**](AuthApi.md#registerUser) | **POST** /api/auth/register | Registrar novo usuário |
| [**updateUserProfile()**](AuthApi.md#updateUserProfile) | **PUT** /api/auth/profile | Atualizar perfil do usuário |


## `changeUserPassword()`

```php
changeUserPassword($change_user_password_request): \OpenAPI\Client\Model\ChangeUserPassword200Response
```

Alterar senha do usuário

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AuthApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$change_user_password_request = new \OpenAPI\Client\Model\ChangeUserPasswordRequest(); // \OpenAPI\Client\Model\ChangeUserPasswordRequest

try {
    $result = $apiInstance->changeUserPassword($change_user_password_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthApi->changeUserPassword: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **change_user_password_request** | [**\OpenAPI\Client\Model\ChangeUserPasswordRequest**](../Model/ChangeUserPasswordRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\ChangeUserPassword200Response**](../Model/ChangeUserPassword200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserProfile()`

```php
getUserProfile(): \OpenAPI\Client\Model\GetUserProfile200Response
```

Obter perfil do usuário logado

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AuthApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->getUserProfile();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthApi->getUserProfile: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\GetUserProfile200Response**](../Model/GetUserProfile200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `loginUser()`

```php
loginUser($login_user_request): \OpenAPI\Client\Model\LoginUser200Response
```

Login de usuário

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\AuthApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$login_user_request = new \OpenAPI\Client\Model\LoginUserRequest(); // \OpenAPI\Client\Model\LoginUserRequest

try {
    $result = $apiInstance->loginUser($login_user_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthApi->loginUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **login_user_request** | [**\OpenAPI\Client\Model\LoginUserRequest**](../Model/LoginUserRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\LoginUser200Response**](../Model/LoginUser200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `logoutUser()`

```php
logoutUser(): \OpenAPI\Client\Model\LogoutUser200Response
```

Logout do usuário

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AuthApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->logoutUser();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthApi->logoutUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\LogoutUser200Response**](../Model/LogoutUser200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `registerUser()`

```php
registerUser($register_user_request): \OpenAPI\Client\Model\RegisterUser201Response
```

Registrar novo usuário

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\AuthApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$register_user_request = new \OpenAPI\Client\Model\RegisterUserRequest(); // \OpenAPI\Client\Model\RegisterUserRequest

try {
    $result = $apiInstance->registerUser($register_user_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthApi->registerUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **register_user_request** | [**\OpenAPI\Client\Model\RegisterUserRequest**](../Model/RegisterUserRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\RegisterUser201Response**](../Model/RegisterUser201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateUserProfile()`

```php
updateUserProfile($update_user_profile_request): \OpenAPI\Client\Model\UpdateUserProfile200Response
```

Atualizar perfil do usuário

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AuthApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$update_user_profile_request = new \OpenAPI\Client\Model\UpdateUserProfileRequest(); // \OpenAPI\Client\Model\UpdateUserProfileRequest

try {
    $result = $apiInstance->updateUserProfile($update_user_profile_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthApi->updateUserProfile: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **update_user_profile_request** | [**\OpenAPI\Client\Model\UpdateUserProfileRequest**](../Model/UpdateUserProfileRequest.md)|  | |

### Return type

[**\OpenAPI\Client\Model\UpdateUserProfile200Response**](../Model/UpdateUserProfile200Response.md)

### Authorization

[bearerAuth](../../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
