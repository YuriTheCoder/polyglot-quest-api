# \GamificationAPI

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CompleteQuest**](GamificationAPI.md#CompleteQuest) | **Post** /api/tasks/{id}/complete-quest | Complete a quest (task) and get XP
[**CreateStoryFromTasks**](GamificationAPI.md#CreateStoryFromTasks) | **Post** /api/tasks/story | Generate a story from tasks
[**GetBadges**](GamificationAPI.md#GetBadges) | **Get** /api/gamification/badges | Listar badges disponíveis e conquistados
[**GetGamificationDashboard**](GamificationAPI.md#GetGamificationDashboard) | **Get** /api/gamification/dashboard | Dashboard de gamificação do usuário
[**GetGlobalStats**](GamificationAPI.md#GetGlobalStats) | **Get** /api/gamification/global-stats | Estatísticas globais da plataforma
[**GetLeaderboard**](GamificationAPI.md#GetLeaderboard) | **Get** /api/leaderboard | Obter leaderboard público
[**GetStoryById**](GamificationAPI.md#GetStoryById) | **Get** /api/tasks/stories/{id} | Get a specific story by ID
[**ListStories**](GamificationAPI.md#ListStories) | **Get** /api/tasks/stories | List all stories for the user
[**ShareMilestone**](GamificationAPI.md#ShareMilestone) | **Post** /api/gamification/share | Compartilhar conquista manualmente
[**UpdateGamificationPreferences**](GamificationAPI.md#UpdateGamificationPreferences) | **Put** /api/gamification/preferences | Atualizar preferências de gamificação



## CompleteQuest

> CompleteQuest200Response CompleteQuest(ctx, id).CompleteQuestRequest(completeQuestRequest).Execute()

Complete a quest (task) and get XP

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	id := "id_example" // string | ID da tarefa/quest
	completeQuestRequest := *openapiclient.NewCompleteQuestRequest() // CompleteQuestRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GamificationAPI.CompleteQuest(context.Background(), id).CompleteQuestRequest(completeQuestRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GamificationAPI.CompleteQuest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CompleteQuest`: CompleteQuest200Response
	fmt.Fprintf(os.Stdout, "Response from `GamificationAPI.CompleteQuest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID da tarefa/quest | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteQuestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **completeQuestRequest** | [**CompleteQuestRequest**](CompleteQuestRequest.md) |  | 

### Return type

[**CompleteQuest200Response**](CompleteQuest200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateStoryFromTasks

> CreateStoryFromTasks201Response CreateStoryFromTasks(ctx).CreateStoryFromTasksRequest(createStoryFromTasksRequest).Execute()

Generate a story from tasks

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	createStoryFromTasksRequest := *openapiclient.NewCreateStoryFromTasksRequest([]string{"TaskIds_example"}) // CreateStoryFromTasksRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GamificationAPI.CreateStoryFromTasks(context.Background()).CreateStoryFromTasksRequest(createStoryFromTasksRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GamificationAPI.CreateStoryFromTasks``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateStoryFromTasks`: CreateStoryFromTasks201Response
	fmt.Fprintf(os.Stdout, "Response from `GamificationAPI.CreateStoryFromTasks`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateStoryFromTasksRequest struct via the builder pattern


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBadges

> GetBadges200Response GetBadges(ctx).Execute()

Listar badges disponíveis e conquistados

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GamificationAPI.GetBadges(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GamificationAPI.GetBadges``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetBadges`: GetBadges200Response
	fmt.Fprintf(os.Stdout, "Response from `GamificationAPI.GetBadges`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetBadgesRequest struct via the builder pattern


### Return type

[**GetBadges200Response**](GetBadges200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGamificationDashboard

> GetGamificationDashboard200Response GetGamificationDashboard(ctx).Execute()

Dashboard de gamificação do usuário

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GamificationAPI.GetGamificationDashboard(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GamificationAPI.GetGamificationDashboard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetGamificationDashboard`: GetGamificationDashboard200Response
	fmt.Fprintf(os.Stdout, "Response from `GamificationAPI.GetGamificationDashboard`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetGamificationDashboardRequest struct via the builder pattern


### Return type

[**GetGamificationDashboard200Response**](GetGamificationDashboard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGlobalStats

> GetGlobalStats200Response GetGlobalStats(ctx).Execute()

Estatísticas globais da plataforma

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GamificationAPI.GetGlobalStats(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GamificationAPI.GetGlobalStats``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetGlobalStats`: GetGlobalStats200Response
	fmt.Fprintf(os.Stdout, "Response from `GamificationAPI.GetGlobalStats`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetGlobalStatsRequest struct via the builder pattern


### Return type

[**GetGlobalStats200Response**](GetGlobalStats200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetLeaderboard

> GetLeaderboard200Response GetLeaderboard(ctx).Limit(limit).Period(period).Execute()

Obter leaderboard público

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	limit := int32(56) // int32 | Número de usuários no ranking (optional) (default to 10)
	period := "period_example" // string | Período do ranking (optional) (default to "all")

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GamificationAPI.GetLeaderboard(context.Background()).Limit(limit).Period(period).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GamificationAPI.GetLeaderboard``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetLeaderboard`: GetLeaderboard200Response
	fmt.Fprintf(os.Stdout, "Response from `GamificationAPI.GetLeaderboard`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetLeaderboardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Número de usuários no ranking | [default to 10]
 **period** | **string** | Período do ranking | [default to &quot;all&quot;]

### Return type

[**GetLeaderboard200Response**](GetLeaderboard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStoryById

> GetStoryById200Response GetStoryById(ctx, id).Execute()

Get a specific story by ID

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	id := "id_example" // string | ID da história

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GamificationAPI.GetStoryById(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GamificationAPI.GetStoryById``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetStoryById`: GetStoryById200Response
	fmt.Fprintf(os.Stdout, "Response from `GamificationAPI.GetStoryById`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID da história | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStoryByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetStoryById200Response**](GetStoryById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListStories

> ListStories200Response ListStories(ctx).Active(active).Limit(limit).Page(page).Execute()

List all stories for the user

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	active := "active_example" // string | Filtrar histórias ativas (optional) (default to "true")
	limit := int32(56) // int32 | Limite de resultados (optional) (default to 10)
	page := int32(56) // int32 | Página (optional) (default to 1)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GamificationAPI.ListStories(context.Background()).Active(active).Limit(limit).Page(page).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GamificationAPI.ListStories``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListStories`: ListStories200Response
	fmt.Fprintf(os.Stdout, "Response from `GamificationAPI.ListStories`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListStoriesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **string** | Filtrar histórias ativas | [default to &quot;true&quot;]
 **limit** | **int32** | Limite de resultados | [default to 10]
 **page** | **int32** | Página | [default to 1]

### Return type

[**ListStories200Response**](ListStories200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ShareMilestone

> ShareMilestone200Response ShareMilestone(ctx).ShareMilestoneRequest(shareMilestoneRequest).Execute()

Compartilhar conquista manualmente

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	shareMilestoneRequest := *openapiclient.NewShareMilestoneRequest("level_up") // ShareMilestoneRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GamificationAPI.ShareMilestone(context.Background()).ShareMilestoneRequest(shareMilestoneRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GamificationAPI.ShareMilestone``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ShareMilestone`: ShareMilestone200Response
	fmt.Fprintf(os.Stdout, "Response from `GamificationAPI.ShareMilestone`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiShareMilestoneRequest struct via the builder pattern


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateGamificationPreferences

> UpdateGamificationPreferences200Response UpdateGamificationPreferences(ctx).UpdateGamificationPreferencesRequest(updateGamificationPreferencesRequest).Execute()

Atualizar preferências de gamificação

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	updateGamificationPreferencesRequest := *openapiclient.NewUpdateGamificationPreferencesRequest() // UpdateGamificationPreferencesRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.GamificationAPI.UpdateGamificationPreferences(context.Background()).UpdateGamificationPreferencesRequest(updateGamificationPreferencesRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `GamificationAPI.UpdateGamificationPreferences``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateGamificationPreferences`: UpdateGamificationPreferences200Response
	fmt.Fprintf(os.Stdout, "Response from `GamificationAPI.UpdateGamificationPreferences`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateGamificationPreferencesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateGamificationPreferencesRequest** | [**UpdateGamificationPreferencesRequest**](UpdateGamificationPreferencesRequest.md) |  | 

### Return type

[**UpdateGamificationPreferences200Response**](UpdateGamificationPreferences200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

