# coding: utf-8

"""
    Gamified Task Management API

    API REST gamificada para gerenciamento de tarefas com IA, XP, levels e sistema de recompensas

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from openapi_client.models.api_tasks_story_post201_response import ApiTasksStoryPost201Response

class TestApiTasksStoryPost201Response(unittest.TestCase):
    """ApiTasksStoryPost201Response unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> ApiTasksStoryPost201Response:
        """Test ApiTasksStoryPost201Response
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `ApiTasksStoryPost201Response`
        """
        model = ApiTasksStoryPost201Response()
        if include_optional:
            return ApiTasksStoryPost201Response(
                success = True,
                message = 'História épica gerada com sucesso!',
                data = openapi_client.models._api_tasks_story_post_201_response_data._api_tasks_story_post_201_response_data(
                    story = openapi_client.models._api_tasks_story_post_201_response_data_story._api_tasks_story_post_201_response_data_story(
                        id = '', 
                        title = '', 
                        theme = '', 
                        total_xp = 1.337, 
                        estimated_play_time = '', ), 
                    quests = [
                        openapi_client.models._api_tasks_story_post_201_response_data_quests_inner._api_tasks_story_post_201_response_data_quests_inner(
                            quest_title = '', 
                            quest_description = '', 
                            difficulty = '', 
                            xp = 1.337, 
                            category = '', )
                        ], )
            )
        else:
            return ApiTasksStoryPost201Response(
        )
        """

    def testApiTasksStoryPost201Response(self):
        """Test ApiTasksStoryPost201Response"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
