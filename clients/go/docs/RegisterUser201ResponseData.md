# RegisterUser201ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**User** | Pointer to [**User**](User.md) |  | [optional] 
**Token** | Pointer to **string** |  | [optional] 

## Methods

### NewRegisterUser201ResponseData

`func NewRegisterUser201ResponseData() *RegisterUser201ResponseData`

NewRegisterUser201ResponseData instantiates a new RegisterUser201ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRegisterUser201ResponseDataWithDefaults

`func NewRegisterUser201ResponseDataWithDefaults() *RegisterUser201ResponseData`

NewRegisterUser201ResponseDataWithDefaults instantiates a new RegisterUser201ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUser

`func (o *RegisterUser201ResponseData) GetUser() User`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *RegisterUser201ResponseData) GetUserOk() (*User, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *RegisterUser201ResponseData) SetUser(v User)`

SetUser sets User field to given value.

### HasUser

`func (o *RegisterUser201ResponseData) HasUser() bool`

HasUser returns a boolean if a field has been set.

### GetToken

`func (o *RegisterUser201ResponseData) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *RegisterUser201ResponseData) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *RegisterUser201ResponseData) SetToken(v string)`

SetToken sets Token field to given value.

### HasToken

`func (o *RegisterUser201ResponseData) HasToken() bool`

HasToken returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


