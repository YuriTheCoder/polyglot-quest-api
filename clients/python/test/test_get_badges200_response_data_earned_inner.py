# coding: utf-8

"""
    Gamified Task Management API

    API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.get_badges200_response_data_earned_inner import GetBadges200ResponseDataEarnedInner

class TestGetBadges200ResponseDataEarnedInner(unittest.TestCase):
    """GetBadges200ResponseDataEarnedInner unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> GetBadges200ResponseDataEarnedInner:
        """Test GetBadges200ResponseDataEarnedInner
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `GetBadges200ResponseDataEarnedInner`
        """
        model = GetBadges200ResponseDataEarnedInner()
        if include_optional:
            return GetBadges200ResponseDataEarnedInner(
                id = '',
                name = '',
                description = '',
                icon = '',
                earned = True
            )
        else:
            return GetBadges200ResponseDataEarnedInner(
        )
        """

    def testGetBadges200ResponseDataEarnedInner(self):
        """Test GetBadges200ResponseDataEarnedInner"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
