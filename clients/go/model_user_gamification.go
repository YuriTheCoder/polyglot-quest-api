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

// checks if the UserGamification type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UserGamification{}

// UserGamification struct for UserGamification
type UserGamification struct {
	Level *float32 `json:"level,omitempty"`
	TotalXP *float32 `json:"totalXP,omitempty"`
}

// NewUserGamification instantiates a new UserGamification object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUserGamification() *UserGamification {
	this := UserGamification{}
	return &this
}

// NewUserGamificationWithDefaults instantiates a new UserGamification object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUserGamificationWithDefaults() *UserGamification {
	this := UserGamification{}
	return &this
}

// GetLevel returns the Level field value if set, zero value otherwise.
func (o *UserGamification) GetLevel() float32 {
	if o == nil || IsNil(o.Level) {
		var ret float32
		return ret
	}
	return *o.Level
}

// GetLevelOk returns a tuple with the Level field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserGamification) GetLevelOk() (*float32, bool) {
	if o == nil || IsNil(o.Level) {
		return nil, false
	}
	return o.Level, true
}

// HasLevel returns a boolean if a field has been set.
func (o *UserGamification) HasLevel() bool {
	if o != nil && !IsNil(o.Level) {
		return true
	}

	return false
}

// SetLevel gets a reference to the given float32 and assigns it to the Level field.
func (o *UserGamification) SetLevel(v float32) {
	o.Level = &v
}

// GetTotalXP returns the TotalXP field value if set, zero value otherwise.
func (o *UserGamification) GetTotalXP() float32 {
	if o == nil || IsNil(o.TotalXP) {
		var ret float32
		return ret
	}
	return *o.TotalXP
}

// GetTotalXPOk returns a tuple with the TotalXP field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UserGamification) GetTotalXPOk() (*float32, bool) {
	if o == nil || IsNil(o.TotalXP) {
		return nil, false
	}
	return o.TotalXP, true
}

// HasTotalXP returns a boolean if a field has been set.
func (o *UserGamification) HasTotalXP() bool {
	if o != nil && !IsNil(o.TotalXP) {
		return true
	}

	return false
}

// SetTotalXP gets a reference to the given float32 and assigns it to the TotalXP field.
func (o *UserGamification) SetTotalXP(v float32) {
	o.TotalXP = &v
}

func (o UserGamification) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UserGamification) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Level) {
		toSerialize["level"] = o.Level
	}
	if !IsNil(o.TotalXP) {
		toSerialize["totalXP"] = o.TotalXP
	}
	return toSerialize, nil
}

type NullableUserGamification struct {
	value *UserGamification
	isSet bool
}

func (v NullableUserGamification) Get() *UserGamification {
	return v.value
}

func (v *NullableUserGamification) Set(val *UserGamification) {
	v.value = val
	v.isSet = true
}

func (v NullableUserGamification) IsSet() bool {
	return v.isSet
}

func (v *NullableUserGamification) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUserGamification(val *UserGamification) *NullableUserGamification {
	return &NullableUserGamification{value: val, isSet: true}
}

func (v NullableUserGamification) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUserGamification) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


