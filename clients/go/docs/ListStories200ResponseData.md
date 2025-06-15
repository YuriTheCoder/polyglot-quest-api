# ListStories200ResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Stories** | Pointer to [**[]Story**](Story.md) |  | [optional] 
**Pagination** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewListStories200ResponseData

`func NewListStories200ResponseData() *ListStories200ResponseData`

NewListStories200ResponseData instantiates a new ListStories200ResponseData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListStories200ResponseDataWithDefaults

`func NewListStories200ResponseDataWithDefaults() *ListStories200ResponseData`

NewListStories200ResponseDataWithDefaults instantiates a new ListStories200ResponseData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStories

`func (o *ListStories200ResponseData) GetStories() []Story`

GetStories returns the Stories field if non-nil, zero value otherwise.

### GetStoriesOk

`func (o *ListStories200ResponseData) GetStoriesOk() (*[]Story, bool)`

GetStoriesOk returns a tuple with the Stories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStories

`func (o *ListStories200ResponseData) SetStories(v []Story)`

SetStories sets Stories field to given value.

### HasStories

`func (o *ListStories200ResponseData) HasStories() bool`

HasStories returns a boolean if a field has been set.

### GetPagination

`func (o *ListStories200ResponseData) GetPagination() map[string]interface{}`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ListStories200ResponseData) GetPaginationOk() (*map[string]interface{}, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ListStories200ResponseData) SetPagination(v map[string]interface{})`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ListStories200ResponseData) HasPagination() bool`

HasPagination returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


