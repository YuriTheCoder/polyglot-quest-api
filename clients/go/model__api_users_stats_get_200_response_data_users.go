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

// checks if the ApiUsersStatsGet200ResponseDataUsers type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ApiUsersStatsGet200ResponseDataUsers{}

// ApiUsersStatsGet200ResponseDataUsers struct for ApiUsersStatsGet200ResponseDataUsers
type ApiUsersStatsGet200ResponseDataUsers struct {
	Total *int32 `json:"total,omitempty"`
	Active *int32 `json:"active,omitempty"`
	Inactive *int32 `json:"inactive,omitempty"`
	Admins *int32 `json:"admins,omitempty"`
}

// NewApiUsersStatsGet200ResponseDataUsers instantiates a new ApiUsersStatsGet200ResponseDataUsers object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewApiUsersStatsGet200ResponseDataUsers() *ApiUsersStatsGet200ResponseDataUsers {
	this := ApiUsersStatsGet200ResponseDataUsers{}
	return &this
}

// NewApiUsersStatsGet200ResponseDataUsersWithDefaults instantiates a new ApiUsersStatsGet200ResponseDataUsers object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewApiUsersStatsGet200ResponseDataUsersWithDefaults() *ApiUsersStatsGet200ResponseDataUsers {
	this := ApiUsersStatsGet200ResponseDataUsers{}
	return &this
}

// GetTotal returns the Total field value if set, zero value otherwise.
func (o *ApiUsersStatsGet200ResponseDataUsers) GetTotal() int32 {
	if o == nil || IsNil(o.Total) {
		var ret int32
		return ret
	}
	return *o.Total
}

// GetTotalOk returns a tuple with the Total field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApiUsersStatsGet200ResponseDataUsers) GetTotalOk() (*int32, bool) {
	if o == nil || IsNil(o.Total) {
		return nil, false
	}
	return o.Total, true
}

// HasTotal returns a boolean if a field has been set.
func (o *ApiUsersStatsGet200ResponseDataUsers) HasTotal() bool {
	if o != nil && !IsNil(o.Total) {
		return true
	}

	return false
}

// SetTotal gets a reference to the given int32 and assigns it to the Total field.
func (o *ApiUsersStatsGet200ResponseDataUsers) SetTotal(v int32) {
	o.Total = &v
}

// GetActive returns the Active field value if set, zero value otherwise.
func (o *ApiUsersStatsGet200ResponseDataUsers) GetActive() int32 {
	if o == nil || IsNil(o.Active) {
		var ret int32
		return ret
	}
	return *o.Active
}

// GetActiveOk returns a tuple with the Active field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApiUsersStatsGet200ResponseDataUsers) GetActiveOk() (*int32, bool) {
	if o == nil || IsNil(o.Active) {
		return nil, false
	}
	return o.Active, true
}

// HasActive returns a boolean if a field has been set.
func (o *ApiUsersStatsGet200ResponseDataUsers) HasActive() bool {
	if o != nil && !IsNil(o.Active) {
		return true
	}

	return false
}

// SetActive gets a reference to the given int32 and assigns it to the Active field.
func (o *ApiUsersStatsGet200ResponseDataUsers) SetActive(v int32) {
	o.Active = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *ApiUsersStatsGet200ResponseDataUsers) GetInactive() int32 {
	if o == nil || IsNil(o.Inactive) {
		var ret int32
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApiUsersStatsGet200ResponseDataUsers) GetInactiveOk() (*int32, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *ApiUsersStatsGet200ResponseDataUsers) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given int32 and assigns it to the Inactive field.
func (o *ApiUsersStatsGet200ResponseDataUsers) SetInactive(v int32) {
	o.Inactive = &v
}

// GetAdmins returns the Admins field value if set, zero value otherwise.
func (o *ApiUsersStatsGet200ResponseDataUsers) GetAdmins() int32 {
	if o == nil || IsNil(o.Admins) {
		var ret int32
		return ret
	}
	return *o.Admins
}

// GetAdminsOk returns a tuple with the Admins field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApiUsersStatsGet200ResponseDataUsers) GetAdminsOk() (*int32, bool) {
	if o == nil || IsNil(o.Admins) {
		return nil, false
	}
	return o.Admins, true
}

// HasAdmins returns a boolean if a field has been set.
func (o *ApiUsersStatsGet200ResponseDataUsers) HasAdmins() bool {
	if o != nil && !IsNil(o.Admins) {
		return true
	}

	return false
}

// SetAdmins gets a reference to the given int32 and assigns it to the Admins field.
func (o *ApiUsersStatsGet200ResponseDataUsers) SetAdmins(v int32) {
	o.Admins = &v
}

func (o ApiUsersStatsGet200ResponseDataUsers) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ApiUsersStatsGet200ResponseDataUsers) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Total) {
		toSerialize["total"] = o.Total
	}
	if !IsNil(o.Active) {
		toSerialize["active"] = o.Active
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.Admins) {
		toSerialize["admins"] = o.Admins
	}
	return toSerialize, nil
}

type NullableApiUsersStatsGet200ResponseDataUsers struct {
	value *ApiUsersStatsGet200ResponseDataUsers
	isSet bool
}

func (v NullableApiUsersStatsGet200ResponseDataUsers) Get() *ApiUsersStatsGet200ResponseDataUsers {
	return v.value
}

func (v *NullableApiUsersStatsGet200ResponseDataUsers) Set(val *ApiUsersStatsGet200ResponseDataUsers) {
	v.value = val
	v.isSet = true
}

func (v NullableApiUsersStatsGet200ResponseDataUsers) IsSet() bool {
	return v.isSet
}

func (v *NullableApiUsersStatsGet200ResponseDataUsers) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableApiUsersStatsGet200ResponseDataUsers(val *ApiUsersStatsGet200ResponseDataUsers) *NullableApiUsersStatsGet200ResponseDataUsers {
	return &NullableApiUsersStatsGet200ResponseDataUsers{value: val, isSet: true}
}

func (v NullableApiUsersStatsGet200ResponseDataUsers) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableApiUsersStatsGet200ResponseDataUsers) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


