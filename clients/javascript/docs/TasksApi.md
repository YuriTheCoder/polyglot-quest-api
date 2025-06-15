# GamifiedTaskManagementApi.TasksApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeTask**](TasksApi.md#completeTask) | **PATCH** /api/tasks/{id}/complete | Mark a task as complete
[**createTask**](TasksApi.md#createTask) | **POST** /api/tasks | Create a new task
[**deleteTask**](TasksApi.md#deleteTask) | **DELETE** /api/tasks/{id} | Delete a task
[**getTaskById**](TasksApi.md#getTaskById) | **GET** /api/tasks/{id} | Get a specific task by ID
[**getTaskStats**](TasksApi.md#getTaskStats) | **GET** /api/tasks/stats | Get task statistics
[**listTasks**](TasksApi.md#listTasks) | **GET** /api/tasks | Get all tasks for the logged-in user
[**listTasksByStatus**](TasksApi.md#listTasksByStatus) | **GET** /api/tasks/status/{status} | Get tasks by status
[**updateTask**](TasksApi.md#updateTask) | **PUT** /api/tasks/{id} | Update a task



## completeTask

> CompleteTask200Response completeTask(id)

Mark a task as complete

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.TasksApi();
let id = "id_example"; // String | ID da tarefa
apiInstance.completeTask(id, (error, data, response) => {
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
 **id** | **String**| ID da tarefa | 

### Return type

[**CompleteTask200Response**](CompleteTask200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createTask

> CreateTask201Response createTask(createTaskRequest)

Create a new task

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.TasksApi();
let createTaskRequest = new GamifiedTaskManagementApi.CreateTaskRequest(); // CreateTaskRequest | 
apiInstance.createTask(createTaskRequest, (error, data, response) => {
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
 **createTaskRequest** | [**CreateTaskRequest**](CreateTaskRequest.md)|  | 

### Return type

[**CreateTask201Response**](CreateTask201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTask

> DeleteTask200Response deleteTask(id)

Delete a task

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.TasksApi();
let id = "id_example"; // String | ID da tarefa
apiInstance.deleteTask(id, (error, data, response) => {
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
 **id** | **String**| ID da tarefa | 

### Return type

[**DeleteTask200Response**](DeleteTask200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaskById

> GetTaskById200Response getTaskById(id)

Get a specific task by ID

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.TasksApi();
let id = "id_example"; // String | ID da tarefa
apiInstance.getTaskById(id, (error, data, response) => {
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
 **id** | **String**| ID da tarefa | 

### Return type

[**GetTaskById200Response**](GetTaskById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTaskStats

> GetTaskStats200Response getTaskStats()

Get task statistics

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.TasksApi();
apiInstance.getTaskStats((error, data, response) => {
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

[**GetTaskStats200Response**](GetTaskStats200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTasks

> ListTasks200Response listTasks(opts)

Get all tasks for the logged-in user

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.TasksApi();
let opts = {
  'status': "status_example", // String | Filtrar por status
  'priority': "priority_example", // String | Filtrar por prioridade
  'page': 1, // Number | Número da página
  'limit': 10, // Number | Itens por página
  'sortBy': "'createdAt'", // String | Campo para ordenação
  'sortOrder': "'desc'", // String | Ordem da classificação
  'search': "search_example" // String | Buscar no título e descrição
};
apiInstance.listTasks(opts, (error, data, response) => {
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
 **status** | **String**| Filtrar por status | [optional] 
 **priority** | **String**| Filtrar por prioridade | [optional] 
 **page** | **Number**| Número da página | [optional] [default to 1]
 **limit** | **Number**| Itens por página | [optional] [default to 10]
 **sortBy** | **String**| Campo para ordenação | [optional] [default to &#39;createdAt&#39;]
 **sortOrder** | **String**| Ordem da classificação | [optional] [default to &#39;desc&#39;]
 **search** | **String**| Buscar no título e descrição | [optional] 

### Return type

[**ListTasks200Response**](ListTasks200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTasksByStatus

> ListTasksByStatus200Response listTasksByStatus(status, opts)

Get tasks by status

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.TasksApi();
let status = "status_example"; // String | Status das tarefas
let opts = {
  'page': 1, // Number | Número da página
  'limit': 10 // Number | Itens por página
};
apiInstance.listTasksByStatus(status, opts, (error, data, response) => {
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
 **status** | **String**| Status das tarefas | 
 **page** | **Number**| Número da página | [optional] [default to 1]
 **limit** | **Number**| Itens por página | [optional] [default to 10]

### Return type

[**ListTasksByStatus200Response**](ListTasksByStatus200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTask

> UpdateTask200Response updateTask(id, updateTaskRequest)

Update a task

### Example

```javascript
import GamifiedTaskManagementApi from 'gamified_task_management_api';
let defaultClient = GamifiedTaskManagementApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new GamifiedTaskManagementApi.TasksApi();
let id = "id_example"; // String | ID da tarefa
let updateTaskRequest = new GamifiedTaskManagementApi.UpdateTaskRequest(); // UpdateTaskRequest | 
apiInstance.updateTask(id, updateTaskRequest, (error, data, response) => {
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
 **id** | **String**| ID da tarefa | 
 **updateTaskRequest** | [**UpdateTaskRequest**](UpdateTaskRequest.md)|  | 

### Return type

[**UpdateTask200Response**](UpdateTask200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

