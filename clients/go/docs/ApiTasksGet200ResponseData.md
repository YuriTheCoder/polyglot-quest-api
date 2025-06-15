# ApiTasksGet200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tasks** | Pointer to [**[]Task**](Task.md) |  | [optional] 
**Pagination** | Pointer to [**ApiTasksGet200ResponseDataPagination**](ApiTasksGet200ResponseDataPagination.md) |  | [optional] 

## Methods

### NewApiTasksGet200ResponseData

`func NewApiTasksGet200ResponseData() *ApiTasksGet200ResponseData`

NewApiTasksGet200ResponseData instantiates a new ApiTasksGet200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiTasksGet200ResponseDataWithDefaults

`func NewApiTasksGet200ResponseDataWithDefaults() *ApiTasksGet200ResponseData`

NewApiTasksGet200ResponseDataWithDefaults instantiates a new ApiTasksGet200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTasks

`func (o *ApiTasksGet200ResponseData) GetTasks() []Task`

GetTasks returns the Tasks field if non-nil, zero value otherwise.

### GetTasksOk

`func (o *ApiTasksGet200ResponseData) GetTasksOk() (*[]Task, bool)`

GetTasksOk returns a tuple with the Tasks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTasks

`func (o *ApiTasksGet200ResponseData) SetTasks(v []Task)`

SetTasks sets Tasks field to given value.

### HasTasks

`func (o *ApiTasksGet200ResponseData) HasTasks() bool`

HasTasks returns a boolean if a field has been set.

### GetPagination

`func (o *ApiTasksGet200ResponseData) GetPagination() ApiTasksGet200ResponseDataPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ApiTasksGet200ResponseData) GetPaginationOk() (*ApiTasksGet200ResponseDataPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ApiTasksGet200ResponseData) SetPagination(v ApiTasksGet200ResponseDataPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ApiTasksGet200ResponseData) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


