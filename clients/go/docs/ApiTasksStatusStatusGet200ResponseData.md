# ApiTasksStatusStatusGet200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tasks** | Pointer to [**[]Task**](Task.md) |  | [optional] 
**Pagination** | Pointer to [**ApiTasksStatusStatusGet200ResponseDataPagination**](ApiTasksStatusStatusGet200ResponseDataPagination.md) |  | [optional] 

## Methods

### NewApiTasksStatusStatusGet200ResponseData

`func NewApiTasksStatusStatusGet200ResponseData() *ApiTasksStatusStatusGet200ResponseData`

NewApiTasksStatusStatusGet200ResponseData instantiates a new ApiTasksStatusStatusGet200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiTasksStatusStatusGet200ResponseDataWithDefaults

`func NewApiTasksStatusStatusGet200ResponseDataWithDefaults() *ApiTasksStatusStatusGet200ResponseData`

NewApiTasksStatusStatusGet200ResponseDataWithDefaults instantiates a new ApiTasksStatusStatusGet200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTasks

`func (o *ApiTasksStatusStatusGet200ResponseData) GetTasks() []Task`

GetTasks returns the Tasks field if non-nil, zero value otherwise.

### GetTasksOk

`func (o *ApiTasksStatusStatusGet200ResponseData) GetTasksOk() (*[]Task, bool)`

GetTasksOk returns a tuple with the Tasks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTasks

`func (o *ApiTasksStatusStatusGet200ResponseData) SetTasks(v []Task)`

SetTasks sets Tasks field to given value.

### HasTasks

`func (o *ApiTasksStatusStatusGet200ResponseData) HasTasks() bool`

HasTasks returns a boolean if a field has been set.

### GetPagination

`func (o *ApiTasksStatusStatusGet200ResponseData) GetPagination() ApiTasksStatusStatusGet200ResponseDataPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ApiTasksStatusStatusGet200ResponseData) GetPaginationOk() (*ApiTasksStatusStatusGet200ResponseDataPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ApiTasksStatusStatusGet200ResponseData) SetPagination(v ApiTasksStatusStatusGet200ResponseDataPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ApiTasksStatusStatusGet200ResponseData) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


