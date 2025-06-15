# CreateStoryFromTasksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskIds** | **[]string** |  | 
**UserPreferences** | Pointer to [**CreateStoryFromTasksRequestUserPreferences**](CreateStoryFromTasksRequestUserPreferences.md) |  | [optional] 

## Methods

### NewCreateStoryFromTasksRequest

`func NewCreateStoryFromTasksRequest(taskIds []string, ) *CreateStoryFromTasksRequest`

NewCreateStoryFromTasksRequest instantiates a new CreateStoryFromTasksRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateStoryFromTasksRequestWithDefaults

`func NewCreateStoryFromTasksRequestWithDefaults() *CreateStoryFromTasksRequest`

NewCreateStoryFromTasksRequestWithDefaults instantiates a new CreateStoryFromTasksRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTaskIds

`func (o *CreateStoryFromTasksRequest) GetTaskIds() []string`

GetTaskIds returns the TaskIds field if non-nil, zero value otherwise.

### GetTaskIdsOk

`func (o *CreateStoryFromTasksRequest) GetTaskIdsOk() (*[]string, bool)`

GetTaskIdsOk returns a tuple with the TaskIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskIds

`func (o *CreateStoryFromTasksRequest) SetTaskIds(v []string)`

SetTaskIds sets TaskIds field to given value.


### GetUserPreferences

`func (o *CreateStoryFromTasksRequest) GetUserPreferences() CreateStoryFromTasksRequestUserPreferences`

GetUserPreferences returns the UserPreferences field if non-nil, zero value otherwise.

### GetUserPreferencesOk

`func (o *CreateStoryFromTasksRequest) GetUserPreferencesOk() (*CreateStoryFromTasksRequestUserPreferences, bool)`

GetUserPreferencesOk returns a tuple with the UserPreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserPreferences

`func (o *CreateStoryFromTasksRequest) SetUserPreferences(v CreateStoryFromTasksRequestUserPreferences)`

SetUserPreferences sets UserPreferences field to given value.

### HasUserPreferences

`func (o *CreateStoryFromTasksRequest) HasUserPreferences() bool`

HasUserPreferences returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


