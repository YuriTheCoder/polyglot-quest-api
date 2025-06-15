# ToggleUserStatus200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**Data** | Pointer to [**ToggleUserStatus200ResponseData**](ToggleUserStatus200ResponseData.md) |  | [optional] 

## Methods

### NewToggleUserStatus200Response

`func NewToggleUserStatus200Response() *ToggleUserStatus200Response`

NewToggleUserStatus200Response instantiates a new ToggleUserStatus200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewToggleUserStatus200ResponseWithDefaults

`func NewToggleUserStatus200ResponseWithDefaults() *ToggleUserStatus200Response`

NewToggleUserStatus200ResponseWithDefaults instantiates a new ToggleUserStatus200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *ToggleUserStatus200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *ToggleUserStatus200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *ToggleUserStatus200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *ToggleUserStatus200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetMessage

`func (o *ToggleUserStatus200Response) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ToggleUserStatus200Response) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ToggleUserStatus200Response) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ToggleUserStatus200Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetData

`func (o *ToggleUserStatus200Response) GetData() ToggleUserStatus200ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ToggleUserStatus200Response) GetDataOk() (*ToggleUserStatus200ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ToggleUserStatus200Response) SetData(v ToggleUserStatus200ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *ToggleUserStatus200Response) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


