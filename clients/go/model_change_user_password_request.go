/*
Gamified Task Management API

API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

API version: 1.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"bytes"
	"fmt"
)

// checks if the ChangeUserPasswordRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeUserPasswordRequest{}

// ChangeUserPasswordRequest struct for ChangeUserPasswordRequest
type ChangeUserPasswordRequest struct {
	CurrentPassword string `json:"currentPassword"`
	NewPassword string `json:"newPassword"`
}

type _ChangeUserPasswordRequest ChangeUserPasswordRequest

// NewChangeUserPasswordRequest instantiates a new ChangeUserPasswordRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeUserPasswordRequest(currentPassword string, newPassword string) *ChangeUserPasswordRequest {
	this := ChangeUserPasswordRequest{}
	this.CurrentPassword = currentPassword
	this.NewPassword = newPassword
	return &this
}

// NewChangeUserPasswordRequestWithDefaults instantiates a new ChangeUserPasswordRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeUserPasswordRequestWithDefaults() *ChangeUserPasswordRequest {
	this := ChangeUserPasswordRequest{}
	return &this
}

// GetCurrentPassword returns the CurrentPassword field value
func (o *ChangeUserPasswordRequest) GetCurrentPassword() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.CurrentPassword
}

// GetCurrentPasswordOk returns a tuple with the CurrentPassword field value
// and a boolean to check if the value has been set.
func (o *ChangeUserPasswordRequest) GetCurrentPasswordOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.CurrentPassword, true
}

// SetCurrentPassword sets field value
func (o *ChangeUserPasswordRequest) SetCurrentPassword(v string) {
	o.CurrentPassword = v
}

// GetNewPassword returns the NewPassword field value
func (o *ChangeUserPasswordRequest) GetNewPassword() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.NewPassword
}

// GetNewPasswordOk returns a tuple with the NewPassword field value
// and a boolean to check if the value has been set.
func (o *ChangeUserPasswordRequest) GetNewPasswordOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.NewPassword, true
}

// SetNewPassword sets field value
func (o *ChangeUserPasswordRequest) SetNewPassword(v string) {
	o.NewPassword = v
}

func (o ChangeUserPasswordRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeUserPasswordRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["currentPassword"] = o.CurrentPassword
	toSerialize["newPassword"] = o.NewPassword
	return toSerialize, nil
}

func (o *ChangeUserPasswordRequest) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"currentPassword",
		"newPassword",
	}

	allProperties := make(map[string]interface{})

	err = json.Unmarshal(data, &allProperties)

	if err != nil {
		return err;
	}

	for _, requiredProperty := range(requiredProperties) {
		if _, exists := allProperties[requiredProperty]; !exists {
			return fmt.Errorf("no value given for required property %v", requiredProperty)
		}
	}

	varChangeUserPasswordRequest := _ChangeUserPasswordRequest{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varChangeUserPasswordRequest)

	if err != nil {
		return err
	}

	*o = ChangeUserPasswordRequest(varChangeUserPasswordRequest)

	return err
}

type NullableChangeUserPasswordRequest struct {
	value *ChangeUserPasswordRequest
	isSet bool
}

func (v NullableChangeUserPasswordRequest) Get() *ChangeUserPasswordRequest {
	return v.value
}

func (v *NullableChangeUserPasswordRequest) Set(val *ChangeUserPasswordRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeUserPasswordRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeUserPasswordRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeUserPasswordRequest(val *ChangeUserPasswordRequest) *NullableChangeUserPasswordRequest {
	return &NullableChangeUserPasswordRequest{value: val, isSet: true}
}

func (v NullableChangeUserPasswordRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeUserPasswordRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


