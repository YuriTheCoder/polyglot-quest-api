# GetAllUsers200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Users** | Pointer to [**[]User**](User.md) |  | [optional] 
**Pagination** | Pointer to [**GetAllUsers200ResponseDataPagination**](GetAllUsers200ResponseDataPagination.md) |  | [optional] 

## Methods

### NewGetAllUsers200ResponseData

`func NewGetAllUsers200ResponseData() *GetAllUsers200ResponseData`

NewGetAllUsers200ResponseData instantiates a new GetAllUsers200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAllUsers200ResponseDataWithDefaults

`func NewGetAllUsers200ResponseDataWithDefaults() *GetAllUsers200ResponseData`

NewGetAllUsers200ResponseDataWithDefaults instantiates a new GetAllUsers200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUsers

`func (o *GetAllUsers200ResponseData) GetUsers() []User`

GetUsers returns the Users field if non-nil, zero value otherwise.

### GetUsersOk

`func (o *GetAllUsers200ResponseData) GetUsersOk() (*[]User, bool)`

GetUsersOk returns a tuple with the Users field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsers

`func (o *GetAllUsers200ResponseData) SetUsers(v []User)`

SetUsers sets Users field to given value.

### HasUsers

`func (o *GetAllUsers200ResponseData) HasUsers() bool`

HasUsers returns a boolean if a field has been set.

### GetPagination

`func (o *GetAllUsers200ResponseData) GetPagination() GetAllUsers200ResponseDataPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *GetAllUsers200ResponseData) GetPaginationOk() (*GetAllUsers200ResponseDataPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *GetAllUsers200ResponseData) SetPagination(v GetAllUsers200ResponseDataPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *GetAllUsers200ResponseData) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


