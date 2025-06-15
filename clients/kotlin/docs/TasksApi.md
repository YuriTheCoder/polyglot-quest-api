# TasksApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**completeTask**](TasksApi.md#completeTask) | **PATCH** /api/tasks/{id}/complete | Mark a task as complete |
| [**createTask**](TasksApi.md#createTask) | **POST** /api/tasks | Create a new task |
| [**deleteTask**](TasksApi.md#deleteTask) | **DELETE** /api/tasks/{id} | Delete a task |
| [**getTaskById**](TasksApi.md#getTaskById) | **GET** /api/tasks/{id} | Get a specific task by ID |
| [**getTaskStats**](TasksApi.md#getTaskStats) | **GET** /api/tasks/stats | Get task statistics |
| [**listTasks**](TasksApi.md#listTasks) | **GET** /api/tasks | Get all tasks for the logged-in user |
| [**listTasksByStatus**](TasksApi.md#listTasksByStatus) | **GET** /api/tasks/status/{status} | Get tasks by status |
| [**updateTask**](TasksApi.md#updateTask) | **PUT** /api/tasks/{id} | Update a task |


<a id="completeTask"></a>
# **completeTask**
> CompleteTask200Response completeTask(id)

Mark a task as complete

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TasksApi()
val id : kotlin.String = id_example // kotlin.String | ID da tarefa
try {
    val result : CompleteTask200Response = apiInstance.completeTask(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TasksApi#completeTask")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TasksApi#completeTask")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**| ID da tarefa | |

### Return type

[**CompleteTask200Response**](CompleteTask200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="createTask"></a>
# **createTask**
> CreateTask201Response createTask(createTaskRequest)

Create a new task

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TasksApi()
val createTaskRequest : CreateTaskRequest =  // CreateTaskRequest | 
try {
    val result : CreateTask201Response = apiInstance.createTask(createTaskRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TasksApi#createTask")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TasksApi#createTask")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **createTaskRequest** | [**CreateTaskRequest**](CreateTaskRequest.md)|  | |

### Return type

[**CreateTask201Response**](CreateTask201Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="deleteTask"></a>
# **deleteTask**
> DeleteTask200Response deleteTask(id)

Delete a task

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TasksApi()
val id : kotlin.String = id_example // kotlin.String | ID da tarefa
try {
    val result : DeleteTask200Response = apiInstance.deleteTask(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TasksApi#deleteTask")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TasksApi#deleteTask")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**| ID da tarefa | |

### Return type

[**DeleteTask200Response**](DeleteTask200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getTaskById"></a>
# **getTaskById**
> GetTaskById200Response getTaskById(id)

Get a specific task by ID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TasksApi()
val id : kotlin.String = id_example // kotlin.String | ID da tarefa
try {
    val result : GetTaskById200Response = apiInstance.getTaskById(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TasksApi#getTaskById")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TasksApi#getTaskById")
    e.printStackTrace()
}
```

### Parameters
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **kotlin.String**| ID da tarefa | |

### Return type

[**GetTaskById200Response**](GetTaskById200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getTaskStats"></a>
# **getTaskStats**
> GetTaskStats200Response getTaskStats()

Get task statistics

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TasksApi()
try {
    val result : GetTaskStats200Response = apiInstance.getTaskStats()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TasksApi#getTaskStats")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TasksApi#getTaskStats")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GetTaskStats200Response**](GetTaskStats200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="listTasks"></a>
# **listTasks**
> ListTasks200Response listTasks(status, priority, page, limit, sortBy, sortOrder, search)

Get all tasks for the logged-in user

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TasksApi()
val status : kotlin.String = status_example // kotlin.String | Filtrar por status
val priority : kotlin.String = priority_example // kotlin.String | Filtrar por prioridade
val page : kotlin.Int = 56 // kotlin.Int | Número da página
val limit : kotlin.Int = 56 // kotlin.Int | Itens por página
val sortBy : kotlin.String = sortBy_example // kotlin.String | Campo para ordenação
val sortOrder : kotlin.String = sortOrder_example // kotlin.String | Ordem da classificação
val search : kotlin.String = search_example // kotlin.String | Buscar no título e descrição
try {
    val result : ListTasks200Response = apiInstance.listTasks(status, priority, page, limit, sortBy, sortOrder, search)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TasksApi#listTasks")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TasksApi#listTasks")
    e.printStackTrace()
}
```

### Parameters
| **status** | **kotlin.String**| Filtrar por status | [optional] [enum: pending, in_progress, completed] |
| **priority** | **kotlin.String**| Filtrar por prioridade | [optional] [enum: low, medium, high] |
| **page** | **kotlin.Int**| Número da página | [optional] [default to 1] |
| **limit** | **kotlin.Int**| Itens por página | [optional] [default to 10] |
| **sortBy** | **kotlin.String**| Campo para ordenação | [optional] [default to createdAt] [enum: createdAt, updatedAt, dueDate, priority, title] |
| **sortOrder** | **kotlin.String**| Ordem da classificação | [optional] [default to desc] [enum: asc, desc] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **search** | **kotlin.String**| Buscar no título e descrição | [optional] |

### Return type

[**ListTasks200Response**](ListTasks200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="listTasksByStatus"></a>
# **listTasksByStatus**
> ListTasksByStatus200Response listTasksByStatus(status, page, limit)

Get tasks by status

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TasksApi()
val status : kotlin.String = status_example // kotlin.String | Status das tarefas
val page : kotlin.Int = 56 // kotlin.Int | Número da página
val limit : kotlin.Int = 56 // kotlin.Int | Itens por página
try {
    val result : ListTasksByStatus200Response = apiInstance.listTasksByStatus(status, page, limit)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TasksApi#listTasksByStatus")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TasksApi#listTasksByStatus")
    e.printStackTrace()
}
```

### Parameters
| **status** | **kotlin.String**| Status das tarefas | [enum: pending, in_progress, completed] |
| **page** | **kotlin.Int**| Número da página | [optional] [default to 1] |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **limit** | **kotlin.Int**| Itens por página | [optional] [default to 10] |

### Return type

[**ListTasksByStatus200Response**](ListTasksByStatus200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="updateTask"></a>
# **updateTask**
> UpdateTask200Response updateTask(id, updateTaskRequest)

Update a task

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = TasksApi()
val id : kotlin.String = id_example // kotlin.String | ID da tarefa
val updateTaskRequest : UpdateTaskRequest =  // UpdateTaskRequest | 
try {
    val result : UpdateTask200Response = apiInstance.updateTask(id, updateTaskRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TasksApi#updateTask")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TasksApi#updateTask")
    e.printStackTrace()
}
```

### Parameters
| **id** | **kotlin.String**| ID da tarefa | |
| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **updateTaskRequest** | [**UpdateTaskRequest**](UpdateTaskRequest.md)|  | |

### Return type

[**UpdateTask200Response**](UpdateTask200Response.md)

### Authorization


Configure bearerAuth:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

