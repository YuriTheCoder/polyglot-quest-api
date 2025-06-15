# ListTasks200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tasks** | Pointer to [**[]Task**](Task.md) |  | [optional] 
**Pagination** | Pointer to [**ListTasks200ResponseDataPagination**](ListTasks200ResponseDataPagination.md) |  | [optional] 

## Methods

### NewListTasks200ResponseData

`func NewListTasks200ResponseData() *ListTasks200ResponseData`

NewListTasks200ResponseData instantiates a new ListTasks200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListTasks200ResponseDataWithDefaults

`func NewListTasks200ResponseDataWithDefaults() *ListTasks200ResponseData`

NewListTasks200ResponseDataWithDefaults instantiates a new ListTasks200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTasks

`func (o *ListTasks200ResponseData) GetTasks() []Task`

GetTasks returns the Tasks field if non-nil, zero value otherwise.

### GetTasksOk

`func (o *ListTasks200ResponseData) GetTasksOk() (*[]Task, bool)`

GetTasksOk returns a tuple with the Tasks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTasks

`func (o *ListTasks200ResponseData) SetTasks(v []Task)`

SetTasks sets Tasks field to given value.

### HasTasks

`func (o *ListTasks200ResponseData) HasTasks() bool`

HasTasks returns a boolean if a field has been set.

### GetPagination

`func (o *ListTasks200ResponseData) GetPagination() ListTasks200ResponseDataPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ListTasks200ResponseData) GetPaginationOk() (*ListTasks200ResponseDataPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ListTasks200ResponseData) SetPagination(v ListTasks200ResponseDataPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ListTasks200ResponseData) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


