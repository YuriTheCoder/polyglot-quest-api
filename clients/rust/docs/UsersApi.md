# \UsersApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_user**](UsersApi.md#delete_user) | **DELETE** /api/users/{id} | Deletar usuário (Admin only)
[**get_all_users**](UsersApi.md#get_all_users) | **GET** /api/users | Listar todos os usuários (Admin only)
[**get_user_by_id**](UsersApi.md#get_user_by_id) | **GET** /api/users/{id} | Obter usuário específico (Admin only)
[**get_user_stats**](UsersApi.md#get_user_stats) | **GET** /api/users/stats | Obter estatísticas gerais do sistema (Admin only)
[**toggle_user_status**](UsersApi.md#toggle_user_status) | **PATCH** /api/users/{id}/toggle-status | Ativar/Desativar usuário (Admin only)
[**update_user**](UsersApi.md#update_user) | **PUT** /api/users/{id} | Atualizar usuário (Admin only)



## delete_user

> models::DeleteUser200Response delete_user(id)
Deletar usuário (Admin only)

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | ID do usuário | [required] |

### Return type

[**models::DeleteUser200Response**](deleteUser_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_all_users

> models::GetAllUsers200Response get_all_users(page, limit, search, role, is_active)
Listar todos os usuários (Admin only)

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**page** | Option<**i32**> | Número da página |  |[default to 1]
**limit** | Option<**i32**> | Itens por página |  |[default to 10]
**search** | Option<**String**> | Buscar por nome ou email |  |
**role** | Option<**String**> | Filtrar por papel |  |
**is_active** | Option<**bool**> | Filtrar por status ativo |  |

### Return type

[**models::GetAllUsers200Response**](getAllUsers_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_user_by_id

> models::GetUserById200Response get_user_by_id(id)
Obter usuário específico (Admin only)

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | ID do usuário | [required] |

### Return type

[**models::GetUserById200Response**](getUserById_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_user_stats

> models::GetUserStats200Response get_user_stats()
Obter estatísticas gerais do sistema (Admin only)

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::GetUserStats200Response**](getUserStats_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## toggle_user_status

> models::ToggleUserStatus200Response toggle_user_status(id)
Ativar/Desativar usuário (Admin only)

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | ID do usuário | [required] |

### Return type

[**models::ToggleUserStatus200Response**](toggleUserStatus_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_user

> models::UpdateUser200Response update_user(id, update_user_request)
Atualizar usuário (Admin only)

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** | ID do usuário | [required] |
**update_user_request** | [**UpdateUserRequest**](UpdateUserRequest.md) |  | [required] |

### Return type

[**models::UpdateUser200Response**](updateUser_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

