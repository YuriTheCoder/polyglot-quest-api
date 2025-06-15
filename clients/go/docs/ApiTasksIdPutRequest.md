# ApiTasksIdPutRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Title** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**Priority** | Pointer to **string** |  | [optional] 
**DueDate** | Pointer to **NullableTime** |  | [optional] 
**Tags** | Pointer to **[]string** |  | [optional] 

## Methods

### NewApiTasksIdPutRequest

`func NewApiTasksIdPutRequest() *ApiTasksIdPutRequest`

NewApiTasksIdPutRequest instantiates a new ApiTasksIdPutRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiTasksIdPutRequestWithDefaults

`func NewApiTasksIdPutRequestWithDefaults() *ApiTasksIdPutRequest`

NewApiTasksIdPutRequestWithDefaults instantiates a new ApiTasksIdPutRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTitle

`func (o *ApiTasksIdPutRequest) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *ApiTasksIdPutRequest) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *ApiTasksIdPutRequest) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *ApiTasksIdPutRequest) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetDescription

`func (o *ApiTasksIdPutRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ApiTasksIdPutRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ApiTasksIdPutRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ApiTasksIdPutRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetStatus

`func (o *ApiTasksIdPutRequest) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ApiTasksIdPutRequest) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ApiTasksIdPutRequest) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ApiTasksIdPutRequest) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetPriority

`func (o *ApiTasksIdPutRequest) GetPriority() string`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *ApiTasksIdPutRequest) GetPriorityOk() (*string, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *ApiTasksIdPutRequest) SetPriority(v string)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *ApiTasksIdPutRequest) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetDueDate

`func (o *ApiTasksIdPutRequest) GetDueDate() time.Time`

GetDueDate returns the DueDate field if non-nil, zero value otherwise.

### GetDueDateOk

`func (o *ApiTasksIdPutRequest) GetDueDateOk() (*time.Time, bool)`

GetDueDateOk returns a tuple with the DueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDueDate

`func (o *ApiTasksIdPutRequest) SetDueDate(v time.Time)`

SetDueDate sets DueDate field to given value.

### HasDueDate

`func (o *ApiTasksIdPutRequest) HasDueDate() bool`

HasDueDate returns a boolean if a field has been set.

### SetDueDateNil

`func (o *ApiTasksIdPutRequest) SetDueDateNil(b bool)`

 SetDueDateNil sets the value for DueDate to be an explicit nil

### UnsetDueDate
`func (o *ApiTasksIdPutRequest) UnsetDueDate()`

UnsetDueDate ensures that no value is present for DueDate, not even an explicit nil
### GetTags

`func (o *ApiTasksIdPutRequest) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *ApiTasksIdPutRequest) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *ApiTasksIdPutRequest) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *ApiTasksIdPutRequest) HasTags() bool`

HasTags returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


