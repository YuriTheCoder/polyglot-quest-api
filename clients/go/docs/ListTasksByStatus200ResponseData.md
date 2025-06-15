# ListTasksByStatus200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tasks** | Pointer to [**[]Task**](Task.md) |  | [optional] 
**Pagination** | Pointer to [**ListTasksByStatus200ResponseDataPagination**](ListTasksByStatus200ResponseDataPagination.md) |  | [optional] 

## Methods

### NewListTasksByStatus200ResponseData

`func NewListTasksByStatus200ResponseData() *ListTasksByStatus200ResponseData`

NewListTasksByStatus200ResponseData instantiates a new ListTasksByStatus200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListTasksByStatus200ResponseDataWithDefaults

`func NewListTasksByStatus200ResponseDataWithDefaults() *ListTasksByStatus200ResponseData`

NewListTasksByStatus200ResponseDataWithDefaults instantiates a new ListTasksByStatus200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTasks

`func (o *ListTasksByStatus200ResponseData) GetTasks() []Task`

GetTasks returns the Tasks field if non-nil, zero value otherwise.

### GetTasksOk

`func (o *ListTasksByStatus200ResponseData) GetTasksOk() (*[]Task, bool)`

GetTasksOk returns a tuple with the Tasks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTasks

`func (o *ListTasksByStatus200ResponseData) SetTasks(v []Task)`

SetTasks sets Tasks field to given value.

### HasTasks

`func (o *ListTasksByStatus200ResponseData) HasTasks() bool`

HasTasks returns a boolean if a field has been set.

### GetPagination

`func (o *ListTasksByStatus200ResponseData) GetPagination() ListTasksByStatus200ResponseDataPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ListTasksByStatus200ResponseData) GetPaginationOk() (*ListTasksByStatus200ResponseDataPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ListTasksByStatus200ResponseData) SetPagination(v ListTasksByStatus200ResponseDataPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ListTasksByStatus200ResponseData) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


