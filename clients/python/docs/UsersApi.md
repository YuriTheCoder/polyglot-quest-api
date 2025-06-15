# openapi_client.UsersApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_user**](UsersApi.md#delete_user) | **DELETE** /api/users/{id} | Deletar usuário (Admin only)
[**get_all_users**](UsersApi.md#get_all_users) | **GET** /api/users | Listar todos os usuários (Admin only)
[**get_user_by_id**](UsersApi.md#get_user_by_id) | **GET** /api/users/{id} | Obter usuário específico (Admin only)
[**get_user_stats**](UsersApi.md#get_user_stats) | **GET** /api/users/stats | Obter estatísticas gerais do sistema (Admin only)
[**toggle_user_status**](UsersApi.md#toggle_user_status) | **PATCH** /api/users/{id}/toggle-status | Ativar/Desativar usuário (Admin only)
[**update_user**](UsersApi.md#update_user) | **PUT** /api/users/{id} | Atualizar usuário (Admin only)


# **delete_user**
> DeleteUser200Response delete_user(id)

Deletar usuário (Admin only)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.delete_user200_response import DeleteUser200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | ID do usuário

    try:
        # Deletar usuário (Admin only)
        api_response = api_instance.delete_user(id)
        print("The response of UsersApi->delete_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->delete_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID do usuário | 

### Return type

[**DeleteUser200Response**](DeleteUser200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Usuário deletado com sucesso |  -  |
**400** | Não é possível deletar própria conta |  -  |
**403** | Acesso negado - privilégios de admin necessários |  -  |
**404** | Usuário não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_users**
> GetAllUsers200Response get_all_users(page=page, limit=limit, search=search, role=role, is_active=is_active)

Listar todos os usuários (Admin only)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_all_users200_response import GetAllUsers200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    page = 1 # int | Número da página (optional) (default to 1)
    limit = 10 # int | Itens por página (optional) (default to 10)
    search = 'search_example' # str | Buscar por nome ou email (optional)
    role = 'role_example' # str | Filtrar por papel (optional)
    is_active = True # bool | Filtrar por status ativo (optional)

    try:
        # Listar todos os usuários (Admin only)
        api_response = api_instance.get_all_users(page=page, limit=limit, search=search, role=role, is_active=is_active)
        print("The response of UsersApi->get_all_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_all_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Número da página | [optional] [default to 1]
 **limit** | **int**| Itens por página | [optional] [default to 10]
 **search** | **str**| Buscar por nome ou email | [optional] 
 **role** | **str**| Filtrar por papel | [optional] 
 **is_active** | **bool**| Filtrar por status ativo | [optional] 

### Return type

[**GetAllUsers200Response**](GetAllUsers200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lista de usuários |  -  |
**403** | Acesso negado - privilégios de admin necessários |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_by_id**
> GetUserById200Response get_user_by_id(id)

Obter usuário específico (Admin only)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_user_by_id200_response import GetUserById200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | ID do usuário

    try:
        # Obter usuário específico (Admin only)
        api_response = api_instance.get_user_by_id(id)
        print("The response of UsersApi->get_user_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID do usuário | 

### Return type

[**GetUserById200Response**](GetUserById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detalhes do usuário |  -  |
**403** | Acesso negado - privilégios de admin necessários |  -  |
**404** | Usuário não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_stats**
> GetUserStats200Response get_user_stats()

Obter estatísticas gerais do sistema (Admin only)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_user_stats200_response import GetUserStats200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)

    try:
        # Obter estatísticas gerais do sistema (Admin only)
        api_response = api_instance.get_user_stats()
        print("The response of UsersApi->get_user_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_stats: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUserStats200Response**](GetUserStats200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Estatísticas do sistema |  -  |
**403** | Acesso negado - privilégios de admin necessários |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **toggle_user_status**
> ToggleUserStatus200Response toggle_user_status(id)

Ativar/Desativar usuário (Admin only)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.toggle_user_status200_response import ToggleUserStatus200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | ID do usuário

    try:
        # Ativar/Desativar usuário (Admin only)
        api_response = api_instance.toggle_user_status(id)
        print("The response of UsersApi->toggle_user_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->toggle_user_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID do usuário | 

### Return type

[**ToggleUserStatus200Response**](ToggleUserStatus200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status do usuário alterado com sucesso |  -  |
**400** | Não é possível desativar própria conta |  -  |
**403** | Acesso negado - privilégios de admin necessários |  -  |
**404** | Usuário não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_user**
> UpdateUser200Response update_user(id, update_user_request)

Atualizar usuário (Admin only)

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.update_user200_response import UpdateUser200Response
from openapi_client.models.update_user_request import UpdateUserRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | ID do usuário
    update_user_request = openapi_client.UpdateUserRequest() # UpdateUserRequest | 

    try:
        # Atualizar usuário (Admin only)
        api_response = api_instance.update_user(id, update_user_request)
        print("The response of UsersApi->update_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->update_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID do usuário | 
 **update_user_request** | [**UpdateUserRequest**](UpdateUserRequest.md)|  | 

### Return type

[**UpdateUser200Response**](UpdateUser200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Usuário atualizado com sucesso |  -  |
**400** | Email já está em uso |  -  |
**403** | Acesso negado - privilégios de admin necessários |  -  |
**404** | Usuário não encontrado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

