# AuthApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
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
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AuthApi apiInstance = new AuthApi(defaultClient);
    ChangeUserPasswordRequest changeUserPasswordRequest = new ChangeUserPasswordRequest(); // ChangeUserPasswordRequest | 
    try {
      ChangeUserPassword200Response result = apiInstance.changeUserPassword(changeUserPasswordRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#changeUserPassword");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **changeUserPasswordRequest** | [**ChangeUserPasswordRequest**](ChangeUserPasswordRequest.md)|  | |

### Return type

[**ChangeUserPassword200Response**](ChangeUserPassword200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Senha alterada com sucesso |  -  |
| **400** | Senha atual incorreta ou nova senha inválida |  -  |

<a id="getUserProfile"></a>
# **getUserProfile**
> GetUserProfile200Response getUserProfile()

Obter perfil do usuário logado

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AuthApi apiInstance = new AuthApi(defaultClient);
    try {
      GetUserProfile200Response result = apiInstance.getUserProfile();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#getUserProfile");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
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

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Perfil do usuário |  -  |
| **401** | Token não fornecido ou inválido |  -  |

<a id="loginUser"></a>
# **loginUser**
> LoginUser200Response loginUser(loginUserRequest)

Login de usuário

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    AuthApi apiInstance = new AuthApi(defaultClient);
    LoginUserRequest loginUserRequest = new LoginUserRequest(); // LoginUserRequest | 
    try {
      LoginUser200Response result = apiInstance.loginUser(loginUserRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#loginUser");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loginUserRequest** | [**LoginUserRequest**](LoginUserRequest.md)|  | |

### Return type

[**LoginUser200Response**](LoginUser200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Login realizado com sucesso |  -  |
| **401** | Credenciais inválidas |  -  |

<a id="logoutUser"></a>
# **logoutUser**
> LogoutUser200Response logoutUser()

Logout do usuário

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AuthApi apiInstance = new AuthApi(defaultClient);
    try {
      LogoutUser200Response result = apiInstance.logoutUser();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#logoutUser");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
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

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Logout realizado com sucesso |  -  |

<a id="registerUser"></a>
# **registerUser**
> RegisterUser201Response registerUser(registerUserRequest)

Registrar novo usuário

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    AuthApi apiInstance = new AuthApi(defaultClient);
    RegisterUserRequest registerUserRequest = new RegisterUserRequest(); // RegisterUserRequest | 
    try {
      RegisterUser201Response result = apiInstance.registerUser(registerUserRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#registerUser");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **registerUserRequest** | [**RegisterUserRequest**](RegisterUserRequest.md)|  | |

### Return type

[**RegisterUser201Response**](RegisterUser201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Usuário registrado com sucesso |  -  |
| **400** | Dados inválidos ou usuário já existe |  -  |

<a id="updateUserProfile"></a>
# **updateUserProfile**
> UpdateUserProfile200Response updateUserProfile(updateUserProfileRequest)

Atualizar perfil do usuário

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.AuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    AuthApi apiInstance = new AuthApi(defaultClient);
    UpdateUserProfileRequest updateUserProfileRequest = new UpdateUserProfileRequest(); // UpdateUserProfileRequest | 
    try {
      UpdateUserProfile200Response result = apiInstance.updateUserProfile(updateUserProfileRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthApi#updateUserProfile");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **updateUserProfileRequest** | [**UpdateUserProfileRequest**](UpdateUserProfileRequest.md)|  | |

### Return type

[**UpdateUserProfile200Response**](UpdateUserProfile200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Perfil atualizado com sucesso |  -  |
| **400** | Email já está em uso |  -  |

