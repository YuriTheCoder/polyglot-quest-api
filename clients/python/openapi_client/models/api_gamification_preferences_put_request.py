# coding: utf-8

"""
    Gamified Task Management API

    API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing import Optional, Set
from typing_extensions import Self

class ApiGamificationPreferencesPutRequest(BaseModel):
    """
    ApiGamificationPreferencesPutRequest
    """ # noqa: E501
    var_class: Optional[StrictStr] = Field(default=None, alias="class")
    theme: Optional[StrictStr] = None
    auto_share: Optional[StrictBool] = Field(default=None, alias="autoShare")
    share_on_level_up: Optional[StrictBool] = Field(default=None, alias="shareOnLevelUp")
    share_on_badge: Optional[StrictBool] = Field(default=None, alias="shareOnBadge")
    __properties: ClassVar[List[str]] = ["class", "theme", "autoShare", "shareOnLevelUp", "shareOnBadge"]

    @field_validator('var_class')
    def var_class_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['Aventureiro', 'Guerreiro', 'Mago', 'Ladino', 'Paladino', 'Explorador']):
            raise ValueError("must be one of enum values ('Aventureiro', 'Guerreiro', 'Mago', 'Ladino', 'Paladino', 'Explorador')")
        return value

    @field_validator('theme')
    def theme_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(['medieval', 'scifi', 'modern', 'fantasy']):
            raise ValueError("must be one of enum values ('medieval', 'scifi', 'modern', 'fantasy')")
        return value

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of ApiGamificationPreferencesPutRequest from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ApiGamificationPreferencesPutRequest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "class": obj.get("class"),
            "theme": obj.get("theme"),
            "autoShare": obj.get("autoShare"),
            "shareOnLevelUp": obj.get("shareOnLevelUp"),
            "shareOnBadge": obj.get("shareOnBadge")
        })
        return _obj


