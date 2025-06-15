# openapi_client.AuthApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**change_user_password**](AuthApi.md#change_user_password) | **PUT** /api/auth/change-password | Alterar senha do usuário
[**get_user_profile**](AuthApi.md#get_user_profile) | **GET** /api/auth/profile | Obter perfil do usuário logado
[**login_user**](AuthApi.md#login_user) | **POST** /api/auth/login | Login de usuário
[**logout_user**](AuthApi.md#logout_user) | **POST** /api/auth/logout | Logout do usuário
[**register_user**](AuthApi.md#register_user) | **POST** /api/auth/register | Registrar novo usuário
[**update_user_profile**](AuthApi.md#update_user_profile) | **PUT** /api/auth/profile | Atualizar perfil do usuário


# **change_user_password**
> ChangeUserPassword200Response change_user_password(change_user_password_request)

Alterar senha do usuário

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.change_user_password200_response import ChangeUserPassword200Response
from openapi_client.models.change_user_password_request import ChangeUserPasswordRequest
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
    api_instance = openapi_client.AuthApi(api_client)
    change_user_password_request = openapi_client.ChangeUserPasswordRequest() # ChangeUserPasswordRequest | 

    try:
        # Alterar senha do usuário
        api_response = api_instance.change_user_password(change_user_password_request)
        print("The response of AuthApi->change_user_password:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->change_user_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **change_user_password_request** | [**ChangeUserPasswordRequest**](ChangeUserPasswordRequest.md)|  | 

### Return type

[**ChangeUserPassword200Response**](ChangeUserPassword200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Senha alterada com sucesso |  -  |
**400** | Senha atual incorreta ou nova senha inválida |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_profile**
> GetUserProfile200Response get_user_profile()

Obter perfil do usuário logado

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_user_profile200_response import GetUserProfile200Response
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
    api_instance = openapi_client.AuthApi(api_client)

    try:
        # Obter perfil do usuário logado
        api_response = api_instance.get_user_profile()
        print("The response of AuthApi->get_user_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->get_user_profile: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetUserProfile200Response**](GetUserProfile200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Perfil do usuário |  -  |
**401** | Token não fornecido ou inválido |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **login_user**
> LoginUser200Response login_user(login_user_request)

Login de usuário

### Example


```python
import openapi_client
from openapi_client.models.login_user200_response import LoginUser200Response
from openapi_client.models.login_user_request import LoginUserRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthApi(api_client)
    login_user_request = openapi_client.LoginUserRequest() # LoginUserRequest | 

    try:
        # Login de usuário
        api_response = api_instance.login_user(login_user_request)
        print("The response of AuthApi->login_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->login_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_user_request** | [**LoginUserRequest**](LoginUserRequest.md)|  | 

### Return type

[**LoginUser200Response**](LoginUser200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Login realizado com sucesso |  -  |
**401** | Credenciais inválidas |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logout_user**
> LogoutUser200Response logout_user()

Logout do usuário

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.logout_user200_response import LogoutUser200Response
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
    api_instance = openapi_client.AuthApi(api_client)

    try:
        # Logout do usuário
        api_response = api_instance.logout_user()
        print("The response of AuthApi->logout_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->logout_user: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**LogoutUser200Response**](LogoutUser200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Logout realizado com sucesso |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **register_user**
> RegisterUser201Response register_user(register_user_request)

Registrar novo usuário

### Example


```python
import openapi_client
from openapi_client.models.register_user201_response import RegisterUser201Response
from openapi_client.models.register_user_request import RegisterUserRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthApi(api_client)
    register_user_request = openapi_client.RegisterUserRequest() # RegisterUserRequest | 

    try:
        # Registrar novo usuário
        api_response = api_instance.register_user(register_user_request)
        print("The response of AuthApi->register_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->register_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **register_user_request** | [**RegisterUserRequest**](RegisterUserRequest.md)|  | 

### Return type

[**RegisterUser201Response**](RegisterUser201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Usuário registrado com sucesso |  -  |
**400** | Dados inválidos ou usuário já existe |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_user_profile**
> UpdateUserProfile200Response update_user_profile(update_user_profile_request)

Atualizar perfil do usuário

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.update_user_profile200_response import UpdateUserProfile200Response
from openapi_client.models.update_user_profile_request import UpdateUserProfileRequest
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
    api_instance = openapi_client.AuthApi(api_client)
    update_user_profile_request = openapi_client.UpdateUserProfileRequest() # UpdateUserProfileRequest | 

    try:
        # Atualizar perfil do usuário
        api_response = api_instance.update_user_profile(update_user_profile_request)
        print("The response of AuthApi->update_user_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthApi->update_user_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_user_profile_request** | [**UpdateUserProfileRequest**](UpdateUserProfileRequest.md)|  | 

### Return type

[**UpdateUserProfile200Response**](UpdateUserProfile200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Perfil atualizado com sucesso |  -  |
**400** | Email já está em uso |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

