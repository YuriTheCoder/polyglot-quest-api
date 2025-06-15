# GamifiedTaskManagementApi.AuthApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeUserPassword**](AuthApi.md#changeUserPassword) | **PUT** /api/auth/change-password | Alterar senha do usuário
[**getUserProfile**](AuthApi.md#getUserProfile) | **GET** /api/auth/profile | Obter perfil do usuário logado
[**loginUser**](AuthApi.md#loginUser) | **POST** /api/auth/login | Login de usuário
[**logoutUser**](AuthApi.md#logoutUser) | **POST** /api/auth/logout | Logout do usuário
[**registerUser**](AuthApi.md#registerUser) | **POST** /api/auth/register | Registrar novo usuário
[**updateUserProfile**](AuthApi.md#updateUserProfile) | **PUT** /api/auth/profile | Atualizar perfil do usuário



## changeUserPassword

> ChangeUserPassword200Response changeUserPassword(changeUserPasswordRequest)

Alterar senha do usuário

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.AuthApi();
let changeUserPasswordRequest = new GamifiedTaskManagementApi.ChangeUserPasswordRequest(); // ChangeUserPasswordRequest | 
apiInstance.changeUserPassword(changeUserPasswordRequest, (error, data, response) => {
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
 **changeUserPasswordRequest** | [**ChangeUserPasswordRequest**](ChangeUserPasswordRequest.md)|  | 

### Return type

[**ChangeUserPassword200Response**](ChangeUserPassword200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getUserProfile

> GetUserProfile200Response getUserProfile()

Obter perfil do usuário logado

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.AuthApi();
apiInstance.getUserProfile((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUserProfile200Response**](GetUserProfile200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## loginUser

> LoginUser200Response loginUser(loginUserRequest)

Login de usuário

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';

let apiInstance = new GamifiedTaskManagementApi.AuthApi();
let loginUserRequest = new GamifiedTaskManagementApi.LoginUserRequest(); // LoginUserRequest | 
apiInstance.loginUser(loginUserRequest, (error, data, response) => {
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
 **loginUserRequest** | [**LoginUserRequest**](LoginUserRequest.md)|  | 

### Return type

[**LoginUser200Response**](LoginUser200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## logoutUser

> LogoutUser200Response logoutUser()

Logout do usuário

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.AuthApi();
apiInstance.logoutUser((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LogoutUser200Response**](LogoutUser200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registerUser

> RegisterUser201Response registerUser(registerUserRequest)

Registrar novo usuário

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';

let apiInstance = new GamifiedTaskManagementApi.AuthApi();
let registerUserRequest = new GamifiedTaskManagementApi.RegisterUserRequest(); // RegisterUserRequest | 
apiInstance.registerUser(registerUserRequest, (error, data, response) => {
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
 **registerUserRequest** | [**RegisterUserRequest**](RegisterUserRequest.md)|  | 

### Return type

[**RegisterUser201Response**](RegisterUser201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUserProfile

> UpdateUserProfile200Response updateUserProfile(updateUserProfileRequest)

Atualizar perfil do usuário

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.AuthApi();
let updateUserProfileRequest = new GamifiedTaskManagementApi.UpdateUserProfileRequest(); // UpdateUserProfileRequest | 
apiInstance.updateUserProfile(updateUserProfileRequest, (error, data, response) => {
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
 **updateUserProfileRequest** | [**UpdateUserProfileRequest**](UpdateUserProfileRequest.md)|  | 

### Return type

[**UpdateUserProfile200Response**](UpdateUserProfile200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

