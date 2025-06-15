# LoginUser200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**Data** | Pointer to [**RegisterUser201ResponseData**](RegisterUser201ResponseData.md) |  | [optional] 

## Methods

### NewLoginUser200Response

`func NewLoginUser200Response() *LoginUser200Response`

NewLoginUser200Response instantiates a new LoginUser200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoginUser200ResponseWithDefaults

`func NewLoginUser200ResponseWithDefaults() *LoginUser200Response`

NewLoginUser200ResponseWithDefaults instantiates a new LoginUser200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *LoginUser200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *LoginUser200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *LoginUser200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *LoginUser200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetMessage

`func (o *LoginUser200Response) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *LoginUser200Response) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *LoginUser200Response) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *LoginUser200Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetData

`func (o *LoginUser200Response) GetData() RegisterUser201ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *LoginUser200Response) GetDataOk() (*RegisterUser201ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *LoginUser200Response) SetData(v RegisterUser201ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *LoginUser200Response) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


