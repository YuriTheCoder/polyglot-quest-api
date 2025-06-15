# ApiUsersStatsGet200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Users** | Pointer to [**ApiUsersStatsGet200ResponseDataUsers**](ApiUsersStatsGet200ResponseDataUsers.md) |  | [optional] 
**Tasks** | Pointer to [**ApiUsersStatsGet200ResponseDataTasks**](ApiUsersStatsGet200ResponseDataTasks.md) |  | [optional] 
**MostActiveUsers** | Pointer to [**[]ApiUsersStatsGet200ResponseDataMostActiveUsersInner**](ApiUsersStatsGet200ResponseDataMostActiveUsersInner.md) |  | [optional] 

## Methods

### NewApiUsersStatsGet200ResponseData

`func NewApiUsersStatsGet200ResponseData() *ApiUsersStatsGet200ResponseData`

NewApiUsersStatsGet200ResponseData instantiates a new ApiUsersStatsGet200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiUsersStatsGet200ResponseDataWithDefaults

`func NewApiUsersStatsGet200ResponseDataWithDefaults() *ApiUsersStatsGet200ResponseData`

NewApiUsersStatsGet200ResponseDataWithDefaults instantiates a new ApiUsersStatsGet200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUsers

`func (o *ApiUsersStatsGet200ResponseData) GetUsers() ApiUsersStatsGet200ResponseDataUsers`

GetUsers returns the Users field if non-nil, zero value otherwise.

### GetUsersOk

`func (o *ApiUsersStatsGet200ResponseData) GetUsersOk() (*ApiUsersStatsGet200ResponseDataUsers, bool)`

GetUsersOk returns a tuple with the Users field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsers

`func (o *ApiUsersStatsGet200ResponseData) SetUsers(v ApiUsersStatsGet200ResponseDataUsers)`

SetUsers sets Users field to given value.

### HasUsers

`func (o *ApiUsersStatsGet200ResponseData) HasUsers() bool`

HasUsers returns a boolean if a field has been set.

### GetTasks

`func (o *ApiUsersStatsGet200ResponseData) GetTasks() ApiUsersStatsGet200ResponseDataTasks`

GetTasks returns the Tasks field if non-nil, zero value otherwise.

### GetTasksOk

`func (o *ApiUsersStatsGet200ResponseData) GetTasksOk() (*ApiUsersStatsGet200ResponseDataTasks, bool)`

GetTasksOk returns a tuple with the Tasks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTasks

`func (o *ApiUsersStatsGet200ResponseData) SetTasks(v ApiUsersStatsGet200ResponseDataTasks)`

SetTasks sets Tasks field to given value.

### HasTasks

`func (o *ApiUsersStatsGet200ResponseData) HasTasks() bool`

HasTasks returns a boolean if a field has been set.

### GetMostActiveUsers

`func (o *ApiUsersStatsGet200ResponseData) GetMostActiveUsers() []ApiUsersStatsGet200ResponseDataMostActiveUsersInner`

GetMostActiveUsers returns the MostActiveUsers field if non-nil, zero value otherwise.

### GetMostActiveUsersOk

`func (o *ApiUsersStatsGet200ResponseData) GetMostActiveUsersOk() (*[]ApiUsersStatsGet200ResponseDataMostActiveUsersInner, bool)`

GetMostActiveUsersOk returns a tuple with the MostActiveUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMostActiveUsers

`func (o *ApiUsersStatsGet200ResponseData) SetMostActiveUsers(v []ApiUsersStatsGet200ResponseDataMostActiveUsersInner)`

SetMostActiveUsers sets MostActiveUsers field to given value.

### HasMostActiveUsers

`func (o *ApiUsersStatsGet200ResponseData) HasMostActiveUsers() bool`

HasMostActiveUsers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


