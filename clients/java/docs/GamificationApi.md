# GamificationApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**completeQuest**](GamificationApi.md#completeQuest) | **POST** /api/tasks/{id}/complete-quest | Complete a quest (task) and get XP |
| [**createStoryFromTasks**](GamificationApi.md#createStoryFromTasks) | **POST** /api/tasks/story | Generate a story from tasks |
| [**getBadges**](GamificationApi.md#getBadges) | **GET** /api/gamification/badges | Listar badges disponíveis e conquistados |
| [**getGamificationDashboard**](GamificationApi.md#getGamificationDashboard) | **GET** /api/gamification/dashboard | Dashboard de gamificação do usuário |
| [**getGlobalStats**](GamificationApi.md#getGlobalStats) | **GET** /api/gamification/global-stats | Estatísticas globais da plataforma |
| [**getLeaderboard**](GamificationApi.md#getLeaderboard) | **GET** /api/leaderboard | Obter leaderboard público |
| [**getStoryById**](GamificationApi.md#getStoryById) | **GET** /api/tasks/stories/{id} | Get a specific story by ID |
| [**listStories**](GamificationApi.md#listStories) | **GET** /api/tasks/stories | List all stories for the user |
| [**shareMilestone**](GamificationApi.md#shareMilestone) | **POST** /api/gamification/share | Compartilhar conquista manualmente |
| [**updateGamificationPreferences**](GamificationApi.md#updateGamificationPreferences) | **PUT** /api/gamification/preferences | Atualizar preferências de gamificação |


<a id="completeQuest"></a>
# **completeQuest**
> CompleteQuest200Response completeQuest(id, completeQuestRequest)

Complete a quest (task) and get XP

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.GamificationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    GamificationApi apiInstance = new GamificationApi(defaultClient);
    String id = "id_example"; // String | ID da tarefa/quest
    CompleteQuestRequest completeQuestRequest = new CompleteQuestRequest(); // CompleteQuestRequest | 
    try {
      CompleteQuest200Response result = apiInstance.completeQuest(id, completeQuestRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GamificationApi#completeQuest");
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
| **id** | **String**| ID da tarefa/quest | |
| **completeQuestRequest** | [**CompleteQuestRequest**](CompleteQuestRequest.md)|  | [optional] |

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

<a id="createStoryFromTasks"></a>
# **createStoryFromTasks**
> CreateStoryFromTasks201Response createStoryFromTasks(createStoryFromTasksRequest)

Generate a story from tasks

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.GamificationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    GamificationApi apiInstance = new GamificationApi(defaultClient);
    CreateStoryFromTasksRequest createStoryFromTasksRequest = new CreateStoryFromTasksRequest(); // CreateStoryFromTasksRequest | 
    try {
      CreateStoryFromTasks201Response result = apiInstance.createStoryFromTasks(createStoryFromTasksRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GamificationApi#createStoryFromTasks");
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
| **createStoryFromTasksRequest** | [**CreateStoryFromTasksRequest**](CreateStoryFromTasksRequest.md)|  | |

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

<a id="getBadges"></a>
# **getBadges**
> GetBadges200Response getBadges()

Listar badges disponíveis e conquistados

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.GamificationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    GamificationApi apiInstance = new GamificationApi(defaultClient);
    try {
      GetBadges200Response result = apiInstance.getBadges();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GamificationApi#getBadges");
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

<a id="getGamificationDashboard"></a>
# **getGamificationDashboard**
> GetGamificationDashboard200Response getGamificationDashboard()

Dashboard de gamificação do usuário

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.GamificationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    GamificationApi apiInstance = new GamificationApi(defaultClient);
    try {
      GetGamificationDashboard200Response result = apiInstance.getGamificationDashboard();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GamificationApi#getGamificationDashboard");
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

<a id="getGlobalStats"></a>
# **getGlobalStats**
> GetGlobalStats200Response getGlobalStats()

Estatísticas globais da plataforma

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.GamificationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    GamificationApi apiInstance = new GamificationApi(defaultClient);
    try {
      GetGlobalStats200Response result = apiInstance.getGlobalStats();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GamificationApi#getGlobalStats");
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

<a id="getLeaderboard"></a>
# **getLeaderboard**
> GetLeaderboard200Response getLeaderboard(limit, period)

Obter leaderboard público

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.GamificationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    GamificationApi apiInstance = new GamificationApi(defaultClient);
    Integer limit = 10; // Integer | Número de usuários no ranking
    String period = "all"; // String | Período do ranking
    try {
      GetLeaderboard200Response result = apiInstance.getLeaderboard(limit, period);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GamificationApi#getLeaderboard");
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
| **limit** | **Integer**| Número de usuários no ranking | [optional] [default to 10] |
| **period** | **String**| Período do ranking | [optional] [default to all] [enum: all, weekly, monthly] |

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

<a id="getStoryById"></a>
# **getStoryById**
> GetStoryById200Response getStoryById(id)

Get a specific story by ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.GamificationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    GamificationApi apiInstance = new GamificationApi(defaultClient);
    String id = "id_example"; // String | ID da história
    try {
      GetStoryById200Response result = apiInstance.getStoryById(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GamificationApi#getStoryById");
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
| **id** | **String**| ID da história | |

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

<a id="listStories"></a>
# **listStories**
> ListStories200Response listStories(active, limit, page)

List all stories for the user

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.GamificationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    GamificationApi apiInstance = new GamificationApi(defaultClient);
    String active = "true"; // String | Filtrar histórias ativas
    Integer limit = 10; // Integer | Limite de resultados
    Integer page = 1; // Integer | Página
    try {
      ListStories200Response result = apiInstance.listStories(active, limit, page);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GamificationApi#listStories");
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
| **active** | **String**| Filtrar histórias ativas | [optional] [default to true] [enum: true, false] |
| **limit** | **Integer**| Limite de resultados | [optional] [default to 10] |
| **page** | **Integer**| Página | [optional] [default to 1] |

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

<a id="shareMilestone"></a>
# **shareMilestone**
> ShareMilestone200Response shareMilestone(shareMilestoneRequest)

Compartilhar conquista manualmente

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.GamificationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    GamificationApi apiInstance = new GamificationApi(defaultClient);
    ShareMilestoneRequest shareMilestoneRequest = new ShareMilestoneRequest(); // ShareMilestoneRequest | 
    try {
      ShareMilestone200Response result = apiInstance.shareMilestone(shareMilestoneRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GamificationApi#shareMilestone");
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
| **shareMilestoneRequest** | [**ShareMilestoneRequest**](ShareMilestoneRequest.md)|  | |

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

<a id="updateGamificationPreferences"></a>
# **updateGamificationPreferences**
> UpdateGamificationPreferences200Response updateGamificationPreferences(updateGamificationPreferencesRequest)

Atualizar preferências de gamificação

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.GamificationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    GamificationApi apiInstance = new GamificationApi(defaultClient);
    UpdateGamificationPreferencesRequest updateGamificationPreferencesRequest = new UpdateGamificationPreferencesRequest(); // UpdateGamificationPreferencesRequest | 
    try {
      UpdateGamificationPreferences200Response result = apiInstance.updateGamificationPreferences(updateGamificationPreferencesRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling GamificationApi#updateGamificationPreferences");
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
| **updateGamificationPreferencesRequest** | [**UpdateGamificationPreferencesRequest**](UpdateGamificationPreferencesRequest.md)|  | [optional] |

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

