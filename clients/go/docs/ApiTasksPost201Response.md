# ApiTasksPost201Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**Data** | Pointer to [**ApiTasksPost201ResponseData**](ApiTasksPost201ResponseData.md) |  | [optional] 

## Methods

### NewApiTasksPost201Response

`func NewApiTasksPost201Response() *ApiTasksPost201Response`

NewApiTasksPost201Response instantiates a new ApiTasksPost201Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiTasksPost201ResponseWithDefaults

`func NewApiTasksPost201ResponseWithDefaults() *ApiTasksPost201Response`

NewApiTasksPost201ResponseWithDefaults instantiates a new ApiTasksPost201Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *ApiTasksPost201Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *ApiTasksPost201Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *ApiTasksPost201Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *ApiTasksPost201Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetMessage

`func (o *ApiTasksPost201Response) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ApiTasksPost201Response) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ApiTasksPost201Response) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ApiTasksPost201Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetData

`func (o *ApiTasksPost201Response) GetData() ApiTasksPost201ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ApiTasksPost201Response) GetDataOk() (*ApiTasksPost201ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ApiTasksPost201Response) SetData(v ApiTasksPost201ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *ApiTasksPost201Response) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


