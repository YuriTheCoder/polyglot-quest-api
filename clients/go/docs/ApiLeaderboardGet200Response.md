# ApiLeaderboardGet200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | Pointer to **bool** |  | [optional] 
**Data** | Pointer to [**ApiLeaderboardGet200ResponseData**](ApiLeaderboardGet200ResponseData.md) |  | [optional] 

## Methods

### NewApiLeaderboardGet200Response

`func NewApiLeaderboardGet200Response() *ApiLeaderboardGet200Response`

NewApiLeaderboardGet200Response instantiates a new ApiLeaderboardGet200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiLeaderboardGet200ResponseWithDefaults

`func NewApiLeaderboardGet200ResponseWithDefaults() *ApiLeaderboardGet200Response`

NewApiLeaderboardGet200ResponseWithDefaults instantiates a new ApiLeaderboardGet200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuccess

`func (o *ApiLeaderboardGet200Response) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *ApiLeaderboardGet200Response) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *ApiLeaderboardGet200Response) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *ApiLeaderboardGet200Response) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetData

`func (o *ApiLeaderboardGet200Response) GetData() ApiLeaderboardGet200ResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ApiLeaderboardGet200Response) GetDataOk() (*ApiLeaderboardGet200ResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ApiLeaderboardGet200Response) SetData(v ApiLeaderboardGet200ResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *ApiLeaderboardGet200Response) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


