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


import ApiClient from './ApiClient';
import ChangeUserPassword200Response from './model/ChangeUserPassword200Response';
import ChangeUserPasswordRequest from './model/ChangeUserPasswordRequest';
import CompleteQuest200Response from './model/CompleteQuest200Response';
import CompleteQuest200ResponseData from './model/CompleteQuest200ResponseData';
import CompleteQuest200ResponseDataGamification from './model/CompleteQuest200ResponseDataGamification';
import CompleteQuest200ResponseDataTask from './model/CompleteQuest200ResponseDataTask';
import CompleteQuestRequest from './model/CompleteQuestRequest';
import CompleteTask200Response from './model/CompleteTask200Response';
import CreateStoryFromTasks201Response from './model/CreateStoryFromTasks201Response';
import CreateStoryFromTasks201ResponseData from './model/CreateStoryFromTasks201ResponseData';
import CreateStoryFromTasks201ResponseDataQuestsInner from './model/CreateStoryFromTasks201ResponseDataQuestsInner';
import CreateStoryFromTasks201ResponseDataStory from './model/CreateStoryFromTasks201ResponseDataStory';
import CreateStoryFromTasksRequest from './model/CreateStoryFromTasksRequest';
import CreateStoryFromTasksRequestUserPreferences from './model/CreateStoryFromTasksRequestUserPreferences';
import CreateTask201Response from './model/CreateTask201Response';
import CreateTask201ResponseData from './model/CreateTask201ResponseData';
import CreateTaskRequest from './model/CreateTaskRequest';
import DeleteTask200Response from './model/DeleteTask200Response';
import DeleteUser200Response from './model/DeleteUser200Response';
import Error from './model/Error';
import GetAllUsers200Response from './model/GetAllUsers200Response';
import GetAllUsers200ResponseData from './model/GetAllUsers200ResponseData';
import GetAllUsers200ResponseDataPagination from './model/GetAllUsers200ResponseDataPagination';
import GetBadges200Response from './model/GetBadges200Response';
import GetBadges200ResponseData from './model/GetBadges200ResponseData';
import GetBadges200ResponseDataEarnedInner from './model/GetBadges200ResponseDataEarnedInner';
import GetGamificationDashboard200Response from './model/GetGamificationDashboard200Response';
import GetGamificationDashboard200ResponseData from './model/GetGamificationDashboard200ResponseData';
import GetGamificationDashboard200ResponseDataStats from './model/GetGamificationDashboard200ResponseDataStats';
import GetGamificationDashboard200ResponseDataUser from './model/GetGamificationDashboard200ResponseDataUser';
import GetGlobalStats200Response from './model/GetGlobalStats200Response';
import GetGlobalStats200ResponseData from './model/GetGlobalStats200ResponseData';
import GetGlobalStats200ResponseDataGamification from './model/GetGlobalStats200ResponseDataGamification';
import GetGlobalStats200ResponseDataStories from './model/GetGlobalStats200ResponseDataStories';
import GetGlobalStats200ResponseDataUsers from './model/GetGlobalStats200ResponseDataUsers';
import GetLeaderboard200Response from './model/GetLeaderboard200Response';
import GetLeaderboard200ResponseData from './model/GetLeaderboard200ResponseData';
import GetLeaderboard200ResponseDataLeaderboardInner from './model/GetLeaderboard200ResponseDataLeaderboardInner';
import GetStoryById200Response from './model/GetStoryById200Response';
import GetStoryById200ResponseData from './model/GetStoryById200ResponseData';
import GetTaskById200Response from './model/GetTaskById200Response';
import GetTaskStats200Response from './model/GetTaskStats200Response';
import GetTaskStats200ResponseData from './model/GetTaskStats200ResponseData';
import GetTaskStats200ResponseDataStats from './model/GetTaskStats200ResponseDataStats';
import GetUserById200Response from './model/GetUserById200Response';
import GetUserById200ResponseData from './model/GetUserById200ResponseData';
import GetUserById200ResponseDataTaskStats from './model/GetUserById200ResponseDataTaskStats';
import GetUserProfile200Response from './model/GetUserProfile200Response';
import GetUserProfile200ResponseData from './model/GetUserProfile200ResponseData';
import GetUserStats200Response from './model/GetUserStats200Response';
import GetUserStats200ResponseData from './model/GetUserStats200ResponseData';
import GetUserStats200ResponseDataMostActiveUsersInner from './model/GetUserStats200ResponseDataMostActiveUsersInner';
import GetUserStats200ResponseDataTasks from './model/GetUserStats200ResponseDataTasks';
import GetUserStats200ResponseDataUsers from './model/GetUserStats200ResponseDataUsers';
import ListStories200Response from './model/ListStories200Response';
import ListStories200ResponseData from './model/ListStories200ResponseData';
import ListTasks200Response from './model/ListTasks200Response';
import ListTasks200ResponseData from './model/ListTasks200ResponseData';
import ListTasks200ResponseDataPagination from './model/ListTasks200ResponseDataPagination';
import ListTasksByStatus200Response from './model/ListTasksByStatus200Response';
import ListTasksByStatus200ResponseData from './model/ListTasksByStatus200ResponseData';
import ListTasksByStatus200ResponseDataPagination from './model/ListTasksByStatus200ResponseDataPagination';
import LoginUser200Response from './model/LoginUser200Response';
import LoginUserRequest from './model/LoginUserRequest';
import LogoutUser200Response from './model/LogoutUser200Response';
import ProcessShareWebhook200Response from './model/ProcessShareWebhook200Response';
import ProcessShareWebhookRequest from './model/ProcessShareWebhookRequest';
import RegisterUser201Response from './model/RegisterUser201Response';
import RegisterUser201ResponseData from './model/RegisterUser201ResponseData';
import RegisterUserRequest from './model/RegisterUserRequest';
import ShareMilestone200Response from './model/ShareMilestone200Response';
import ShareMilestoneRequest from './model/ShareMilestoneRequest';
import ShareMilestoneRequestData from './model/ShareMilestoneRequestData';
import Story from './model/Story';
import Task from './model/Task';
import ToggleUserStatus200Response from './model/ToggleUserStatus200Response';
import ToggleUserStatus200ResponseData from './model/ToggleUserStatus200ResponseData';
import ToggleUserStatus200ResponseDataUser from './model/ToggleUserStatus200ResponseDataUser';
import UpdateGamificationPreferences200Response from './model/UpdateGamificationPreferences200Response';
import UpdateGamificationPreferences200ResponseData from './model/UpdateGamificationPreferences200ResponseData';
import UpdateGamificationPreferencesRequest from './model/UpdateGamificationPreferencesRequest';
import UpdateTask200Response from './model/UpdateTask200Response';
import UpdateTaskRequest from './model/UpdateTaskRequest';
import UpdateUser200Response from './model/UpdateUser200Response';
import UpdateUserProfile200Response from './model/UpdateUserProfile200Response';
import UpdateUserProfileRequest from './model/UpdateUserProfileRequest';
import UpdateUserRequest from './model/UpdateUserRequest';
import User from './model/User';
import UserGamification from './model/UserGamification';
import AuthApi from './api/AuthApi';
import GamificationApi from './api/GamificationApi';
import TasksApi from './api/TasksApi';
import UsersApi from './api/UsersApi';
import WebhooksApi from './api/WebhooksApi';


