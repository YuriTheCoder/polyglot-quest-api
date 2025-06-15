# GetBadges200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Earned** | Pointer to [**[]GetBadges200ResponseDataEarnedInner**](GetBadges200ResponseDataEarnedInner.md) |  | [optional] 
**Available** | Pointer to **[]map[string]interface{}** |  | [optional] 
**Total** | Pointer to **float32** |  | [optional] 
**EarnedCount** | Pointer to **float32** |  | [optional] 

## Methods

### NewGetBadges200ResponseData

`func NewGetBadges200ResponseData() *GetBadges200ResponseData`

NewGetBadges200ResponseData instantiates a new GetBadges200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetBadges200ResponseDataWithDefaults

`func NewGetBadges200ResponseDataWithDefaults() *GetBadges200ResponseData`

NewGetBadges200ResponseDataWithDefaults instantiates a new GetBadges200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEarned

`func (o *GetBadges200ResponseData) GetEarned() []GetBadges200ResponseDataEarnedInner`

GetEarned returns the Earned field if non-nil, zero value otherwise.

### GetEarnedOk

`func (o *GetBadges200ResponseData) GetEarnedOk() (*[]GetBadges200ResponseDataEarnedInner, bool)`

GetEarnedOk returns a tuple with the Earned field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEarned

`func (o *GetBadges200ResponseData) SetEarned(v []GetBadges200ResponseDataEarnedInner)`

SetEarned sets Earned field to given value.

### HasEarned

`func (o *GetBadges200ResponseData) HasEarned() bool`

HasEarned returns a boolean if a field has been set.

### GetAvailable

`func (o *GetBadges200ResponseData) GetAvailable() []map[string]interface{}`

GetAvailable returns the Available field if non-nil, zero value otherwise.

### GetAvailableOk

`func (o *GetBadges200ResponseData) GetAvailableOk() (*[]map[string]interface{}, bool)`

GetAvailableOk returns a tuple with the Available field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailable

`func (o *GetBadges200ResponseData) SetAvailable(v []map[string]interface{})`

SetAvailable sets Available field to given value.

### HasAvailable

`func (o *GetBadges200ResponseData) HasAvailable() bool`

HasAvailable returns a boolean if a field has been set.

### GetTotal

`func (o *GetBadges200ResponseData) GetTotal() float32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *GetBadges200ResponseData) GetTotalOk() (*float32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *GetBadges200ResponseData) SetTotal(v float32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *GetBadges200ResponseData) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetEarnedCount

`func (o *GetBadges200ResponseData) GetEarnedCount() float32`

GetEarnedCount returns the EarnedCount field if non-nil, zero value otherwise.

### GetEarnedCountOk

`func (o *GetBadges200ResponseData) GetEarnedCountOk() (*float32, bool)`

GetEarnedCountOk returns a tuple with the EarnedCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEarnedCount

`func (o *GetBadges200ResponseData) SetEarnedCount(v float32)`

SetEarnedCount sets EarnedCount field to given value.

### HasEarnedCount

`func (o *GetBadges200ResponseData) HasEarnedCount() bool`

HasEarnedCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


