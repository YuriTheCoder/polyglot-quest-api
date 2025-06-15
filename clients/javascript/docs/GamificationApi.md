# GamifiedTaskManagementApi.GamificationApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeQuest**](GamificationApi.md#completeQuest) | **POST** /api/tasks/{id}/complete-quest | Complete a quest (task) and get XP
[**createStoryFromTasks**](GamificationApi.md#createStoryFromTasks) | **POST** /api/tasks/story | Generate a story from tasks
[**getBadges**](GamificationApi.md#getBadges) | **GET** /api/gamification/badges | Listar badges disponíveis e conquistados
[**getGamificationDashboard**](GamificationApi.md#getGamificationDashboard) | **GET** /api/gamification/dashboard | Dashboard de gamificação do usuário
[**getGlobalStats**](GamificationApi.md#getGlobalStats) | **GET** /api/gamification/global-stats | Estatísticas globais da plataforma
[**getLeaderboard**](GamificationApi.md#getLeaderboard) | **GET** /api/leaderboard | Obter leaderboard público
[**getStoryById**](GamificationApi.md#getStoryById) | **GET** /api/tasks/stories/{id} | Get a specific story by ID
[**listStories**](GamificationApi.md#listStories) | **GET** /api/tasks/stories | List all stories for the user
[**shareMilestone**](GamificationApi.md#shareMilestone) | **POST** /api/gamification/share | Compartilhar conquista manualmente
[**updateGamificationPreferences**](GamificationApi.md#updateGamificationPreferences) | **PUT** /api/gamification/preferences | Atualizar preferências de gamificação



## completeQuest

> CompleteQuest200Response completeQuest(id, opts)

Complete a quest (task) and get XP

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.GamificationApi();
let id = "id_example"; // String | ID da tarefa/quest
let opts = {
  'completeQuestRequest': new GamifiedTaskManagementApi.CompleteQuestRequest() // CompleteQuestRequest | 
};
apiInstance.completeQuest(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID da tarefa/quest | 
 **completeQuestRequest** | [**CompleteQuestRequest**](CompleteQuestRequest.md)|  | [optional] 

### Return type

[**CompleteQuest200Response**](CompleteQuest200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createStoryFromTasks

> CreateStoryFromTasks201Response createStoryFromTasks(createStoryFromTasksRequest)

Generate a story from tasks

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.GamificationApi();
let createStoryFromTasksRequest = new GamifiedTaskManagementApi.CreateStoryFromTasksRequest(); // CreateStoryFromTasksRequest | 
apiInstance.createStoryFromTasks(createStoryFromTasksRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStoryFromTasksRequest** | [**CreateStoryFromTasksRequest**](CreateStoryFromTasksRequest.md)|  | 

### Return type

[**CreateStoryFromTasks201Response**](CreateStoryFromTasks201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getBadges

> GetBadges200Response getBadges()

Listar badges disponíveis e conquistados

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.GamificationApi();
apiInstance.getBadges((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## getGamificationDashboard

> GetGamificationDashboard200Response getGamificationDashboard()

Dashboard de gamificação do usuário

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.GamificationApi();
apiInstance.getGamificationDashboard((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## getGlobalStats

> GetGlobalStats200Response getGlobalStats()

Estatísticas globais da plataforma

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.GamificationApi();
apiInstance.getGlobalStats((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## getLeaderboard

> GetLeaderboard200Response getLeaderboard(opts)

Obter leaderboard público

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.GamificationApi();
let opts = {
  'limit': 10, // Number | Número de usuários no ranking
  'period': "'all'" // String | Período do ranking
};
apiInstance.getLeaderboard(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Número de usuários no ranking | [optional] [default to 10]
 **period** | **String**| Período do ranking | [optional] [default to &#39;all&#39;]

### Return type

[**GetLeaderboard200Response**](GetLeaderboard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStoryById

> GetStoryById200Response getStoryById(id)

Get a specific story by ID

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.GamificationApi();
let id = "id_example"; // String | ID da história
apiInstance.getStoryById(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID da história | 

### Return type

[**GetStoryById200Response**](GetStoryById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listStories

> ListStories200Response listStories(opts)

List all stories for the user

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.GamificationApi();
let opts = {
  'active': "'true'", // String | Filtrar histórias ativas
  'limit': 10, // Number | Limite de resultados
  'page': 1 // Number | Página
};
apiInstance.listStories(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **String**| Filtrar histórias ativas | [optional] [default to &#39;true&#39;]
 **limit** | **Number**| Limite de resultados | [optional] [default to 10]
 **page** | **Number**| Página | [optional] [default to 1]

### Return type

[**ListStories200Response**](ListStories200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## shareMilestone

> ShareMilestone200Response shareMilestone(shareMilestoneRequest)

Compartilhar conquista manualmente

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.GamificationApi();
let shareMilestoneRequest = new GamifiedTaskManagementApi.ShareMilestoneRequest(); // ShareMilestoneRequest | 
apiInstance.shareMilestone(shareMilestoneRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shareMilestoneRequest** | [**ShareMilestoneRequest**](ShareMilestoneRequest.md)|  | 

### Return type

[**ShareMilestone200Response**](ShareMilestone200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateGamificationPreferences

> UpdateGamificationPreferences200Response updateGamificationPreferences(opts)

Atualizar preferências de gamificação

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.GamificationApi();
let opts = {
  'updateGamificationPreferencesRequest': new GamifiedTaskManagementApi.UpdateGamificationPreferencesRequest() // UpdateGamificationPreferencesRequest | 
};
apiInstance.updateGamificationPreferences(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateGamificationPreferencesRequest** | [**UpdateGamificationPreferencesRequest**](UpdateGamificationPreferencesRequest.md)|  | [optional] 

### Return type

[**UpdateGamificationPreferences200Response**](UpdateGamificationPreferences200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

