# GetLeaderboard200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Leaderboard** | Pointer to [**[]GetLeaderboard200ResponseDataLeaderboardInner**](GetLeaderboard200ResponseDataLeaderboardInner.md) |  | [optional] 
**Period** | Pointer to **string** |  | [optional] 
**Total** | Pointer to **float32** |  | [optional] 

## Methods

### NewGetLeaderboard200ResponseData

`func NewGetLeaderboard200ResponseData() *GetLeaderboard200ResponseData`

NewGetLeaderboard200ResponseData instantiates a new GetLeaderboard200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetLeaderboard200ResponseDataWithDefaults

`func NewGetLeaderboard200ResponseDataWithDefaults() *GetLeaderboard200ResponseData`

NewGetLeaderboard200ResponseDataWithDefaults instantiates a new GetLeaderboard200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLeaderboard

`func (o *GetLeaderboard200ResponseData) GetLeaderboard() []GetLeaderboard200ResponseDataLeaderboardInner`

GetLeaderboard returns the Leaderboard field if non-nil, zero value otherwise.

### GetLeaderboardOk

`func (o *GetLeaderboard200ResponseData) GetLeaderboardOk() (*[]GetLeaderboard200ResponseDataLeaderboardInner, bool)`

GetLeaderboardOk returns a tuple with the Leaderboard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeaderboard

`func (o *GetLeaderboard200ResponseData) SetLeaderboard(v []GetLeaderboard200ResponseDataLeaderboardInner)`

SetLeaderboard sets Leaderboard field to given value.

### HasLeaderboard

`func (o *GetLeaderboard200ResponseData) HasLeaderboard() bool`

HasLeaderboard returns a boolean if a field has been set.

### GetPeriod

`func (o *GetLeaderboard200ResponseData) GetPeriod() string`

GetPeriod returns the Period field if non-nil, zero value otherwise.

### GetPeriodOk

`func (o *GetLeaderboard200ResponseData) GetPeriodOk() (*string, bool)`

GetPeriodOk returns a tuple with the Period field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriod

`func (o *GetLeaderboard200ResponseData) SetPeriod(v string)`

SetPeriod sets Period field to given value.

### HasPeriod

`func (o *GetLeaderboard200ResponseData) HasPeriod() bool`

HasPeriod returns a boolean if a field has been set.

### GetTotal

`func (o *GetLeaderboard200ResponseData) GetTotal() float32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *GetLeaderboard200ResponseData) GetTotalOk() (*float32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *GetLeaderboard200ResponseData) SetTotal(v float32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *GetLeaderboard200ResponseData) HasTotal() bool`

HasTotal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


