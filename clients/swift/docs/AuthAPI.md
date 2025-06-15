# AuthAPI

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeUserPassword**](AuthAPI.md#changeuserpassword) | **PUT** /api/auth/change-password | Alterar senha do usuário
[**getUserProfile**](AuthAPI.md#getuserprofile) | **GET** /api/auth/profile | Obter perfil do usuário logado
[**loginUser**](AuthAPI.md#loginuser) | **POST** /api/auth/login | Login de usuário
[**logoutUser**](AuthAPI.md#logoutuser) | **POST** /api/auth/logout | Logout do usuário
[**registerUser**](AuthAPI.md#registeruser) | **POST** /api/auth/register | Registrar novo usuário
[**updateUserProfile**](AuthAPI.md#updateuserprofile) | **PUT** /api/auth/profile | Atualizar perfil do usuário


# **changeUserPassword**
```swift
    open class func changeUserPassword(changeUserPasswordRequest: ChangeUserPasswordRequest, completion: @escaping (_ data: ChangeUserPassword200Response?, _ error: Error?) -> Void)
```

Alterar senha do usuário

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let changeUserPasswordRequest = changeUserPassword_request(currentPassword: "currentPassword_example", newPassword: "newPassword_example") // ChangeUserPasswordRequest | 

// Alterar senha do usuário
AuthAPI.changeUserPassword(changeUserPasswordRequest: changeUserPasswordRequest) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserProfile**
```swift
    open class func getUserProfile(completion: @escaping (_ data: GetUserProfile200Response?, _ error: Error?) -> Void)
```

Obter perfil do usuário logado

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient


// Obter perfil do usuário logado
AuthAPI.getUserProfile() { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **loginUser**
```swift
    open class func loginUser(loginUserRequest: LoginUserRequest, completion: @escaping (_ data: LoginUser200Response?, _ error: Error?) -> Void)
```

Login de usuário

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let loginUserRequest = loginUser_request(email: "email_example", password: "password_example") // LoginUserRequest | 

// Login de usuário
AuthAPI.loginUser(loginUserRequest: loginUserRequest) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logoutUser**
```swift
    open class func logoutUser(completion: @escaping (_ data: LogoutUser200Response?, _ error: Error?) -> Void)
```

Logout do usuário

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient


// Logout do usuário
AuthAPI.logoutUser() { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerUser**
```swift
    open class func registerUser(registerUserRequest: RegisterUserRequest, completion: @escaping (_ data: RegisterUser201Response?, _ error: Error?) -> Void)
```

Registrar novo usuário

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let registerUserRequest = registerUser_request(name: "name_example", email: "email_example", password: "password_example", role: "role_example") // RegisterUserRequest | 

// Registrar novo usuário
AuthAPI.registerUser(registerUserRequest: registerUserRequest) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserProfile**
```swift
    open class func updateUserProfile(updateUserProfileRequest: UpdateUserProfileRequest, completion: @escaping (_ data: UpdateUserProfile200Response?, _ error: Error?) -> Void)
```

Atualizar perfil do usuário

### Example
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import GamifiedTasksClient

let updateUserProfileRequest = updateUserProfile_request(name: "name_example", email: "email_example") // UpdateUserProfileRequest | 

// Atualizar perfil do usuário
AuthAPI.updateUserProfile(updateUserProfileRequest: updateUserProfileRequest) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

