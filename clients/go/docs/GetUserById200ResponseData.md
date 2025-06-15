# GetUserById200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**User** | Pointer to [**User**](User.md) |  | [optional] 
**TaskStats** | Pointer to [**GetUserById200ResponseDataTaskStats**](GetUserById200ResponseDataTaskStats.md) |  | [optional] 

## Methods

### NewGetUserById200ResponseData

`func NewGetUserById200ResponseData() *GetUserById200ResponseData`

NewGetUserById200ResponseData instantiates a new GetUserById200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetUserById200ResponseDataWithDefaults

`func NewGetUserById200ResponseDataWithDefaults() *GetUserById200ResponseData`

NewGetUserById200ResponseDataWithDefaults instantiates a new GetUserById200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUser

`func (o *GetUserById200ResponseData) GetUser() User`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *GetUserById200ResponseData) GetUserOk() (*User, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *GetUserById200ResponseData) SetUser(v User)`

SetUser sets User field to given value.

### HasUser

`func (o *GetUserById200ResponseData) HasUser() bool`

HasUser returns a boolean if a field has been set.

### GetTaskStats

`func (o *GetUserById200ResponseData) GetTaskStats() GetUserById200ResponseDataTaskStats`

GetTaskStats returns the TaskStats field if non-nil, zero value otherwise.

### GetTaskStatsOk

`func (o *GetUserById200ResponseData) GetTaskStatsOk() (*GetUserById200ResponseDataTaskStats, bool)`

GetTaskStatsOk returns a tuple with the TaskStats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskStats

`func (o *GetUserById200ResponseData) SetTaskStats(v GetUserById200ResponseDataTaskStats)`

SetTaskStats sets TaskStats field to given value.

### HasTaskStats

`func (o *GetUserById200ResponseData) HasTaskStats() bool`

HasTaskStats returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


