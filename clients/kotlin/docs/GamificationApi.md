# GamificationApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
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
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = GamificationApi()
val id : kotlin.String = id_example // kotlin.String | ID da tarefa/quest
val completeQuestRequest : CompleteQuestRequest =  // CompleteQuestRequest | 
try {
    val result : CompleteQuest200Response = apiInstance.completeQuest(id, completeQuestRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamificationApi#completeQuest")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamificationApi#completeQuest")
    e.printStackTrace()
}
```

### Parameters
| **id** | **kotlin.String**| ID da tarefa/quest | |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **completeQuestRequest** | [**CompleteQuestRequest**](CompleteQuestRequest.md)|  | [optional] |

### Return type

[**CompleteQuest200Response**](CompleteQuest200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="createStoryFromTasks"></a>
# **createStoryFromTasks**
> CreateStoryFromTasks201Response createStoryFromTasks(createStoryFromTasksRequest)

Generate a story from tasks

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = GamificationApi()
val createStoryFromTasksRequest : CreateStoryFromTasksRequest =  // CreateStoryFromTasksRequest | 
try {
    val result : CreateStoryFromTasks201Response = apiInstance.createStoryFromTasks(createStoryFromTasksRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamificationApi#createStoryFromTasks")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamificationApi#createStoryFromTasks")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **createStoryFromTasksRequest** | [**CreateStoryFromTasksRequest**](CreateStoryFromTasksRequest.md)|  | |

### Return type

[**CreateStoryFromTasks201Response**](CreateStoryFromTasks201Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="getBadges"></a>
# **getBadges**
> GetBadges200Response getBadges()

Listar badges disponíveis e conquistados

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = GamificationApi()
try {
    val result : GetBadges200Response = apiInstance.getBadges()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamificationApi#getBadges")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamificationApi#getBadges")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetBadges200Response**](GetBadges200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getGamificationDashboard"></a>
# **getGamificationDashboard**
> GetGamificationDashboard200Response getGamificationDashboard()

Dashboard de gamificação do usuário

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = GamificationApi()
try {
    val result : GetGamificationDashboard200Response = apiInstance.getGamificationDashboard()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamificationApi#getGamificationDashboard")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamificationApi#getGamificationDashboard")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetGamificationDashboard200Response**](GetGamificationDashboard200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getGlobalStats"></a>
# **getGlobalStats**
> GetGlobalStats200Response getGlobalStats()

Estatísticas globais da plataforma

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = GamificationApi()
try {
    val result : GetGlobalStats200Response = apiInstance.getGlobalStats()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamificationApi#getGlobalStats")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamificationApi#getGlobalStats")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetGlobalStats200Response**](GetGlobalStats200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getLeaderboard"></a>
# **getLeaderboard**
> GetLeaderboard200Response getLeaderboard(limit, period)

Obter leaderboard público

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = GamificationApi()
val limit : kotlin.Int = 56 // kotlin.Int | Número de usuários no ranking
val period : kotlin.String = period_example // kotlin.String | Período do ranking
try {
    val result : GetLeaderboard200Response = apiInstance.getLeaderboard(limit, period)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamificationApi#getLeaderboard")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamificationApi#getLeaderboard")
    e.printStackTrace()
}
```

### Parameters
| **limit** | **kotlin.Int**| Número de usuários no ranking | [optional] [default to 10] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **period** | **kotlin.String**| Período do ranking | [optional] [default to all] [enum: all, weekly, monthly] |

### Return type

[**GetLeaderboard200Response**](GetLeaderboard200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getStoryById"></a>
# **getStoryById**
> GetStoryById200Response getStoryById(id)

Get a specific story by ID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = GamificationApi()
val id : kotlin.String = id_example // kotlin.String | ID da história
try {
    val result : GetStoryById200Response = apiInstance.getStoryById(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamificationApi#getStoryById")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamificationApi#getStoryById")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**| ID da história | |

### Return type

[**GetStoryById200Response**](GetStoryById200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="listStories"></a>
# **listStories**
> ListStories200Response listStories(active, limit, page)

List all stories for the user

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = GamificationApi()
val active : kotlin.String = active_example // kotlin.String | Filtrar histórias ativas
val limit : kotlin.Int = 56 // kotlin.Int | Limite de resultados
val page : kotlin.Int = 56 // kotlin.Int | Página
try {
    val result : ListStories200Response = apiInstance.listStories(active, limit, page)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamificationApi#listStories")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamificationApi#listStories")
    e.printStackTrace()
}
```

### Parameters
| **active** | **kotlin.String**| Filtrar histórias ativas | [optional] [default to true] [enum: true, false] |
| **limit** | **kotlin.Int**| Limite de resultados | [optional] [default to 10] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **page** | **kotlin.Int**| Página | [optional] [default to 1] |

### Return type

[**ListStories200Response**](ListStories200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="shareMilestone"></a>
# **shareMilestone**
> ShareMilestone200Response shareMilestone(shareMilestoneRequest)

Compartilhar conquista manualmente

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = GamificationApi()
val shareMilestoneRequest : ShareMilestoneRequest =  // ShareMilestoneRequest | 
try {
    val result : ShareMilestone200Response = apiInstance.shareMilestone(shareMilestoneRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamificationApi#shareMilestone")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamificationApi#shareMilestone")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **shareMilestoneRequest** | [**ShareMilestoneRequest**](ShareMilestoneRequest.md)|  | |

### Return type

[**ShareMilestone200Response**](ShareMilestone200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="updateGamificationPreferences"></a>
# **updateGamificationPreferences**
> UpdateGamificationPreferences200Response updateGamificationPreferences(updateGamificationPreferencesRequest)

Atualizar preferências de gamificação

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = GamificationApi()
val updateGamificationPreferencesRequest : UpdateGamificationPreferencesRequest =  // UpdateGamificationPreferencesRequest | 
try {
    val result : UpdateGamificationPreferences200Response = apiInstance.updateGamificationPreferences(updateGamificationPreferencesRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GamificationApi#updateGamificationPreferences")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GamificationApi#updateGamificationPreferences")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **updateGamificationPreferencesRequest** | [**UpdateGamificationPreferencesRequest**](UpdateGamificationPreferencesRequest.md)|  | [optional] |

### Return type

[**UpdateGamificationPreferences200Response**](UpdateGamificationPreferences200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

