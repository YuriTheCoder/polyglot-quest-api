# ApiAuthProfileGet200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Data** | Pointer to [**ApiAuthProfileGet200ResponseData**](ApiAuthProfileGet200ResponseData.md) |  | [optional] 

## Methods

### NewApiAuthProfileGet200Response

`func NewApiAuthProfileGet200Response() *ApiAuthProfileGet200Response`

NewApiAuthProfileGet200Response instantiates a new ApiAuthProfileGet200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiAuthProfileGet200ResponseWithDefaults

`func NewApiAuthProfileGet200ResponseWithDefaults() *ApiAuthProfileGet200Response`

NewApiAuthProfileGet200ResponseWithDefaults instantiates a new ApiAuthProfileGet200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *ApiAuthProfileGet200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *ApiAuthProfileGet200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *ApiAuthProfileGet200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *ApiAuthProfileGet200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetData

`func (o *ApiAuthProfileGet200Response) GetData() ApiAuthProfileGet200ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ApiAuthProfileGet200Response) GetDataOk() (*ApiAuthProfileGet200ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ApiAuthProfileGet200Response) SetData(v ApiAuthProfileGet200ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *ApiAuthProfileGet200Response) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