/**
* API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var GamifiedTaskManagementApi = require('index'); // See note below*.
* var xxxSvc = new GamifiedTaskManagementApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new GamifiedTaskManagementApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new GamifiedTaskManagementApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new GamifiedTaskManagementApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ChangeUserPassword200Response model constructor.
     * @property {module:model/ChangeUserPassword200Response}
     */
    ChangeUserPassword200Response,

    /**
     * The ChangeUserPasswordRequest model constructor.
     * @property {module:model/ChangeUserPasswordRequest}
     */
    ChangeUserPasswordRequest,

    /**
     * The CompleteQuest200Response model constructor.
     * @property {module:model/CompleteQuest200Response}
     */
    CompleteQuest200Response,

    /**
     * The CompleteQuest200ResponseData model constructor.
     * @property {module:model/CompleteQuest200ResponseData}
     */
    CompleteQuest200ResponseData,

    /**
     * The CompleteQuest200ResponseDataGamification model constructor.
     * @property {module:model/CompleteQuest200ResponseDataGamification}
     */
    CompleteQuest200ResponseDataGamification,

    /**
     * The CompleteQuest200ResponseDataTask model constructor.
     * @property {module:model/CompleteQuest200ResponseDataTask}
     */
    CompleteQuest200ResponseDataTask,

    /**
     * The CompleteQuestRequest model constructor.
     * @property {module:model/CompleteQuestRequest}
     */
    CompleteQuestRequest,

    /**
     * The CompleteTask200Response model constructor.
     * @property {module:model/CompleteTask200Response}
     */
    CompleteTask200Response,

    /**
     * The CreateStoryFromTasks201Response model constructor.
     * @property {module:model/CreateStoryFromTasks201Response}
     */
    CreateStoryFromTasks201Response,

    /**
     * The CreateStoryFromTasks201ResponseData model constructor.
     * @property {module:model/CreateStoryFromTasks201ResponseData}
     */
    CreateStoryFromTasks201ResponseData,

    /**
     * The CreateStoryFromTasks201ResponseDataQuestsInner model constructor.
     * @property {module:model/CreateStoryFromTasks201ResponseDataQuestsInner}
     */
    CreateStoryFromTasks201ResponseDataQuestsInner,

    /**
     * The CreateStoryFromTasks201ResponseDataStory model constructor.
     * @property {module:model/CreateStoryFromTasks201ResponseDataStory}
     */
    CreateStoryFromTasks201ResponseDataStory,

    /**
     * The CreateStoryFromTasksRequest model constructor.
     * @property {module:model/CreateStoryFromTasksRequest}
     */
    CreateStoryFromTasksRequest,

    /**
     * The CreateStoryFromTasksRequestUserPreferences model constructor.
     * @property {module:model/CreateStoryFromTasksRequestUserPreferences}
     */
    CreateStoryFromTasksRequestUserPreferences,

    /**
     * The CreateTask201Response model constructor.
     * @property {module:model/CreateTask201Response}
     */
    CreateTask201Response,

    /**
     * The CreateTask201ResponseData model constructor.
     * @property {module:model/CreateTask201ResponseData}
     */
    CreateTask201ResponseData,

    /**
     * The CreateTaskRequest model constructor.
     * @property {module:model/CreateTaskRequest}
     */
    CreateTaskRequest,

    /**
     * The DeleteTask200Response model constructor.
     * @property {module:model/DeleteTask200Response}
     */
    DeleteTask200Response,

    /**
     * The DeleteUser200Response model constructor.
     * @property {module:model/DeleteUser200Response}
     */
    DeleteUser200Response,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The GetAllUsers200Response model constructor.
     * @property {module:model/GetAllUsers200Response}
     */
    GetAllUsers200Response,

    /**
     * The GetAllUsers200ResponseData model constructor.
     * @property {module:model/GetAllUsers200ResponseData}
     */
    GetAllUsers200ResponseData,

    /**
     * The GetAllUsers200ResponseDataPagination model constructor.
     * @property {module:model/GetAllUsers200ResponseDataPagination}
     */
    GetAllUsers200ResponseDataPagination,

    /**
     * The GetBadges200Response model constructor.
     * @property {module:model/GetBadges200Response}
     */
    GetBadges200Response,

    /**
     * The GetBadges200ResponseData model constructor.
     * @property {module:model/GetBadges200ResponseData}
     */
    GetBadges200ResponseData,

    /**
     * The GetBadges200ResponseDataEarnedInner model constructor.
     * @property {module:model/GetBadges200ResponseDataEarnedInner}
     */
    GetBadges200ResponseDataEarnedInner,

    /**
     * The GetGamificationDashboard200Response model constructor.
     * @property {module:model/GetGamificationDashboard200Response}
     */
    GetGamificationDashboard200Response,

    /**
     * The GetGamificationDashboard200ResponseData model constructor.
     * @property {module:model/GetGamificationDashboard200ResponseData}
     */
    GetGamificationDashboard200ResponseData,

    /**
     * The GetGamificationDashboard200ResponseDataStats model constructor.
     * @property {module:model/GetGamificationDashboard200ResponseDataStats}
     */
    GetGamificationDashboard200ResponseDataStats,

    /**
     * The GetGamificationDashboard200ResponseDataUser model constructor.
     * @property {module:model/GetGamificationDashboard200ResponseDataUser}
     */
    GetGamificationDashboard200ResponseDataUser,

    /**
     * The GetGlobalStats200Response model constructor.
     * @property {module:model/GetGlobalStats200Response}
     */
    GetGlobalStats200Response,

    /**
     * The GetGlobalStats200ResponseData model constructor.
     * @property {module:model/GetGlobalStats200ResponseData}
     */
    GetGlobalStats200ResponseData,

    /**
     * The GetGlobalStats200ResponseDataGamification model constructor.
     * @property {module:model/GetGlobalStats200ResponseDataGamification}
     */
    GetGlobalStats200ResponseDataGamification,

    /**
     * The GetGlobalStats200ResponseDataStories model constructor.
     * @property {module:model/GetGlobalStats200ResponseDataStories}
     */
    GetGlobalStats200ResponseDataStories,

    /**
     * The GetGlobalStats200ResponseDataUsers model constructor.
     * @property {module:model/GetGlobalStats200ResponseDataUsers}
     */
    GetGlobalStats200ResponseDataUsers,

    /**
     * The GetLeaderboard200Response model constructor.
     * @property {module:model/GetLeaderboard200Response}
     */
    GetLeaderboard200Response,

    /**
     * The GetLeaderboard200ResponseData model constructor.
     * @property {module:model/GetLeaderboard200ResponseData}
     */
    GetLeaderboard200ResponseData,

    /**
     * The GetLeaderboard200ResponseDataLeaderboardInner model constructor.
     * @property {module:model/GetLeaderboard200ResponseDataLeaderboardInner}
     */
    GetLeaderboard200ResponseDataLeaderboardInner,

    /**
     * The GetStoryById200Response model constructor.
     * @property {module:model/GetStoryById200Response}
     */
    GetStoryById200Response,

    /**
     * The GetStoryById200ResponseData model constructor.
     * @property {module:model/GetStoryById200ResponseData}
     */
    GetStoryById200ResponseData,

    /**
     * The GetTaskById200Response model constructor.
     * @property {module:model/GetTaskById200Response}
     */
    GetTaskById200Response,

    /**
     * The GetTaskStats200Response model constructor.
     * @property {module:model/GetTaskStats200Response}
     */
    GetTaskStats200Response,

    /**
     * The GetTaskStats200ResponseData model constructor.
     * @property {module:model/GetTaskStats200ResponseData}
     */
    GetTaskStats200ResponseData,

    /**
     * The GetTaskStats200ResponseDataStats model constructor.
     * @property {module:model/GetTaskStats200ResponseDataStats}
     */
    GetTaskStats200ResponseDataStats,

    /**
     * The GetUserById200Response model constructor.
     * @property {module:model/GetUserById200Response}
     */
    GetUserById200Response,

    /**
     * The GetUserById200ResponseData model constructor.
     * @property {module:model/GetUserById200ResponseData}
     */
    GetUserById200ResponseData,

    /**
     * The GetUserById200ResponseDataTaskStats model constructor.
     * @property {module:model/GetUserById200ResponseDataTaskStats}
     */
    GetUserById200ResponseDataTaskStats,

    /**
     * The GetUserProfile200Response model constructor.
     * @property {module:model/GetUserProfile200Response}
     */
    GetUserProfile200Response,

    /**
     * The GetUserProfile200ResponseData model constructor.
     * @property {module:model/GetUserProfile200ResponseData}
     */
    GetUserProfile200ResponseData,

    /**
     * The GetUserStats200Response model constructor.
     * @property {module:model/GetUserStats200Response}
     */
    GetUserStats200Response,

    /**
     * The GetUserStats200ResponseData model constructor.
     * @property {module:model/GetUserStats200ResponseData}
     */
    GetUserStats200ResponseData,

    /**
     * The GetUserStats200ResponseDataMostActiveUsersInner model constructor.
     * @property {module:model/GetUserStats200ResponseDataMostActiveUsersInner}
     */
    GetUserStats200ResponseDataMostActiveUsersInner,

    /**
     * The GetUserStats200ResponseDataTasks model constructor.
     * @property {module:model/GetUserStats200ResponseDataTasks}
     */
    GetUserStats200ResponseDataTasks,

    /**
     * The GetUserStats200ResponseDataUsers model constructor.
     * @property {module:model/GetUserStats200ResponseDataUsers}
     */
    GetUserStats200ResponseDataUsers,

    /**
     * The ListStories200Response model constructor.
     * @property {module:model/ListStories200Response}
     */
    ListStories200Response,

    /**
     * The ListStories200ResponseData model constructor.
     * @property {module:model/ListStories200ResponseData}
     */
    ListStories200ResponseData,

    /**
     * The ListTasks200Response model constructor.
     * @property {module:model/ListTasks200Response}
     */
    ListTasks200Response,

    /**
     * The ListTasks200ResponseData model constructor.
     * @property {module:model/ListTasks200ResponseData}
     */
    ListTasks200ResponseData,

    /**
     * The ListTasks200ResponseDataPagination model constructor.
     * @property {module:model/ListTasks200ResponseDataPagination}
     */
    ListTasks200ResponseDataPagination,

    /**
     * The ListTasksByStatus200Response model constructor.
     * @property {module:model/ListTasksByStatus200Response}
     */
    ListTasksByStatus200Response,

    /**
     * The ListTasksByStatus200ResponseData model constructor.
     * @property {module:model/ListTasksByStatus200ResponseData}
     */
    ListTasksByStatus200ResponseData,

    /**
     * The ListTasksByStatus200ResponseDataPagination model constructor.
     * @property {module:model/ListTasksByStatus200ResponseDataPagination}
     */
    ListTasksByStatus200ResponseDataPagination,

    /**
     * The LoginUser200Response model constructor.
     * @property {module:model/LoginUser200Response}
     */
    LoginUser200Response,

    /**
     * The LoginUserRequest model constructor.
     * @property {module:model/LoginUserRequest}
     */
    LoginUserRequest,

    /**
     * The LogoutUser200Response model constructor.
     * @property {module:model/LogoutUser200Response}
     */
    LogoutUser200Response,

    /**
     * The ProcessShareWebhook200Response model constructor.
     * @property {module:model/ProcessShareWebhook200Response}
     */
    ProcessShareWebhook200Response,

    /**
     * The ProcessShareWebhookRequest model constructor.
     * @property {module:model/ProcessShareWebhookRequest}
     */
    ProcessShareWebhookRequest,

    /**
     * The RegisterUser201Response model constructor.
     * @property {module:model/RegisterUser201Response}
     */
    RegisterUser201Response,

    /**
     * The RegisterUser201ResponseData model constructor.
     * @property {module:model/RegisterUser201ResponseData}
     */
    RegisterUser201ResponseData,

    /**
     * The RegisterUserRequest model constructor.
     * @property {module:model/RegisterUserRequest}
     */
    RegisterUserRequest,

    /**
     * The ShareMilestone200Response model constructor.
     * @property {module:model/ShareMilestone200Response}
     */
    ShareMilestone200Response,

    /**
     * The ShareMilestoneRequest model constructor.
     * @property {module:model/ShareMilestoneRequest}
     */
    ShareMilestoneRequest,

    /**
     * The ShareMilestoneRequestData model constructor.
     * @property {module:model/ShareMilestoneRequestData}
     */
    ShareMilestoneRequestData,

    /**
     * The Story model constructor.
     * @property {module:model/Story}
     */
    Story,

    /**
     * The Task model constructor.
     * @property {module:model/Task}
     */
    Task,

    /**
     * The ToggleUserStatus200Response model constructor.
     * @property {module:model/ToggleUserStatus200Response}
     */
    ToggleUserStatus200Response,

    /**
     * The ToggleUserStatus200ResponseData model constructor.
     * @property {module:model/ToggleUserStatus200ResponseData}
     */
    ToggleUserStatus200ResponseData,

    /**
     * The ToggleUserStatus200ResponseDataUser model constructor.
     * @property {module:model/ToggleUserStatus200ResponseDataUser}
     */
    ToggleUserStatus200ResponseDataUser,

    /**
     * The UpdateGamificationPreferences200Response model constructor.
     * @property {module:model/UpdateGamificationPreferences200Response}
     */
    UpdateGamificationPreferences200Response,

    /**
     * The UpdateGamificationPreferences200ResponseData model constructor.
     * @property {module:model/UpdateGamificationPreferences200ResponseData}
     */
    UpdateGamificationPreferences200ResponseData,

    /**
     * The UpdateGamificationPreferencesRequest model constructor.
     * @property {module:model/UpdateGamificationPreferencesRequest}
     */
    UpdateGamificationPreferencesRequest,

    /**
     * The UpdateTask200Response model constructor.
     * @property {module:model/UpdateTask200Response}
     */
    UpdateTask200Response,

    /**
     * The UpdateTaskRequest model constructor.
     * @property {module:model/UpdateTaskRequest}
     */
    UpdateTaskRequest,

    /**
     * The UpdateUser200Response model constructor.
     * @property {module:model/UpdateUser200Response}
     */
    UpdateUser200Response,

    /**
     * The UpdateUserProfile200Response model constructor.
     * @property {module:model/UpdateUserProfile200Response}
     */
    UpdateUserProfile200Response,

    /**
     * The UpdateUserProfileRequest model constructor.
     * @property {module:model/UpdateUserProfileRequest}
     */
    UpdateUserProfileRequest,

    /**
     * The UpdateUserRequest model constructor.
     * @property {module:model/UpdateUserRequest}
     */
    UpdateUserRequest,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserGamification model constructor.
     * @property {module:model/UserGamification}
     */
    UserGamification,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The GamificationApi service constructor.
    * @property {module:api/GamificationApi}
    */
    GamificationApi,

    /**
    * The TasksApi service constructor.
    * @property {module:api/TasksApi}
    */
    TasksApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The WebhooksApi service constructor.
    * @property {module:api/WebhooksApi}
    */
    WebhooksApi
};
