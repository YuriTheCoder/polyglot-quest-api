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

// checks if the ApiAuthChangePasswordPutRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ApiAuthChangePasswordPutRequest{}

// ApiAuthChangePasswordPutRequest struct for ApiAuthChangePasswordPutRequest
type ApiAuthChangePasswordPutRequest struct {
	CurrentPassword string `json:"currentPassword"`
	NewPassword string `json:"newPassword"`
}

type _ApiAuthChangePasswordPutRequest ApiAuthChangePasswordPutRequest

// NewApiAuthChangePasswordPutRequest instantiates a new ApiAuthChangePasswordPutRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewApiAuthChangePasswordPutRequest(currentPassword string, newPassword string) *ApiAuthChangePasswordPutRequest {
	this := ApiAuthChangePasswordPutRequest{}
	this.CurrentPassword = currentPassword
	this.NewPassword = newPassword
	return &this
}

// NewApiAuthChangePasswordPutRequestWithDefaults instantiates a new ApiAuthChangePasswordPutRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewApiAuthChangePasswordPutRequestWithDefaults() *ApiAuthChangePasswordPutRequest {
	this := ApiAuthChangePasswordPutRequest{}
	return &this
}

// GetCurrentPassword returns the CurrentPassword field value
func (o *ApiAuthChangePasswordPutRequest) GetCurrentPassword() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.CurrentPassword
}

// GetCurrentPasswordOk returns a tuple with the CurrentPassword field value
// and a boolean to check if the value has been set.
func (o *ApiAuthChangePasswordPutRequest) GetCurrentPasswordOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.CurrentPassword, true
}

// SetCurrentPassword sets field value
func (o *ApiAuthChangePasswordPutRequest) SetCurrentPassword(v string) {
	o.CurrentPassword = v
}

// GetNewPassword returns the NewPassword field value
func (o *ApiAuthChangePasswordPutRequest) GetNewPassword() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.NewPassword
}

// GetNewPasswordOk returns a tuple with the NewPassword field value
// and a boolean to check if the value has been set.
func (o *ApiAuthChangePasswordPutRequest) GetNewPasswordOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.NewPassword, true
}

// SetNewPassword sets field value
func (o *ApiAuthChangePasswordPutRequest) SetNewPassword(v string) {
	o.NewPassword = v
}

func (o ApiAuthChangePasswordPutRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ApiAuthChangePasswordPutRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["currentPassword"] = o.CurrentPassword
	toSerialize["newPassword"] = o.NewPassword
	return toSerialize, nil
}

func (o *ApiAuthChangePasswordPutRequest) UnmarshalJSON(data []byte) (err error) {
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

	varApiAuthChangePasswordPutRequest := _ApiAuthChangePasswordPutRequest{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varApiAuthChangePasswordPutRequest)

	if err != nil {
		return err
	}

	*o = ApiAuthChangePasswordPutRequest(varApiAuthChangePasswordPutRequest)

	return err
}

type NullableApiAuthChangePasswordPutRequest struct {
	value *ApiAuthChangePasswordPutRequest
	isSet bool
}

func (v NullableApiAuthChangePasswordPutRequest) Get() *ApiAuthChangePasswordPutRequest {
	return v.value
}

func (v *NullableApiAuthChangePasswordPutRequest) Set(val *ApiAuthChangePasswordPutRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableApiAuthChangePasswordPutRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableApiAuthChangePasswordPutRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableApiAuthChangePasswordPutRequest(val *ApiAuthChangePasswordPutRequest) *NullableApiAuthChangePasswordPutRequest {
	return &NullableApiAuthChangePasswordPutRequest{value: val, isSet: true}
}

func (v NullableApiAuthChangePasswordPutRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableApiAuthChangePasswordPutRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


