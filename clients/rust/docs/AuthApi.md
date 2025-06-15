# \AuthApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**change_user_password**](AuthApi.md#change_user_password) | **PUT** /api/auth/change-password | Alterar senha do usuário
[**get_user_profile**](AuthApi.md#get_user_profile) | **GET** /api/auth/profile | Obter perfil do usuário logado
[**login_user**](AuthApi.md#login_user) | **POST** /api/auth/login | Login de usuário
[**logout_user**](AuthApi.md#logout_user) | **POST** /api/auth/logout | Logout do usuário
[**register_user**](AuthApi.md#register_user) | **POST** /api/auth/register | Registrar novo usuário
[**update_user_profile**](AuthApi.md#update_user_profile) | **PUT** /api/auth/profile | Atualizar perfil do usuário



## change_user_password

> models::ChangeUserPassword200Response change_user_password(change_user_password_request)
Alterar senha do usuário

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**change_user_password_request** | [**ChangeUserPasswordRequest**](ChangeUserPasswordRequest.md) |  | [required] |

### Return type

[**models::ChangeUserPassword200Response**](changeUserPassword_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_user_profile

> models::GetUserProfile200Response get_user_profile()
Obter perfil do usuário logado

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::GetUserProfile200Response**](getUserProfile_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## login_user

> models::LoginUser200Response login_user(login_user_request)
Login de usuário

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**login_user_request** | [**LoginUserRequest**](LoginUserRequest.md) |  | [required] |

### Return type

[**models::LoginUser200Response**](loginUser_200_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## logout_user

> models::LogoutUser200Response logout_user()
Logout do usuário

### Parameters

This endpoint does not need any parameter.

### Return type

[**models::LogoutUser200Response**](logoutUser_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## register_user

> models::RegisterUser201Response register_user(register_user_request)
Registrar novo usuário

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**register_user_request** | [**RegisterUserRequest**](RegisterUserRequest.md) |  | [required] |

### Return type

[**models::RegisterUser201Response**](registerUser_201_response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_user_profile

> models::UpdateUserProfile200Response update_user_profile(update_user_profile_request)
Atualizar perfil do usuário

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**update_user_profile_request** | [**UpdateUserProfileRequest**](UpdateUserProfileRequest.md) |  | [required] |

### Return type

[**models::UpdateUserProfile200Response**](updateUserProfile_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

