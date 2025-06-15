# ApiTasksStoryPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskIds** | **[]string** |  | 
**UserPreferences** | Pointer to [**ApiTasksStoryPostRequestUserPreferences**](ApiTasksStoryPostRequestUserPreferences.md) |  | [optional] 

## Methods

### NewApiTasksStoryPostRequest

`func NewApiTasksStoryPostRequest(taskIds []string, ) *ApiTasksStoryPostRequest`

NewApiTasksStoryPostRequest instantiates a new ApiTasksStoryPostRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiTasksStoryPostRequestWithDefaults

`func NewApiTasksStoryPostRequestWithDefaults() *ApiTasksStoryPostRequest`

NewApiTasksStoryPostRequestWithDefaults instantiates a new ApiTasksStoryPostRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaskIds

`func (o *ApiTasksStoryPostRequest) GetTaskIds() []string`

GetTaskIds returns the TaskIds field if non-nil, zero value otherwise.

### GetTaskIdsOk

`func (o *ApiTasksStoryPostRequest) GetTaskIdsOk() (*[]string, bool)`

GetTaskIdsOk returns a tuple with the TaskIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskIds

`func (o *ApiTasksStoryPostRequest) SetTaskIds(v []string)`

SetTaskIds sets TaskIds field to given value.


### GetUserPreferences

`func (o *ApiTasksStoryPostRequest) GetUserPreferences() ApiTasksStoryPostRequestUserPreferences`

GetUserPreferences returns the UserPreferences field if non-nil, zero value otherwise.

### GetUserPreferencesOk

`func (o *ApiTasksStoryPostRequest) GetUserPreferencesOk() (*ApiTasksStoryPostRequestUserPreferences, bool)`

GetUserPreferencesOk returns a tuple with the UserPreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserPreferences

`func (o *ApiTasksStoryPostRequest) SetUserPreferences(v ApiTasksStoryPostRequestUserPreferences)`

SetUserPreferences sets UserPreferences field to given value.

### HasUserPreferences

`func (o *ApiTasksStoryPostRequest) HasUserPreferences() bool`

HasUserPreferences returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


