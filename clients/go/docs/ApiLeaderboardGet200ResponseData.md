# ApiLeaderboardGet200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Leaderboard** | Pointer to [**[]ApiLeaderboardGet200ResponseDataLeaderboardInner**](ApiLeaderboardGet200ResponseDataLeaderboardInner.md) |  | [optional] 
**Period** | Pointer to **string** |  | [optional] 
**Total** | Pointer to **float32** |  | [optional] 

## Methods

### NewApiLeaderboardGet200ResponseData

`func NewApiLeaderboardGet200ResponseData() *ApiLeaderboardGet200ResponseData`

NewApiLeaderboardGet200ResponseData instantiates a new ApiLeaderboardGet200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiLeaderboardGet200ResponseDataWithDefaults

`func NewApiLeaderboardGet200ResponseDataWithDefaults() *ApiLeaderboardGet200ResponseData`

NewApiLeaderboardGet200ResponseDataWithDefaults instantiates a new ApiLeaderboardGet200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLeaderboard

`func (o *ApiLeaderboardGet200ResponseData) GetLeaderboard() []ApiLeaderboardGet200ResponseDataLeaderboardInner`

GetLeaderboard returns the Leaderboard field if non-nil, zero value otherwise.

### GetLeaderboardOk

`func (o *ApiLeaderboardGet200ResponseData) GetLeaderboardOk() (*[]ApiLeaderboardGet200ResponseDataLeaderboardInner, bool)`

GetLeaderboardOk returns a tuple with the Leaderboard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLeaderboard

`func (o *ApiLeaderboardGet200ResponseData) SetLeaderboard(v []ApiLeaderboardGet200ResponseDataLeaderboardInner)`

SetLeaderboard sets Leaderboard field to given value.

### HasLeaderboard

`func (o *ApiLeaderboardGet200ResponseData) HasLeaderboard() bool`

HasLeaderboard returns a boolean if a field has been set.

### GetPeriod

`func (o *ApiLeaderboardGet200ResponseData) GetPeriod() string`

GetPeriod returns the Period field if non-nil, zero value otherwise.

### GetPeriodOk

`func (o *ApiLeaderboardGet200ResponseData) GetPeriodOk() (*string, bool)`

GetPeriodOk returns a tuple with the Period field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriod

`func (o *ApiLeaderboardGet200ResponseData) SetPeriod(v string)`

SetPeriod sets Period field to given value.

### HasPeriod

`func (o *ApiLeaderboardGet200ResponseData) HasPeriod() bool`

HasPeriod returns a boolean if a field has been set.

### GetTotal

`func (o *ApiLeaderboardGet200ResponseData) GetTotal() float32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *ApiLeaderboardGet200ResponseData) GetTotalOk() (*float32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *ApiLeaderboardGet200ResponseData) SetTotal(v float32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *ApiLeaderboardGet200ResponseData) HasTotal() bool`

HasTotal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


