# ApiAuthRegisterPost201Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**Data** | Pointer to [**ApiAuthRegisterPost201ResponseData**](ApiAuthRegisterPost201ResponseData.md) |  | [optional] 

## Methods

### NewApiAuthRegisterPost201Response

`func NewApiAuthRegisterPost201Response() *ApiAuthRegisterPost201Response`

NewApiAuthRegisterPost201Response instantiates a new ApiAuthRegisterPost201Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiAuthRegisterPost201ResponseWithDefaults

`func NewApiAuthRegisterPost201ResponseWithDefaults() *ApiAuthRegisterPost201Response`

NewApiAuthRegisterPost201ResponseWithDefaults instantiates a new ApiAuthRegisterPost201Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *ApiAuthRegisterPost201Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *ApiAuthRegisterPost201Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *ApiAuthRegisterPost201Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *ApiAuthRegisterPost201Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetMessage

`func (o *ApiAuthRegisterPost201Response) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ApiAuthRegisterPost201Response) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ApiAuthRegisterPost201Response) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ApiAuthRegisterPost201Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetData

`func (o *ApiAuthRegisterPost201Response) GetData() ApiAuthRegisterPost201ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ApiAuthRegisterPost201Response) GetDataOk() (*ApiAuthRegisterPost201ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ApiAuthRegisterPost201Response) SetData(v ApiAuthRegisterPost201ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *ApiAuthRegisterPost201Response) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


