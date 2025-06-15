# ApiAuthRegisterPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Email** | **string** |  | 
**Password** | **string** |  | 
**Role** | Pointer to **string** |  | [optional] [default to "user"]

## Methods

### NewApiAuthRegisterPostRequest

`func NewApiAuthRegisterPostRequest(name string, email string, password string, ) *ApiAuthRegisterPostRequest`

NewApiAuthRegisterPostRequest instantiates a new ApiAuthRegisterPostRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiAuthRegisterPostRequestWithDefaults

`func NewApiAuthRegisterPostRequestWithDefaults() *ApiAuthRegisterPostRequest`

NewApiAuthRegisterPostRequestWithDefaults instantiates a new ApiAuthRegisterPostRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ApiAuthRegisterPostRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApiAuthRegisterPostRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApiAuthRegisterPostRequest) SetName(v string)`

SetName sets Name field to given value.


### GetEmail

`func (o *ApiAuthRegisterPostRequest) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ApiAuthRegisterPostRequest) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ApiAuthRegisterPostRequest) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetPassword

`func (o *ApiAuthRegisterPostRequest) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *ApiAuthRegisterPostRequest) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *ApiAuthRegisterPostRequest) SetPassword(v string)`

SetPassword sets Password field to given value.


### GetRole

`func (o *ApiAuthRegisterPostRequest) GetRole() string`

GetRole returns the Role field if non-nil, zero value otherwise.

### GetRoleOk

`func (o *ApiAuthRegisterPostRequest) GetRoleOk() (*string, bool)`

GetRoleOk returns a tuple with the Role field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRole

`func (o *ApiAuthRegisterPostRequest) SetRole(v string)`

SetRole sets Role field to given value.

### HasRole

`func (o *ApiAuthRegisterPostRequest) HasRole() bool`

HasRole returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


