# \TasksApi

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



## complete_task

> models::CompleteTask200Response complete_task(id)
Mark a task as complete

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | ID da tarefa | [required] |

### Return type

[**models::CompleteTask200Response**](completeTask_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## create_task

> models::CreateTask201Response create_task(create_task_request)
Create a new task

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_task_request** | [**CreateTaskRequest**](CreateTaskRequest.md) |  | [required] |

### Return type

[**models::CreateTask201Response**](createTask_201_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_task

> models::DeleteTask200Response delete_task(id)
Delete a task

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | ID da tarefa | [required] |

### Return type

[**models::DeleteTask200Response**](deleteTask_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_task_by_id

> models::GetTaskById200Response get_task_by_id(id)
Get a specific task by ID

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | ID da tarefa | [required] |

### Return type

[**models::GetTaskById200Response**](getTaskById_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_task_stats

> models::GetTaskStats200Response get_task_stats()
Get task statistics

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::GetTaskStats200Response**](getTaskStats_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_tasks

> models::ListTasks200Response list_tasks(status, priority, page, limit, sort_by, sort_order, search)
Get all tasks for the logged-in user

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | Option<**String**> | Filtrar por status |  |
**priority** | Option<**String**> | Filtrar por prioridade |  |
**page** | Option<**i32**> | Número da página |  |[default to 1]
**limit** | Option<**i32**> | Itens por página |  |[default to 10]
**sort_by** | Option<**String**> | Campo para ordenação |  |[default to createdAt]
**sort_order** | Option<**String**> | Ordem da classificação |  |[default to desc]
**search** | Option<**String**> | Buscar no título e descrição |  |

### Return type

[**models::ListTasks200Response**](listTasks_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_tasks_by_status

> models::ListTasksByStatus200Response list_tasks_by_status(status, page, limit)
Get tasks by status

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | **String** | Status das tarefas | [required] |
**page** | Option<**i32**> | Número da página |  |[default to 1]
**limit** | Option<**i32**> | Itens por página |  |[default to 10]

### Return type

[**models::ListTasksByStatus200Response**](listTasksByStatus_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_task

> models::UpdateTask200Response update_task(id, update_task_request)
Update a task

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | ID da tarefa | [required] |
**update_task_request** | [**UpdateTaskRequest**](UpdateTaskRequest.md) |  | [required] |

### Return type

[**models::UpdateTask200Response**](updateTask_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

