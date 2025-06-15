# GamifiedTasks.Client.Api.UsersApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**DeleteUser**](UsersApi.md#deleteuser) | **DELETE** /api/users/{id} | Deletar usuário (Admin only) |
| [**GetAllUsers**](UsersApi.md#getallusers) | **GET** /api/users | Listar todos os usuários (Admin only) |
| [**GetUserById**](UsersApi.md#getuserbyid) | **GET** /api/users/{id} | Obter usuário específico (Admin only) |
| [**GetUserStats**](UsersApi.md#getuserstats) | **GET** /api/users/stats | Obter estatísticas gerais do sistema (Admin only) |
| [**ToggleUserStatus**](UsersApi.md#toggleuserstatus) | **PATCH** /api/users/{id}/toggle-status | Ativar/Desativar usuário (Admin only) |
| [**UpdateUser**](UsersApi.md#updateuser) | **PUT** /api/users/{id} | Atualizar usuário (Admin only) |

<a id="deleteuser"></a>
# **DeleteUser**
> DeleteUser200Response DeleteUser (string id)

Deletar usuário (Admin only)

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class DeleteUserExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var id = "id_example";  // string | ID do usuário

            try
            {
                // Deletar usuário (Admin only)
                DeleteUser200Response result = apiInstance.DeleteUser(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.DeleteUser: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteUserWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Deletar usuário (Admin only)
    ApiResponse<DeleteUser200Response> response = apiInstance.DeleteUserWithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling UsersApi.DeleteUserWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | ID do usuário |  |

### Return type

[**DeleteUser200Response**](DeleteUser200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Usuário deletado com sucesso |  -  |
| **400** | Não é possível deletar própria conta |  -  |
| **403** | Acesso negado - privilégios de admin necessários |  -  |
| **404** | Usuário não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getallusers"></a>
# **GetAllUsers**
> GetAllUsers200Response GetAllUsers (int page = null, int limit = null, string search = null, string role = null, bool isActive = null)

Listar todos os usuários (Admin only)

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class GetAllUsersExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var page = 1;  // int | Número da página (optional)  (default to 1)
            var limit = 10;  // int | Itens por página (optional)  (default to 10)
            var search = "search_example";  // string | Buscar por nome ou email (optional) 
            var role = "user";  // string | Filtrar por papel (optional) 
            var isActive = true;  // bool | Filtrar por status ativo (optional) 

            try
            {
                // Listar todos os usuários (Admin only)
                GetAllUsers200Response result = apiInstance.GetAllUsers(page, limit, search, role, isActive);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.GetAllUsers: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetAllUsersWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Listar todos os usuários (Admin only)
    ApiResponse<GetAllUsers200Response> response = apiInstance.GetAllUsersWithHttpInfo(page, limit, search, role, isActive);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling UsersApi.GetAllUsersWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **page** | **int** | Número da página | [optional] [default to 1] |
| **limit** | **int** | Itens por página | [optional] [default to 10] |
| **search** | **string** | Buscar por nome ou email | [optional]  |
| **role** | **string** | Filtrar por papel | [optional]  |
| **isActive** | **bool** | Filtrar por status ativo | [optional]  |

### Return type

[**GetAllUsers200Response**](GetAllUsers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lista de usuários |  -  |
| **403** | Acesso negado - privilégios de admin necessários |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getuserbyid"></a>
# **GetUserById**
> GetUserById200Response GetUserById (string id)

Obter usuário específico (Admin only)

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class GetUserByIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var id = "id_example";  // string | ID do usuário

            try
            {
                // Obter usuário específico (Admin only)
                GetUserById200Response result = apiInstance.GetUserById(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.GetUserById: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetUserByIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Obter usuário específico (Admin only)
    ApiResponse<GetUserById200Response> response = apiInstance.GetUserByIdWithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling UsersApi.GetUserByIdWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | ID do usuário |  |

### Return type

[**GetUserById200Response**](GetUserById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalhes do usuário |  -  |
| **403** | Acesso negado - privilégios de admin necessários |  -  |
| **404** | Usuário não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getuserstats"></a>
# **GetUserStats**
> GetUserStats200Response GetUserStats ()

Obter estatísticas gerais do sistema (Admin only)

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class GetUserStatsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);

            try
            {
                // Obter estatísticas gerais do sistema (Admin only)
                GetUserStats200Response result = apiInstance.GetUserStats();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.GetUserStats: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetUserStatsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Obter estatísticas gerais do sistema (Admin only)
    ApiResponse<GetUserStats200Response> response = apiInstance.GetUserStatsWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling UsersApi.GetUserStatsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
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


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Estatísticas do sistema |  -  |
| **403** | Acesso negado - privilégios de admin necessários |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="toggleuserstatus"></a>
# **ToggleUserStatus**
> ToggleUserStatus200Response ToggleUserStatus (string id)

Ativar/Desativar usuário (Admin only)

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class ToggleUserStatusExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var id = "id_example";  // string | ID do usuário

            try
            {
                // Ativar/Desativar usuário (Admin only)
                ToggleUserStatus200Response result = apiInstance.ToggleUserStatus(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.ToggleUserStatus: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ToggleUserStatusWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Ativar/Desativar usuário (Admin only)
    ApiResponse<ToggleUserStatus200Response> response = apiInstance.ToggleUserStatusWithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling UsersApi.ToggleUserStatusWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | ID do usuário |  |

### Return type

[**ToggleUserStatus200Response**](ToggleUserStatus200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Status do usuário alterado com sucesso |  -  |
| **400** | Não é possível desativar própria conta |  -  |
| **403** | Acesso negado - privilégios de admin necessários |  -  |
| **404** | Usuário não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="updateuser"></a>
# **UpdateUser**
> UpdateUser200Response UpdateUser (string id, UpdateUserRequest updateUserRequest)

Atualizar usuário (Admin only)

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class UpdateUserExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new UsersApi(config);
            var id = "id_example";  // string | ID do usuário
            var updateUserRequest = new UpdateUserRequest(); // UpdateUserRequest | 

            try
            {
                // Atualizar usuário (Admin only)
                UpdateUser200Response result = apiInstance.UpdateUser(id, updateUserRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling UsersApi.UpdateUser: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateUserWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Atualizar usuário (Admin only)
    ApiResponse<UpdateUser200Response> response = apiInstance.UpdateUserWithHttpInfo(id, updateUserRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling UsersApi.UpdateUserWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | ID do usuário |  |
| **updateUserRequest** | [**UpdateUserRequest**](UpdateUserRequest.md) |  |  |

### Return type

[**UpdateUser200Response**](UpdateUser200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Usuário atualizado com sucesso |  -  |
| **400** | Email já está em uso |  -  |
| **403** | Acesso negado - privilégios de admin necessários |  -  |
| **404** | Usuário não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

