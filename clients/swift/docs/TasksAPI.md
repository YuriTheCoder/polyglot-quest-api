# TasksAPI

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeTask**](TasksAPI.md#completetask) | **PATCH** /api/tasks/{id}/complete | Mark a task as complete
[**createTask**](TasksAPI.md#createtask) | **POST** /api/tasks | Create a new task
[**deleteTask**](TasksAPI.md#deletetask) | **DELETE** /api/tasks/{id} | Delete a task
[**getTaskById**](TasksAPI.md#gettaskbyid) | **GET** /api/tasks/{id} | Get a specific task by ID
[**getTaskStats**](TasksAPI.md#gettaskstats) | **GET** /api/tasks/stats | Get task statistics
[**listTasks**](TasksAPI.md#listtasks) | **GET** /api/tasks | Get all tasks for the logged-in user
[**listTasksByStatus**](TasksAPI.md#listtasksbystatus) | **GET** /api/tasks/status/{status} | Get tasks by status
[**updateTask**](TasksAPI.md#updatetask) | **PUT** /api/tasks/{id} | Update a task


# **completeTask**
```swift
    open class func completeTask(id: String, completion: @escaping (_ data: CompleteTask200Response?, _ error: Error?) -> Void)
```

Mark a task as complete

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let id = "id_example" // String | ID da tarefa

// Mark a task as complete
TasksAPI.completeTask(id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** | ID da tarefa | 

### Return type

[**CompleteTask200Response**](CompleteTask200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTask**
```swift
    open class func createTask(createTaskRequest: CreateTaskRequest, completion: @escaping (_ data: CreateTask201Response?, _ error: Error?) -> Void)
```

Create a new task

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let createTaskRequest = createTask_request(title: "title_example", description: "description_example", status: "status_example", priority: "priority_example", dueDate: Date(), tags: ["tags_example"]) // CreateTaskRequest | 

// Create a new task
TasksAPI.createTask(createTaskRequest: createTaskRequest) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTaskRequest** | [**CreateTaskRequest**](CreateTaskRequest.md) |  | 

### Return type

[**CreateTask201Response**](CreateTask201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTask**
```swift
    open class func deleteTask(id: String, completion: @escaping (_ data: DeleteTask200Response?, _ error: Error?) -> Void)
```

Delete a task

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let id = "id_example" // String | ID da tarefa

// Delete a task
TasksAPI.deleteTask(id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** | ID da tarefa | 

### Return type

[**DeleteTask200Response**](DeleteTask200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTaskById**
```swift
    open class func getTaskById(id: String, completion: @escaping (_ data: GetTaskById200Response?, _ error: Error?) -> Void)
```

Get a specific task by ID

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let id = "id_example" // String | ID da tarefa

// Get a specific task by ID
TasksAPI.getTaskById(id: id) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** | ID da tarefa | 

### Return type

[**GetTaskById200Response**](GetTaskById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTaskStats**
```swift
    open class func getTaskStats(completion: @escaping (_ data: GetTaskStats200Response?, _ error: Error?) -> Void)
```

Get task statistics

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient


// Get task statistics
TasksAPI.getTaskStats() { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTasks**
```swift
    open class func listTasks(status: Status_listTasks? = nil, priority: Priority_listTasks? = nil, page: Int? = nil, limit: Int? = nil, sortBy: SortBy_listTasks? = nil, sortOrder: SortOrder_listTasks? = nil, search: String? = nil, completion: @escaping (_ data: ListTasks200Response?, _ error: Error?) -> Void)
```

Get all tasks for the logged-in user

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let status = "status_example" // String | Filtrar por status (optional)
let priority = "priority_example" // String | Filtrar por prioridade (optional)
let page = 987 // Int | Número da página (optional) (default to 1)
let limit = 987 // Int | Itens por página (optional) (default to 10)
let sortBy = "sortBy_example" // String | Campo para ordenação (optional) (default to .createdat)
let sortOrder = "sortOrder_example" // String | Ordem da classificação (optional) (default to .desc)
let search = "search_example" // String | Buscar no título e descrição (optional)

// Get all tasks for the logged-in user
TasksAPI.listTasks(status: status, priority: priority, page: page, limit: limit, sortBy: sortBy, sortOrder: sortOrder, search: search) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String** | Filtrar por status | [optional] 
 **priority** | **String** | Filtrar por prioridade | [optional] 
 **page** | **Int** | Número da página | [optional] [default to 1]
 **limit** | **Int** | Itens por página | [optional] [default to 10]
 **sortBy** | **String** | Campo para ordenação | [optional] [default to .createdat]
 **sortOrder** | **String** | Ordem da classificação | [optional] [default to .desc]
 **search** | **String** | Buscar no título e descrição | [optional] 

### Return type

[**ListTasks200Response**](ListTasks200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTasksByStatus**
```swift
    open class func listTasksByStatus(status: Status_listTasksByStatus, page: Int? = nil, limit: Int? = nil, completion: @escaping (_ data: ListTasksByStatus200Response?, _ error: Error?) -> Void)
```

Get tasks by status

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let status = "status_example" // String | Status das tarefas
let page = 987 // Int | Número da página (optional) (default to 1)
let limit = 987 // Int | Itens por página (optional) (default to 10)

// Get tasks by status
TasksAPI.listTasksByStatus(status: status, page: page, limit: limit) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String** | Status das tarefas | 
 **page** | **Int** | Número da página | [optional] [default to 1]
 **limit** | **Int** | Itens por página | [optional] [default to 10]

### Return type

[**ListTasksByStatus200Response**](ListTasksByStatus200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateTask**
```swift
    open class func updateTask(id: String, updateTaskRequest: UpdateTaskRequest, completion: @escaping (_ data: UpdateTask200Response?, _ error: Error?) -> Void)
```

Update a task

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let id = "id_example" // String | ID da tarefa
let updateTaskRequest = updateTask_request(title: "title_example", description: "description_example", status: "status_example", priority: "priority_example", dueDate: Date(), tags: ["tags_example"]) // UpdateTaskRequest | 

// Update a task
TasksAPI.updateTask(id: id, updateTaskRequest: updateTaskRequest) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String** | ID da tarefa | 
 **updateTaskRequest** | [**UpdateTaskRequest**](UpdateTaskRequest.md) |  | 

### Return type

[**UpdateTask200Response**](UpdateTask200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

