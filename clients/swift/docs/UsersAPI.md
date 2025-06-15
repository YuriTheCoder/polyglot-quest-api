# UsersAPI

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUser**](UsersAPI.md#deleteuser) | **DELETE** /api/users/{id} | Deletar usuário (Admin only)
[**getAllUsers**](UsersAPI.md#getallusers) | **GET** /api/users | Listar todos os usuários (Admin only)
[**getUserById**](UsersAPI.md#getuserbyid) | **GET** /api/users/{id} | Obter usuário específico (Admin only)
[**getUserStats**](UsersAPI.md#getuserstats) | **GET** /api/users/stats | Obter estatísticas gerais do sistema (Admin only)
[**toggleUserStatus**](UsersAPI.md#toggleuserstatus) | **PATCH** /api/users/{id}/toggle-status | Ativar/Desativar usuário (Admin only)
[**updateUser**](UsersAPI.md#updateuser) | **PUT** /api/users/{id} | Atualizar usuário (Admin only)


# **deleteUser**
```swift
    open class func deleteUser(id: String, completion: @escaping (_ data: DeleteUser200Response?, _ error: Error?) -> Void)
```

Deletar usuário (Admin only)

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let id = "id_example" // String | ID do usuário

// Deletar usuário (Admin only)
UsersAPI.deleteUser(id: id) { (response, error) in
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
 **id** | **String** | ID do usuário | 

### Return type

[**DeleteUser200Response**](DeleteUser200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllUsers**
```swift
    open class func getAllUsers(page: Int? = nil, limit: Int? = nil, search: String? = nil, role: Role_getAllUsers? = nil, isActive: Bool? = nil, completion: @escaping (_ data: GetAllUsers200Response?, _ error: Error?) -> Void)
```

Listar todos os usuários (Admin only)

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let page = 987 // Int | Número da página (optional) (default to 1)
let limit = 987 // Int | Itens por página (optional) (default to 10)
let search = "search_example" // String | Buscar por nome ou email (optional)
let role = "role_example" // String | Filtrar por papel (optional)
let isActive = true // Bool | Filtrar por status ativo (optional)

// Listar todos os usuários (Admin only)
UsersAPI.getAllUsers(page: page, limit: limit, search: search, role: role, isActive: isActive) { (response, error) in
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
 **page** | **Int** | Número da página | [optional] [default to 1]
 **limit** | **Int** | Itens por página | [optional] [default to 10]
 **search** | **String** | Buscar por nome ou email | [optional] 
 **role** | **String** | Filtrar por papel | [optional] 
 **isActive** | **Bool** | Filtrar por status ativo | [optional] 

### Return type

[**GetAllUsers200Response**](GetAllUsers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserById**
```swift
    open class func getUserById(id: String, completion: @escaping (_ data: GetUserById200Response?, _ error: Error?) -> Void)
```

Obter usuário específico (Admin only)

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let id = "id_example" // String | ID do usuário

// Obter usuário específico (Admin only)
UsersAPI.getUserById(id: id) { (response, error) in
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
 **id** | **String** | ID do usuário | 

### Return type

[**GetUserById200Response**](GetUserById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserStats**
```swift
    open class func getUserStats(completion: @escaping (_ data: GetUserStats200Response?, _ error: Error?) -> Void)
```

Obter estatísticas gerais do sistema (Admin only)

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient


// Obter estatísticas gerais do sistema (Admin only)
UsersAPI.getUserStats() { (response, error) in
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
This endpoint does not need any parameter.

### Return type

[**GetUserStats200Response**](GetUserStats200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toggleUserStatus**
```swift
    open class func toggleUserStatus(id: String, completion: @escaping (_ data: ToggleUserStatus200Response?, _ error: Error?) -> Void)
```

Ativar/Desativar usuário (Admin only)

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let id = "id_example" // String | ID do usuário

// Ativar/Desativar usuário (Admin only)
UsersAPI.toggleUserStatus(id: id) { (response, error) in
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
 **id** | **String** | ID do usuário | 

### Return type

[**ToggleUserStatus200Response**](ToggleUserStatus200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUser**
```swift
    open class func updateUser(id: String, updateUserRequest: UpdateUserRequest, completion: @escaping (_ data: UpdateUser200Response?, _ error: Error?) -> Void)
```

Atualizar usuário (Admin only)

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let id = "id_example" // String | ID do usuário
let updateUserRequest = updateUser_request(name: "name_example", email: "email_example", role: "role_example", isActive: true) // UpdateUserRequest | 

// Atualizar usuário (Admin only)
UsersAPI.updateUser(id: id, updateUserRequest: updateUserRequest) { (response, error) in
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
 **id** | **String** | ID do usuário | 
 **updateUserRequest** | [**UpdateUserRequest**](UpdateUserRequest.md) |  | 

### Return type

[**UpdateUser200Response**](UpdateUser200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

