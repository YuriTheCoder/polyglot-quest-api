# openapi_client.GamificationApi

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


# **complete_quest**
> CompleteQuest200Response complete_quest(id, complete_quest_request=complete_quest_request)

Complete a quest (task) and get XP

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.complete_quest200_response import CompleteQuest200Response
from openapi_client.models.complete_quest_request import CompleteQuestRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GamificationApi(api_client)
    id = 'id_example' # str | ID da tarefa/quest
    complete_quest_request = openapi_client.CompleteQuestRequest() # CompleteQuestRequest |  (optional)

    try:
        # Complete a quest (task) and get XP
        api_response = api_instance.complete_quest(id, complete_quest_request=complete_quest_request)
        print("The response of GamificationApi->complete_quest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamificationApi->complete_quest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID da tarefa/quest | 
 **complete_quest_request** | [**CompleteQuestRequest**](CompleteQuestRequest.md)|  | [optional] 

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
**200** | Quest completada com sucesso |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_story_from_tasks**
> CreateStoryFromTasks201Response create_story_from_tasks(create_story_from_tasks_request)

Generate a story from tasks

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.create_story_from_tasks201_response import CreateStoryFromTasks201Response
from openapi_client.models.create_story_from_tasks_request import CreateStoryFromTasksRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GamificationApi(api_client)
    create_story_from_tasks_request = openapi_client.CreateStoryFromTasksRequest() # CreateStoryFromTasksRequest | 

    try:
        # Generate a story from tasks
        api_response = api_instance.create_story_from_tasks(create_story_from_tasks_request)
        print("The response of GamificationApi->create_story_from_tasks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamificationApi->create_story_from_tasks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_story_from_tasks_request** | [**CreateStoryFromTasksRequest**](CreateStoryFromTasksRequest.md)|  | 

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
**201** | História épica gerada com sucesso |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_badges**
> GetBadges200Response get_badges()

Listar badges disponíveis e conquistados

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_badges200_response import GetBadges200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GamificationApi(api_client)

    try:
        # Listar badges disponíveis e conquistados
        api_response = api_instance.get_badges()
        print("The response of GamificationApi->get_badges:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamificationApi->get_badges: %s\n" % e)
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
**200** | Lista de badges |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_gamification_dashboard**
> GetGamificationDashboard200Response get_gamification_dashboard()

Dashboard de gamificação do usuário

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_gamification_dashboard200_response import GetGamificationDashboard200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GamificationApi(api_client)

    try:
        # Dashboard de gamificação do usuário
        api_response = api_instance.get_gamification_dashboard()
        print("The response of GamificationApi->get_gamification_dashboard:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamificationApi->get_gamification_dashboard: %s\n" % e)
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
**200** | Dashboard completo do usuário |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_global_stats**
> GetGlobalStats200Response get_global_stats()

Estatísticas globais da plataforma

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_global_stats200_response import GetGlobalStats200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GamificationApi(api_client)

    try:
        # Estatísticas globais da plataforma
        api_response = api_instance.get_global_stats()
        print("The response of GamificationApi->get_global_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamificationApi->get_global_stats: %s\n" % e)
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
**200** | Estatísticas globais |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_leaderboard**
> GetLeaderboard200Response get_leaderboard(limit=limit, period=period)

Obter leaderboard público

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_leaderboard200_response import GetLeaderboard200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GamificationApi(api_client)
    limit = 10 # int | Número de usuários no ranking (optional) (default to 10)
    period = all # str | Período do ranking (optional) (default to all)

    try:
        # Obter leaderboard público
        api_response = api_instance.get_leaderboard(limit=limit, period=period)
        print("The response of GamificationApi->get_leaderboard:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamificationApi->get_leaderboard: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Número de usuários no ranking | [optional] [default to 10]
 **period** | **str**| Período do ranking | [optional] [default to all]

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
**200** | Leaderboard dos top usuários |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_story_by_id**
> GetStoryById200Response get_story_by_id(id)

Get a specific story by ID

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_story_by_id200_response import GetStoryById200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GamificationApi(api_client)
    id = 'id_example' # str | ID da história

    try:
        # Get a specific story by ID
        api_response = api_instance.get_story_by_id(id)
        print("The response of GamificationApi->get_story_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamificationApi->get_story_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID da história | 

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
**200** | Detalhes da história |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_stories**
> ListStories200Response list_stories(active=active, limit=limit, page=page)

List all stories for the user

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.list_stories200_response import ListStories200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GamificationApi(api_client)
    active = true # str | Filtrar histórias ativas (optional) (default to true)
    limit = 10 # int | Limite de resultados (optional) (default to 10)
    page = 1 # int | Página (optional) (default to 1)

    try:
        # List all stories for the user
        api_response = api_instance.list_stories(active=active, limit=limit, page=page)
        print("The response of GamificationApi->list_stories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamificationApi->list_stories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **str**| Filtrar histórias ativas | [optional] [default to true]
 **limit** | **int**| Limite de resultados | [optional] [default to 10]
 **page** | **int**| Página | [optional] [default to 1]

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
**200** | Lista de histórias |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **share_milestone**
> ShareMilestone200Response share_milestone(share_milestone_request)

Compartilhar conquista manualmente

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.share_milestone200_response import ShareMilestone200Response
from openapi_client.models.share_milestone_request import ShareMilestoneRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GamificationApi(api_client)
    share_milestone_request = openapi_client.ShareMilestoneRequest() # ShareMilestoneRequest | 

    try:
        # Compartilhar conquista manualmente
        api_response = api_instance.share_milestone(share_milestone_request)
        print("The response of GamificationApi->share_milestone:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamificationApi->share_milestone: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **share_milestone_request** | [**ShareMilestoneRequest**](ShareMilestoneRequest.md)|  | 

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
**200** | Conquista compartilhada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_gamification_preferences**
> UpdateGamificationPreferences200Response update_gamification_preferences(update_gamification_preferences_request=update_gamification_preferences_request)

Atualizar preferências de gamificação

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.update_gamification_preferences200_response import UpdateGamificationPreferences200Response
from openapi_client.models.update_gamification_preferences_request import UpdateGamificationPreferencesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GamificationApi(api_client)
    update_gamification_preferences_request = openapi_client.UpdateGamificationPreferencesRequest() # UpdateGamificationPreferencesRequest |  (optional)

    try:
        # Atualizar preferências de gamificação
        api_response = api_instance.update_gamification_preferences(update_gamification_preferences_request=update_gamification_preferences_request)
        print("The response of GamificationApi->update_gamification_preferences:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GamificationApi->update_gamification_preferences: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_gamification_preferences_request** | [**UpdateGamificationPreferencesRequest**](UpdateGamificationPreferencesRequest.md)|  | [optional] 

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
**200** | Preferências atualizadas |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

