# ApiTasksGet200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Data** | Pointer to [**ApiTasksGet200ResponseData**](ApiTasksGet200ResponseData.md) |  | [optional] 

## Methods

### NewApiTasksGet200Response

`func NewApiTasksGet200Response() *ApiTasksGet200Response`

NewApiTasksGet200Response instantiates a new ApiTasksGet200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiTasksGet200ResponseWithDefaults

`func NewApiTasksGet200ResponseWithDefaults() *ApiTasksGet200Response`

NewApiTasksGet200ResponseWithDefaults instantiates a new ApiTasksGet200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *ApiTasksGet200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *ApiTasksGet200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *ApiTasksGet200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *ApiTasksGet200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetData

`func (o *ApiTasksGet200Response) GetData() ApiTasksGet200ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ApiTasksGet200Response) GetDataOk() (*ApiTasksGet200ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ApiTasksGet200Response) SetData(v ApiTasksGet200ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *ApiTasksGet200Response) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


