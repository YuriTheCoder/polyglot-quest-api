# coding: utf-8

"""
    Gamified Task Management API

    API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.share_milestone_request_data import ShareMilestoneRequestData

class TestShareMilestoneRequestData(unittest.TestCase):
    """ShareMilestoneRequestData unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ShareMilestoneRequestData:
        """Test ShareMilestoneRequestData
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ShareMilestoneRequestData`
        """
        model = ShareMilestoneRequestData()
        if include_optional:
            return ShareMilestoneRequestData(
                level = 1.337,
                badge = None,
                streak = 1.337,
                message = ''
            )
        else:
            return ShareMilestoneRequestData(
        )
        """

    def testShareMilestoneRequestData(self):
        """Test ShareMilestoneRequestData"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
