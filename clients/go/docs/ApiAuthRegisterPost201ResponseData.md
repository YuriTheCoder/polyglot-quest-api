# ApiAuthRegisterPost201ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**User** | Pointer to [**User**](User.md) |  | [optional] 
**Token** | Pointer to **string** |  | [optional] 

## Methods

### NewApiAuthRegisterPost201ResponseData

`func NewApiAuthRegisterPost201ResponseData() *ApiAuthRegisterPost201ResponseData`

NewApiAuthRegisterPost201ResponseData instantiates a new ApiAuthRegisterPost201ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiAuthRegisterPost201ResponseDataWithDefaults

`func NewApiAuthRegisterPost201ResponseDataWithDefaults() *ApiAuthRegisterPost201ResponseData`

NewApiAuthRegisterPost201ResponseDataWithDefaults instantiates a new ApiAuthRegisterPost201ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUser

`func (o *ApiAuthRegisterPost201ResponseData) GetUser() User`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *ApiAuthRegisterPost201ResponseData) GetUserOk() (*User, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *ApiAuthRegisterPost201ResponseData) SetUser(v User)`

SetUser sets User field to given value.

### HasUser

`func (o *ApiAuthRegisterPost201ResponseData) HasUser() bool`

HasUser returns a boolean if a field has been set.

### GetToken

`func (o *ApiAuthRegisterPost201ResponseData) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *ApiAuthRegisterPost201ResponseData) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *ApiAuthRegisterPost201ResponseData) SetToken(v string)`

SetToken sets Token field to given value.

### HasToken

`func (o *ApiAuthRegisterPost201ResponseData) HasToken() bool`

HasToken returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


