# GamifiedTaskManagementApi.UsersApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /api/users/{id} | Deletar usuário (Admin only)
[**getAllUsers**](UsersApi.md#getAllUsers) | **GET** /api/users | Listar todos os usuários (Admin only)
[**getUserById**](UsersApi.md#getUserById) | **GET** /api/users/{id} | Obter usuário específico (Admin only)
[**getUserStats**](UsersApi.md#getUserStats) | **GET** /api/users/stats | Obter estatísticas gerais do sistema (Admin only)
[**toggleUserStatus**](UsersApi.md#toggleUserStatus) | **PATCH** /api/users/{id}/toggle-status | Ativar/Desativar usuário (Admin only)
[**updateUser**](UsersApi.md#updateUser) | **PUT** /api/users/{id} | Atualizar usuário (Admin only)



## deleteUser

> DeleteUser200Response deleteUser(id)

Deletar usuário (Admin only)

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.UsersApi();
let id = "id_example"; // String | ID do usuário
apiInstance.deleteUser(id, (error, data, response) => {
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
 **id** | **String**| ID do usuário | 

### Return type

[**DeleteUser200Response**](DeleteUser200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllUsers

> GetAllUsers200Response getAllUsers(opts)

Listar todos os usuários (Admin only)

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.UsersApi();
let opts = {
  'page': 1, // Number | Número da página
  'limit': 10, // Number | Itens por página
  'search': "search_example", // String | Buscar por nome ou email
  'role': "role_example", // String | Filtrar por papel
  'isActive': true // Boolean | Filtrar por status ativo
};
apiInstance.getAllUsers(opts, (error, data, response) => {
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
 **page** | **Number**| Número da página | [optional] [default to 1]
 **limit** | **Number**| Itens por página | [optional] [default to 10]
 **search** | **String**| Buscar por nome ou email | [optional] 
 **role** | **String**| Filtrar por papel | [optional] 
 **isActive** | **Boolean**| Filtrar por status ativo | [optional] 

### Return type

[**GetAllUsers200Response**](GetAllUsers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserById

> GetUserById200Response getUserById(id)

Obter usuário específico (Admin only)

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.UsersApi();
let id = "id_example"; // String | ID do usuário
apiInstance.getUserById(id, (error, data, response) => {
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
 **id** | **String**| ID do usuário | 

### Return type

[**GetUserById200Response**](GetUserById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserStats

> GetUserStats200Response getUserStats()

Obter estatísticas gerais do sistema (Admin only)

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.UsersApi();
apiInstance.getUserStats((error, data, response) => {
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

[**GetUserStats200Response**](GetUserStats200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## toggleUserStatus

> ToggleUserStatus200Response toggleUserStatus(id)

Ativar/Desativar usuário (Admin only)

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.UsersApi();
let id = "id_example"; // String | ID do usuário
apiInstance.toggleUserStatus(id, (error, data, response) => {
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
 **id** | **String**| ID do usuário | 

### Return type

[**ToggleUserStatus200Response**](ToggleUserStatus200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUser

> UpdateUser200Response updateUser(id, updateUserRequest)

Atualizar usuário (Admin only)

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.UsersApi();
let id = "id_example"; // String | ID do usuário
let updateUserRequest = new GamifiedTaskManagementApi.UpdateUserRequest(); // UpdateUserRequest | 
apiInstance.updateUser(id, updateUserRequest, (error, data, response) => {
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
 **id** | **String**| ID do usuário | 
 **updateUserRequest** | [**UpdateUserRequest**](UpdateUserRequest.md)|  | 

### Return type

[**UpdateUser200Response**](UpdateUser200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

