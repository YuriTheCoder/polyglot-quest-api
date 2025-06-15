# GamifiedTasks.Client.Api.TasksApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**CompleteTask**](TasksApi.md#completetask) | **PATCH** /api/tasks/{id}/complete | Mark a task as complete |
| [**CreateTask**](TasksApi.md#createtask) | **POST** /api/tasks | Create a new task |
| [**DeleteTask**](TasksApi.md#deletetask) | **DELETE** /api/tasks/{id} | Delete a task |
| [**GetTaskById**](TasksApi.md#gettaskbyid) | **GET** /api/tasks/{id} | Get a specific task by ID |
| [**GetTaskStats**](TasksApi.md#gettaskstats) | **GET** /api/tasks/stats | Get task statistics |
| [**ListTasks**](TasksApi.md#listtasks) | **GET** /api/tasks | Get all tasks for the logged-in user |
| [**ListTasksByStatus**](TasksApi.md#listtasksbystatus) | **GET** /api/tasks/status/{status} | Get tasks by status |
| [**UpdateTask**](TasksApi.md#updatetask) | **PUT** /api/tasks/{id} | Update a task |

<a id="completetask"></a>
# **CompleteTask**
> CompleteTask200Response CompleteTask (string id)

Mark a task as complete

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class CompleteTaskExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new TasksApi(config);
            var id = "id_example";  // string | ID da tarefa

            try
            {
                // Mark a task as complete
                CompleteTask200Response result = apiInstance.CompleteTask(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TasksApi.CompleteTask: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CompleteTaskWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Mark a task as complete
    ApiResponse<CompleteTask200Response> response = apiInstance.CompleteTaskWithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TasksApi.CompleteTaskWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | ID da tarefa |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="createtask"></a>
# **CreateTask**
> CreateTask201Response CreateTask (CreateTaskRequest createTaskRequest)

Create a new task

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class CreateTaskExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new TasksApi(config);
            var createTaskRequest = new CreateTaskRequest(); // CreateTaskRequest | 

            try
            {
                // Create a new task
                CreateTask201Response result = apiInstance.CreateTask(createTaskRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TasksApi.CreateTask: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the CreateTaskWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Create a new task
    ApiResponse<CreateTask201Response> response = apiInstance.CreateTaskWithHttpInfo(createTaskRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TasksApi.CreateTaskWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **createTaskRequest** | [**CreateTaskRequest**](CreateTaskRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="deletetask"></a>
# **DeleteTask**
> DeleteTask200Response DeleteTask (string id)

Delete a task

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class DeleteTaskExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new TasksApi(config);
            var id = "id_example";  // string | ID da tarefa

            try
            {
                // Delete a task
                DeleteTask200Response result = apiInstance.DeleteTask(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TasksApi.DeleteTask: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the DeleteTaskWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete a task
    ApiResponse<DeleteTask200Response> response = apiInstance.DeleteTaskWithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TasksApi.DeleteTaskWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | ID da tarefa |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="gettaskbyid"></a>
# **GetTaskById**
> GetTaskById200Response GetTaskById (string id)

Get a specific task by ID

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class GetTaskByIdExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new TasksApi(config);
            var id = "id_example";  // string | ID da tarefa

            try
            {
                // Get a specific task by ID
                GetTaskById200Response result = apiInstance.GetTaskById(id);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TasksApi.GetTaskById: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetTaskByIdWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get a specific task by ID
    ApiResponse<GetTaskById200Response> response = apiInstance.GetTaskByIdWithHttpInfo(id);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TasksApi.GetTaskByIdWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | ID da tarefa |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="gettaskstats"></a>
# **GetTaskStats**
> GetTaskStats200Response GetTaskStats ()

Get task statistics

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class GetTaskStatsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new TasksApi(config);

            try
            {
                // Get task statistics
                GetTaskStats200Response result = apiInstance.GetTaskStats();
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TasksApi.GetTaskStats: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the GetTaskStatsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get task statistics
    ApiResponse<GetTaskStats200Response> response = apiInstance.GetTaskStatsWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TasksApi.GetTaskStatsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listtasks"></a>
# **ListTasks**
> ListTasks200Response ListTasks (string status = null, string priority = null, int page = null, int limit = null, string sortBy = null, string sortOrder = null, string search = null)

Get all tasks for the logged-in user

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class ListTasksExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new TasksApi(config);
            var status = "pending";  // string | Filtrar por status (optional) 
            var priority = "low";  // string | Filtrar por prioridade (optional) 
            var page = 1;  // int | Número da página (optional)  (default to 1)
            var limit = 10;  // int | Itens por página (optional)  (default to 10)
            var sortBy = "createdAt";  // string | Campo para ordenação (optional)  (default to createdAt)
            var sortOrder = "asc";  // string | Ordem da classificação (optional)  (default to desc)
            var search = "search_example";  // string | Buscar no título e descrição (optional) 

            try
            {
                // Get all tasks for the logged-in user
                ListTasks200Response result = apiInstance.ListTasks(status, priority, page, limit, sortBy, sortOrder, search);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TasksApi.ListTasks: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListTasksWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get all tasks for the logged-in user
    ApiResponse<ListTasks200Response> response = apiInstance.ListTasksWithHttpInfo(status, priority, page, limit, sortBy, sortOrder, search);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TasksApi.ListTasksWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **status** | **string** | Filtrar por status | [optional]  |
| **priority** | **string** | Filtrar por prioridade | [optional]  |
| **page** | **int** | Número da página | [optional] [default to 1] |
| **limit** | **int** | Itens por página | [optional] [default to 10] |
| **sortBy** | **string** | Campo para ordenação | [optional] [default to createdAt] |
| **sortOrder** | **string** | Ordem da classificação | [optional] [default to desc] |
| **search** | **string** | Buscar no título e descrição | [optional]  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="listtasksbystatus"></a>
# **ListTasksByStatus**
> ListTasksByStatus200Response ListTasksByStatus (string status, int page = null, int limit = null)

Get tasks by status

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class ListTasksByStatusExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new TasksApi(config);
            var status = "pending";  // string | Status das tarefas
            var page = 1;  // int | Número da página (optional)  (default to 1)
            var limit = 10;  // int | Itens por página (optional)  (default to 10)

            try
            {
                // Get tasks by status
                ListTasksByStatus200Response result = apiInstance.ListTasksByStatus(status, page, limit);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TasksApi.ListTasksByStatus: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the ListTasksByStatusWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get tasks by status
    ApiResponse<ListTasksByStatus200Response> response = apiInstance.ListTasksByStatusWithHttpInfo(status, page, limit);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TasksApi.ListTasksByStatusWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **status** | **string** | Status das tarefas |  |
| **page** | **int** | Número da página | [optional] [default to 1] |
| **limit** | **int** | Itens por página | [optional] [default to 10] |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

<a id="updatetask"></a>
# **UpdateTask**
> UpdateTask200Response UpdateTask (string id, UpdateTaskRequest updateTaskRequest)

Update a task

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using GamifiedTasks.Client.Api;
using GamifiedTasks.Client.Client;
using GamifiedTasks.Client.Model;

namespace Example
{
    public class UpdateTaskExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "http://localhost:3000";
            // Configure Bearer token for authorization: bearerAuth
            config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new TasksApi(config);
            var id = "id_example";  // string | ID da tarefa
            var updateTaskRequest = new UpdateTaskRequest(); // UpdateTaskRequest | 

            try
            {
                // Update a task
                UpdateTask200Response result = apiInstance.UpdateTask(id, updateTaskRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling TasksApi.UpdateTask: " + e.Message);
                Debug.Print("Status Code: " + e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

#### Using the UpdateTaskWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Update a task
    ApiResponse<UpdateTask200Response> response = apiInstance.UpdateTaskWithHttpInfo(id, updateTaskRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TasksApi.UpdateTaskWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **id** | **string** | ID da tarefa |  |
| **updateTaskRequest** | [**UpdateTaskRequest**](UpdateTaskRequest.md) |  |  |

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

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

