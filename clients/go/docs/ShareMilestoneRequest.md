# ShareMilestoneRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** |  | 
**Data** | Pointer to [**ShareMilestoneRequestData**](ShareMilestoneRequestData.md) |  | [optional] 

## Methods

### NewShareMilestoneRequest

`func NewShareMilestoneRequest(type_ string, ) *ShareMilestoneRequest`

NewShareMilestoneRequest instantiates a new ShareMilestoneRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewShareMilestoneRequestWithDefaults

`func NewShareMilestoneRequestWithDefaults() *ShareMilestoneRequest`

NewShareMilestoneRequestWithDefaults instantiates a new ShareMilestoneRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ShareMilestoneRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ShareMilestoneRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ShareMilestoneRequest) SetType(v string)`

SetType sets Type field to given value.


### GetData

`func (o *ShareMilestoneRequest) GetData() ShareMilestoneRequestData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ShareMilestoneRequest) GetDataOk() (*ShareMilestoneRequestData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ShareMilestoneRequest) SetData(v ShareMilestoneRequestData)`

SetData sets Data field to given value.

### HasData

`func (o *ShareMilestoneRequest) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


