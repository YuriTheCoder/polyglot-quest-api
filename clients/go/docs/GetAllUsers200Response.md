# GetAllUsers200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Data** | Pointer to [**GetAllUsers200ResponseData**](GetAllUsers200ResponseData.md) |  | [optional] 

## Methods

### NewGetAllUsers200Response

`func NewGetAllUsers200Response() *GetAllUsers200Response`

NewGetAllUsers200Response instantiates a new GetAllUsers200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAllUsers200ResponseWithDefaults

`func NewGetAllUsers200ResponseWithDefaults() *GetAllUsers200Response`

NewGetAllUsers200ResponseWithDefaults instantiates a new GetAllUsers200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *GetAllUsers200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *GetAllUsers200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *GetAllUsers200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *GetAllUsers200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetData

`func (o *GetAllUsers200Response) GetData() GetAllUsers200ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *GetAllUsers200Response) GetDataOk() (*GetAllUsers200ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *GetAllUsers200Response) SetData(v GetAllUsers200ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *GetAllUsers200Response) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


