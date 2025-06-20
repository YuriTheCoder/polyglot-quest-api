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

// checks if the GetGlobalStats200ResponseDataUsers type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetGlobalStats200ResponseDataUsers{}

// GetGlobalStats200ResponseDataUsers struct for GetGlobalStats200ResponseDataUsers
type GetGlobalStats200ResponseDataUsers struct {
	Total *float32 `json:"total,omitempty"`
	AverageLevel *float32 `json:"averageLevel,omitempty"`
}

// NewGetGlobalStats200ResponseDataUsers instantiates a new GetGlobalStats200ResponseDataUsers object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetGlobalStats200ResponseDataUsers() *GetGlobalStats200ResponseDataUsers {
	this := GetGlobalStats200ResponseDataUsers{}
	return &this
}

// NewGetGlobalStats200ResponseDataUsersWithDefaults instantiates a new GetGlobalStats200ResponseDataUsers object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetGlobalStats200ResponseDataUsersWithDefaults() *GetGlobalStats200ResponseDataUsers {
	this := GetGlobalStats200ResponseDataUsers{}
	return &this
}

// GetTotal returns the Total field value if set, zero value otherwise.
func (o *GetGlobalStats200ResponseDataUsers) GetTotal() float32 {
	if o == nil || IsNil(o.Total) {
		var ret float32
		return ret
	}
	return *o.Total
}

// GetTotalOk returns a tuple with the Total field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetGlobalStats200ResponseDataUsers) GetTotalOk() (*float32, bool) {
	if o == nil || IsNil(o.Total) {
		return nil, false
	}
	return o.Total, true
}

// HasTotal returns a boolean if a field has been set.
func (o *GetGlobalStats200ResponseDataUsers) HasTotal() bool {
	if o != nil && !IsNil(o.Total) {
		return true
	}

	return false
}

// SetTotal gets a reference to the given float32 and assigns it to the Total field.
func (o *GetGlobalStats200ResponseDataUsers) SetTotal(v float32) {
	o.Total = &v
}

// GetAverageLevel returns the AverageLevel field value if set, zero value otherwise.
func (o *GetGlobalStats200ResponseDataUsers) GetAverageLevel() float32 {
	if o == nil || IsNil(o.AverageLevel) {
		var ret float32
		return ret
	}
	return *o.AverageLevel
}

// GetAverageLevelOk returns a tuple with the AverageLevel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetGlobalStats200ResponseDataUsers) GetAverageLevelOk() (*float32, bool) {
	if o == nil || IsNil(o.AverageLevel) {
		return nil, false
	}
	return o.AverageLevel, true
}

// HasAverageLevel returns a boolean if a field has been set.
func (o *GetGlobalStats200ResponseDataUsers) HasAverageLevel() bool {
	if o != nil && !IsNil(o.AverageLevel) {
		return true
	}

	return false
}

// SetAverageLevel gets a reference to the given float32 and assigns it to the AverageLevel field.
func (o *GetGlobalStats200ResponseDataUsers) SetAverageLevel(v float32) {
	o.AverageLevel = &v
}

func (o GetGlobalStats200ResponseDataUsers) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetGlobalStats200ResponseDataUsers) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Total) {
		toSerialize["total"] = o.Total
	}
	if !IsNil(o.AverageLevel) {
		toSerialize["averageLevel"] = o.AverageLevel
	}
	return toSerialize, nil
}

type NullableGetGlobalStats200ResponseDataUsers struct {
	value *GetGlobalStats200ResponseDataUsers
	isSet bool
}

func (v NullableGetGlobalStats200ResponseDataUsers) Get() *GetGlobalStats200ResponseDataUsers {
	return v.value
}

func (v *NullableGetGlobalStats200ResponseDataUsers) Set(val *GetGlobalStats200ResponseDataUsers) {
	v.value = val
	v.isSet = true
}

func (v NullableGetGlobalStats200ResponseDataUsers) IsSet() bool {
	return v.isSet
}

func (v *NullableGetGlobalStats200ResponseDataUsers) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetGlobalStats200ResponseDataUsers(val *GetGlobalStats200ResponseDataUsers) *NullableGetGlobalStats200ResponseDataUsers {
	return &NullableGetGlobalStats200ResponseDataUsers{value: val, isSet: true}
}

func (v NullableGetGlobalStats200ResponseDataUsers) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetGlobalStats200ResponseDataUsers) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


