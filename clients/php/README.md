# GamifiedTasks\\Client

API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas


## Installation & Usage

### Requirements

PHP 8.1 and later.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/GamifiedTasks\\Client/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



// Configure Bearer (JWT) authorization: bearerAuth
$config = OpenAPI\Client\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');


$apiInstance = new OpenAPI\Client\Api\AuthApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$change_user_password_request = new \OpenAPI\Client\Model\ChangeUserPasswordRequest(); // \OpenAPI\Client\Model\ChangeUserPasswordRequest

try {
    $result = $apiInstance->changeUserPassword($change_user_password_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AuthApi->changeUserPassword: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *http://localhost:3000*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthApi* | [**changeUserPassword**](docs/Api/AuthApi.md#changeuserpassword) | **PUT** /api/auth/change-password | Alterar senha do usuário
*AuthApi* | [**getUserProfile**](docs/Api/AuthApi.md#getuserprofile) | **GET** /api/auth/profile | Obter perfil do usuário logado
*AuthApi* | [**loginUser**](docs/Api/AuthApi.md#loginuser) | **POST** /api/auth/login | Login de usuário
*AuthApi* | [**logoutUser**](docs/Api/AuthApi.md#logoutuser) | **POST** /api/auth/logout | Logout do usuário
*AuthApi* | [**registerUser**](docs/Api/AuthApi.md#registeruser) | **POST** /api/auth/register | Registrar novo usuário
*AuthApi* | [**updateUserProfile**](docs/Api/AuthApi.md#updateuserprofile) | **PUT** /api/auth/profile | Atualizar perfil do usuário
*GamificationApi* | [**completeQuest**](docs/Api/GamificationApi.md#completequest) | **POST** /api/tasks/{id}/complete-quest | Complete a quest (task) and get XP
*GamificationApi* | [**createStoryFromTasks**](docs/Api/GamificationApi.md#createstoryfromtasks) | **POST** /api/tasks/story | Generate a story from tasks
*GamificationApi* | [**getBadges**](docs/Api/GamificationApi.md#getbadges) | **GET** /api/gamification/badges | Listar badges disponíveis e conquistados
*GamificationApi* | [**getGamificationDashboard**](docs/Api/GamificationApi.md#getgamificationdashboard) | **GET** /api/gamification/dashboard | Dashboard de gamificação do usuário
*GamificationApi* | [**getGlobalStats**](docs/Api/GamificationApi.md#getglobalstats) | **GET** /api/gamification/global-stats | Estatísticas globais da plataforma
*GamificationApi* | [**getLeaderboard**](docs/Api/GamificationApi.md#getleaderboard) | **GET** /api/leaderboard | Obter leaderboard público
*GamificationApi* | [**getStoryById**](docs/Api/GamificationApi.md#getstorybyid) | **GET** /api/tasks/stories/{id} | Get a specific story by ID
*GamificationApi* | [**listStories**](docs/Api/GamificationApi.md#liststories) | **GET** /api/tasks/stories | List all stories for the user
*GamificationApi* | [**shareMilestone**](docs/Api/GamificationApi.md#sharemilestone) | **POST** /api/gamification/share | Compartilhar conquista manualmente
*GamificationApi* | [**updateGamificationPreferences**](docs/Api/GamificationApi.md#updategamificationpreferences) | **PUT** /api/gamification/preferences | Atualizar preferências de gamificação
*TasksApi* | [**completeTask**](docs/Api/TasksApi.md#completetask) | **PATCH** /api/tasks/{id}/complete | Mark a task as complete
*TasksApi* | [**createTask**](docs/Api/TasksApi.md#createtask) | **POST** /api/tasks | Create a new task
*TasksApi* | [**deleteTask**](docs/Api/TasksApi.md#deletetask) | **DELETE** /api/tasks/{id} | Delete a task
*TasksApi* | [**getTaskById**](docs/Api/TasksApi.md#gettaskbyid) | **GET** /api/tasks/{id} | Get a specific task by ID
*TasksApi* | [**getTaskStats**](docs/Api/TasksApi.md#gettaskstats) | **GET** /api/tasks/stats | Get task statistics
*TasksApi* | [**listTasks**](docs/Api/TasksApi.md#listtasks) | **GET** /api/tasks | Get all tasks for the logged-in user
*TasksApi* | [**listTasksByStatus**](docs/Api/TasksApi.md#listtasksbystatus) | **GET** /api/tasks/status/{status} | Get tasks by status
*TasksApi* | [**updateTask**](docs/Api/TasksApi.md#updatetask) | **PUT** /api/tasks/{id} | Update a task
*UsersApi* | [**deleteUser**](docs/Api/UsersApi.md#deleteuser) | **DELETE** /api/users/{id} | Deletar usuário (Admin only)
*UsersApi* | [**getAllUsers**](docs/Api/UsersApi.md#getallusers) | **GET** /api/users | Listar todos os usuários (Admin only)
*UsersApi* | [**getUserById**](docs/Api/UsersApi.md#getuserbyid) | **GET** /api/users/{id} | Obter usuário específico (Admin only)
*UsersApi* | [**getUserStats**](docs/Api/UsersApi.md#getuserstats) | **GET** /api/users/stats | Obter estatísticas gerais do sistema (Admin only)
*UsersApi* | [**toggleUserStatus**](docs/Api/UsersApi.md#toggleuserstatus) | **PATCH** /api/users/{id}/toggle-status | Ativar/Desativar usuário (Admin only)
*UsersApi* | [**updateUser**](docs/Api/UsersApi.md#updateuser) | **PUT** /api/users/{id} | Atualizar usuário (Admin only)
*WebhooksApi* | [**processShareWebhook**](docs/Api/WebhooksApi.md#processsharewebhook) | **POST** /api/webhooks/share | Webhook para processar compartilhamentos

## Models

- [ChangeUserPassword200Response](docs/Model/ChangeUserPassword200Response.md)
- [ChangeUserPasswordRequest](docs/Model/ChangeUserPasswordRequest.md)
- [CompleteQuest200Response](docs/Model/CompleteQuest200Response.md)
- [CompleteQuest200ResponseData](docs/Model/CompleteQuest200ResponseData.md)
- [CompleteQuest200ResponseDataGamification](docs/Model/CompleteQuest200ResponseDataGamification.md)
- [CompleteQuest200ResponseDataTask](docs/Model/CompleteQuest200ResponseDataTask.md)
- [CompleteQuestRequest](docs/Model/CompleteQuestRequest.md)
- [CompleteTask200Response](docs/Model/CompleteTask200Response.md)
- [CreateStoryFromTasks201Response](docs/Model/CreateStoryFromTasks201Response.md)
- [CreateStoryFromTasks201ResponseData](docs/Model/CreateStoryFromTasks201ResponseData.md)
- [CreateStoryFromTasks201ResponseDataQuestsInner](docs/Model/CreateStoryFromTasks201ResponseDataQuestsInner.md)
- [CreateStoryFromTasks201ResponseDataStory](docs/Model/CreateStoryFromTasks201ResponseDataStory.md)
- [CreateStoryFromTasksRequest](docs/Model/CreateStoryFromTasksRequest.md)
- [CreateStoryFromTasksRequestUserPreferences](docs/Model/CreateStoryFromTasksRequestUserPreferences.md)
- [CreateTask201Response](docs/Model/CreateTask201Response.md)
- [CreateTask201ResponseData](docs/Model/CreateTask201ResponseData.md)
- [CreateTaskRequest](docs/Model/CreateTaskRequest.md)
- [DeleteTask200Response](docs/Model/DeleteTask200Response.md)
- [DeleteUser200Response](docs/Model/DeleteUser200Response.md)
- [Error](docs/Model/Error.md)
- [GetAllUsers200Response](docs/Model/GetAllUsers200Response.md)
- [GetAllUsers200ResponseData](docs/Model/GetAllUsers200ResponseData.md)
- [GetAllUsers200ResponseDataPagination](docs/Model/GetAllUsers200ResponseDataPagination.md)
- [GetBadges200Response](docs/Model/GetBadges200Response.md)
- [GetBadges200ResponseData](docs/Model/GetBadges200ResponseData.md)
- [GetBadges200ResponseDataEarnedInner](docs/Model/GetBadges200ResponseDataEarnedInner.md)
- [GetGamificationDashboard200Response](docs/Model/GetGamificationDashboard200Response.md)
- [GetGamificationDashboard200ResponseData](docs/Model/GetGamificationDashboard200ResponseData.md)
- [GetGamificationDashboard200ResponseDataStats](docs/Model/GetGamificationDashboard200ResponseDataStats.md)
- [GetGamificationDashboard200ResponseDataUser](docs/Model/GetGamificationDashboard200ResponseDataUser.md)
- [GetGlobalStats200Response](docs/Model/GetGlobalStats200Response.md)
- [GetGlobalStats200ResponseData](docs/Model/GetGlobalStats200ResponseData.md)
- [GetGlobalStats200ResponseDataGamification](docs/Model/GetGlobalStats200ResponseDataGamification.md)
- [GetGlobalStats200ResponseDataStories](docs/Model/GetGlobalStats200ResponseDataStories.md)
- [GetGlobalStats200ResponseDataUsers](docs/Model/GetGlobalStats200ResponseDataUsers.md)
- [GetLeaderboard200Response](docs/Model/GetLeaderboard200Response.md)
- [GetLeaderboard200ResponseData](docs/Model/GetLeaderboard200ResponseData.md)
- [GetLeaderboard200ResponseDataLeaderboardInner](docs/Model/GetLeaderboard200ResponseDataLeaderboardInner.md)
- [GetStoryById200Response](docs/Model/GetStoryById200Response.md)
- [GetStoryById200ResponseData](docs/Model/GetStoryById200ResponseData.md)
- [GetTaskById200Response](docs/Model/GetTaskById200Response.md)
- [GetTaskStats200Response](docs/Model/GetTaskStats200Response.md)
- [GetTaskStats200ResponseData](docs/Model/GetTaskStats200ResponseData.md)
- [GetTaskStats200ResponseDataStats](docs/Model/GetTaskStats200ResponseDataStats.md)
- [GetUserById200Response](docs/Model/GetUserById200Response.md)
- [GetUserById200ResponseData](docs/Model/GetUserById200ResponseData.md)
- [GetUserById200ResponseDataTaskStats](docs/Model/GetUserById200ResponseDataTaskStats.md)
- [GetUserProfile200Response](docs/Model/GetUserProfile200Response.md)
- [GetUserProfile200ResponseData](docs/Model/GetUserProfile200ResponseData.md)
- [GetUserStats200Response](docs/Model/GetUserStats200Response.md)
- [GetUserStats200ResponseData](docs/Model/GetUserStats200ResponseData.md)
- [GetUserStats200ResponseDataMostActiveUsersInner](docs/Model/GetUserStats200ResponseDataMostActiveUsersInner.md)
- [GetUserStats200ResponseDataTasks](docs/Model/GetUserStats200ResponseDataTasks.md)
- [GetUserStats200ResponseDataUsers](docs/Model/GetUserStats200ResponseDataUsers.md)
- [ListStories200Response](docs/Model/ListStories200Response.md)
- [ListStories200ResponseData](docs/Model/ListStories200ResponseData.md)
- [ListTasks200Response](docs/Model/ListTasks200Response.md)
- [ListTasks200ResponseData](docs/Model/ListTasks200ResponseData.md)
- [ListTasks200ResponseDataPagination](docs/Model/ListTasks200ResponseDataPagination.md)
- [ListTasksByStatus200Response](docs/Model/ListTasksByStatus200Response.md)
- [ListTasksByStatus200ResponseData](docs/Model/ListTasksByStatus200ResponseData.md)
- [ListTasksByStatus200ResponseDataPagination](docs/Model/ListTasksByStatus200ResponseDataPagination.md)
- [LoginUser200Response](docs/Model/LoginUser200Response.md)
- [LoginUserRequest](docs/Model/LoginUserRequest.md)
- [LogoutUser200Response](docs/Model/LogoutUser200Response.md)
- [ProcessShareWebhook200Response](docs/Model/ProcessShareWebhook200Response.md)
- [ProcessShareWebhookRequest](docs/Model/ProcessShareWebhookRequest.md)
- [RegisterUser201Response](docs/Model/RegisterUser201Response.md)
- [RegisterUser201ResponseData](docs/Model/RegisterUser201ResponseData.md)
- [RegisterUserRequest](docs/Model/RegisterUserRequest.md)
- [ShareMilestone200Response](docs/Model/ShareMilestone200Response.md)
- [ShareMilestoneRequest](docs/Model/ShareMilestoneRequest.md)
- [ShareMilestoneRequestData](docs/Model/ShareMilestoneRequestData.md)
- [Story](docs/Model/Story.md)
- [Task](docs/Model/Task.md)
- [ToggleUserStatus200Response](docs/Model/ToggleUserStatus200Response.md)
- [ToggleUserStatus200ResponseData](docs/Model/ToggleUserStatus200ResponseData.md)
- [ToggleUserStatus200ResponseDataUser](docs/Model/ToggleUserStatus200ResponseDataUser.md)
- [UpdateGamificationPreferences200Response](docs/Model/UpdateGamificationPreferences200Response.md)
- [UpdateGamificationPreferences200ResponseData](docs/Model/UpdateGamificationPreferences200ResponseData.md)
- [UpdateGamificationPreferencesRequest](docs/Model/UpdateGamificationPreferencesRequest.md)
- [UpdateTask200Response](docs/Model/UpdateTask200Response.md)
- [UpdateTaskRequest](docs/Model/UpdateTaskRequest.md)
- [UpdateUser200Response](docs/Model/UpdateUser200Response.md)
- [UpdateUserProfile200Response](docs/Model/UpdateUserProfile200Response.md)
- [UpdateUserProfileRequest](docs/Model/UpdateUserProfileRequest.md)
- [UpdateUserRequest](docs/Model/UpdateUserRequest.md)
- [User](docs/Model/User.md)
- [UserGamification](docs/Model/UserGamification.md)

## Authorization

Authentication schemes defined for the API:
### bearerAuth

- **Type**: Bearer authentication (JWT)

## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author



## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
    - Generator version: `7.13.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
