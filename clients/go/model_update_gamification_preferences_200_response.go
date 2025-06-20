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

// checks if the UpdateGamificationPreferences200Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UpdateGamificationPreferences200Response{}

// UpdateGamificationPreferences200Response struct for UpdateGamificationPreferences200Response
type UpdateGamificationPreferences200Response struct {
	Success *bool `json:"success,omitempty"`
	Message *string `json:"message,omitempty"`
	Data *UpdateGamificationPreferences200ResponseData `json:"data,omitempty"`
}

// NewUpdateGamificationPreferences200Response instantiates a new UpdateGamificationPreferences200Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUpdateGamificationPreferences200Response() *UpdateGamificationPreferences200Response {
	this := UpdateGamificationPreferences200Response{}
	return &this
}

// NewUpdateGamificationPreferences200ResponseWithDefaults instantiates a new UpdateGamificationPreferences200Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUpdateGamificationPreferences200ResponseWithDefaults() *UpdateGamificationPreferences200Response {
	this := UpdateGamificationPreferences200Response{}
	return &this
}

// GetSuccess returns the Success field value if set, zero value otherwise.
func (o *UpdateGamificationPreferences200Response) GetSuccess() bool {
	if o == nil || IsNil(o.Success) {
		var ret bool
		return ret
	}
	return *o.Success
}

// GetSuccessOk returns a tuple with the Success field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpdateGamificationPreferences200Response) GetSuccessOk() (*bool, bool) {
	if o == nil || IsNil(o.Success) {
		return nil, false
	}
	return o.Success, true
}

// HasSuccess returns a boolean if a field has been set.
func (o *UpdateGamificationPreferences200Response) HasSuccess() bool {
	if o != nil && !IsNil(o.Success) {
		return true
	}

	return false
}

// SetSuccess gets a reference to the given bool and assigns it to the Success field.
func (o *UpdateGamificationPreferences200Response) SetSuccess(v bool) {
	o.Success = &v
}

// GetMessage returns the Message field value if set, zero value otherwise.
func (o *UpdateGamificationPreferences200Response) GetMessage() string {
	if o == nil || IsNil(o.Message) {
		var ret string
		return ret
	}
	return *o.Message
}

// GetMessageOk returns a tuple with the Message field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpdateGamificationPreferences200Response) GetMessageOk() (*string, bool) {
	if o == nil || IsNil(o.Message) {
		return nil, false
	}
	return o.Message, true
}

// HasMessage returns a boolean if a field has been set.
func (o *UpdateGamificationPreferences200Response) HasMessage() bool {
	if o != nil && !IsNil(o.Message) {
		return true
	}

	return false
}

// SetMessage gets a reference to the given string and assigns it to the Message field.
func (o *UpdateGamificationPreferences200Response) SetMessage(v string) {
	o.Message = &v
}

// GetData returns the Data field value if set, zero value otherwise.
func (o *UpdateGamificationPreferences200Response) GetData() UpdateGamificationPreferences200ResponseData {
	if o == nil || IsNil(o.Data) {
		var ret UpdateGamificationPreferences200ResponseData
		return ret
	}
	return *o.Data
}

// GetDataOk returns a tuple with the Data field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpdateGamificationPreferences200Response) GetDataOk() (*UpdateGamificationPreferences200ResponseData, bool) {
	if o == nil || IsNil(o.Data) {
		return nil, false
	}
	return o.Data, true
}

// HasData returns a boolean if a field has been set.
func (o *UpdateGamificationPreferences200Response) HasData() bool {
	if o != nil && !IsNil(o.Data) {
		return true
	}

	return false
}

// SetData gets a reference to the given UpdateGamificationPreferences200ResponseData and assigns it to the Data field.
func (o *UpdateGamificationPreferences200Response) SetData(v UpdateGamificationPreferences200ResponseData) {
	o.Data = &v
}

func (o UpdateGamificationPreferences200Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UpdateGamificationPreferences200Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Success) {
		toSerialize["success"] = o.Success
	}
	if !IsNil(o.Message) {
		toSerialize["message"] = o.Message
	}
	if !IsNil(o.Data) {
		toSerialize["data"] = o.Data
	}
	return toSerialize, nil
}

type NullableUpdateGamificationPreferences200Response struct {
	value *UpdateGamificationPreferences200Response
	isSet bool
}

func (v NullableUpdateGamificationPreferences200Response) Get() *UpdateGamificationPreferences200Response {
	return v.value
}

func (v *NullableUpdateGamificationPreferences200Response) Set(val *UpdateGamificationPreferences200Response) {
	v.value = val
	v.isSet = true
}

func (v NullableUpdateGamificationPreferences200Response) IsSet() bool {
	return v.isSet
}

func (v *NullableUpdateGamificationPreferences200Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUpdateGamificationPreferences200Response(val *UpdateGamificationPreferences200Response) *NullableUpdateGamificationPreferences200Response {
	return &NullableUpdateGamificationPreferences200Response{value: val, isSet: true}
}

func (v NullableUpdateGamificationPreferences200Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUpdateGamificationPreferences200Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


