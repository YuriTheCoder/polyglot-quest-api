# ApiWebhooksSharePostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | Pointer to **string** |  | [optional] 
**UserId** | Pointer to **string** |  | [optional] 
**Data** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewApiWebhooksSharePostRequest

`func NewApiWebhooksSharePostRequest() *ApiWebhooksSharePostRequest`

NewApiWebhooksSharePostRequest instantiates a new ApiWebhooksSharePostRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiWebhooksSharePostRequestWithDefaults

`func NewApiWebhooksSharePostRequestWithDefaults() *ApiWebhooksSharePostRequest`

NewApiWebhooksSharePostRequestWithDefaults instantiates a new ApiWebhooksSharePostRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *ApiWebhooksSharePostRequest) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *ApiWebhooksSharePostRequest) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *ApiWebhooksSharePostRequest) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *ApiWebhooksSharePostRequest) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetUserId

`func (o *ApiWebhooksSharePostRequest) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *ApiWebhooksSharePostRequest) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *ApiWebhooksSharePostRequest) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *ApiWebhooksSharePostRequest) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetData

`func (o *ApiWebhooksSharePostRequest) GetData() map[string]interface{}`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ApiWebhooksSharePostRequest) GetDataOk() (*map[string]interface{}, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ApiWebhooksSharePostRequest) SetData(v map[string]interface{})`

SetData sets Data field to given value.

### HasData

`func (o *ApiWebhooksSharePostRequest) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


