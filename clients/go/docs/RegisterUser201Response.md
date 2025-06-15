# RegisterUser201Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**Data** | Pointer to [**RegisterUser201ResponseData**](RegisterUser201ResponseData.md) |  | [optional] 

## Methods

### NewRegisterUser201Response

`func NewRegisterUser201Response() *RegisterUser201Response`

NewRegisterUser201Response instantiates a new RegisterUser201Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRegisterUser201ResponseWithDefaults

`func NewRegisterUser201ResponseWithDefaults() *RegisterUser201Response`

NewRegisterUser201ResponseWithDefaults instantiates a new RegisterUser201Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *RegisterUser201Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *RegisterUser201Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *RegisterUser201Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *RegisterUser201Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetMessage

`func (o *RegisterUser201Response) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *RegisterUser201Response) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *RegisterUser201Response) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *RegisterUser201Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetData

`func (o *RegisterUser201Response) GetData() RegisterUser201ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *RegisterUser201Response) GetDataOk() (*RegisterUser201ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *RegisterUser201Response) SetData(v RegisterUser201ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *RegisterUser201Response) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


