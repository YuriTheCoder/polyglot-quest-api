# coding: utf-8

"""
    Gamified Task Management API

    API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.complete_quest200_response_data_gamification import CompleteQuest200ResponseDataGamification

class TestCompleteQuest200ResponseDataGamification(unittest.TestCase):
    """CompleteQuest200ResponseDataGamification unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> CompleteQuest200ResponseDataGamification:
        """Test CompleteQuest200ResponseDataGamification
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `CompleteQuest200ResponseDataGamification`
        """
        model = CompleteQuest200ResponseDataGamification()
        if include_optional:
            return CompleteQuest200ResponseDataGamification(
                xp_gained = 1.337,
                leveled_up = True,
                new_level = 1.337,
                new_badges = [
                    ''
                    ],
                total_xp = 1.337,
                current_streak = 1.337
            )
        else:
            return CompleteQuest200ResponseDataGamification(
        )
        """

    def testCompleteQuest200ResponseDataGamification(self):
        """Test CompleteQuest200ResponseDataGamification"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
