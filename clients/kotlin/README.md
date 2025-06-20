# org.openapitools.client - Kotlin client library for Gamified Task Management API

API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

## Overview
This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project.  By using the [openapi-spec](https://github.com/OAI/OpenAPI-Specification) from a remote server, you can easily generate an API client.

- API version: 1.0.0
- Package version: 
- Generator version: 7.13.0
- Build package: org.openapitools.codegen.languages.KotlinClientCodegen

## Requires

* Kotlin 1.7.21
* Gradle 7.5

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs.
* Supports collection formats for query parameters: csv, tsv, ssv, pipes.
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in OpenAPI definitions.
* Implementation of ApiClient is intended to reduce method counts, specifically to benefit Android targets.

<a id="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost:3000*

| Class | Method | HTTP request | Description |
| ------------ | ------------- | ------------- | ------------- |
| *AuthApi* | [**changeUserPassword**](docs/AuthApi.md#changeuserpassword) | **PUT** /api/auth/change-password | Alterar senha do usuário |
| *AuthApi* | [**getUserProfile**](docs/AuthApi.md#getuserprofile) | **GET** /api/auth/profile | Obter perfil do usuário logado |
| *AuthApi* | [**loginUser**](docs/AuthApi.md#loginuser) | **POST** /api/auth/login | Login de usuário |
| *AuthApi* | [**logoutUser**](docs/AuthApi.md#logoutuser) | **POST** /api/auth/logout | Logout do usuário |
| *AuthApi* | [**registerUser**](docs/AuthApi.md#registeruser) | **POST** /api/auth/register | Registrar novo usuário |
| *AuthApi* | [**updateUserProfile**](docs/AuthApi.md#updateuserprofile) | **PUT** /api/auth/profile | Atualizar perfil do usuário |
| *GamificationApi* | [**completeQuest**](docs/GamificationApi.md#completequest) | **POST** /api/tasks/{id}/complete-quest | Complete a quest (task) and get XP |
| *GamificationApi* | [**createStoryFromTasks**](docs/GamificationApi.md#createstoryfromtasks) | **POST** /api/tasks/story | Generate a story from tasks |
| *GamificationApi* | [**getBadges**](docs/GamificationApi.md#getbadges) | **GET** /api/gamification/badges | Listar badges disponíveis e conquistados |
| *GamificationApi* | [**getGamificationDashboard**](docs/GamificationApi.md#getgamificationdashboard) | **GET** /api/gamification/dashboard | Dashboard de gamificação do usuário |
| *GamificationApi* | [**getGlobalStats**](docs/GamificationApi.md#getglobalstats) | **GET** /api/gamification/global-stats | Estatísticas globais da plataforma |
| *GamificationApi* | [**getLeaderboard**](docs/GamificationApi.md#getleaderboard) | **GET** /api/leaderboard | Obter leaderboard público |
| *GamificationApi* | [**getStoryById**](docs/GamificationApi.md#getstorybyid) | **GET** /api/tasks/stories/{id} | Get a specific story by ID |
| *GamificationApi* | [**listStories**](docs/GamificationApi.md#liststories) | **GET** /api/tasks/stories | List all stories for the user |
| *GamificationApi* | [**shareMilestone**](docs/GamificationApi.md#sharemilestone) | **POST** /api/gamification/share | Compartilhar conquista manualmente |
| *GamificationApi* | [**updateGamificationPreferences**](docs/GamificationApi.md#updategamificationpreferences) | **PUT** /api/gamification/preferences | Atualizar preferências de gamificação |
| *TasksApi* | [**completeTask**](docs/TasksApi.md#completetask) | **PATCH** /api/tasks/{id}/complete | Mark a task as complete |
| *TasksApi* | [**createTask**](docs/TasksApi.md#createtask) | **POST** /api/tasks | Create a new task |
| *TasksApi* | [**deleteTask**](docs/TasksApi.md#deletetask) | **DELETE** /api/tasks/{id} | Delete a task |
| *TasksApi* | [**getTaskById**](docs/TasksApi.md#gettaskbyid) | **GET** /api/tasks/{id} | Get a specific task by ID |
| *TasksApi* | [**getTaskStats**](docs/TasksApi.md#gettaskstats) | **GET** /api/tasks/stats | Get task statistics |
| *TasksApi* | [**listTasks**](docs/TasksApi.md#listtasks) | **GET** /api/tasks | Get all tasks for the logged-in user |
| *TasksApi* | [**listTasksByStatus**](docs/TasksApi.md#listtasksbystatus) | **GET** /api/tasks/status/{status} | Get tasks by status |
| *TasksApi* | [**updateTask**](docs/TasksApi.md#updatetask) | **PUT** /api/tasks/{id} | Update a task |
| *UsersApi* | [**deleteUser**](docs/UsersApi.md#deleteuser) | **DELETE** /api/users/{id} | Deletar usuário (Admin only) |
| *UsersApi* | [**getAllUsers**](docs/UsersApi.md#getallusers) | **GET** /api/users | Listar todos os usuários (Admin only) |
| *UsersApi* | [**getUserById**](docs/UsersApi.md#getuserbyid) | **GET** /api/users/{id} | Obter usuário específico (Admin only) |
| *UsersApi* | [**getUserStats**](docs/UsersApi.md#getuserstats) | **GET** /api/users/stats | Obter estatísticas gerais do sistema (Admin only) |
| *UsersApi* | [**toggleUserStatus**](docs/UsersApi.md#toggleuserstatus) | **PATCH** /api/users/{id}/toggle-status | Ativar/Desativar usuário (Admin only) |
| *UsersApi* | [**updateUser**](docs/UsersApi.md#updateuser) | **PUT** /api/users/{id} | Atualizar usuário (Admin only) |
| *WebhooksApi* | [**processShareWebhook**](docs/WebhooksApi.md#processsharewebhook) | **POST** /api/webhooks/share | Webhook para processar compartilhamentos |


<a id="documentation-for-models"></a>
## Documentation for Models

 - [org.openapitools.client.models.ChangeUserPassword200Response](docs/ChangeUserPassword200Response.md)
 - [org.openapitools.client.models.ChangeUserPasswordRequest](docs/ChangeUserPasswordRequest.md)
 - [org.openapitools.client.models.CompleteQuest200Response](docs/CompleteQuest200Response.md)
 - [org.openapitools.client.models.CompleteQuest200ResponseData](docs/CompleteQuest200ResponseData.md)
 - [org.openapitools.client.models.CompleteQuest200ResponseDataGamification](docs/CompleteQuest200ResponseDataGamification.md)
 - [org.openapitools.client.models.CompleteQuest200ResponseDataTask](docs/CompleteQuest200ResponseDataTask.md)
 - [org.openapitools.client.models.CompleteQuestRequest](docs/CompleteQuestRequest.md)
 - [org.openapitools.client.models.CompleteTask200Response](docs/CompleteTask200Response.md)
 - [org.openapitools.client.models.CreateStoryFromTasks201Response](docs/CreateStoryFromTasks201Response.md)
 - [org.openapitools.client.models.CreateStoryFromTasks201ResponseData](docs/CreateStoryFromTasks201ResponseData.md)
 - [org.openapitools.client.models.CreateStoryFromTasks201ResponseDataQuestsInner](docs/CreateStoryFromTasks201ResponseDataQuestsInner.md)
 - [org.openapitools.client.models.CreateStoryFromTasks201ResponseDataStory](docs/CreateStoryFromTasks201ResponseDataStory.md)
 - [org.openapitools.client.models.CreateStoryFromTasksRequest](docs/CreateStoryFromTasksRequest.md)
 - [org.openapitools.client.models.CreateStoryFromTasksRequestUserPreferences](docs/CreateStoryFromTasksRequestUserPreferences.md)
 - [org.openapitools.client.models.CreateTask201Response](docs/CreateTask201Response.md)
 - [org.openapitools.client.models.CreateTask201ResponseData](docs/CreateTask201ResponseData.md)
 - [org.openapitools.client.models.CreateTaskRequest](docs/CreateTaskRequest.md)
 - [org.openapitools.client.models.DeleteTask200Response](docs/DeleteTask200Response.md)
 - [org.openapitools.client.models.DeleteUser200Response](docs/DeleteUser200Response.md)
 - [org.openapitools.client.models.Error](docs/Error.md)
 - [org.openapitools.client.models.GetAllUsers200Response](docs/GetAllUsers200Response.md)
 - [org.openapitools.client.models.GetAllUsers200ResponseData](docs/GetAllUsers200ResponseData.md)
 - [org.openapitools.client.models.GetAllUsers200ResponseDataPagination](docs/GetAllUsers200ResponseDataPagination.md)
 - [org.openapitools.client.models.GetBadges200Response](docs/GetBadges200Response.md)
 - [org.openapitools.client.models.GetBadges200ResponseData](docs/GetBadges200ResponseData.md)
 - [org.openapitools.client.models.GetBadges200ResponseDataEarnedInner](docs/GetBadges200ResponseDataEarnedInner.md)
 - [org.openapitools.client.models.GetGamificationDashboard200Response](docs/GetGamificationDashboard200Response.md)
 - [org.openapitools.client.models.GetGamificationDashboard200ResponseData](docs/GetGamificationDashboard200ResponseData.md)
 - [org.openapitools.client.models.GetGamificationDashboard200ResponseDataStats](docs/GetGamificationDashboard200ResponseDataStats.md)
 - [org.openapitools.client.models.GetGamificationDashboard200ResponseDataUser](docs/GetGamificationDashboard200ResponseDataUser.md)
 - [org.openapitools.client.models.GetGlobalStats200Response](docs/GetGlobalStats200Response.md)
 - [org.openapitools.client.models.GetGlobalStats200ResponseData](docs/GetGlobalStats200ResponseData.md)
 - [org.openapitools.client.models.GetGlobalStats200ResponseDataGamification](docs/GetGlobalStats200ResponseDataGamification.md)
 - [org.openapitools.client.models.GetGlobalStats200ResponseDataStories](docs/GetGlobalStats200ResponseDataStories.md)
 - [org.openapitools.client.models.GetGlobalStats200ResponseDataUsers](docs/GetGlobalStats200ResponseDataUsers.md)
 - [org.openapitools.client.models.GetLeaderboard200Response](docs/GetLeaderboard200Response.md)
 - [org.openapitools.client.models.GetLeaderboard200ResponseData](docs/GetLeaderboard200ResponseData.md)
 - [org.openapitools.client.models.GetLeaderboard200ResponseDataLeaderboardInner](docs/GetLeaderboard200ResponseDataLeaderboardInner.md)
 - [org.openapitools.client.models.GetStoryById200Response](docs/GetStoryById200Response.md)
 - [org.openapitools.client.models.GetStoryById200ResponseData](docs/GetStoryById200ResponseData.md)
 - [org.openapitools.client.models.GetTaskById200Response](docs/GetTaskById200Response.md)
 - [org.openapitools.client.models.GetTaskStats200Response](docs/GetTaskStats200Response.md)
 - [org.openapitools.client.models.GetTaskStats200ResponseData](docs/GetTaskStats200ResponseData.md)
 - [org.openapitools.client.models.GetTaskStats200ResponseDataStats](docs/GetTaskStats200ResponseDataStats.md)
 - [org.openapitools.client.models.GetUserById200Response](docs/GetUserById200Response.md)
 - [org.openapitools.client.models.GetUserById200ResponseData](docs/GetUserById200ResponseData.md)
 - [org.openapitools.client.models.GetUserById200ResponseDataTaskStats](docs/GetUserById200ResponseDataTaskStats.md)
 - [org.openapitools.client.models.GetUserProfile200Response](docs/GetUserProfile200Response.md)
 - [org.openapitools.client.models.GetUserProfile200ResponseData](docs/GetUserProfile200ResponseData.md)
 - [org.openapitools.client.models.GetUserStats200Response](docs/GetUserStats200Response.md)
 - [org.openapitools.client.models.GetUserStats200ResponseData](docs/GetUserStats200ResponseData.md)
 - [org.openapitools.client.models.GetUserStats200ResponseDataMostActiveUsersInner](docs/GetUserStats200ResponseDataMostActiveUsersInner.md)
 - [org.openapitools.client.models.GetUserStats200ResponseDataTasks](docs/GetUserStats200ResponseDataTasks.md)
 - [org.openapitools.client.models.GetUserStats200ResponseDataUsers](docs/GetUserStats200ResponseDataUsers.md)
 - [org.openapitools.client.models.ListStories200Response](docs/ListStories200Response.md)
 - [org.openapitools.client.models.ListStories200ResponseData](docs/ListStories200ResponseData.md)
 - [org.openapitools.client.models.ListTasks200Response](docs/ListTasks200Response.md)
 - [org.openapitools.client.models.ListTasks200ResponseData](docs/ListTasks200ResponseData.md)
 - [org.openapitools.client.models.ListTasks200ResponseDataPagination](docs/ListTasks200ResponseDataPagination.md)
 - [org.openapitools.client.models.ListTasksByStatus200Response](docs/ListTasksByStatus200Response.md)
 - [org.openapitools.client.models.ListTasksByStatus200ResponseData](docs/ListTasksByStatus200ResponseData.md)
 - [org.openapitools.client.models.ListTasksByStatus200ResponseDataPagination](docs/ListTasksByStatus200ResponseDataPagination.md)
 - [org.openapitools.client.models.LoginUser200Response](docs/LoginUser200Response.md)
 - [org.openapitools.client.models.LoginUserRequest](docs/LoginUserRequest.md)
 - [org.openapitools.client.models.LogoutUser200Response](docs/LogoutUser200Response.md)
 - [org.openapitools.client.models.ProcessShareWebhook200Response](docs/ProcessShareWebhook200Response.md)
 - [org.openapitools.client.models.ProcessShareWebhookRequest](docs/ProcessShareWebhookRequest.md)
 - [org.openapitools.client.models.RegisterUser201Response](docs/RegisterUser201Response.md)
 - [org.openapitools.client.models.RegisterUser201ResponseData](docs/RegisterUser201ResponseData.md)
 - [org.openapitools.client.models.RegisterUserRequest](docs/RegisterUserRequest.md)
 - [org.openapitools.client.models.ShareMilestone200Response](docs/ShareMilestone200Response.md)
 - [org.openapitools.client.models.ShareMilestoneRequest](docs/ShareMilestoneRequest.md)
 - [org.openapitools.client.models.ShareMilestoneRequestData](docs/ShareMilestoneRequestData.md)
 - [org.openapitools.client.models.Story](docs/Story.md)
 - [org.openapitools.client.models.Task](docs/Task.md)
 - [org.openapitools.client.models.ToggleUserStatus200Response](docs/ToggleUserStatus200Response.md)
 - [org.openapitools.client.models.ToggleUserStatus200ResponseData](docs/ToggleUserStatus200ResponseData.md)
 - [org.openapitools.client.models.ToggleUserStatus200ResponseDataUser](docs/ToggleUserStatus200ResponseDataUser.md)
 - [org.openapitools.client.models.UpdateGamificationPreferences200Response](docs/UpdateGamificationPreferences200Response.md)
 - [org.openapitools.client.models.UpdateGamificationPreferences200ResponseData](docs/UpdateGamificationPreferences200ResponseData.md)
 - [org.openapitools.client.models.UpdateGamificationPreferencesRequest](docs/UpdateGamificationPreferencesRequest.md)
 - [org.openapitools.client.models.UpdateTask200Response](docs/UpdateTask200Response.md)
 - [org.openapitools.client.models.UpdateTaskRequest](docs/UpdateTaskRequest.md)
 - [org.openapitools.client.models.UpdateUser200Response](docs/UpdateUser200Response.md)
 - [org.openapitools.client.models.UpdateUserProfile200Response](docs/UpdateUserProfile200Response.md)
 - [org.openapitools.client.models.UpdateUserProfileRequest](docs/UpdateUserProfileRequest.md)
 - [org.openapitools.client.models.UpdateUserRequest](docs/UpdateUserRequest.md)
 - [org.openapitools.client.models.User](docs/User.md)
 - [org.openapitools.client.models.UserGamification](docs/UserGamification.md)


<a id="documentation-for-authorization"></a>
## Documentation for Authorization


Authentication schemes defined for the API:
<a id="bearerAuth"></a>
### bearerAuth

- **Type**: HTTP Bearer Token authentication (JWT)

