# GetStoryById200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Data** | Pointer to [**GetStoryById200ResponseData**](GetStoryById200ResponseData.md) |  | [optional] 

## Methods

### NewGetStoryById200Response

`func NewGetStoryById200Response() *GetStoryById200Response`

NewGetStoryById200Response instantiates a new GetStoryById200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetStoryById200ResponseWithDefaults

`func NewGetStoryById200ResponseWithDefaults() *GetStoryById200Response`

NewGetStoryById200ResponseWithDefaults instantiates a new GetStoryById200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *GetStoryById200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *GetStoryById200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *GetStoryById200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *GetStoryById200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetData

`func (o *GetStoryById200Response) GetData() GetStoryById200ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *GetStoryById200Response) GetDataOk() (*GetStoryById200ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *GetStoryById200Response) SetData(v GetStoryById200ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *GetStoryById200Response) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


