# GetTaskStats200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Data** | Pointer to [**GetTaskStats200ResponseData**](GetTaskStats200ResponseData.md) |  | [optional] 

## Methods

### NewGetTaskStats200Response

`func NewGetTaskStats200Response() *GetTaskStats200Response`

NewGetTaskStats200Response instantiates a new GetTaskStats200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetTaskStats200ResponseWithDefaults

`func NewGetTaskStats200ResponseWithDefaults() *GetTaskStats200Response`

NewGetTaskStats200ResponseWithDefaults instantiates a new GetTaskStats200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *GetTaskStats200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *GetTaskStats200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *GetTaskStats200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *GetTaskStats200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetData

`func (o *GetTaskStats200Response) GetData() GetTaskStats200ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *GetTaskStats200Response) GetDataOk() (*GetTaskStats200ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *GetTaskStats200Response) SetData(v GetTaskStats200ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *GetTaskStats200Response) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


