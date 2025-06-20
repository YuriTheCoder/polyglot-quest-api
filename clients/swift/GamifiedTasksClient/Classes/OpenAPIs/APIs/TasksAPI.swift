//
// TasksAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class TasksAPI {

    /**
     Mark a task as complete
     
     - parameter id: (path) ID da tarefa 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func completeTask(id: String, apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: CompleteTask200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return completeTaskWithRequestBuilder(id: id).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Mark a task as complete
     - PATCH /api/tasks/{id}/complete
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - parameter id: (path) ID da tarefa 
     - returns: RequestBuilder<CompleteTask200Response> 
     */
    open class func completeTaskWithRequestBuilder(id: String) -> RequestBuilder<CompleteTask200Response> {
        var localVariablePath = "/api/tasks/{id}/complete"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<CompleteTask200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "PATCH", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Create a new task
     
     - parameter createTaskRequest: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func createTask(createTaskRequest: CreateTaskRequest, apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: CreateTask201Response?, _ error: Error?) -> Void)) -> RequestTask {
        return createTaskWithRequestBuilder(createTaskRequest: createTaskRequest).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Create a new task
     - POST /api/tasks
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - parameter createTaskRequest: (body)  
     - returns: RequestBuilder<CreateTask201Response> 
     */
    open class func createTaskWithRequestBuilder(createTaskRequest: CreateTaskRequest) -> RequestBuilder<CreateTask201Response> {
        let localVariablePath = "/api/tasks"
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: createTaskRequest)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "Content-Type": "application/json",
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<CreateTask201Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Delete a task
     
     - parameter id: (path) ID da tarefa 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func deleteTask(id: String, apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: DeleteTask200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return deleteTaskWithRequestBuilder(id: id).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Delete a task
     - DELETE /api/tasks/{id}
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - parameter id: (path) ID da tarefa 
     - returns: RequestBuilder<DeleteTask200Response> 
     */
    open class func deleteTaskWithRequestBuilder(id: String) -> RequestBuilder<DeleteTask200Response> {
        var localVariablePath = "/api/tasks/{id}"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<DeleteTask200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "DELETE", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Get a specific task by ID
     
     - parameter id: (path) ID da tarefa 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func getTaskById(id: String, apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: GetTaskById200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return getTaskByIdWithRequestBuilder(id: id).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get a specific task by ID
     - GET /api/tasks/{id}
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - parameter id: (path) ID da tarefa 
     - returns: RequestBuilder<GetTaskById200Response> 
     */
    open class func getTaskByIdWithRequestBuilder(id: String) -> RequestBuilder<GetTaskById200Response> {
        var localVariablePath = "/api/tasks/{id}"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<GetTaskById200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Get task statistics
     
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func getTaskStats(apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: GetTaskStats200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return getTaskStatsWithRequestBuilder().execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get task statistics
     - GET /api/tasks/stats
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - returns: RequestBuilder<GetTaskStats200Response> 
     */
    open class func getTaskStatsWithRequestBuilder() -> RequestBuilder<GetTaskStats200Response> {
        let localVariablePath = "/api/tasks/stats"
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<GetTaskStats200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     * enum for parameter status
     */
    public enum Status_listTasks: String, CaseIterable {
        case pending = "pending"
        case inProgress = "in_progress"
        case completed = "completed"
    }

    /**
     * enum for parameter priority
     */
    public enum Priority_listTasks: String, CaseIterable {
        case low = "low"
        case medium = "medium"
        case high = "high"
    }

    /**
     * enum for parameter sortBy
     */
    public enum SortBy_listTasks: String, CaseIterable {
        case createdat = "createdAt"
        case updatedat = "updatedAt"
        case duedate = "dueDate"
        case priority = "priority"
        case title = "title"
    }

    /**
     * enum for parameter sortOrder
     */
    public enum SortOrder_listTasks: String, CaseIterable {
        case asc = "asc"
        case desc = "desc"
    }

    /**
     Get all tasks for the logged-in user
     
     - parameter status: (query) Filtrar por status (optional)
     - parameter priority: (query) Filtrar por prioridade (optional)
     - parameter page: (query) Número da página (optional, default to 1)
     - parameter limit: (query) Itens por página (optional, default to 10)
     - parameter sortBy: (query) Campo para ordenação (optional, default to .createdat)
     - parameter sortOrder: (query) Ordem da classificação (optional, default to .desc)
     - parameter search: (query) Buscar no título e descrição (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func listTasks(status: Status_listTasks? = nil, priority: Priority_listTasks? = nil, page: Int? = nil, limit: Int? = nil, sortBy: SortBy_listTasks? = nil, sortOrder: SortOrder_listTasks? = nil, search: String? = nil, apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: ListTasks200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return listTasksWithRequestBuilder(status: status, priority: priority, page: page, limit: limit, sortBy: sortBy, sortOrder: sortOrder, search: search).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get all tasks for the logged-in user
     - GET /api/tasks
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - parameter status: (query) Filtrar por status (optional)
     - parameter priority: (query) Filtrar por prioridade (optional)
     - parameter page: (query) Número da página (optional, default to 1)
     - parameter limit: (query) Itens por página (optional, default to 10)
     - parameter sortBy: (query) Campo para ordenação (optional, default to .createdat)
     - parameter sortOrder: (query) Ordem da classificação (optional, default to .desc)
     - parameter search: (query) Buscar no título e descrição (optional)
     - returns: RequestBuilder<ListTasks200Response> 
     */
    open class func listTasksWithRequestBuilder(status: Status_listTasks? = nil, priority: Priority_listTasks? = nil, page: Int? = nil, limit: Int? = nil, sortBy: SortBy_listTasks? = nil, sortOrder: SortOrder_listTasks? = nil, search: String? = nil) -> RequestBuilder<ListTasks200Response> {
        let localVariablePath = "/api/tasks"
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)
        localVariableUrlComponents?.queryItems = APIHelper.mapValuesToQueryItems([
            "status": (wrappedValue: status?.encodeToJSON(), isExplode: true),
            "priority": (wrappedValue: priority?.encodeToJSON(), isExplode: true),
            "page": (wrappedValue: page?.encodeToJSON(), isExplode: true),
            "limit": (wrappedValue: limit?.encodeToJSON(), isExplode: true),
            "sortBy": (wrappedValue: sortBy?.encodeToJSON(), isExplode: true),
            "sortOrder": (wrappedValue: sortOrder?.encodeToJSON(), isExplode: true),
            "search": (wrappedValue: search?.encodeToJSON(), isExplode: true),
        ])

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<ListTasks200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     * enum for parameter status
     */
    public enum Status_listTasksByStatus: String, CaseIterable {
        case pending = "pending"
        case inProgress = "in_progress"
        case completed = "completed"
    }

    /**
     Get tasks by status
     
     - parameter status: (path) Status das tarefas 
     - parameter page: (query) Número da página (optional, default to 1)
     - parameter limit: (query) Itens por página (optional, default to 10)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func listTasksByStatus(status: Status_listTasksByStatus, page: Int? = nil, limit: Int? = nil, apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: ListTasksByStatus200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return listTasksByStatusWithRequestBuilder(status: status, page: page, limit: limit).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get tasks by status
     - GET /api/tasks/status/{status}
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - parameter status: (path) Status das tarefas 
     - parameter page: (query) Número da página (optional, default to 1)
     - parameter limit: (query) Itens por página (optional, default to 10)
     - returns: RequestBuilder<ListTasksByStatus200Response> 
     */
    open class func listTasksByStatusWithRequestBuilder(status: Status_listTasksByStatus, page: Int? = nil, limit: Int? = nil) -> RequestBuilder<ListTasksByStatus200Response> {
        var localVariablePath = "/api/tasks/status/{status}"
        let statusPreEscape = "\(status.rawValue)"
        let statusPostEscape = statusPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{status}", with: statusPostEscape, options: .literal, range: nil)
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)
        localVariableUrlComponents?.queryItems = APIHelper.mapValuesToQueryItems([
            "page": (wrappedValue: page?.encodeToJSON(), isExplode: true),
            "limit": (wrappedValue: limit?.encodeToJSON(), isExplode: true),
        ])

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<ListTasksByStatus200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Update a task
     
     - parameter id: (path) ID da tarefa 
     - parameter updateTaskRequest: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func updateTask(id: String, updateTaskRequest: UpdateTaskRequest, apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: UpdateTask200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return updateTaskWithRequestBuilder(id: id, updateTaskRequest: updateTaskRequest).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Update a task
     - PUT /api/tasks/{id}
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - parameter id: (path) ID da tarefa 
     - parameter updateTaskRequest: (body)  
     - returns: RequestBuilder<UpdateTask200Response> 
     */
    open class func updateTaskWithRequestBuilder(id: String, updateTaskRequest: UpdateTaskRequest) -> RequestBuilder<UpdateTask200Response> {
        var localVariablePath = "/api/tasks/{id}"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: updateTaskRequest)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "Content-Type": "application/json",
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<UpdateTask200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "PUT", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }
}
