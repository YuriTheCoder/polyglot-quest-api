# GamificationAPI

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeQuest**](GamificationAPI.md#completequest) | **POST** /api/tasks/{id}/complete-quest | Complete a quest (task) and get XP
[**createStoryFromTasks**](GamificationAPI.md#createstoryfromtasks) | **POST** /api/tasks/story | Generate a story from tasks
[**getBadges**](GamificationAPI.md#getbadges) | **GET** /api/gamification/badges | Listar badges disponíveis e conquistados
[**getGamificationDashboard**](GamificationAPI.md#getgamificationdashboard) | **GET** /api/gamification/dashboard | Dashboard de gamificação do usuário
[**getGlobalStats**](GamificationAPI.md#getglobalstats) | **GET** /api/gamification/global-stats | Estatísticas globais da plataforma
[**getLeaderboard**](GamificationAPI.md#getleaderboard) | **GET** /api/leaderboard | Obter leaderboard público
[**getStoryById**](GamificationAPI.md#getstorybyid) | **GET** /api/tasks/stories/{id} | Get a specific story by ID
[**listStories**](GamificationAPI.md#liststories) | **GET** /api/tasks/stories | List all stories for the user
[**shareMilestone**](GamificationAPI.md#sharemilestone) | **POST** /api/gamification/share | Compartilhar conquista manualmente
[**updateGamificationPreferences**](GamificationAPI.md#updategamificationpreferences) | **PUT** /api/gamification/preferences | Atualizar preferências de gamificação


# **completeQuest**
```swift
    open class func completeQuest(id: String, completeQuestRequest: CompleteQuestRequest? = nil, completion: @escaping (_ data: CompleteQuest200Response?, _ error: Error?) -> Void)
```

Complete a quest (task) and get XP

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let id = "id_example" // String | ID da tarefa/quest
let completeQuestRequest = completeQuest_request(completionTime: 123) // CompleteQuestRequest |  (optional)

// Complete a quest (task) and get XP
GamificationAPI.completeQuest(id: id, completeQuestRequest: completeQuestRequest) { (response, error) in
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
 **id** | **String** | ID da tarefa/quest | 
 **completeQuestRequest** | [**CompleteQuestRequest**](CompleteQuestRequest.md) |  | [optional] 

### Return type

[**CompleteQuest200Response**](CompleteQuest200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createStoryFromTasks**
```swift
    open class func createStoryFromTasks(createStoryFromTasksRequest: CreateStoryFromTasksRequest, completion: @escaping (_ data: CreateStoryFromTasks201Response?, _ error: Error?) -> Void)
```

Generate a story from tasks

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let createStoryFromTasksRequest = createStoryFromTasks_request(taskIds: ["taskIds_example"], userPreferences: createStoryFromTasks_request_userPreferences(theme: "theme_example", _class: "_class_example")) // CreateStoryFromTasksRequest | 

// Generate a story from tasks
GamificationAPI.createStoryFromTasks(createStoryFromTasksRequest: createStoryFromTasksRequest) { (response, error) in
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
 **createStoryFromTasksRequest** | [**CreateStoryFromTasksRequest**](CreateStoryFromTasksRequest.md) |  | 

### Return type

[**CreateStoryFromTasks201Response**](CreateStoryFromTasks201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getBadges**
```swift
    open class func getBadges(completion: @escaping (_ data: GetBadges200Response?, _ error: Error?) -> Void)
```

Listar badges disponíveis e conquistados

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient


// Listar badges disponíveis e conquistados
GamificationAPI.getBadges() { (response, error) in
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

[**GetBadges200Response**](GetBadges200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGamificationDashboard**
```swift
    open class func getGamificationDashboard(completion: @escaping (_ data: GetGamificationDashboard200Response?, _ error: Error?) -> Void)
```

Dashboard de gamificação do usuário

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient


// Dashboard de gamificação do usuário
GamificationAPI.getGamificationDashboard() { (response, error) in
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

[**GetGamificationDashboard200Response**](GetGamificationDashboard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGlobalStats**
```swift
    open class func getGlobalStats(completion: @escaping (_ data: GetGlobalStats200Response?, _ error: Error?) -> Void)
```

Estatísticas globais da plataforma

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient


// Estatísticas globais da plataforma
GamificationAPI.getGlobalStats() { (response, error) in
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

[**GetGlobalStats200Response**](GetGlobalStats200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLeaderboard**
```swift
    open class func getLeaderboard(limit: Int? = nil, period: Period_getLeaderboard? = nil, completion: @escaping (_ data: GetLeaderboard200Response?, _ error: Error?) -> Void)
```

Obter leaderboard público

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let limit = 987 // Int | Número de usuários no ranking (optional) (default to 10)
let period = "period_example" // String | Período do ranking (optional) (default to .all)

// Obter leaderboard público
GamificationAPI.getLeaderboard(limit: limit, period: period) { (response, error) in
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
 **limit** | **Int** | Número de usuários no ranking | [optional] [default to 10]
 **period** | **String** | Período do ranking | [optional] [default to .all]

### Return type

[**GetLeaderboard200Response**](GetLeaderboard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getStoryById**
```swift
    open class func getStoryById(id: String, completion: @escaping (_ data: GetStoryById200Response?, _ error: Error?) -> Void)
```

Get a specific story by ID

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let id = "id_example" // String | ID da história

// Get a specific story by ID
GamificationAPI.getStoryById(id: id) { (response, error) in
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
 **id** | **String** | ID da história | 

### Return type

[**GetStoryById200Response**](GetStoryById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listStories**
```swift
    open class func listStories(active: Active_listStories? = nil, limit: Int? = nil, page: Int? = nil, completion: @escaping (_ data: ListStories200Response?, _ error: Error?) -> Void)
```

List all stories for the user

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let active = "active_example" // String | Filtrar histórias ativas (optional) (default to ._true)
let limit = 987 // Int | Limite de resultados (optional) (default to 10)
let page = 987 // Int | Página (optional) (default to 1)

// List all stories for the user
GamificationAPI.listStories(active: active, limit: limit, page: page) { (response, error) in
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
 **active** | **String** | Filtrar histórias ativas | [optional] [default to ._true]
 **limit** | **Int** | Limite de resultados | [optional] [default to 10]
 **page** | **Int** | Página | [optional] [default to 1]

### Return type

[**ListStories200Response**](ListStories200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shareMilestone**
```swift
    open class func shareMilestone(shareMilestoneRequest: ShareMilestoneRequest, completion: @escaping (_ data: ShareMilestone200Response?, _ error: Error?) -> Void)
```

Compartilhar conquista manualmente

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let shareMilestoneRequest = shareMilestone_request(type: "type_example", data: shareMilestone_request_data(level: 123, badge: 123, streak: 123, message: "message_example")) // ShareMilestoneRequest | 

// Compartilhar conquista manualmente
GamificationAPI.shareMilestone(shareMilestoneRequest: shareMilestoneRequest) { (response, error) in
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
 **shareMilestoneRequest** | [**ShareMilestoneRequest**](ShareMilestoneRequest.md) |  | 

### Return type

[**ShareMilestone200Response**](ShareMilestone200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGamificationPreferences**
```swift
    open class func updateGamificationPreferences(updateGamificationPreferencesRequest: UpdateGamificationPreferencesRequest? = nil, completion: @escaping (_ data: UpdateGamificationPreferences200Response?, _ error: Error?) -> Void)
```

Atualizar preferências de gamificação

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let updateGamificationPreferencesRequest = updateGamificationPreferences_request(_class: "_class_example", theme: "theme_example", autoShare: false, shareOnLevelUp: true, shareOnBadge: true) // UpdateGamificationPreferencesRequest |  (optional)

// Atualizar preferências de gamificação
GamificationAPI.updateGamificationPreferences(updateGamificationPreferencesRequest: updateGamificationPreferencesRequest) { (response, error) in
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
 **updateGamificationPreferencesRequest** | [**UpdateGamificationPreferencesRequest**](UpdateGamificationPreferencesRequest.md) |  | [optional] 

### Return type

[**UpdateGamificationPreferences200Response**](UpdateGamificationPreferences200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

