# ApiUsersGet200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Users** | Pointer to [**[]User**](User.md) |  | [optional] 
**Pagination** | Pointer to [**ApiUsersGet200ResponseDataPagination**](ApiUsersGet200ResponseDataPagination.md) |  | [optional] 

## Methods

### NewApiUsersGet200ResponseData

`func NewApiUsersGet200ResponseData() *ApiUsersGet200ResponseData`

NewApiUsersGet200ResponseData instantiates a new ApiUsersGet200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiUsersGet200ResponseDataWithDefaults

`func NewApiUsersGet200ResponseDataWithDefaults() *ApiUsersGet200ResponseData`

NewApiUsersGet200ResponseDataWithDefaults instantiates a new ApiUsersGet200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUsers

`func (o *ApiUsersGet200ResponseData) GetUsers() []User`

GetUsers returns the Users field if non-nil, zero value otherwise.

### GetUsersOk

`func (o *ApiUsersGet200ResponseData) GetUsersOk() (*[]User, bool)`

GetUsersOk returns a tuple with the Users field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsers

`func (o *ApiUsersGet200ResponseData) SetUsers(v []User)`

SetUsers sets Users field to given value.

### HasUsers

`func (o *ApiUsersGet200ResponseData) HasUsers() bool`

HasUsers returns a boolean if a field has been set.

### GetPagination

`func (o *ApiUsersGet200ResponseData) GetPagination() ApiUsersGet200ResponseDataPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ApiUsersGet200ResponseData) GetPaginationOk() (*ApiUsersGet200ResponseDataPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ApiUsersGet200ResponseData) SetPagination(v ApiUsersGet200ResponseDataPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ApiUsersGet200ResponseData) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


