# GamifiedTasks.Client.Api.GamificationApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CompleteQuest**](GamificationApi.md#completequest) | **POST** /api/tasks/{id}/complete-quest | Complete a quest (task) and get XP |
| [**CreateStoryFromTasks**](GamificationApi.md#createstoryfromtasks) | **POST** /api/tasks/story | Generate a story from tasks |
| [**GetBadges**](GamificationApi.md#getbadges) | **GET** /api/gamification/badges | Listar badges disponíveis e conquistados |
| [**GetGamificationDashboard**](GamificationApi.md#getgamificationdashboard) | **GET** /api/gamification/dashboard | Dashboard de gamificação do usuário |
| [**GetGlobalStats**](GamificationApi.md#getglobalstats) | **GET** /api/gamification/global-stats | Estatísticas globais da plataforma |
| [**GetLeaderboard**](GamificationApi.md#getleaderboard) | **GET** /api/leaderboard | Obter leaderboard público |
| [**GetStoryById**](GamificationApi.md#getstorybyid) | **GET** /api/tasks/stories/{id} | Get a specific story by ID |
| [**ListStories**](GamificationApi.md#liststories) | **GET** /api/tasks/stories | List all stories for the user |
| [**ShareMilestone**](GamificationApi.md#sharemilestone) | **POST** /api/gamification/share | Compartilhar conquista manualmente |
| [**UpdateGamificationPreferences**](GamificationApi.md#updategamificationpreferences) | **PUT** /api/gamification/preferences | Atualizar preferências de gamificação |

<a id="completequest"></a>
# **CompleteQuest**
> CompleteQuest200Response CompleteQuest (string id, CompleteQuestRequest completeQuestRequest = null)

Complete a quest (task) and get XP

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class CompleteQuestExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GamificationApi(config);
            var id = "id_example";  // string | ID da tarefa/quest
            var completeQuestRequest = new CompleteQuestRequest(); // CompleteQuestRequest |  (optional) 

            try
            {
                // Complete a quest (task) and get XP
                CompleteQuest200Response result = apiInstance.CompleteQuest(id, completeQuestRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GamificationApi.CompleteQuest: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CompleteQuestWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Complete a quest (task) and get XP
    ApiResponse<CompleteQuest200Response> response = apiInstance.CompleteQuestWithHttpInfo(id, completeQuestRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GamificationApi.CompleteQuestWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | ID da tarefa/quest |  |
| **completeQuestRequest** | [**CompleteQuestRequest**](CompleteQuestRequest.md) |  | [optional]  |

### Return type

[**CompleteQuest200Response**](CompleteQuest200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Quest completada com sucesso |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="createstoryfromtasks"></a>
# **CreateStoryFromTasks**
> CreateStoryFromTasks201Response CreateStoryFromTasks (CreateStoryFromTasksRequest createStoryFromTasksRequest)

Generate a story from tasks

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class CreateStoryFromTasksExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GamificationApi(config);
            var createStoryFromTasksRequest = new CreateStoryFromTasksRequest(); // CreateStoryFromTasksRequest | 

            try
            {
                // Generate a story from tasks
                CreateStoryFromTasks201Response result = apiInstance.CreateStoryFromTasks(createStoryFromTasksRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GamificationApi.CreateStoryFromTasks: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateStoryFromTasksWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Generate a story from tasks
    ApiResponse<CreateStoryFromTasks201Response> response = apiInstance.CreateStoryFromTasksWithHttpInfo(createStoryFromTasksRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GamificationApi.CreateStoryFromTasksWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createStoryFromTasksRequest** | [**CreateStoryFromTasksRequest**](CreateStoryFromTasksRequest.md) |  |  |

### Return type

[**CreateStoryFromTasks201Response**](CreateStoryFromTasks201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | História épica gerada com sucesso |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getbadges"></a>
# **GetBadges**
> GetBadges200Response GetBadges ()

Listar badges disponíveis e conquistados

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class GetBadgesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GamificationApi(config);

            try
            {
                // Listar badges disponíveis e conquistados
                GetBadges200Response result = apiInstance.GetBadges();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GamificationApi.GetBadges: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetBadgesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Listar badges disponíveis e conquistados
    ApiResponse<GetBadges200Response> response = apiInstance.GetBadgesWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GamificationApi.GetBadgesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**GetBadges200Response**](GetBadges200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lista de badges |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getgamificationdashboard"></a>
# **GetGamificationDashboard**
> GetGamificationDashboard200Response GetGamificationDashboard ()

Dashboard de gamificação do usuário

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class GetGamificationDashboardExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GamificationApi(config);

            try
            {
                // Dashboard de gamificação do usuário
                GetGamificationDashboard200Response result = apiInstance.GetGamificationDashboard();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GamificationApi.GetGamificationDashboard: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetGamificationDashboardWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Dashboard de gamificação do usuário
    ApiResponse<GetGamificationDashboard200Response> response = apiInstance.GetGamificationDashboardWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GamificationApi.GetGamificationDashboardWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**GetGamificationDashboard200Response**](GetGamificationDashboard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Dashboard completo do usuário |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getglobalstats"></a>
# **GetGlobalStats**
> GetGlobalStats200Response GetGlobalStats ()

Estatísticas globais da plataforma

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class GetGlobalStatsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GamificationApi(config);

            try
            {
                // Estatísticas globais da plataforma
                GetGlobalStats200Response result = apiInstance.GetGlobalStats();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GamificationApi.GetGlobalStats: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetGlobalStatsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Estatísticas globais da plataforma
    ApiResponse<GetGlobalStats200Response> response = apiInstance.GetGlobalStatsWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GamificationApi.GetGlobalStatsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**GetGlobalStats200Response**](GetGlobalStats200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Estatísticas globais |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getleaderboard"></a>
# **GetLeaderboard**
> GetLeaderboard200Response GetLeaderboard (int limit = null, string period = null)

Obter leaderboard público

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class GetLeaderboardExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GamificationApi(config);
            var limit = 10;  // int | Número de usuários no ranking (optional)  (default to 10)
            var period = "all";  // string | Período do ranking (optional)  (default to all)

            try
            {
                // Obter leaderboard público
                GetLeaderboard200Response result = apiInstance.GetLeaderboard(limit, period);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GamificationApi.GetLeaderboard: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetLeaderboardWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Obter leaderboard público
    ApiResponse<GetLeaderboard200Response> response = apiInstance.GetLeaderboardWithHttpInfo(limit, period);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GamificationApi.GetLeaderboardWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **limit** | **int** | Número de usuários no ranking | [optional] [default to 10] |
| **period** | **string** | Período do ranking | [optional] [default to all] |

### Return type

[**GetLeaderboard200Response**](GetLeaderboard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Leaderboard dos top usuários |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="getstorybyid"></a>
# **GetStoryById**
> GetStoryById200Response GetStoryById (string id)

Get a specific story by ID

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class GetStoryByIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GamificationApi(config);
            var id = "id_example";  // string | ID da história

            try
            {
                // Get a specific story by ID
                GetStoryById200Response result = apiInstance.GetStoryById(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GamificationApi.GetStoryById: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetStoryByIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get a specific story by ID
    ApiResponse<GetStoryById200Response> response = apiInstance.GetStoryByIdWithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GamificationApi.GetStoryByIdWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | ID da história |  |

### Return type

[**GetStoryById200Response**](GetStoryById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalhes da história |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="liststories"></a>
# **ListStories**
> ListStories200Response ListStories (string active = null, int limit = null, int page = null)

List all stories for the user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class ListStoriesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GamificationApi(config);
            var active = "true";  // string | Filtrar histórias ativas (optional)  (default to true)
            var limit = 10;  // int | Limite de resultados (optional)  (default to 10)
            var page = 1;  // int | Página (optional)  (default to 1)

            try
            {
                // List all stories for the user
                ListStories200Response result = apiInstance.ListStories(active, limit, page);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GamificationApi.ListStories: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListStoriesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List all stories for the user
    ApiResponse<ListStories200Response> response = apiInstance.ListStoriesWithHttpInfo(active, limit, page);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GamificationApi.ListStoriesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **active** | **string** | Filtrar histórias ativas | [optional] [default to true] |
| **limit** | **int** | Limite de resultados | [optional] [default to 10] |
| **page** | **int** | Página | [optional] [default to 1] |

### Return type

[**ListStories200Response**](ListStories200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Lista de histórias |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="sharemilestone"></a>
# **ShareMilestone**
> ShareMilestone200Response ShareMilestone (ShareMilestoneRequest shareMilestoneRequest)

Compartilhar conquista manualmente

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class ShareMilestoneExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GamificationApi(config);
            var shareMilestoneRequest = new ShareMilestoneRequest(); // ShareMilestoneRequest | 

            try
            {
                // Compartilhar conquista manualmente
                ShareMilestone200Response result = apiInstance.ShareMilestone(shareMilestoneRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GamificationApi.ShareMilestone: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ShareMilestoneWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Compartilhar conquista manualmente
    ApiResponse<ShareMilestone200Response> response = apiInstance.ShareMilestoneWithHttpInfo(shareMilestoneRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GamificationApi.ShareMilestoneWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **shareMilestoneRequest** | [**ShareMilestoneRequest**](ShareMilestoneRequest.md) |  |  |

### Return type

[**ShareMilestone200Response**](ShareMilestone200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Conquista compartilhada |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="updategamificationpreferences"></a>
# **UpdateGamificationPreferences**
> UpdateGamificationPreferences200Response UpdateGamificationPreferences (UpdateGamificationPreferencesRequest updateGamificationPreferencesRequest = null)

Atualizar preferências de gamificação

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class UpdateGamificationPreferencesExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new GamificationApi(config);
            var updateGamificationPreferencesRequest = new UpdateGamificationPreferencesRequest(); // UpdateGamificationPreferencesRequest |  (optional) 

            try
            {
                // Atualizar preferências de gamificação
                UpdateGamificationPreferences200Response result = apiInstance.UpdateGamificationPreferences(updateGamificationPreferencesRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling GamificationApi.UpdateGamificationPreferences: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateGamificationPreferencesWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Atualizar preferências de gamificação
    ApiResponse<UpdateGamificationPreferences200Response> response = apiInstance.UpdateGamificationPreferencesWithHttpInfo(updateGamificationPreferencesRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling GamificationApi.UpdateGamificationPreferencesWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **updateGamificationPreferencesRequest** | [**UpdateGamificationPreferencesRequest**](UpdateGamificationPreferencesRequest.md) |  | [optional]  |

### Return type

[**UpdateGamificationPreferences200Response**](UpdateGamificationPreferences200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Preferências atualizadas |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

