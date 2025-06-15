# RegisterUserRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Email** | **string** |  | 
**Password** | **string** |  | 
**Role** | Pointer to **string** |  | [optional] [default to "user"]

## Methods

### NewRegisterUserRequest

`func NewRegisterUserRequest(name string, email string, password string, ) *RegisterUserRequest`

NewRegisterUserRequest instantiates a new RegisterUserRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRegisterUserRequestWithDefaults

`func NewRegisterUserRequestWithDefaults() *RegisterUserRequest`

NewRegisterUserRequestWithDefaults instantiates a new RegisterUserRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *RegisterUserRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RegisterUserRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RegisterUserRequest) SetName(v string)`

SetName sets Name field to given value.


### GetEmail

`func (o *RegisterUserRequest) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *RegisterUserRequest) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *RegisterUserRequest) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetPassword

`func (o *RegisterUserRequest) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *RegisterUserRequest) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *RegisterUserRequest) SetPassword(v string)`

SetPassword sets Password field to given value.


### GetRole

`func (o *RegisterUserRequest) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *RegisterUserRequest) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *RegisterUserRequest) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *RegisterUserRequest) HasRole() bool`

HasRole returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


