# \GamificationApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete_quest**](GamificationApi.md#complete_quest) | **POST** /api/tasks/{id}/complete-quest | Complete a quest (task) and get XP
[**create_story_from_tasks**](GamificationApi.md#create_story_from_tasks) | **POST** /api/tasks/story | Generate a story from tasks
[**get_badges**](GamificationApi.md#get_badges) | **GET** /api/gamification/badges | Listar badges disponíveis e conquistados
[**get_gamification_dashboard**](GamificationApi.md#get_gamification_dashboard) | **GET** /api/gamification/dashboard | Dashboard de gamificação do usuário
[**get_global_stats**](GamificationApi.md#get_global_stats) | **GET** /api/gamification/global-stats | Estatísticas globais da plataforma
[**get_leaderboard**](GamificationApi.md#get_leaderboard) | **GET** /api/leaderboard | Obter leaderboard público
[**get_story_by_id**](GamificationApi.md#get_story_by_id) | **GET** /api/tasks/stories/{id} | Get a specific story by ID
[**list_stories**](GamificationApi.md#list_stories) | **GET** /api/tasks/stories | List all stories for the user
[**share_milestone**](GamificationApi.md#share_milestone) | **POST** /api/gamification/share | Compartilhar conquista manualmente
[**update_gamification_preferences**](GamificationApi.md#update_gamification_preferences) | **PUT** /api/gamification/preferences | Atualizar preferências de gamificação



## complete_quest

> models::CompleteQuest200Response complete_quest(id, complete_quest_request)
Complete a quest (task) and get XP

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | ID da tarefa/quest | [required] |
**complete_quest_request** | Option<[**CompleteQuestRequest**](CompleteQuestRequest.md)> |  |  |

### Return type

[**models::CompleteQuest200Response**](completeQuest_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_story_from_tasks

> models::CreateStoryFromTasks201Response create_story_from_tasks(create_story_from_tasks_request)
Generate a story from tasks

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_story_from_tasks_request** | [**CreateStoryFromTasksRequest**](CreateStoryFromTasksRequest.md) |  | [required] |

### Return type

[**models::CreateStoryFromTasks201Response**](createStoryFromTasks_201_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_badges

> models::GetBadges200Response get_badges()
Listar badges disponíveis e conquistados

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::GetBadges200Response**](getBadges_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_gamification_dashboard

> models::GetGamificationDashboard200Response get_gamification_dashboard()
Dashboard de gamificação do usuário

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::GetGamificationDashboard200Response**](getGamificationDashboard_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_global_stats

> models::GetGlobalStats200Response get_global_stats()
Estatísticas globais da plataforma

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::GetGlobalStats200Response**](getGlobalStats_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_leaderboard

> models::GetLeaderboard200Response get_leaderboard(limit, period)
Obter leaderboard público

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**limit** | Option<**i32**> | Número de usuários no ranking |  |[default to 10]
**period** | Option<**String**> | Período do ranking |  |[default to all]

### Return type

[**models::GetLeaderboard200Response**](getLeaderboard_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_story_by_id

> models::GetStoryById200Response get_story_by_id(id)
Get a specific story by ID

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | ID da história | [required] |

### Return type

[**models::GetStoryById200Response**](getStoryById_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_stories

> models::ListStories200Response list_stories(active, limit, page)
List all stories for the user

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**active** | Option<**String**> | Filtrar histórias ativas |  |[default to true]
**limit** | Option<**i32**> | Limite de resultados |  |[default to 10]
**page** | Option<**i32**> | Página |  |[default to 1]

### Return type

[**models::ListStories200Response**](listStories_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## share_milestone

> models::ShareMilestone200Response share_milestone(share_milestone_request)
Compartilhar conquista manualmente

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**share_milestone_request** | [**ShareMilestoneRequest**](ShareMilestoneRequest.md) |  | [required] |

### Return type

[**models::ShareMilestone200Response**](shareMilestone_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_gamification_preferences

> models::UpdateGamificationPreferences200Response update_gamification_preferences(update_gamification_preferences_request)
Atualizar preferências de gamificação

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**update_gamification_preferences_request** | Option<[**UpdateGamificationPreferencesRequest**](UpdateGamificationPreferencesRequest.md)> |  |  |

### Return type

[**models::UpdateGamificationPreferences200Response**](updateGamificationPreferences_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

