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

// checks if the ToggleUserStatus200ResponseData type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ToggleUserStatus200ResponseData{}

// ToggleUserStatus200ResponseData struct for ToggleUserStatus200ResponseData
type ToggleUserStatus200ResponseData struct {
	User *ToggleUserStatus200ResponseDataUser `json:"user,omitempty"`
}

// NewToggleUserStatus200ResponseData instantiates a new ToggleUserStatus200ResponseData object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewToggleUserStatus200ResponseData() *ToggleUserStatus200ResponseData {
	this := ToggleUserStatus200ResponseData{}
	return &this
}

// NewToggleUserStatus200ResponseDataWithDefaults instantiates a new ToggleUserStatus200ResponseData object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewToggleUserStatus200ResponseDataWithDefaults() *ToggleUserStatus200ResponseData {
	this := ToggleUserStatus200ResponseData{}
	return &this
}

// GetUser returns the User field value if set, zero value otherwise.
func (o *ToggleUserStatus200ResponseData) GetUser() ToggleUserStatus200ResponseDataUser {
	if o == nil || IsNil(o.User) {
		var ret ToggleUserStatus200ResponseDataUser
		return ret
	}
	return *o.User
}

// GetUserOk returns a tuple with the User field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ToggleUserStatus200ResponseData) GetUserOk() (*ToggleUserStatus200ResponseDataUser, bool) {
	if o == nil || IsNil(o.User) {
		return nil, false
	}
	return o.User, true
}

// HasUser returns a boolean if a field has been set.
func (o *ToggleUserStatus200ResponseData) HasUser() bool {
	if o != nil && !IsNil(o.User) {
		return true
	}

	return false
}

// SetUser gets a reference to the given ToggleUserStatus200ResponseDataUser and assigns it to the User field.
func (o *ToggleUserStatus200ResponseData) SetUser(v ToggleUserStatus200ResponseDataUser) {
	o.User = &v
}

func (o ToggleUserStatus200ResponseData) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ToggleUserStatus200ResponseData) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.User) {
		toSerialize["user"] = o.User
	}
	return toSerialize, nil
}

type NullableToggleUserStatus200ResponseData struct {
	value *ToggleUserStatus200ResponseData
	isSet bool
}

func (v NullableToggleUserStatus200ResponseData) Get() *ToggleUserStatus200ResponseData {
	return v.value
}

func (v *NullableToggleUserStatus200ResponseData) Set(val *ToggleUserStatus200ResponseData) {
	v.value = val
	v.isSet = true
}

func (v NullableToggleUserStatus200ResponseData) IsSet() bool {
	return v.isSet
}

func (v *NullableToggleUserStatus200ResponseData) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableToggleUserStatus200ResponseData(val *ToggleUserStatus200ResponseData) *NullableToggleUserStatus200ResponseData {
	return &NullableToggleUserStatus200ResponseData{value: val, isSet: true}
}

func (v NullableToggleUserStatus200ResponseData) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableToggleUserStatus200ResponseData) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


