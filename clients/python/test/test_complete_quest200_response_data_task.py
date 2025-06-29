# coding: utf-8

"""
    Gamified Task Management API

    API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.complete_quest200_response_data_task import CompleteQuest200ResponseDataTask

class TestCompleteQuest200ResponseDataTask(unittest.TestCase):
    """CompleteQuest200ResponseDataTask unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> CompleteQuest200ResponseDataTask:
        """Test CompleteQuest200ResponseDataTask
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `CompleteQuest200ResponseDataTask`
        """
        model = CompleteQuest200ResponseDataTask()
        if include_optional:
            return CompleteQuest200ResponseDataTask(
                id = '',
                title = '',
                quest_title = '',
                xp_earned = 1.337
            )
        else:
            return CompleteQuest200ResponseDataTask(
        )
        """

    def testCompleteQuest200ResponseDataTask(self):
        """Test CompleteQuest200ResponseDataTask"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
