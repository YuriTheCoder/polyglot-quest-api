# ApiAuthLoginPost200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**Data** | Pointer to [**ApiAuthRegisterPost201ResponseData**](ApiAuthRegisterPost201ResponseData.md) |  | [optional] 

## Methods

### NewApiAuthLoginPost200Response

`func NewApiAuthLoginPost200Response() *ApiAuthLoginPost200Response`

NewApiAuthLoginPost200Response instantiates a new ApiAuthLoginPost200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiAuthLoginPost200ResponseWithDefaults

`func NewApiAuthLoginPost200ResponseWithDefaults() *ApiAuthLoginPost200Response`

NewApiAuthLoginPost200ResponseWithDefaults instantiates a new ApiAuthLoginPost200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *ApiAuthLoginPost200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *ApiAuthLoginPost200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *ApiAuthLoginPost200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *ApiAuthLoginPost200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetMessage

`func (o *ApiAuthLoginPost200Response) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ApiAuthLoginPost200Response) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ApiAuthLoginPost200Response) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ApiAuthLoginPost200Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetData

`func (o *ApiAuthLoginPost200Response) GetData() ApiAuthRegisterPost201ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ApiAuthLoginPost200Response) GetDataOk() (*ApiAuthRegisterPost201ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ApiAuthLoginPost200Response) SetData(v ApiAuthRegisterPost201ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *ApiAuthLoginPost200Response) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


