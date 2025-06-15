# ApiAuthProfilePut200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**Data** | Pointer to [**ApiAuthProfileGet200ResponseData**](ApiAuthProfileGet200ResponseData.md) |  | [optional] 

## Methods

### NewApiAuthProfilePut200Response

`func NewApiAuthProfilePut200Response() *ApiAuthProfilePut200Response`

NewApiAuthProfilePut200Response instantiates a new ApiAuthProfilePut200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiAuthProfilePut200ResponseWithDefaults

`func NewApiAuthProfilePut200ResponseWithDefaults() *ApiAuthProfilePut200Response`

NewApiAuthProfilePut200ResponseWithDefaults instantiates a new ApiAuthProfilePut200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *ApiAuthProfilePut200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *ApiAuthProfilePut200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *ApiAuthProfilePut200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *ApiAuthProfilePut200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetMessage

`func (o *ApiAuthProfilePut200Response) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ApiAuthProfilePut200Response) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ApiAuthProfilePut200Response) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ApiAuthProfilePut200Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetData

`func (o *ApiAuthProfilePut200Response) GetData() ApiAuthProfileGet200ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ApiAuthProfilePut200Response) GetDataOk() (*ApiAuthProfileGet200ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ApiAuthProfilePut200Response) SetData(v ApiAuthProfileGet200ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *ApiAuthProfilePut200Response) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


