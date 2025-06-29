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

// checks if the GetUserById200Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetUserById200Response{}

// GetUserById200Response struct for GetUserById200Response
type GetUserById200Response struct {
	Success *bool `json:"success,omitempty"`
	Data *GetUserById200ResponseData `json:"data,omitempty"`
}

// NewGetUserById200Response instantiates a new GetUserById200Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetUserById200Response() *GetUserById200Response {
	this := GetUserById200Response{}
	return &this
}

// NewGetUserById200ResponseWithDefaults instantiates a new GetUserById200Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetUserById200ResponseWithDefaults() *GetUserById200Response {
	this := GetUserById200Response{}
	return &this
}

// GetSuccess returns the Success field value if set, zero value otherwise.
func (o *GetUserById200Response) GetSuccess() bool {
	if o == nil || IsNil(o.Success) {
		var ret bool
		return ret
	}
	return *o.Success
}

// GetSuccessOk returns a tuple with the Success field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetUserById200Response) GetSuccessOk() (*bool, bool) {
	if o == nil || IsNil(o.Success) {
		return nil, false
	}
	return o.Success, true
}

// HasSuccess returns a boolean if a field has been set.
func (o *GetUserById200Response) HasSuccess() bool {
	if o != nil && !IsNil(o.Success) {
		return true
	}

	return false
}

// SetSuccess gets a reference to the given bool and assigns it to the Success field.
func (o *GetUserById200Response) SetSuccess(v bool) {
	o.Success = &v
}

// GetData returns the Data field value if set, zero value otherwise.
func (o *GetUserById200Response) GetData() GetUserById200ResponseData {
	if o == nil || IsNil(o.Data) {
		var ret GetUserById200ResponseData
		return ret
	}
	return *o.Data
}

// GetDataOk returns a tuple with the Data field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetUserById200Response) GetDataOk() (*GetUserById200ResponseData, bool) {
	if o == nil || IsNil(o.Data) {
		return nil, false
	}
	return o.Data, true
}

// HasData returns a boolean if a field has been set.
func (o *GetUserById200Response) HasData() bool {
	if o != nil && !IsNil(o.Data) {
		return true
	}

	return false
}

// SetData gets a reference to the given GetUserById200ResponseData and assigns it to the Data field.
func (o *GetUserById200Response) SetData(v GetUserById200ResponseData) {
	o.Data = &v
}

func (o GetUserById200Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetUserById200Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Success) {
		toSerialize["success"] = o.Success
	}
	if !IsNil(o.Data) {
		toSerialize["data"] = o.Data
	}
	return toSerialize, nil
}

type NullableGetUserById200Response struct {
	value *GetUserById200Response
	isSet bool
}

func (v NullableGetUserById200Response) Get() *GetUserById200Response {
	return v.value
}

func (v *NullableGetUserById200Response) Set(val *GetUserById200Response) {
	v.value = val
	v.isSet = true
}

func (v NullableGetUserById200Response) IsSet() bool {
	return v.isSet
}

func (v *NullableGetUserById200Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetUserById200Response(val *GetUserById200Response) *NullableGetUserById200Response {
	return &NullableGetUserById200Response{value: val, isSet: true}
}

func (v NullableGetUserById200Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetUserById200Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


