/*
Gamified Task Management API

API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

API version: 1.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// checks if the ApiTasksIdCompleteQuestPost200ResponseData type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ApiTasksIdCompleteQuestPost200ResponseData{}

// ApiTasksIdCompleteQuestPost200ResponseData struct for ApiTasksIdCompleteQuestPost200ResponseData
type ApiTasksIdCompleteQuestPost200ResponseData struct {
	Task *ApiTasksIdCompleteQuestPost200ResponseDataTask `json:"task,omitempty"`
	Gamification *ApiTasksIdCompleteQuestPost200ResponseDataGamification `json:"gamification,omitempty"`
}

// NewApiTasksIdCompleteQuestPost200ResponseData instantiates a new ApiTasksIdCompleteQuestPost200ResponseData object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewApiTasksIdCompleteQuestPost200ResponseData() *ApiTasksIdCompleteQuestPost200ResponseData {
	this := ApiTasksIdCompleteQuestPost200ResponseData{}
	return &this
}

// NewApiTasksIdCompleteQuestPost200ResponseDataWithDefaults instantiates a new ApiTasksIdCompleteQuestPost200ResponseData object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewApiTasksIdCompleteQuestPost200ResponseDataWithDefaults() *ApiTasksIdCompleteQuestPost200ResponseData {
	this := ApiTasksIdCompleteQuestPost200ResponseData{}
	return &this
}

// GetTask returns the Task field value if set, zero value otherwise.
func (o *ApiTasksIdCompleteQuestPost200ResponseData) GetTask() ApiTasksIdCompleteQuestPost200ResponseDataTask {
	if o == nil || IsNil(o.Task) {
		var ret ApiTasksIdCompleteQuestPost200ResponseDataTask
		return ret
	}
	return *o.Task
}

// GetTaskOk returns a tuple with the Task field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApiTasksIdCompleteQuestPost200ResponseData) GetTaskOk() (*ApiTasksIdCompleteQuestPost200ResponseDataTask, bool) {
	if o == nil || IsNil(o.Task) {
		return nil, false
	}
	return o.Task, true
}

// HasTask returns a boolean if a field has been set.
func (o *ApiTasksIdCompleteQuestPost200ResponseData) HasTask() bool {
	if o != nil && !IsNil(o.Task) {
		return true
	}

	return false
}

// SetTask gets a reference to the given ApiTasksIdCompleteQuestPost200ResponseDataTask and assigns it to the Task field.
func (o *ApiTasksIdCompleteQuestPost200ResponseData) SetTask(v ApiTasksIdCompleteQuestPost200ResponseDataTask) {
	o.Task = &v
}

// GetGamification returns the Gamification field value if set, zero value otherwise.
func (o *ApiTasksIdCompleteQuestPost200ResponseData) GetGamification() ApiTasksIdCompleteQuestPost200ResponseDataGamification {
	if o == nil || IsNil(o.Gamification) {
		var ret ApiTasksIdCompleteQuestPost200ResponseDataGamification
		return ret
	}
	return *o.Gamification
}

// GetGamificationOk returns a tuple with the Gamification field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApiTasksIdCompleteQuestPost200ResponseData) GetGamificationOk() (*ApiTasksIdCompleteQuestPost200ResponseDataGamification, bool) {
	if o == nil || IsNil(o.Gamification) {
		return nil, false
	}
	return o.Gamification, true
}

// HasGamification returns a boolean if a field has been set.
func (o *ApiTasksIdCompleteQuestPost200ResponseData) HasGamification() bool {
	if o != nil && !IsNil(o.Gamification) {
		return true
	}

	return false
}

// SetGamification gets a reference to the given ApiTasksIdCompleteQuestPost200ResponseDataGamification and assigns it to the Gamification field.
func (o *ApiTasksIdCompleteQuestPost200ResponseData) SetGamification(v ApiTasksIdCompleteQuestPost200ResponseDataGamification) {
	o.Gamification = &v
}

func (o ApiTasksIdCompleteQuestPost200ResponseData) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ApiTasksIdCompleteQuestPost200ResponseData) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Task) {
		toSerialize["task"] = o.Task
	}
	if !IsNil(o.Gamification) {
		toSerialize["gamification"] = o.Gamification
	}
	return toSerialize, nil
}

type NullableApiTasksIdCompleteQuestPost200ResponseData struct {
	value *ApiTasksIdCompleteQuestPost200ResponseData
	isSet bool
}

func (v NullableApiTasksIdCompleteQuestPost200ResponseData) Get() *ApiTasksIdCompleteQuestPost200ResponseData {
	return v.value
}

func (v *NullableApiTasksIdCompleteQuestPost200ResponseData) Set(val *ApiTasksIdCompleteQuestPost200ResponseData) {
	v.value = val
	v.isSet = true
}

func (v NullableApiTasksIdCompleteQuestPost200ResponseData) IsSet() bool {
	return v.isSet
}

func (v *NullableApiTasksIdCompleteQuestPost200ResponseData) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableApiTasksIdCompleteQuestPost200ResponseData(val *ApiTasksIdCompleteQuestPost200ResponseData) *NullableApiTasksIdCompleteQuestPost200ResponseData {
	return &NullableApiTasksIdCompleteQuestPost200ResponseData{value: val, isSet: true}
}

func (v NullableApiTasksIdCompleteQuestPost200ResponseData) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableApiTasksIdCompleteQuestPost200ResponseData) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


