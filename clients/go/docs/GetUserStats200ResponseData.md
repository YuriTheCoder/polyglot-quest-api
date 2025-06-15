# GetUserStats200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Users** | Pointer to [**GetUserStats200ResponseDataUsers**](GetUserStats200ResponseDataUsers.md) |  | [optional] 
**Tasks** | Pointer to [**GetUserStats200ResponseDataTasks**](GetUserStats200ResponseDataTasks.md) |  | [optional] 
**MostActiveUsers** | Pointer to [**[]GetUserStats200ResponseDataMostActiveUsersInner**](GetUserStats200ResponseDataMostActiveUsersInner.md) |  | [optional] 

## Methods

### NewGetUserStats200ResponseData

`func NewGetUserStats200ResponseData() *GetUserStats200ResponseData`

NewGetUserStats200ResponseData instantiates a new GetUserStats200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetUserStats200ResponseDataWithDefaults

`func NewGetUserStats200ResponseDataWithDefaults() *GetUserStats200ResponseData`

NewGetUserStats200ResponseDataWithDefaults instantiates a new GetUserStats200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUsers

`func (o *GetUserStats200ResponseData) GetUsers() GetUserStats200ResponseDataUsers`

GetUsers returns the Users field if non-nil, zero value otherwise.

### GetUsersOk

`func (o *GetUserStats200ResponseData) GetUsersOk() (*GetUserStats200ResponseDataUsers, bool)`

GetUsersOk returns a tuple with the Users field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsers

`func (o *GetUserStats200ResponseData) SetUsers(v GetUserStats200ResponseDataUsers)`

SetUsers sets Users field to given value.

### HasUsers

`func (o *GetUserStats200ResponseData) HasUsers() bool`

HasUsers returns a boolean if a field has been set.

### GetTasks

`func (o *GetUserStats200ResponseData) GetTasks() GetUserStats200ResponseDataTasks`

GetTasks returns the Tasks field if non-nil, zero value otherwise.

### GetTasksOk

`func (o *GetUserStats200ResponseData) GetTasksOk() (*GetUserStats200ResponseDataTasks, bool)`

GetTasksOk returns a tuple with the Tasks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTasks

`func (o *GetUserStats200ResponseData) SetTasks(v GetUserStats200ResponseDataTasks)`

SetTasks sets Tasks field to given value.

### HasTasks

`func (o *GetUserStats200ResponseData) HasTasks() bool`

HasTasks returns a boolean if a field has been set.

### GetMostActiveUsers

`func (o *GetUserStats200ResponseData) GetMostActiveUsers() []GetUserStats200ResponseDataMostActiveUsersInner`

GetMostActiveUsers returns the MostActiveUsers field if non-nil, zero value otherwise.

### GetMostActiveUsersOk

`func (o *GetUserStats200ResponseData) GetMostActiveUsersOk() (*[]GetUserStats200ResponseDataMostActiveUsersInner, bool)`

GetMostActiveUsersOk returns a tuple with the MostActiveUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMostActiveUsers

`func (o *GetUserStats200ResponseData) SetMostActiveUsers(v []GetUserStats200ResponseDataMostActiveUsersInner)`

SetMostActiveUsers sets MostActiveUsers field to given value.

### HasMostActiveUsers

`func (o *GetUserStats200ResponseData) HasMostActiveUsers() bool`

HasMostActiveUsers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


