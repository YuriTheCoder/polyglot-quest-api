//
// GamificationAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class GamificationAPI {

    /**
     Complete a quest (task) and get XP
     
     - parameter id: (path) ID da tarefa/quest 
     - parameter completeQuestRequest: (body)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func completeQuest(id: String, completeQuestRequest: CompleteQuestRequest? = nil, apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: CompleteQuest200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return completeQuestWithRequestBuilder(id: id, completeQuestRequest: completeQuestRequest).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Complete a quest (task) and get XP
     - POST /api/tasks/{id}/complete-quest
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - parameter id: (path) ID da tarefa/quest 
     - parameter completeQuestRequest: (body)  (optional)
     - returns: RequestBuilder<CompleteQuest200Response> 
     */
    open class func completeQuestWithRequestBuilder(id: String, completeQuestRequest: CompleteQuestRequest? = nil) -> RequestBuilder<CompleteQuest200Response> {
        var localVariablePath = "/api/tasks/{id}/complete-quest"
        let idPreEscape = "\(APIHelper.mapValueToPathItem(id))"
        let idPostEscape = idPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{id}", with: idPostEscape, options: .literal, range: nil)
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: completeQuestRequest)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "Content-Type": "application/json",
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<CompleteQuest200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Generate a story from tasks
     
     - parameter createStoryFromTasksRequest: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func createStoryFromTasks(createStoryFromTasksRequest: CreateStoryFromTasksRequest, apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: CreateStoryFromTasks201Response?, _ error: Error?) -> Void)) -> RequestTask {
        return createStoryFromTasksWithRequestBuilder(createStoryFromTasksRequest: createStoryFromTasksRequest).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Generate a story from tasks
     - POST /api/tasks/story
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - parameter createStoryFromTasksRequest: (body)  
     - returns: RequestBuilder<CreateStoryFromTasks201Response> 
     */
    open class func createStoryFromTasksWithRequestBuilder(createStoryFromTasksRequest: CreateStoryFromTasksRequest) -> RequestBuilder<CreateStoryFromTasks201Response> {
        let localVariablePath = "/api/tasks/story"
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: createStoryFromTasksRequest)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "Content-Type": "application/json",
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<CreateStoryFromTasks201Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Listar badges disponíveis e conquistados
     
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func getBadges(apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: GetBadges200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return getBadgesWithRequestBuilder().execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Listar badges disponíveis e conquistados
     - GET /api/gamification/badges
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - returns: RequestBuilder<GetBadges200Response> 
     */
    open class func getBadgesWithRequestBuilder() -> RequestBuilder<GetBadges200Response> {
        let localVariablePath = "/api/gamification/badges"
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<GetBadges200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Dashboard de gamificação do usuário
     
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func getGamificationDashboard(apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: GetGamificationDashboard200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return getGamificationDashboardWithRequestBuilder().execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Dashboard de gamificação do usuário
     - GET /api/gamification/dashboard
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - returns: RequestBuilder<GetGamificationDashboard200Response> 
     */
    open class func getGamificationDashboardWithRequestBuilder() -> RequestBuilder<GetGamificationDashboard200Response> {
        let localVariablePath = "/api/gamification/dashboard"
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<GetGamificationDashboard200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Estatísticas globais da plataforma
     
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func getGlobalStats(apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: GetGlobalStats200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return getGlobalStatsWithRequestBuilder().execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Estatísticas globais da plataforma
     - GET /api/gamification/global-stats
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - returns: RequestBuilder<GetGlobalStats200Response> 
     */
    open class func getGlobalStatsWithRequestBuilder() -> RequestBuilder<GetGlobalStats200Response> {
        let localVariablePath = "/api/gamification/global-stats"
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<GetGlobalStats200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     * enum for parameter period
     */
    public enum Period_getLeaderboard: String, CaseIterable {
        case all = "all"
        case weekly = "weekly"
        case monthly = "monthly"
    }

    /**
     Obter leaderboard público
     
     - parameter limit: (query) Número de usuários no ranking (optional, default to 10)
     - parameter period: (query) Período do ranking (optional, default to .all)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func getLeaderboard(limit: Int? = nil, period: Period_getLeaderboard? = nil, apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: GetLeaderboard200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return getLeaderboardWithRequestBuilder(limit: limit, period: period).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Obter leaderboard público
     - GET /api/leaderboard
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - parameter limit: (query) Número de usuários no ranking (optional, default to 10)
     - parameter period: (query) Período do ranking (optional, default to .all)
     - returns: RequestBuilder<GetLeaderboard200Response> 
     */
    open class func getLeaderboardWithRequestBuilder(limit: Int? = nil, period: Period_getLeaderboard? = nil) -> RequestBuilder<GetLeaderboard200Response> {
        let localVariablePath = "/api/leaderboard"
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)
        localVariableUrlComponents?.queryItems = APIHelper.mapValuesToQueryItems([
            "limit": (wrappedValue: limit?.encodeToJSON(), isExplode: true),
            "period": (wrappedValue: period?.encodeToJSON(), isExplode: true),
        ])

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<GetLeaderboard200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Get a specific story by ID
     
     - parameter id: (path) ID da história 
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func getStoryById(id: String, apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: GetStoryById200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return getStoryByIdWithRequestBuilder(id: id).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get a specific story by ID
     - GET /api/tasks/stories/{id}
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - parameter id: (path) ID da história 
     - returns: RequestBuilder<GetStoryById200Response> 
     */
    open class func getStoryByIdWithRequestBuilder(id: String) -> RequestBuilder<GetStoryById200Response> {
        var localVariablePath = "/api/tasks/stories/{id}"
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

        let localVariableRequestBuilder: RequestBuilder<GetStoryById200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     * enum for parameter active
     */
    public enum Active_listStories: String, CaseIterable {
        case _true = "true"
        case _false = "false"
    }

    /**
     List all stories for the user
     
     - parameter active: (query) Filtrar histórias ativas (optional, default to ._true)
     - parameter limit: (query) Limite de resultados (optional, default to 10)
     - parameter page: (query) Página (optional, default to 1)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func listStories(active: Active_listStories? = nil, limit: Int? = nil, page: Int? = nil, apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: ListStories200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return listStoriesWithRequestBuilder(active: active, limit: limit, page: page).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     List all stories for the user
     - GET /api/tasks/stories
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - parameter active: (query) Filtrar histórias ativas (optional, default to ._true)
     - parameter limit: (query) Limite de resultados (optional, default to 10)
     - parameter page: (query) Página (optional, default to 1)
     - returns: RequestBuilder<ListStories200Response> 
     */
    open class func listStoriesWithRequestBuilder(active: Active_listStories? = nil, limit: Int? = nil, page: Int? = nil) -> RequestBuilder<ListStories200Response> {
        let localVariablePath = "/api/tasks/stories"
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        var localVariableUrlComponents = URLComponents(string: localVariableURLString)
        localVariableUrlComponents?.queryItems = APIHelper.mapValuesToQueryItems([
            "active": (wrappedValue: active?.encodeToJSON(), isExplode: true),
            "limit": (wrappedValue: limit?.encodeToJSON(), isExplode: true),
            "page": (wrappedValue: page?.encodeToJSON(), isExplode: true),
        ])

        let localVariableNillableHeaders: [String: Any?] = [
            :
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<ListStories200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Compartilhar conquista manualmente
     
     - parameter shareMilestoneRequest: (body)  
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func shareMilestone(shareMilestoneRequest: ShareMilestoneRequest, apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: ShareMilestone200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return shareMilestoneWithRequestBuilder(shareMilestoneRequest: shareMilestoneRequest).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Compartilhar conquista manualmente
     - POST /api/gamification/share
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - parameter shareMilestoneRequest: (body)  
     - returns: RequestBuilder<ShareMilestone200Response> 
     */
    open class func shareMilestoneWithRequestBuilder(shareMilestoneRequest: ShareMilestoneRequest) -> RequestBuilder<ShareMilestone200Response> {
        let localVariablePath = "/api/gamification/share"
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: shareMilestoneRequest)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "Content-Type": "application/json",
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<ShareMilestone200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Atualizar preferências de gamificação
     
     - parameter updateGamificationPreferencesRequest: (body)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func updateGamificationPreferences(updateGamificationPreferencesRequest: UpdateGamificationPreferencesRequest? = nil, apiResponseQueue: DispatchQueue = GamifiedTasksClientAPI.apiResponseQueue, completion: @escaping ((_ data: UpdateGamificationPreferences200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return updateGamificationPreferencesWithRequestBuilder(updateGamificationPreferencesRequest: updateGamificationPreferencesRequest).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Atualizar preferências de gamificação
     - PUT /api/gamification/preferences
     - Bearer Token:
       - type: http
       - name: bearerAuth
     - parameter updateGamificationPreferencesRequest: (body)  (optional)
     - returns: RequestBuilder<UpdateGamificationPreferences200Response> 
     */
    open class func updateGamificationPreferencesWithRequestBuilder(updateGamificationPreferencesRequest: UpdateGamificationPreferencesRequest? = nil) -> RequestBuilder<UpdateGamificationPreferences200Response> {
        let localVariablePath = "/api/gamification/preferences"
        let localVariableURLString = GamifiedTasksClientAPI.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: updateGamificationPreferencesRequest)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "Content-Type": "application/json",
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<UpdateGamificationPreferences200Response>.Type = GamifiedTasksClientAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "PUT", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }
}
