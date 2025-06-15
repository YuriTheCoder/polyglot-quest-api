# ApiTasksStatsGet200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Stats** | Pointer to [**ApiTasksStatsGet200ResponseDataStats**](ApiTasksStatsGet200ResponseDataStats.md) |  | [optional] 
**OverdueTasks** | Pointer to [**[]Task**](Task.md) |  | [optional] 

## Methods

### NewApiTasksStatsGet200ResponseData

`func NewApiTasksStatsGet200ResponseData() *ApiTasksStatsGet200ResponseData`

NewApiTasksStatsGet200ResponseData instantiates a new ApiTasksStatsGet200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiTasksStatsGet200ResponseDataWithDefaults

`func NewApiTasksStatsGet200ResponseDataWithDefaults() *ApiTasksStatsGet200ResponseData`

NewApiTasksStatsGet200ResponseDataWithDefaults instantiates a new ApiTasksStatsGet200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStats

`func (o *ApiTasksStatsGet200ResponseData) GetStats() ApiTasksStatsGet200ResponseDataStats`

GetStats returns the Stats field if non-nil, zero value otherwise.

### GetStatsOk

`func (o *ApiTasksStatsGet200ResponseData) GetStatsOk() (*ApiTasksStatsGet200ResponseDataStats, bool)`

GetStatsOk returns a tuple with the Stats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStats

`func (o *ApiTasksStatsGet200ResponseData) SetStats(v ApiTasksStatsGet200ResponseDataStats)`

SetStats sets Stats field to given value.

### HasStats

`func (o *ApiTasksStatsGet200ResponseData) HasStats() bool`

HasStats returns a boolean if a field has been set.

### GetOverdueTasks

`func (o *ApiTasksStatsGet200ResponseData) GetOverdueTasks() []Task`

GetOverdueTasks returns the OverdueTasks field if non-nil, zero value otherwise.

### GetOverdueTasksOk

`func (o *ApiTasksStatsGet200ResponseData) GetOverdueTasksOk() (*[]Task, bool)`

GetOverdueTasksOk returns a tuple with the OverdueTasks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverdueTasks

`func (o *ApiTasksStatsGet200ResponseData) SetOverdueTasks(v []Task)`

SetOverdueTasks sets OverdueTasks field to given value.

### HasOverdueTasks

`func (o *ApiTasksStatsGet200ResponseData) HasOverdueTasks() bool`

HasOverdueTasks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


