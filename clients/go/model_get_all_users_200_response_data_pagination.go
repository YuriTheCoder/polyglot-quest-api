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

// checks if the GetAllUsers200ResponseDataPagination type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetAllUsers200ResponseDataPagination{}

// GetAllUsers200ResponseDataPagination struct for GetAllUsers200ResponseDataPagination
type GetAllUsers200ResponseDataPagination struct {
	Current *int32 `json:"current,omitempty"`
	Pages *int32 `json:"pages,omitempty"`
	Total *int32 `json:"total,omitempty"`
	Limit *int32 `json:"limit,omitempty"`
}

// NewGetAllUsers200ResponseDataPagination instantiates a new GetAllUsers200ResponseDataPagination object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetAllUsers200ResponseDataPagination() *GetAllUsers200ResponseDataPagination {
	this := GetAllUsers200ResponseDataPagination{}
	return &this
}

// NewGetAllUsers200ResponseDataPaginationWithDefaults instantiates a new GetAllUsers200ResponseDataPagination object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetAllUsers200ResponseDataPaginationWithDefaults() *GetAllUsers200ResponseDataPagination {
	this := GetAllUsers200ResponseDataPagination{}
	return &this
}

// GetCurrent returns the Current field value if set, zero value otherwise.
func (o *GetAllUsers200ResponseDataPagination) GetCurrent() int32 {
	if o == nil || IsNil(o.Current) {
		var ret int32
		return ret
	}
	return *o.Current
}

// GetCurrentOk returns a tuple with the Current field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetAllUsers200ResponseDataPagination) GetCurrentOk() (*int32, bool) {
	if o == nil || IsNil(o.Current) {
		return nil, false
	}
	return o.Current, true
}

// HasCurrent returns a boolean if a field has been set.
func (o *GetAllUsers200ResponseDataPagination) HasCurrent() bool {
	if o != nil && !IsNil(o.Current) {
		return true
	}

	return false
}

// SetCurrent gets a reference to the given int32 and assigns it to the Current field.
func (o *GetAllUsers200ResponseDataPagination) SetCurrent(v int32) {
	o.Current = &v
}

// GetPages returns the Pages field value if set, zero value otherwise.
func (o *GetAllUsers200ResponseDataPagination) GetPages() int32 {
	if o == nil || IsNil(o.Pages) {
		var ret int32
		return ret
	}
	return *o.Pages
}

// GetPagesOk returns a tuple with the Pages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetAllUsers200ResponseDataPagination) GetPagesOk() (*int32, bool) {
	if o == nil || IsNil(o.Pages) {
		return nil, false
	}
	return o.Pages, true
}

// HasPages returns a boolean if a field has been set.
func (o *GetAllUsers200ResponseDataPagination) HasPages() bool {
	if o != nil && !IsNil(o.Pages) {
		return true
	}

	return false
}

// SetPages gets a reference to the given int32 and assigns it to the Pages field.
func (o *GetAllUsers200ResponseDataPagination) SetPages(v int32) {
	o.Pages = &v
}

// GetTotal returns the Total field value if set, zero value otherwise.
func (o *GetAllUsers200ResponseDataPagination) GetTotal() int32 {
	if o == nil || IsNil(o.Total) {
		var ret int32
		return ret
	}
	return *o.Total
}

// GetTotalOk returns a tuple with the Total field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetAllUsers200ResponseDataPagination) GetTotalOk() (*int32, bool) {
	if o == nil || IsNil(o.Total) {
		return nil, false
	}
	return o.Total, true
}

// HasTotal returns a boolean if a field has been set.
func (o *GetAllUsers200ResponseDataPagination) HasTotal() bool {
	if o != nil && !IsNil(o.Total) {
		return true
	}

	return false
}

// SetTotal gets a reference to the given int32 and assigns it to the Total field.
func (o *GetAllUsers200ResponseDataPagination) SetTotal(v int32) {
	o.Total = &v
}

// GetLimit returns the Limit field value if set, zero value otherwise.
func (o *GetAllUsers200ResponseDataPagination) GetLimit() int32 {
	if o == nil || IsNil(o.Limit) {
		var ret int32
		return ret
	}
	return *o.Limit
}

// GetLimitOk returns a tuple with the Limit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GetAllUsers200ResponseDataPagination) GetLimitOk() (*int32, bool) {
	if o == nil || IsNil(o.Limit) {
		return nil, false
	}
	return o.Limit, true
}

// HasLimit returns a boolean if a field has been set.
func (o *GetAllUsers200ResponseDataPagination) HasLimit() bool {
	if o != nil && !IsNil(o.Limit) {
		return true
	}

	return false
}

// SetLimit gets a reference to the given int32 and assigns it to the Limit field.
func (o *GetAllUsers200ResponseDataPagination) SetLimit(v int32) {
	o.Limit = &v
}

func (o GetAllUsers200ResponseDataPagination) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetAllUsers200ResponseDataPagination) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Current) {
		toSerialize["current"] = o.Current
	}
	if !IsNil(o.Pages) {
		toSerialize["pages"] = o.Pages
	}
	if !IsNil(o.Total) {
		toSerialize["total"] = o.Total
	}
	if !IsNil(o.Limit) {
		toSerialize["limit"] = o.Limit
	}
	return toSerialize, nil
}

type NullableGetAllUsers200ResponseDataPagination struct {
	value *GetAllUsers200ResponseDataPagination
	isSet bool
}

func (v NullableGetAllUsers200ResponseDataPagination) Get() *GetAllUsers200ResponseDataPagination {
	return v.value
}

func (v *NullableGetAllUsers200ResponseDataPagination) Set(val *GetAllUsers200ResponseDataPagination) {
	v.value = val
	v.isSet = true
}

func (v NullableGetAllUsers200ResponseDataPagination) IsSet() bool {
	return v.isSet
}

func (v *NullableGetAllUsers200ResponseDataPagination) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetAllUsers200ResponseDataPagination(val *GetAllUsers200ResponseDataPagination) *NullableGetAllUsers200ResponseDataPagination {
	return &NullableGetAllUsers200ResponseDataPagination{value: val, isSet: true}
}

func (v NullableGetAllUsers200ResponseDataPagination) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetAllUsers200ResponseDataPagination) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


