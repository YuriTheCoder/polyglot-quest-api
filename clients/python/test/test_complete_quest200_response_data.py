# coding: utf-8

"""
    Gamified Task Management API

    API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.complete_quest200_response_data import CompleteQuest200ResponseData

class TestCompleteQuest200ResponseData(unittest.TestCase):
    """CompleteQuest200ResponseData unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> CompleteQuest200ResponseData:
        """Test CompleteQuest200ResponseData
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `CompleteQuest200ResponseData`
        """
        model = CompleteQuest200ResponseData()
        if include_optional:
            return CompleteQuest200ResponseData(
                task = openapi_client.models.complete_quest_200_response_data_task.completeQuest_200_response_data_task(
                    id = '', 
                    title = '', 
                    quest_title = '', 
                    xp_earned = 1.337, ),
                gamification = openapi_client.models.complete_quest_200_response_data_gamification.completeQuest_200_response_data_gamification(
                    xp_gained = 1.337, 
                    leveled_up = True, 
                    new_level = 1.337, 
                    new_badges = [
                        ''
                        ], 
                    total_xp = 1.337, 
                    current_streak = 1.337, )
            )
        else:
            return CompleteQuest200ResponseData(
        )
        """

    def testCompleteQuest200ResponseData(self):
        """Test CompleteQuest200ResponseData"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
