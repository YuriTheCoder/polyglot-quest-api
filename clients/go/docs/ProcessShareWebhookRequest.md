# ProcessShareWebhookRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | Pointer to **string** |  | [optional] 
**UserId** | Pointer to **string** |  | [optional] 
**Data** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewProcessShareWebhookRequest

`func NewProcessShareWebhookRequest() *ProcessShareWebhookRequest`

NewProcessShareWebhookRequest instantiates a new ProcessShareWebhookRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProcessShareWebhookRequestWithDefaults

`func NewProcessShareWebhookRequestWithDefaults() *ProcessShareWebhookRequest`

NewProcessShareWebhookRequestWithDefaults instantiates a new ProcessShareWebhookRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *ProcessShareWebhookRequest) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *ProcessShareWebhookRequest) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *ProcessShareWebhookRequest) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *ProcessShareWebhookRequest) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetUserId

`func (o *ProcessShareWebhookRequest) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *ProcessShareWebhookRequest) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *ProcessShareWebhookRequest) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *ProcessShareWebhookRequest) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetData

`func (o *ProcessShareWebhookRequest) GetData() map[string]interface{}`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ProcessShareWebhookRequest) GetDataOk() (*map[string]interface{}, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ProcessShareWebhookRequest) SetData(v map[string]interface{})`

SetData sets Data field to given value.

### HasData

`func (o *ProcessShareWebhookRequest) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


