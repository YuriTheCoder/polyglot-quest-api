/**
 * Gamified Task Management API
 * API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CompleteQuest200Response from '../model/CompleteQuest200Response';
import CompleteQuestRequest from '../model/CompleteQuestRequest';
import CreateStoryFromTasks201Response from '../model/CreateStoryFromTasks201Response';
import CreateStoryFromTasksRequest from '../model/CreateStoryFromTasksRequest';
import GetBadges200Response from '../model/GetBadges200Response';
import GetGamificationDashboard200Response from '../model/GetGamificationDashboard200Response';
import GetGlobalStats200Response from '../model/GetGlobalStats200Response';
import GetLeaderboard200Response from '../model/GetLeaderboard200Response';
import GetStoryById200Response from '../model/GetStoryById200Response';
import ListStories200Response from '../model/ListStories200Response';
import ShareMilestone200Response from '../model/ShareMilestone200Response';
import ShareMilestoneRequest from '../model/ShareMilestoneRequest';
import UpdateGamificationPreferences200Response from '../model/UpdateGamificationPreferences200Response';
import UpdateGamificationPreferencesRequest from '../model/UpdateGamificationPreferencesRequest';

/**
* Gamification service.
* @module api/GamificationApi
* @version 1.0.0
*/
export default class GamificationApi {

    /**
    * Constructs a new GamificationApi. 
    * @alias module:api/GamificationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the completeQuest operation.
     * @callback module:api/GamificationApi~completeQuestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CompleteQuest200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Complete a quest (task) and get XP
     * @param {String} id ID da tarefa/quest
     * @param {Object} opts Optional parameters
     * @param {module:model/CompleteQuestRequest} [completeQuestRequest] 
     * @param {module:api/GamificationApi~completeQuestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CompleteQuest200Response}
     */
    completeQuest(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['completeQuestRequest'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling completeQuest");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CompleteQuest200Response;
      return this.apiClient.callApi(
        '/api/tasks/{id}/complete-quest', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createStoryFromTasks operation.
     * @callback module:api/GamificationApi~createStoryFromTasksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateStoryFromTasks201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate a story from tasks
     * @param {module:model/CreateStoryFromTasksRequest} createStoryFromTasksRequest 
     * @param {module:api/GamificationApi~createStoryFromTasksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateStoryFromTasks201Response}
     */
    createStoryFromTasks(createStoryFromTasksRequest, callback) {
      let postBody = createStoryFromTasksRequest;
      // verify the required parameter 'createStoryFromTasksRequest' is set
      if (createStoryFromTasksRequest === undefined || createStoryFromTasksRequest === null) {
        throw new Error("Missing the required parameter 'createStoryFromTasksRequest' when calling createStoryFromTasks");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateStoryFromTasks201Response;
      return this.apiClient.callApi(
        '/api/tasks/story', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBadges operation.
     * @callback module:api/GamificationApi~getBadgesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetBadges200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Listar badges disponíveis e conquistados
     * @param {module:api/GamificationApi~getBadgesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetBadges200Response}
     */
    getBadges(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetBadges200Response;
      return this.apiClient.callApi(
        '/api/gamification/badges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGamificationDashboard operation.
     * @callback module:api/GamificationApi~getGamificationDashboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGamificationDashboard200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Dashboard de gamificação do usuário
     * @param {module:api/GamificationApi~getGamificationDashboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGamificationDashboard200Response}
     */
    getGamificationDashboard(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetGamificationDashboard200Response;
      return this.apiClient.callApi(
        '/api/gamification/dashboard', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGlobalStats operation.
     * @callback module:api/GamificationApi~getGlobalStatsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetGlobalStats200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Estatísticas globais da plataforma
     * @param {module:api/GamificationApi~getGlobalStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetGlobalStats200Response}
     */
    getGlobalStats(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetGlobalStats200Response;
      return this.apiClient.callApi(
        '/api/gamification/global-stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLeaderboard operation.
     * @callback module:api/GamificationApi~getLeaderboardCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetLeaderboard200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obter leaderboard público
     * @param {Object} opts Optional parameters
     * @param {Number} [limit = 10)] Número de usuários no ranking
     * @param {module:model/String} [period = 'all')] Período do ranking
     * @param {module:api/GamificationApi~getLeaderboardCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetLeaderboard200Response}
     */
    getLeaderboard(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'period': opts['period']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetLeaderboard200Response;
      return this.apiClient.callApi(
        '/api/leaderboard', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStoryById operation.
     * @callback module:api/GamificationApi~getStoryByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetStoryById200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific story by ID
     * @param {String} id ID da história
     * @param {module:api/GamificationApi~getStoryByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetStoryById200Response}
     */
    getStoryById(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getStoryById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetStoryById200Response;
      return this.apiClient.callApi(
        '/api/tasks/stories/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listStories operation.
     * @callback module:api/GamificationApi~listStoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListStories200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all stories for the user
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [active = 'true')] Filtrar histórias ativas
     * @param {Number} [limit = 10)] Limite de resultados
     * @param {Number} [page = 1)] Página
     * @param {module:api/GamificationApi~listStoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListStories200Response}
     */
    listStories(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'active': opts['active'],
        'limit': opts['limit'],
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListStories200Response;
      return this.apiClient.callApi(
        '/api/tasks/stories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the shareMilestone operation.
     * @callback module:api/GamificationApi~shareMilestoneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShareMilestone200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Compartilhar conquista manualmente
     * @param {module:model/ShareMilestoneRequest} shareMilestoneRequest 
     * @param {module:api/GamificationApi~shareMilestoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShareMilestone200Response}
     */
    shareMilestone(shareMilestoneRequest, callback) {
      let postBody = shareMilestoneRequest;
      // verify the required parameter 'shareMilestoneRequest' is set
      if (shareMilestoneRequest === undefined || shareMilestoneRequest === null) {
        throw new Error("Missing the required parameter 'shareMilestoneRequest' when calling shareMilestone");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ShareMilestone200Response;
      return this.apiClient.callApi(
        '/api/gamification/share', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGamificationPreferences operation.
     * @callback module:api/GamificationApi~updateGamificationPreferencesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdateGamificationPreferences200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualizar preferências de gamificação
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateGamificationPreferencesRequest} [updateGamificationPreferencesRequest] 
     * @param {module:api/GamificationApi~updateGamificationPreferencesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UpdateGamificationPreferences200Response}
     */
    updateGamificationPreferences(opts, callback) {
      opts = opts || {};
      let postBody = opts['updateGamificationPreferencesRequest'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UpdateGamificationPreferences200Response;
      return this.apiClient.callApi(
        '/api/gamification/preferences', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
