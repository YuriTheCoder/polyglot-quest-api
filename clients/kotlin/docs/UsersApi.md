# UsersApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /api/users/{id} | Deletar usuário (Admin only) |
| [**getAllUsers**](UsersApi.md#getAllUsers) | **GET** /api/users | Listar todos os usuários (Admin only) |
| [**getUserById**](UsersApi.md#getUserById) | **GET** /api/users/{id} | Obter usuário específico (Admin only) |
| [**getUserStats**](UsersApi.md#getUserStats) | **GET** /api/users/stats | Obter estatísticas gerais do sistema (Admin only) |
| [**toggleUserStatus**](UsersApi.md#toggleUserStatus) | **PATCH** /api/users/{id}/toggle-status | Ativar/Desativar usuário (Admin only) |
| [**updateUser**](UsersApi.md#updateUser) | **PUT** /api/users/{id} | Atualizar usuário (Admin only) |


<a id="deleteUser"></a>
# **deleteUser**
> DeleteUser200Response deleteUser(id)

Deletar usuário (Admin only)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val id : kotlin.String = id_example // kotlin.String | ID do usuário
try {
    val result : DeleteUser200Response = apiInstance.deleteUser(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#deleteUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#deleteUser")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**| ID do usuário | |

### Return type

[**DeleteUser200Response**](DeleteUser200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getAllUsers"></a>
# **getAllUsers**
> GetAllUsers200Response getAllUsers(page, limit, search, role, isActive)

Listar todos os usuários (Admin only)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val page : kotlin.Int = 56 // kotlin.Int | Número da página
val limit : kotlin.Int = 56 // kotlin.Int | Itens por página
val search : kotlin.String = search_example // kotlin.String | Buscar por nome ou email
val role : kotlin.String = role_example // kotlin.String | Filtrar por papel
val isActive : kotlin.Boolean = true // kotlin.Boolean | Filtrar por status ativo
try {
    val result : GetAllUsers200Response = apiInstance.getAllUsers(page, limit, search, role, isActive)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#getAllUsers")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#getAllUsers")
    e.printStackTrace()
}
```

### Parameters
| **page** | **kotlin.Int**| Número da página | [optional] [default to 1] |
| **limit** | **kotlin.Int**| Itens por página | [optional] [default to 10] |
| **search** | **kotlin.String**| Buscar por nome ou email | [optional] |
| **role** | **kotlin.String**| Filtrar por papel | [optional] [enum: user, admin] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **isActive** | **kotlin.Boolean**| Filtrar por status ativo | [optional] |

### Return type

[**GetAllUsers200Response**](GetAllUsers200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getUserById"></a>
# **getUserById**
> GetUserById200Response getUserById(id)

Obter usuário específico (Admin only)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val id : kotlin.String = id_example // kotlin.String | ID do usuário
try {
    val result : GetUserById200Response = apiInstance.getUserById(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#getUserById")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#getUserById")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**| ID do usuário | |

### Return type

[**GetUserById200Response**](GetUserById200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getUserStats"></a>
# **getUserStats**
> GetUserStats200Response getUserStats()

Obter estatísticas gerais do sistema (Admin only)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
try {
    val result : GetUserStats200Response = apiInstance.getUserStats()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#getUserStats")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#getUserStats")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetUserStats200Response**](GetUserStats200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="toggleUserStatus"></a>
# **toggleUserStatus**
> ToggleUserStatus200Response toggleUserStatus(id)

Ativar/Desativar usuário (Admin only)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val id : kotlin.String = id_example // kotlin.String | ID do usuário
try {
    val result : ToggleUserStatus200Response = apiInstance.toggleUserStatus(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#toggleUserStatus")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#toggleUserStatus")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**| ID do usuário | |

### Return type

[**ToggleUserStatus200Response**](ToggleUserStatus200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="updateUser"></a>
# **updateUser**
> UpdateUser200Response updateUser(id, updateUserRequest)

Atualizar usuário (Admin only)

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val id : kotlin.String = id_example // kotlin.String | ID do usuário
val updateUserRequest : UpdateUserRequest =  // UpdateUserRequest | 
try {
    val result : UpdateUser200Response = apiInstance.updateUser(id, updateUserRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#updateUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#updateUser")
    e.printStackTrace()
}
```

### Parameters
| **id** | **kotlin.String**| ID do usuário | |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **updateUserRequest** | [**UpdateUserRequest**](UpdateUserRequest.md)|  | |

### Return type

[**UpdateUser200Response**](UpdateUser200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

