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

// checks if the GetAllUsers200ResponseData type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetAllUsers200ResponseData{}

// GetAllUsers200ResponseData struct for GetAllUsers200ResponseData
type GetAllUsers200ResponseData struct {
	Users []User `json:"users,omitempty"`
	Pagination *GetAllUsers200ResponseDataPagination `json:"pagination,omitempty"`
}

// NewGetAllUsers200ResponseData instantiates a new GetAllUsers200ResponseData object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetAllUsers200ResponseData() *GetAllUsers200ResponseData {
	this := GetAllUsers200ResponseData{}
	return &this
}

// NewGetAllUsers200ResponseDataWithDefaults instantiates a new GetAllUsers200ResponseData object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetAllUsers200ResponseDataWithDefaults() *GetAllUsers200ResponseData {
	this := GetAllUsers200ResponseData{}
	return &this
}

// GetUsers returns the Users field value if set, zero value otherwise.
func (o *GetAllUsers200ResponseData) GetUsers() []User {
	if o == nil || IsNil(o.Users) {
		var ret []User
		return ret
	}
	return o.Users
}

// GetUsersOk returns a tuple with the Users field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetAllUsers200ResponseData) GetUsersOk() ([]User, bool) {
	if o == nil || IsNil(o.Users) {
		return nil, false
	}
	return o.Users, true
}

// HasUsers returns a boolean if a field has been set.
func (o *GetAllUsers200ResponseData) HasUsers() bool {
	if o != nil && !IsNil(o.Users) {
		return true
	}

	return false
}

// SetUsers gets a reference to the given []User and assigns it to the Users field.
func (o *GetAllUsers200ResponseData) SetUsers(v []User) {
	o.Users = v
}

// GetPagination returns the Pagination field value if set, zero value otherwise.
func (o *GetAllUsers200ResponseData) GetPagination() GetAllUsers200ResponseDataPagination {
	if o == nil || IsNil(o.Pagination) {
		var ret GetAllUsers200ResponseDataPagination
		return ret
	}
	return *o.Pagination
}

// GetPaginationOk returns a tuple with the Pagination field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetAllUsers200ResponseData) GetPaginationOk() (*GetAllUsers200ResponseDataPagination, bool) {
	if o == nil || IsNil(o.Pagination) {
		return nil, false
	}
	return o.Pagination, true
}

// HasPagination returns a boolean if a field has been set.
func (o *GetAllUsers200ResponseData) HasPagination() bool {
	if o != nil && !IsNil(o.Pagination) {
		return true
	}

	return false
}

// SetPagination gets a reference to the given GetAllUsers200ResponseDataPagination and assigns it to the Pagination field.
func (o *GetAllUsers200ResponseData) SetPagination(v GetAllUsers200ResponseDataPagination) {
	o.Pagination = &v
}

func (o GetAllUsers200ResponseData) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetAllUsers200ResponseData) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Users) {
		toSerialize["users"] = o.Users
	}
	if !IsNil(o.Pagination) {
		toSerialize["pagination"] = o.Pagination
	}
	return toSerialize, nil
}

type NullableGetAllUsers200ResponseData struct {
	value *GetAllUsers200ResponseData
	isSet bool
}

func (v NullableGetAllUsers200ResponseData) Get() *GetAllUsers200ResponseData {
	return v.value
}

func (v *NullableGetAllUsers200ResponseData) Set(val *GetAllUsers200ResponseData) {
	v.value = val
	v.isSet = true
}

func (v NullableGetAllUsers200ResponseData) IsSet() bool {
	return v.isSet
}

func (v *NullableGetAllUsers200ResponseData) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetAllUsers200ResponseData(val *GetAllUsers200ResponseData) *NullableGetAllUsers200ResponseData {
	return &NullableGetAllUsers200ResponseData{value: val, isSet: true}
}

func (v NullableGetAllUsers200ResponseData) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetAllUsers200ResponseData) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


