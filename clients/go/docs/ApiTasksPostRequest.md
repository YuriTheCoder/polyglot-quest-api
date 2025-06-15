# ApiTasksPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Title** | **string** |  | 
**Description** | **string** |  | 
**Status** | Pointer to **string** |  | [optional] [default to "pending"]
**Priority** | Pointer to **string** |  | [optional] [default to "medium"]
**DueDate** | Pointer to **time.Time** |  | [optional] 
**Tags** | Pointer to **[]string** |  | [optional] 

## Methods

### NewApiTasksPostRequest

`func NewApiTasksPostRequest(title string, description string, ) *ApiTasksPostRequest`

NewApiTasksPostRequest instantiates a new ApiTasksPostRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiTasksPostRequestWithDefaults

`func NewApiTasksPostRequestWithDefaults() *ApiTasksPostRequest`

NewApiTasksPostRequestWithDefaults instantiates a new ApiTasksPostRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTitle

`func (o *ApiTasksPostRequest) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *ApiTasksPostRequest) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *ApiTasksPostRequest) SetTitle(v string)`

SetTitle sets Title field to given value.


### GetDescription

`func (o *ApiTasksPostRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ApiTasksPostRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ApiTasksPostRequest) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetStatus

`func (o *ApiTasksPostRequest) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ApiTasksPostRequest) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ApiTasksPostRequest) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ApiTasksPostRequest) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetPriority

`func (o *ApiTasksPostRequest) GetPriority() string`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *ApiTasksPostRequest) GetPriorityOk() (*string, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *ApiTasksPostRequest) SetPriority(v string)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *ApiTasksPostRequest) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetDueDate

`func (o *ApiTasksPostRequest) GetDueDate() time.Time`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *ApiTasksPostRequest) GetDueDateOk() (*time.Time, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *ApiTasksPostRequest) SetDueDate(v time.Time)`

SetDueDate sets DueDate field to given value.

### HasDueDate

`func (o *ApiTasksPostRequest) HasDueDate() bool`

HasDueDate returns a boolean if a field has been set.

### GetTags

`func (o *ApiTasksPostRequest) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *ApiTasksPostRequest) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *ApiTasksPostRequest) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *ApiTasksPostRequest) HasTags() bool`

HasTags returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


