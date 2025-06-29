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

// checks if the CreateTask201Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CreateTask201Response{}

// CreateTask201Response struct for CreateTask201Response
type CreateTask201Response struct {
	Success *bool `json:"success,omitempty"`
	Message *string `json:"message,omitempty"`
	Data *CreateTask201ResponseData `json:"data,omitempty"`
}

// NewCreateTask201Response instantiates a new CreateTask201Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreateTask201Response() *CreateTask201Response {
	this := CreateTask201Response{}
	return &this
}

// NewCreateTask201ResponseWithDefaults instantiates a new CreateTask201Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreateTask201ResponseWithDefaults() *CreateTask201Response {
	this := CreateTask201Response{}
	return &this
}

// GetSuccess returns the Success field value if set, zero value otherwise.
func (o *CreateTask201Response) GetSuccess() bool {
	if o == nil || IsNil(o.Success) {
		var ret bool
		return ret
	}
	return *o.Success
}

// GetSuccessOk returns a tuple with the Success field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateTask201Response) GetSuccessOk() (*bool, bool) {
	if o == nil || IsNil(o.Success) {
		return nil, false
	}
	return o.Success, true
}

// HasSuccess returns a boolean if a field has been set.
func (o *CreateTask201Response) HasSuccess() bool {
	if o != nil && !IsNil(o.Success) {
		return true
	}

	return false
}

// SetSuccess gets a reference to the given bool and assigns it to the Success field.
func (o *CreateTask201Response) SetSuccess(v bool) {
	o.Success = &v
}

// GetMessage returns the Message field value if set, zero value otherwise.
func (o *CreateTask201Response) GetMessage() string {
	if o == nil || IsNil(o.Message) {
		var ret string
		return ret
	}
	return *o.Message
}

// GetMessageOk returns a tuple with the Message field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateTask201Response) GetMessageOk() (*string, bool) {
	if o == nil || IsNil(o.Message) {
		return nil, false
	}
	return o.Message, true
}

// HasMessage returns a boolean if a field has been set.
func (o *CreateTask201Response) HasMessage() bool {
	if o != nil && !IsNil(o.Message) {
		return true
	}

	return false
}

// SetMessage gets a reference to the given string and assigns it to the Message field.
func (o *CreateTask201Response) SetMessage(v string) {
	o.Message = &v
}

// GetData returns the Data field value if set, zero value otherwise.
func (o *CreateTask201Response) GetData() CreateTask201ResponseData {
	if o == nil || IsNil(o.Data) {
		var ret CreateTask201ResponseData
		return ret
	}
	return *o.Data
}

// GetDataOk returns a tuple with the Data field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateTask201Response) GetDataOk() (*CreateTask201ResponseData, bool) {
	if o == nil || IsNil(o.Data) {
		return nil, false
	}
	return o.Data, true
}

// HasData returns a boolean if a field has been set.
func (o *CreateTask201Response) HasData() bool {
	if o != nil && !IsNil(o.Data) {
		return true
	}

	return false
}

// SetData gets a reference to the given CreateTask201ResponseData and assigns it to the Data field.
func (o *CreateTask201Response) SetData(v CreateTask201ResponseData) {
	o.Data = &v
}

func (o CreateTask201Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CreateTask201Response) ToMap() (map[string]interface{}, error) {
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

type NullableCreateTask201Response struct {
	value *CreateTask201Response
	isSet bool
}

func (v NullableCreateTask201Response) Get() *CreateTask201Response {
	return v.value
}

func (v *NullableCreateTask201Response) Set(val *CreateTask201Response) {
	v.value = val
	v.isSet = true
}

func (v NullableCreateTask201Response) IsSet() bool {
	return v.isSet
}

func (v *NullableCreateTask201Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreateTask201Response(val *CreateTask201Response) *NullableCreateTask201Response {
	return &NullableCreateTask201Response{value: val, isSet: true}
}

func (v NullableCreateTask201Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreateTask201Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


