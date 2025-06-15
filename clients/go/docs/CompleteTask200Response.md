# CompleteTask200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**Data** | Pointer to [**CreateTask201ResponseData**](CreateTask201ResponseData.md) |  | [optional] 

## Methods

### NewCompleteTask200Response

`func NewCompleteTask200Response() *CompleteTask200Response`

NewCompleteTask200Response instantiates a new CompleteTask200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompleteTask200ResponseWithDefaults

`func NewCompleteTask200ResponseWithDefaults() *CompleteTask200Response`

NewCompleteTask200ResponseWithDefaults instantiates a new CompleteTask200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *CompleteTask200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *CompleteTask200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *CompleteTask200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *CompleteTask200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetMessage

`func (o *CompleteTask200Response) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *CompleteTask200Response) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *CompleteTask200Response) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *CompleteTask200Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetData

`func (o *CompleteTask200Response) GetData() CreateTask201ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *CompleteTask200Response) GetDataOk() (*CreateTask201ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *CompleteTask200Response) SetData(v CreateTask201ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *CompleteTask200Response) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


