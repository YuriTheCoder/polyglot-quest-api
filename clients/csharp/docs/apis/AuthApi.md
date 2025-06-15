# GamifiedTasks.Client.Api.AuthApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**ChangeUserPassword**](AuthApi.md#changeuserpassword) | **PUT** /api/auth/change-password | Alterar senha do usuário |
| [**GetUserProfile**](AuthApi.md#getuserprofile) | **GET** /api/auth/profile | Obter perfil do usuário logado |
| [**LoginUser**](AuthApi.md#loginuser) | **POST** /api/auth/login | Login de usuário |
| [**LogoutUser**](AuthApi.md#logoutuser) | **POST** /api/auth/logout | Logout do usuário |
| [**RegisterUser**](AuthApi.md#registeruser) | **POST** /api/auth/register | Registrar novo usuário |
| [**UpdateUserProfile**](AuthApi.md#updateuserprofile) | **PUT** /api/auth/profile | Atualizar perfil do usuário |

<a id="changeuserpassword"></a>
# **ChangeUserPassword**
> ChangeUserPassword200Response ChangeUserPassword (ChangeUserPasswordRequest changeUserPasswordRequest)

Alterar senha do usuário

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class ChangeUserPasswordExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthApi(config);
            var changeUserPasswordRequest = new ChangeUserPasswordRequest(); // ChangeUserPasswordRequest | 

            try
            {
                // Alterar senha do usuário
                ChangeUserPassword200Response result = apiInstance.ChangeUserPassword(changeUserPasswordRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthApi.ChangeUserPassword: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ChangeUserPasswordWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Alterar senha do usuário
    ApiResponse<ChangeUserPassword200Response> response = apiInstance.ChangeUserPasswordWithHttpInfo(changeUserPasswordRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AuthApi.ChangeUserPasswordWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **changeUserPasswordRequest** | [**ChangeUserPasswordRequest**](ChangeUserPasswordRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getuserprofile"></a>
# **GetUserProfile**
> GetUserProfile200Response GetUserProfile ()

Obter perfil do usuário logado

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class GetUserProfileExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthApi(config);

            try
            {
                // Obter perfil do usuário logado
                GetUserProfile200Response result = apiInstance.GetUserProfile();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthApi.GetUserProfile: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetUserProfileWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Obter perfil do usuário logado
    ApiResponse<GetUserProfile200Response> response = apiInstance.GetUserProfileWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AuthApi.GetUserProfileWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="loginuser"></a>
# **LoginUser**
> LoginUser200Response LoginUser (LoginUserRequest loginUserRequest)

Login de usuário

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class LoginUserExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            var apiInstance = new AuthApi(config);
            var loginUserRequest = new LoginUserRequest(); // LoginUserRequest | 

            try
            {
                // Login de usuário
                LoginUser200Response result = apiInstance.LoginUser(loginUserRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthApi.LoginUser: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the LoginUserWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Login de usuário
    ApiResponse<LoginUser200Response> response = apiInstance.LoginUserWithHttpInfo(loginUserRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AuthApi.LoginUserWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **loginUserRequest** | [**LoginUserRequest**](LoginUserRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="logoutuser"></a>
# **LogoutUser**
> LogoutUser200Response LogoutUser ()

Logout do usuário

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class LogoutUserExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthApi(config);

            try
            {
                // Logout do usuário
                LogoutUser200Response result = apiInstance.LogoutUser();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthApi.LogoutUser: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the LogoutUserWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Logout do usuário
    ApiResponse<LogoutUser200Response> response = apiInstance.LogoutUserWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AuthApi.LogoutUserWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="registeruser"></a>
# **RegisterUser**
> RegisterUser201Response RegisterUser (RegisterUserRequest registerUserRequest)

Registrar novo usuário

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class RegisterUserExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            var apiInstance = new AuthApi(config);
            var registerUserRequest = new RegisterUserRequest(); // RegisterUserRequest | 

            try
            {
                // Registrar novo usuário
                RegisterUser201Response result = apiInstance.RegisterUser(registerUserRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthApi.RegisterUser: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the RegisterUserWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Registrar novo usuário
    ApiResponse<RegisterUser201Response> response = apiInstance.RegisterUserWithHttpInfo(registerUserRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AuthApi.RegisterUserWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **registerUserRequest** | [**RegisterUserRequest**](RegisterUserRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="updateuserprofile"></a>
# **UpdateUserProfile**
> UpdateUserProfile200Response UpdateUserProfile (UpdateUserProfileRequest updateUserProfileRequest)

Atualizar perfil do usuário

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class UpdateUserProfileExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AuthApi(config);
            var updateUserProfileRequest = new UpdateUserProfileRequest(); // UpdateUserProfileRequest | 

            try
            {
                // Atualizar perfil do usuário
                UpdateUserProfile200Response result = apiInstance.UpdateUserProfile(updateUserProfileRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AuthApi.UpdateUserProfile: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateUserProfileWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Atualizar perfil do usuário
    ApiResponse<UpdateUserProfile200Response> response = apiInstance.UpdateUserProfileWithHttpInfo(updateUserProfileRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling AuthApi.UpdateUserProfileWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **updateUserProfileRequest** | [**UpdateUserProfileRequest**](UpdateUserProfileRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

