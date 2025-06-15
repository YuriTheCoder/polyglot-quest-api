# CreateTaskRequest

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

### NewCreateTaskRequest

`func NewCreateTaskRequest(title string, description string, ) *CreateTaskRequest`

NewCreateTaskRequest instantiates a new CreateTaskRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateTaskRequestWithDefaults

`func NewCreateTaskRequestWithDefaults() *CreateTaskRequest`

NewCreateTaskRequestWithDefaults instantiates a new CreateTaskRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTitle

`func (o *CreateTaskRequest) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *CreateTaskRequest) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *CreateTaskRequest) SetTitle(v string)`

SetTitle sets Title field to given value.


### GetDescription

`func (o *CreateTaskRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateTaskRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateTaskRequest) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetStatus

`func (o *CreateTaskRequest) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CreateTaskRequest) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CreateTaskRequest) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CreateTaskRequest) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetPriority

`func (o *CreateTaskRequest) GetPriority() string`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *CreateTaskRequest) GetPriorityOk() (*string, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *CreateTaskRequest) SetPriority(v string)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *CreateTaskRequest) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetDueDate

`func (o *CreateTaskRequest) GetDueDate() time.Time`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *CreateTaskRequest) GetDueDateOk() (*time.Time, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *CreateTaskRequest) SetDueDate(v time.Time)`

SetDueDate sets DueDate field to given value.

### HasDueDate

`func (o *CreateTaskRequest) HasDueDate() bool`

HasDueDate returns a boolean if a field has been set.

### GetTags

`func (o *CreateTaskRequest) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *CreateTaskRequest) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *CreateTaskRequest) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *CreateTaskRequest) HasTags() bool`

HasTags returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


