# \AuthAPI

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeUserPassword**](AuthAPI.md#ChangeUserPassword) | **Put** /api/auth/change-password | Alterar senha do usuário
[**GetUserProfile**](AuthAPI.md#GetUserProfile) | **Get** /api/auth/profile | Obter perfil do usuário logado
[**LoginUser**](AuthAPI.md#LoginUser) | **Post** /api/auth/login | Login de usuário
[**LogoutUser**](AuthAPI.md#LogoutUser) | **Post** /api/auth/logout | Logout do usuário
[**RegisterUser**](AuthAPI.md#RegisterUser) | **Post** /api/auth/register | Registrar novo usuário
[**UpdateUserProfile**](AuthAPI.md#UpdateUserProfile) | **Put** /api/auth/profile | Atualizar perfil do usuário



## ChangeUserPassword

> ChangeUserPassword200Response ChangeUserPassword(ctx).ChangeUserPasswordRequest(changeUserPasswordRequest).Execute()

Alterar senha do usuário

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	changeUserPasswordRequest := *openapiclient.NewChangeUserPasswordRequest("123456", "novaSenha123") // ChangeUserPasswordRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthAPI.ChangeUserPassword(context.Background()).ChangeUserPasswordRequest(changeUserPasswordRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthAPI.ChangeUserPassword``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ChangeUserPassword`: ChangeUserPassword200Response
	fmt.Fprintf(os.Stdout, "Response from `AuthAPI.ChangeUserPassword`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChangeUserPasswordRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changeUserPasswordRequest** | [**ChangeUserPasswordRequest**](ChangeUserPasswordRequest.md) |  | 

### Return type

[**ChangeUserPassword200Response**](ChangeUserPassword200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUserProfile

> GetUserProfile200Response GetUserProfile(ctx).Execute()

Obter perfil do usuário logado

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthAPI.GetUserProfile(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthAPI.GetUserProfile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUserProfile`: GetUserProfile200Response
	fmt.Fprintf(os.Stdout, "Response from `AuthAPI.GetUserProfile`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserProfileRequest struct via the builder pattern


### Return type

[**GetUserProfile200Response**](GetUserProfile200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## LoginUser

> LoginUser200Response LoginUser(ctx).LoginUserRequest(loginUserRequest).Execute()

Login de usuário

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	loginUserRequest := *openapiclient.NewLoginUserRequest("joao@email.com", "123456") // LoginUserRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthAPI.LoginUser(context.Background()).LoginUserRequest(loginUserRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthAPI.LoginUser``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `LoginUser`: LoginUser200Response
	fmt.Fprintf(os.Stdout, "Response from `AuthAPI.LoginUser`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiLoginUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginUserRequest** | [**LoginUserRequest**](LoginUserRequest.md) |  | 

### Return type

[**LoginUser200Response**](LoginUser200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## LogoutUser

> LogoutUser200Response LogoutUser(ctx).Execute()

Logout do usuário

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthAPI.LogoutUser(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthAPI.LogoutUser``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `LogoutUser`: LogoutUser200Response
	fmt.Fprintf(os.Stdout, "Response from `AuthAPI.LogoutUser`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiLogoutUserRequest struct via the builder pattern


### Return type

[**LogoutUser200Response**](LogoutUser200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RegisterUser

> RegisterUser201Response RegisterUser(ctx).RegisterUserRequest(registerUserRequest).Execute()

Registrar novo usuário

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	registerUserRequest := *openapiclient.NewRegisterUserRequest("João Silva", "joao@email.com", "123456") // RegisterUserRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthAPI.RegisterUser(context.Background()).RegisterUserRequest(registerUserRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthAPI.RegisterUser``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `RegisterUser`: RegisterUser201Response
	fmt.Fprintf(os.Stdout, "Response from `AuthAPI.RegisterUser`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRegisterUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerUserRequest** | [**RegisterUserRequest**](RegisterUserRequest.md) |  | 

### Return type

[**RegisterUser201Response**](RegisterUser201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateUserProfile

> UpdateUserProfile200Response UpdateUserProfile(ctx).UpdateUserProfileRequest(updateUserProfileRequest).Execute()

Atualizar perfil do usuário

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	updateUserProfileRequest := *openapiclient.NewUpdateUserProfileRequest() // UpdateUserProfileRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthAPI.UpdateUserProfile(context.Background()).UpdateUserProfileRequest(updateUserProfileRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthAPI.UpdateUserProfile``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateUserProfile`: UpdateUserProfile200Response
	fmt.Fprintf(os.Stdout, "Response from `AuthAPI.UpdateUserProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateUserProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateUserProfileRequest** | [**UpdateUserProfileRequest**](UpdateUserProfileRequest.md) |  | 

### Return type

[**UpdateUserProfile200Response**](UpdateUserProfile200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

