# AuthApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**changeUserPassword**](AuthApi.md#changeUserPassword) | **PUT** /api/auth/change-password | Alterar senha do usuário |
| [**getUserProfile**](AuthApi.md#getUserProfile) | **GET** /api/auth/profile | Obter perfil do usuário logado |
| [**loginUser**](AuthApi.md#loginUser) | **POST** /api/auth/login | Login de usuário |
| [**logoutUser**](AuthApi.md#logoutUser) | **POST** /api/auth/logout | Logout do usuário |
| [**registerUser**](AuthApi.md#registerUser) | **POST** /api/auth/register | Registrar novo usuário |
| [**updateUserProfile**](AuthApi.md#updateUserProfile) | **PUT** /api/auth/profile | Atualizar perfil do usuário |


<a id="changeUserPassword"></a>
# **changeUserPassword**
> ChangeUserPassword200Response changeUserPassword(changeUserPasswordRequest)

Alterar senha do usuário

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AuthApi()
val changeUserPasswordRequest : ChangeUserPasswordRequest =  // ChangeUserPasswordRequest | 
try {
    val result : ChangeUserPassword200Response = apiInstance.changeUserPassword(changeUserPasswordRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthApi#changeUserPassword")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthApi#changeUserPassword")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **changeUserPasswordRequest** | [**ChangeUserPasswordRequest**](ChangeUserPasswordRequest.md)|  | |

### Return type

[**ChangeUserPassword200Response**](ChangeUserPassword200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="getUserProfile"></a>
# **getUserProfile**
> GetUserProfile200Response getUserProfile()

Obter perfil do usuário logado

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AuthApi()
try {
    val result : GetUserProfile200Response = apiInstance.getUserProfile()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthApi#getUserProfile")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthApi#getUserProfile")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetUserProfile200Response**](GetUserProfile200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="loginUser"></a>
# **loginUser**
> LoginUser200Response loginUser(loginUserRequest)

Login de usuário

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AuthApi()
val loginUserRequest : LoginUserRequest =  // LoginUserRequest | 
try {
    val result : LoginUser200Response = apiInstance.loginUser(loginUserRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthApi#loginUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthApi#loginUser")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **loginUserRequest** | [**LoginUserRequest**](LoginUserRequest.md)|  | |

### Return type

[**LoginUser200Response**](LoginUser200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="logoutUser"></a>
# **logoutUser**
> LogoutUser200Response logoutUser()

Logout do usuário

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AuthApi()
try {
    val result : LogoutUser200Response = apiInstance.logoutUser()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthApi#logoutUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthApi#logoutUser")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**LogoutUser200Response**](LogoutUser200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="registerUser"></a>
# **registerUser**
> RegisterUser201Response registerUser(registerUserRequest)

Registrar novo usuário

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AuthApi()
val registerUserRequest : RegisterUserRequest =  // RegisterUserRequest | 
try {
    val result : RegisterUser201Response = apiInstance.registerUser(registerUserRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthApi#registerUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthApi#registerUser")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **registerUserRequest** | [**RegisterUserRequest**](RegisterUserRequest.md)|  | |

### Return type

[**RegisterUser201Response**](RegisterUser201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="updateUserProfile"></a>
# **updateUserProfile**
> UpdateUserProfile200Response updateUserProfile(updateUserProfileRequest)

Atualizar perfil do usuário

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = AuthApi()
val updateUserProfileRequest : UpdateUserProfileRequest =  // UpdateUserProfileRequest | 
try {
    val result : UpdateUserProfile200Response = apiInstance.updateUserProfile(updateUserProfileRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling AuthApi#updateUserProfile")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling AuthApi#updateUserProfile")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **updateUserProfileRequest** | [**UpdateUserProfileRequest**](UpdateUserProfileRequest.md)|  | |

### Return type

[**UpdateUserProfile200Response**](UpdateUserProfile200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

