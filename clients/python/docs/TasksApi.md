# openapi_client.TasksApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**complete_task**](TasksApi.md#complete_task) | **PATCH** /api/tasks/{id}/complete | Mark a task as complete
[**create_task**](TasksApi.md#create_task) | **POST** /api/tasks | Create a new task
[**delete_task**](TasksApi.md#delete_task) | **DELETE** /api/tasks/{id} | Delete a task
[**get_task_by_id**](TasksApi.md#get_task_by_id) | **GET** /api/tasks/{id} | Get a specific task by ID
[**get_task_stats**](TasksApi.md#get_task_stats) | **GET** /api/tasks/stats | Get task statistics
[**list_tasks**](TasksApi.md#list_tasks) | **GET** /api/tasks | Get all tasks for the logged-in user
[**list_tasks_by_status**](TasksApi.md#list_tasks_by_status) | **GET** /api/tasks/status/{status} | Get tasks by status
[**update_task**](TasksApi.md#update_task) | **PUT** /api/tasks/{id} | Update a task


# **complete_task**
> CompleteTask200Response complete_task(id)

Mark a task as complete

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.complete_task200_response import CompleteTask200Response
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
    api_instance = openapi_client.TasksApi(api_client)
    id = 'id_example' # str | ID da tarefa

    try:
        # Mark a task as complete
        api_response = api_instance.complete_task(id)
        print("The response of TasksApi->complete_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->complete_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID da tarefa | 

### Return type

[**CompleteTask200Response**](CompleteTask200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tarefa marcada como concluída |  -  |
**400** | Tarefa já está concluída |  -  |
**403** | Acesso negado |  -  |
**404** | Tarefa não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_task**
> CreateTask201Response create_task(create_task_request)

Create a new task

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.create_task201_response import CreateTask201Response
from openapi_client.models.create_task_request import CreateTaskRequest
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
    api_instance = openapi_client.TasksApi(api_client)
    create_task_request = openapi_client.CreateTaskRequest() # CreateTaskRequest | 

    try:
        # Create a new task
        api_response = api_instance.create_task(create_task_request)
        print("The response of TasksApi->create_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->create_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_task_request** | [**CreateTaskRequest**](CreateTaskRequest.md)|  | 

### Return type

[**CreateTask201Response**](CreateTask201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Tarefa criada com sucesso |  -  |
**400** | Dados inválidos |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_task**
> DeleteTask200Response delete_task(id)

Delete a task

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.delete_task200_response import DeleteTask200Response
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
    api_instance = openapi_client.TasksApi(api_client)
    id = 'id_example' # str | ID da tarefa

    try:
        # Delete a task
        api_response = api_instance.delete_task(id)
        print("The response of TasksApi->delete_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->delete_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID da tarefa | 

### Return type

[**DeleteTask200Response**](DeleteTask200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tarefa deletada com sucesso |  -  |
**403** | Acesso negado |  -  |
**404** | Tarefa não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_task_by_id**
> GetTaskById200Response get_task_by_id(id)

Get a specific task by ID

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_task_by_id200_response import GetTaskById200Response
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
    api_instance = openapi_client.TasksApi(api_client)
    id = 'id_example' # str | ID da tarefa

    try:
        # Get a specific task by ID
        api_response = api_instance.get_task_by_id(id)
        print("The response of TasksApi->get_task_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->get_task_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID da tarefa | 

### Return type

[**GetTaskById200Response**](GetTaskById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detalhes da tarefa |  -  |
**403** | Acesso negado |  -  |
**404** | Tarefa não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_task_stats**
> GetTaskStats200Response get_task_stats()

Get task statistics

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_task_stats200_response import GetTaskStats200Response
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
    api_instance = openapi_client.TasksApi(api_client)

    try:
        # Get task statistics
        api_response = api_instance.get_task_stats()
        print("The response of TasksApi->get_task_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->get_task_stats: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetTaskStats200Response**](GetTaskStats200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Estatísticas das tarefas |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_tasks**
> ListTasks200Response list_tasks(status=status, priority=priority, page=page, limit=limit, sort_by=sort_by, sort_order=sort_order, search=search)

Get all tasks for the logged-in user

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.list_tasks200_response import ListTasks200Response
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
    api_instance = openapi_client.TasksApi(api_client)
    status = 'status_example' # str | Filtrar por status (optional)
    priority = 'priority_example' # str | Filtrar por prioridade (optional)
    page = 1 # int | Número da página (optional) (default to 1)
    limit = 10 # int | Itens por página (optional) (default to 10)
    sort_by = createdAt # str | Campo para ordenação (optional) (default to createdAt)
    sort_order = desc # str | Ordem da classificação (optional) (default to desc)
    search = 'search_example' # str | Buscar no título e descrição (optional)

    try:
        # Get all tasks for the logged-in user
        api_response = api_instance.list_tasks(status=status, priority=priority, page=page, limit=limit, sort_by=sort_by, sort_order=sort_order, search=search)
        print("The response of TasksApi->list_tasks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->list_tasks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **str**| Filtrar por status | [optional] 
 **priority** | **str**| Filtrar por prioridade | [optional] 
 **page** | **int**| Número da página | [optional] [default to 1]
 **limit** | **int**| Itens por página | [optional] [default to 10]
 **sort_by** | **str**| Campo para ordenação | [optional] [default to createdAt]
 **sort_order** | **str**| Ordem da classificação | [optional] [default to desc]
 **search** | **str**| Buscar no título e descrição | [optional] 

### Return type

[**ListTasks200Response**](ListTasks200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lista de tarefas |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_tasks_by_status**
> ListTasksByStatus200Response list_tasks_by_status(status, page=page, limit=limit)

Get tasks by status

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.list_tasks_by_status200_response import ListTasksByStatus200Response
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
    api_instance = openapi_client.TasksApi(api_client)
    status = 'status_example' # str | Status das tarefas
    page = 1 # int | Número da página (optional) (default to 1)
    limit = 10 # int | Itens por página (optional) (default to 10)

    try:
        # Get tasks by status
        api_response = api_instance.list_tasks_by_status(status, page=page, limit=limit)
        print("The response of TasksApi->list_tasks_by_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->list_tasks_by_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **str**| Status das tarefas | 
 **page** | **int**| Número da página | [optional] [default to 1]
 **limit** | **int**| Itens por página | [optional] [default to 10]

### Return type

[**ListTasksByStatus200Response**](ListTasksByStatus200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tarefas filtradas por status |  -  |
**400** | Status inválido |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_task**
> UpdateTask200Response update_task(id, update_task_request)

Update a task

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.update_task200_response import UpdateTask200Response
from openapi_client.models.update_task_request import UpdateTaskRequest
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
    api_instance = openapi_client.TasksApi(api_client)
    id = 'id_example' # str | ID da tarefa
    update_task_request = openapi_client.UpdateTaskRequest() # UpdateTaskRequest | 

    try:
        # Update a task
        api_response = api_instance.update_task(id, update_task_request)
        print("The response of TasksApi->update_task:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->update_task: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID da tarefa | 
 **update_task_request** | [**UpdateTaskRequest**](UpdateTaskRequest.md)|  | 

### Return type

[**UpdateTask200Response**](UpdateTask200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tarefa atualizada com sucesso |  -  |
**400** | Dados inválidos |  -  |
**403** | Acesso negado |  -  |
**404** | Tarefa não encontrada |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

