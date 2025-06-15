# ApiAuthChangePasswordPutRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CurrentPassword** | **string** |  | 
**NewPassword** | **string** |  | 

## Methods

### NewApiAuthChangePasswordPutRequest

`func NewApiAuthChangePasswordPutRequest(currentPassword string, newPassword string, ) *ApiAuthChangePasswordPutRequest`

NewApiAuthChangePasswordPutRequest instantiates a new ApiAuthChangePasswordPutRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiAuthChangePasswordPutRequestWithDefaults

`func NewApiAuthChangePasswordPutRequestWithDefaults() *ApiAuthChangePasswordPutRequest`

NewApiAuthChangePasswordPutRequestWithDefaults instantiates a new ApiAuthChangePasswordPutRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrentPassword

`func (o *ApiAuthChangePasswordPutRequest) GetCurrentPassword() string`

GetCurrentPassword returns the CurrentPassword field if non-nil, zero value otherwise.

### GetCurrentPasswordOk

`func (o *ApiAuthChangePasswordPutRequest) GetCurrentPasswordOk() (*string, bool)`

GetCurrentPasswordOk returns a tuple with the CurrentPassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentPassword

`func (o *ApiAuthChangePasswordPutRequest) SetCurrentPassword(v string)`

SetCurrentPassword sets CurrentPassword field to given value.


### GetNewPassword

`func (o *ApiAuthChangePasswordPutRequest) GetNewPassword() string`

GetNewPassword returns the NewPassword field if non-nil, zero value otherwise.

### GetNewPasswordOk

`func (o *ApiAuthChangePasswordPutRequest) GetNewPasswordOk() (*string, bool)`

GetNewPasswordOk returns a tuple with the NewPassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewPassword

`func (o *ApiAuthChangePasswordPutRequest) SetNewPassword(v string)`

SetNewPassword sets NewPassword field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


