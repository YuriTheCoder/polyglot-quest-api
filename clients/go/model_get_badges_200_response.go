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

// checks if the GetBadges200Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetBadges200Response{}

// GetBadges200Response struct for GetBadges200Response
type GetBadges200Response struct {
	Success *bool `json:"success,omitempty"`
	Data *GetBadges200ResponseData `json:"data,omitempty"`
}

// NewGetBadges200Response instantiates a new GetBadges200Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetBadges200Response() *GetBadges200Response {
	this := GetBadges200Response{}
	return &this
}

// NewGetBadges200ResponseWithDefaults instantiates a new GetBadges200Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetBadges200ResponseWithDefaults() *GetBadges200Response {
	this := GetBadges200Response{}
	return &this
}

// GetSuccess returns the Success field value if set, zero value otherwise.
func (o *GetBadges200Response) GetSuccess() bool {
	if o == nil || IsNil(o.Success) {
		var ret bool
		return ret
	}
	return *o.Success
}

// GetSuccessOk returns a tuple with the Success field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetBadges200Response) GetSuccessOk() (*bool, bool) {
	if o == nil || IsNil(o.Success) {
		return nil, false
	}
	return o.Success, true
}

// HasSuccess returns a boolean if a field has been set.
func (o *GetBadges200Response) HasSuccess() bool {
	if o != nil && !IsNil(o.Success) {
		return true
	}

	return false
}

// SetSuccess gets a reference to the given bool and assigns it to the Success field.
func (o *GetBadges200Response) SetSuccess(v bool) {
	o.Success = &v
}

// GetData returns the Data field value if set, zero value otherwise.
func (o *GetBadges200Response) GetData() GetBadges200ResponseData {
	if o == nil || IsNil(o.Data) {
		var ret GetBadges200ResponseData
		return ret
	}
	return *o.Data
}

// GetDataOk returns a tuple with the Data field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetBadges200Response) GetDataOk() (*GetBadges200ResponseData, bool) {
	if o == nil || IsNil(o.Data) {
		return nil, false
	}
	return o.Data, true
}

// HasData returns a boolean if a field has been set.
func (o *GetBadges200Response) HasData() bool {
	if o != nil && !IsNil(o.Data) {
		return true
	}

	return false
}

// SetData gets a reference to the given GetBadges200ResponseData and assigns it to the Data field.
func (o *GetBadges200Response) SetData(v GetBadges200ResponseData) {
	o.Data = &v
}

func (o GetBadges200Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetBadges200Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Success) {
		toSerialize["success"] = o.Success
	}
	if !IsNil(o.Data) {
		toSerialize["data"] = o.Data
	}
	return toSerialize, nil
}

type NullableGetBadges200Response struct {
	value *GetBadges200Response
	isSet bool
}

func (v NullableGetBadges200Response) Get() *GetBadges200Response {
	return v.value
}

func (v *NullableGetBadges200Response) Set(val *GetBadges200Response) {
	v.value = val
	v.isSet = true
}

func (v NullableGetBadges200Response) IsSet() bool {
	return v.isSet
}

func (v *NullableGetBadges200Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetBadges200Response(val *GetBadges200Response) *NullableGetBadges200Response {
	return &NullableGetBadges200Response{value: val, isSet: true}
}

func (v NullableGetBadges200Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetBadges200Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


