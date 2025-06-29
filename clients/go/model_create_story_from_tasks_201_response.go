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

// checks if the CreateStoryFromTasks201Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CreateStoryFromTasks201Response{}

// CreateStoryFromTasks201Response struct for CreateStoryFromTasks201Response
type CreateStoryFromTasks201Response struct {
	Success *bool `json:"success,omitempty"`
	Message *string `json:"message,omitempty"`
	Data *CreateStoryFromTasks201ResponseData `json:"data,omitempty"`
}

// NewCreateStoryFromTasks201Response instantiates a new CreateStoryFromTasks201Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCreateStoryFromTasks201Response() *CreateStoryFromTasks201Response {
	this := CreateStoryFromTasks201Response{}
	return &this
}

// NewCreateStoryFromTasks201ResponseWithDefaults instantiates a new CreateStoryFromTasks201Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCreateStoryFromTasks201ResponseWithDefaults() *CreateStoryFromTasks201Response {
	this := CreateStoryFromTasks201Response{}
	return &this
}

// GetSuccess returns the Success field value if set, zero value otherwise.
func (o *CreateStoryFromTasks201Response) GetSuccess() bool {
	if o == nil || IsNil(o.Success) {
		var ret bool
		return ret
	}
	return *o.Success
}

// GetSuccessOk returns a tuple with the Success field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateStoryFromTasks201Response) GetSuccessOk() (*bool, bool) {
	if o == nil || IsNil(o.Success) {
		return nil, false
	}
	return o.Success, true
}

// HasSuccess returns a boolean if a field has been set.
func (o *CreateStoryFromTasks201Response) HasSuccess() bool {
	if o != nil && !IsNil(o.Success) {
		return true
	}

	return false
}

// SetSuccess gets a reference to the given bool and assigns it to the Success field.
func (o *CreateStoryFromTasks201Response) SetSuccess(v bool) {
	o.Success = &v
}

// GetMessage returns the Message field value if set, zero value otherwise.
func (o *CreateStoryFromTasks201Response) GetMessage() string {
	if o == nil || IsNil(o.Message) {
		var ret string
		return ret
	}
	return *o.Message
}

// GetMessageOk returns a tuple with the Message field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateStoryFromTasks201Response) GetMessageOk() (*string, bool) {
	if o == nil || IsNil(o.Message) {
		return nil, false
	}
	return o.Message, true
}

// HasMessage returns a boolean if a field has been set.
func (o *CreateStoryFromTasks201Response) HasMessage() bool {
	if o != nil && !IsNil(o.Message) {
		return true
	}

	return false
}

// SetMessage gets a reference to the given string and assigns it to the Message field.
func (o *CreateStoryFromTasks201Response) SetMessage(v string) {
	o.Message = &v
}

// GetData returns the Data field value if set, zero value otherwise.
func (o *CreateStoryFromTasks201Response) GetData() CreateStoryFromTasks201ResponseData {
	if o == nil || IsNil(o.Data) {
		var ret CreateStoryFromTasks201ResponseData
		return ret
	}
	return *o.Data
}

// GetDataOk returns a tuple with the Data field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CreateStoryFromTasks201Response) GetDataOk() (*CreateStoryFromTasks201ResponseData, bool) {
	if o == nil || IsNil(o.Data) {
		return nil, false
	}
	return o.Data, true
}

// HasData returns a boolean if a field has been set.
func (o *CreateStoryFromTasks201Response) HasData() bool {
	if o != nil && !IsNil(o.Data) {
		return true
	}

	return false
}

// SetData gets a reference to the given CreateStoryFromTasks201ResponseData and assigns it to the Data field.
func (o *CreateStoryFromTasks201Response) SetData(v CreateStoryFromTasks201ResponseData) {
	o.Data = &v
}

func (o CreateStoryFromTasks201Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CreateStoryFromTasks201Response) ToMap() (map[string]interface{}, error) {
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

type NullableCreateStoryFromTasks201Response struct {
	value *CreateStoryFromTasks201Response
	isSet bool
}

func (v NullableCreateStoryFromTasks201Response) Get() *CreateStoryFromTasks201Response {
	return v.value
}

func (v *NullableCreateStoryFromTasks201Response) Set(val *CreateStoryFromTasks201Response) {
	v.value = val
	v.isSet = true
}

func (v NullableCreateStoryFromTasks201Response) IsSet() bool {
	return v.isSet
}

func (v *NullableCreateStoryFromTasks201Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCreateStoryFromTasks201Response(val *CreateStoryFromTasks201Response) *NullableCreateStoryFromTasks201Response {
	return &NullableCreateStoryFromTasks201Response{value: val, isSet: true}
}

func (v NullableCreateStoryFromTasks201Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCreateStoryFromTasks201Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


