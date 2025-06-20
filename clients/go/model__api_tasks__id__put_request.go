/*
Gamified Task Management API

API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

API version: 1.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"time"
)

// checks if the ApiTasksIdPutRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ApiTasksIdPutRequest{}

// ApiTasksIdPutRequest struct for ApiTasksIdPutRequest
type ApiTasksIdPutRequest struct {
	Title *string `json:"title,omitempty"`
	Description *string `json:"description,omitempty"`
	Status *string `json:"status,omitempty"`
	Priority *string `json:"priority,omitempty"`
	DueDate NullableTime `json:"dueDate,omitempty"`
	Tags []string `json:"tags,omitempty"`
}

// NewApiTasksIdPutRequest instantiates a new ApiTasksIdPutRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewApiTasksIdPutRequest() *ApiTasksIdPutRequest {
	this := ApiTasksIdPutRequest{}
	return &this
}

// NewApiTasksIdPutRequestWithDefaults instantiates a new ApiTasksIdPutRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewApiTasksIdPutRequestWithDefaults() *ApiTasksIdPutRequest {
	this := ApiTasksIdPutRequest{}
	return &this
}

// GetTitle returns the Title field value if set, zero value otherwise.
func (o *ApiTasksIdPutRequest) GetTitle() string {
	if o == nil || IsNil(o.Title) {
		var ret string
		return ret
	}
	return *o.Title
}

// GetTitleOk returns a tuple with the Title field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApiTasksIdPutRequest) GetTitleOk() (*string, bool) {
	if o == nil || IsNil(o.Title) {
		return nil, false
	}
	return o.Title, true
}

// HasTitle returns a boolean if a field has been set.
func (o *ApiTasksIdPutRequest) HasTitle() bool {
	if o != nil && !IsNil(o.Title) {
		return true
	}

	return false
}

// SetTitle gets a reference to the given string and assigns it to the Title field.
func (o *ApiTasksIdPutRequest) SetTitle(v string) {
	o.Title = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ApiTasksIdPutRequest) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApiTasksIdPutRequest) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ApiTasksIdPutRequest) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ApiTasksIdPutRequest) SetDescription(v string) {
	o.Description = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *ApiTasksIdPutRequest) GetStatus() string {
	if o == nil || IsNil(o.Status) {
		var ret string
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApiTasksIdPutRequest) GetStatusOk() (*string, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *ApiTasksIdPutRequest) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given string and assigns it to the Status field.
func (o *ApiTasksIdPutRequest) SetStatus(v string) {
	o.Status = &v
}

// GetPriority returns the Priority field value if set, zero value otherwise.
func (o *ApiTasksIdPutRequest) GetPriority() string {
	if o == nil || IsNil(o.Priority) {
		var ret string
		return ret
	}
	return *o.Priority
}

// GetPriorityOk returns a tuple with the Priority field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApiTasksIdPutRequest) GetPriorityOk() (*string, bool) {
	if o == nil || IsNil(o.Priority) {
		return nil, false
	}
	return o.Priority, true
}

// HasPriority returns a boolean if a field has been set.
func (o *ApiTasksIdPutRequest) HasPriority() bool {
	if o != nil && !IsNil(o.Priority) {
		return true
	}

	return false
}

// SetPriority gets a reference to the given string and assigns it to the Priority field.
func (o *ApiTasksIdPutRequest) SetPriority(v string) {
	o.Priority = &v
}

// GetDueDate returns the DueDate field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *ApiTasksIdPutRequest) GetDueDate() time.Time {
	if o == nil || IsNil(o.DueDate.Get()) {
		var ret time.Time
		return ret
	}
	return *o.DueDate.Get()
}

// GetDueDateOk returns a tuple with the DueDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *ApiTasksIdPutRequest) GetDueDateOk() (*time.Time, bool) {
	if o == nil {
		return nil, false
	}
	return o.DueDate.Get(), o.DueDate.IsSet()
}

// HasDueDate returns a boolean if a field has been set.
func (o *ApiTasksIdPutRequest) HasDueDate() bool {
	if o != nil && o.DueDate.IsSet() {
		return true
	}

	return false
}

// SetDueDate gets a reference to the given NullableTime and assigns it to the DueDate field.
func (o *ApiTasksIdPutRequest) SetDueDate(v time.Time) {
	o.DueDate.Set(&v)
}
// SetDueDateNil sets the value for DueDate to be an explicit nil
func (o *ApiTasksIdPutRequest) SetDueDateNil() {
	o.DueDate.Set(nil)
}

// UnsetDueDate ensures that no value is present for DueDate, not even an explicit nil
func (o *ApiTasksIdPutRequest) UnsetDueDate() {
	o.DueDate.Unset()
}

// GetTags returns the Tags field value if set, zero value otherwise.
func (o *ApiTasksIdPutRequest) GetTags() []string {
	if o == nil || IsNil(o.Tags) {
		var ret []string
		return ret
	}
	return o.Tags
}

// GetTagsOk returns a tuple with the Tags field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApiTasksIdPutRequest) GetTagsOk() ([]string, bool) {
	if o == nil || IsNil(o.Tags) {
		return nil, false
	}
	return o.Tags, true
}

// HasTags returns a boolean if a field has been set.
func (o *ApiTasksIdPutRequest) HasTags() bool {
	if o != nil && !IsNil(o.Tags) {
		return true
	}

	return false
}

// SetTags gets a reference to the given []string and assigns it to the Tags field.
func (o *ApiTasksIdPutRequest) SetTags(v []string) {
	o.Tags = v
}

func (o ApiTasksIdPutRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ApiTasksIdPutRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Title) {
		toSerialize["title"] = o.Title
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	if !IsNil(o.Priority) {
		toSerialize["priority"] = o.Priority
	}
	if o.DueDate.IsSet() {
		toSerialize["dueDate"] = o.DueDate.Get()
	}
	if !IsNil(o.Tags) {
		toSerialize["tags"] = o.Tags
	}
	return toSerialize, nil
}

type NullableApiTasksIdPutRequest struct {
	value *ApiTasksIdPutRequest
	isSet bool
}

func (v NullableApiTasksIdPutRequest) Get() *ApiTasksIdPutRequest {
	return v.value
}

func (v *NullableApiTasksIdPutRequest) Set(val *ApiTasksIdPutRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableApiTasksIdPutRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableApiTasksIdPutRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableApiTasksIdPutRequest(val *ApiTasksIdPutRequest) *NullableApiTasksIdPutRequest {
	return &NullableApiTasksIdPutRequest{value: val, isSet: true}
}

func (v NullableApiTasksIdPutRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableApiTasksIdPutRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


