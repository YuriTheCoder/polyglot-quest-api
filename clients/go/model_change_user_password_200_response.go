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

// checks if the ChangeUserPassword200Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeUserPassword200Response{}

// ChangeUserPassword200Response struct for ChangeUserPassword200Response
type ChangeUserPassword200Response struct {
	Success *bool `json:"success,omitempty"`
	Message *string `json:"message,omitempty"`
}

// NewChangeUserPassword200Response instantiates a new ChangeUserPassword200Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeUserPassword200Response() *ChangeUserPassword200Response {
	this := ChangeUserPassword200Response{}
	return &this
}

// NewChangeUserPassword200ResponseWithDefaults instantiates a new ChangeUserPassword200Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeUserPassword200ResponseWithDefaults() *ChangeUserPassword200Response {
	this := ChangeUserPassword200Response{}
	return &this
}

// GetSuccess returns the Success field value if set, zero value otherwise.
func (o *ChangeUserPassword200Response) GetSuccess() bool {
	if o == nil || IsNil(o.Success) {
		var ret bool
		return ret
	}
	return *o.Success
}

// GetSuccessOk returns a tuple with the Success field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeUserPassword200Response) GetSuccessOk() (*bool, bool) {
	if o == nil || IsNil(o.Success) {
		return nil, false
	}
	return o.Success, true
}

// HasSuccess returns a boolean if a field has been set.
func (o *ChangeUserPassword200Response) HasSuccess() bool {
	if o != nil && !IsNil(o.Success) {
		return true
	}

	return false
}

// SetSuccess gets a reference to the given bool and assigns it to the Success field.
func (o *ChangeUserPassword200Response) SetSuccess(v bool) {
	o.Success = &v
}

// GetMessage returns the Message field value if set, zero value otherwise.
func (o *ChangeUserPassword200Response) GetMessage() string {
	if o == nil || IsNil(o.Message) {
		var ret string
		return ret
	}
	return *o.Message
}

// GetMessageOk returns a tuple with the Message field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeUserPassword200Response) GetMessageOk() (*string, bool) {
	if o == nil || IsNil(o.Message) {
		return nil, false
	}
	return o.Message, true
}

// HasMessage returns a boolean if a field has been set.
func (o *ChangeUserPassword200Response) HasMessage() bool {
	if o != nil && !IsNil(o.Message) {
		return true
	}

	return false
}

// SetMessage gets a reference to the given string and assigns it to the Message field.
func (o *ChangeUserPassword200Response) SetMessage(v string) {
	o.Message = &v
}

func (o ChangeUserPassword200Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeUserPassword200Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Success) {
		toSerialize["success"] = o.Success
	}
	if !IsNil(o.Message) {
		toSerialize["message"] = o.Message
	}
	return toSerialize, nil
}

type NullableChangeUserPassword200Response struct {
	value *ChangeUserPassword200Response
	isSet bool
}

func (v NullableChangeUserPassword200Response) Get() *ChangeUserPassword200Response {
	return v.value
}

func (v *NullableChangeUserPassword200Response) Set(val *ChangeUserPassword200Response) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeUserPassword200Response) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeUserPassword200Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeUserPassword200Response(val *ChangeUserPassword200Response) *NullableChangeUserPassword200Response {
	return &NullableChangeUserPassword200Response{value: val, isSet: true}
}

func (v NullableChangeUserPassword200Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeUserPassword200Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


