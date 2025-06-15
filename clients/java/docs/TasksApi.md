# TasksApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
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
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TasksApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    TasksApi apiInstance = new TasksApi(defaultClient);
    String id = "id_example"; // String | ID da tarefa
    try {
      CompleteTask200Response result = apiInstance.completeTask(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TasksApi#completeTask");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| ID da tarefa | |

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
| **200** | Tarefa marcada como concluída |  -  |
| **400** | Tarefa já está concluída |  -  |
| **403** | Acesso negado |  -  |
| **404** | Tarefa não encontrada |  -  |

<a id="createTask"></a>
# **createTask**
> CreateTask201Response createTask(createTaskRequest)

Create a new task

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TasksApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    TasksApi apiInstance = new TasksApi(defaultClient);
    CreateTaskRequest createTaskRequest = new CreateTaskRequest(); // CreateTaskRequest | 
    try {
      CreateTask201Response result = apiInstance.createTask(createTaskRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TasksApi#createTask");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createTaskRequest** | [**CreateTaskRequest**](CreateTaskRequest.md)|  | |

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
| **201** | Tarefa criada com sucesso |  -  |
| **400** | Dados inválidos |  -  |

<a id="deleteTask"></a>
# **deleteTask**
> DeleteTask200Response deleteTask(id)

Delete a task

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TasksApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    TasksApi apiInstance = new TasksApi(defaultClient);
    String id = "id_example"; // String | ID da tarefa
    try {
      DeleteTask200Response result = apiInstance.deleteTask(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TasksApi#deleteTask");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| ID da tarefa | |

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
| **200** | Tarefa deletada com sucesso |  -  |
| **403** | Acesso negado |  -  |
| **404** | Tarefa não encontrada |  -  |

<a id="getTaskById"></a>
# **getTaskById**
> GetTaskById200Response getTaskById(id)

Get a specific task by ID

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TasksApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    TasksApi apiInstance = new TasksApi(defaultClient);
    String id = "id_example"; // String | ID da tarefa
    try {
      GetTaskById200Response result = apiInstance.getTaskById(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TasksApi#getTaskById");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| ID da tarefa | |

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
| **200** | Detalhes da tarefa |  -  |
| **403** | Acesso negado |  -  |
| **404** | Tarefa não encontrada |  -  |

<a id="getTaskStats"></a>
# **getTaskStats**
> GetTaskStats200Response getTaskStats()

Get task statistics

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TasksApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    TasksApi apiInstance = new TasksApi(defaultClient);
    try {
      GetTaskStats200Response result = apiInstance.getTaskStats();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TasksApi#getTaskStats");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
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
| **200** | Estatísticas das tarefas |  -  |

<a id="listTasks"></a>
# **listTasks**
> ListTasks200Response listTasks(status, priority, page, limit, sortBy, sortOrder, search)

Get all tasks for the logged-in user

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TasksApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    TasksApi apiInstance = new TasksApi(defaultClient);
    String status = "pending"; // String | Filtrar por status
    String priority = "low"; // String | Filtrar por prioridade
    Integer page = 1; // Integer | Número da página
    Integer limit = 10; // Integer | Itens por página
    String sortBy = "createdAt"; // String | Campo para ordenação
    String sortOrder = "asc"; // String | Ordem da classificação
    String search = "search_example"; // String | Buscar no título e descrição
    try {
      ListTasks200Response result = apiInstance.listTasks(status, priority, page, limit, sortBy, sortOrder, search);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TasksApi#listTasks");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **status** | **String**| Filtrar por status | [optional] [enum: pending, in_progress, completed] |
| **priority** | **String**| Filtrar por prioridade | [optional] [enum: low, medium, high] |
| **page** | **Integer**| Número da página | [optional] [default to 1] |
| **limit** | **Integer**| Itens por página | [optional] [default to 10] |
| **sortBy** | **String**| Campo para ordenação | [optional] [default to createdAt] [enum: createdAt, updatedAt, dueDate, priority, title] |
| **sortOrder** | **String**| Ordem da classificação | [optional] [default to desc] [enum: asc, desc] |
| **search** | **String**| Buscar no título e descrição | [optional] |

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
| **200** | Lista de tarefas |  -  |

<a id="listTasksByStatus"></a>
# **listTasksByStatus**
> ListTasksByStatus200Response listTasksByStatus(status, page, limit)

Get tasks by status

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TasksApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    TasksApi apiInstance = new TasksApi(defaultClient);
    String status = "pending"; // String | Status das tarefas
    Integer page = 1; // Integer | Número da página
    Integer limit = 10; // Integer | Itens por página
    try {
      ListTasksByStatus200Response result = apiInstance.listTasksByStatus(status, page, limit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TasksApi#listTasksByStatus");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **status** | **String**| Status das tarefas | [enum: pending, in_progress, completed] |
| **page** | **Integer**| Número da página | [optional] [default to 1] |
| **limit** | **Integer**| Itens por página | [optional] [default to 10] |

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
| **200** | Tarefas filtradas por status |  -  |
| **400** | Status inválido |  -  |

<a id="updateTask"></a>
# **updateTask**
> UpdateTask200Response updateTask(id, updateTaskRequest)

Update a task

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.auth.*;
import org.openapitools.client.models.*;
import org.openapitools.client.api.TasksApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");
    
    // Configure HTTP bearer authorization: bearerAuth
    HttpBearerAuth bearerAuth = (HttpBearerAuth) defaultClient.getAuthentication("bearerAuth");
    bearerAuth.setBearerToken("BEARER TOKEN");

    TasksApi apiInstance = new TasksApi(defaultClient);
    String id = "id_example"; // String | ID da tarefa
    UpdateTaskRequest updateTaskRequest = new UpdateTaskRequest(); // UpdateTaskRequest | 
    try {
      UpdateTask200Response result = apiInstance.updateTask(id, updateTaskRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TasksApi#updateTask");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| ID da tarefa | |
| **updateTaskRequest** | [**UpdateTaskRequest**](UpdateTaskRequest.md)|  | |

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
| **200** | Tarefa atualizada com sucesso |  -  |
| **400** | Dados inválidos |  -  |
| **403** | Acesso negado |  -  |
| **404** | Tarefa não encontrada |  -  |

